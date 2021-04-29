import pandas as pd
import dedupe
import re
from simple_salesforce import Salesforce
from unidecode import unidecode
 
 
sf = Salesforce( instance='https://insideoutdev.lightning.force.com', username ='timfine@insideoutdev.com', password='Panther1<', security_token='oMJP2PCUURddfM1sR6ZtzLluE')
 
 
accounts = sf.bulk.Account.query("SELECT Id, Name, Client_Status__c, Fortune_500__c  FROM Account WHERE Fortune_500__c = True OR Client_Status__c  IN ('Active', 'Inactive')")
leads = sf.bulk.Lead.query("SELECT Id, Name, Company, Active_in_Hubspot__c FROM Lead WHERE Active_in_Hubspot__c = True")
 
df_accounts = pd.DataFrame(accounts, columns=['Id', 'Name', 'Client_Status__c', 'Fortune_500__c'])
df_leads = pd.DataFrame(leads, columns = ['Id', 'Name', 'Company', 'Active_in_Hubspot__c'])
df_accounts.rename(columns={'Name':'Company'}, inplace=True)
df_leads.head()
 
 
print(len(df_leads))
len(df_accounts)
 
 
def preprocess(column):
    column = unidecode(column)
    column = re.sub('  +', ' ', column)
    column = re.sub('\n', ' ', column)
    column = column.strip().strip('"').strip("'").lower().strip()
    if not column:
        column = None
    return column
 
 
df_leads['Company'] = df_leads['Company'].apply(preprocess)
df_accounts['Company'] = df_accounts['Company'].apply(preprocess)
lead_dict = df_leads.to_dict(orient='index')
account_dict = df_accounts.to_dict(orient='index')
account_dict[0]
 
 
fields = [
    {'field': 'Company', 'type': 'String'},
]
 
 
linker = dedupe.RecordLink(fields)
 
 
linker.prepare_training(lead_dict, account_dict, sample_size=15000)
 
 
dedupe.console_label(linker)
 
 
linker.train()
 
 
with open('training.json', 'w') as tf:
            linker.write_training(tf)
with open('settings_file', 'wb') as sf:
            linker.write_settings(sf)
 
 
linked_records = linker.join(lead_dict, account_dict, 0.0)
 
 
linked_records[0][0][0]
 
 
df_linked = pd.DataFrame(columns=['LeadIndex', 'AccountIndex', 'Score'])
for r in linked_records:
    df_linked.loc[len(df_linked)] = [r[0][0], r[0][1], r[1]]
df_linked.head()
 
 
df_lead_link = df_linked.join(df_leads, on='LeadIndex', how='left')
df_final = df_lead_link.join(df_accounts, on='AccountIndex', how='left', rsuffix='_Account')
df_final.rename(columns={'Company_Account':'Account Name', 'Id_Account':'AccountId', 'Name':'Lead Name'}, inplace=True)
df_final.head()
 
 
df_final.to_excel('Account Id Matches.xlsx', index=False)