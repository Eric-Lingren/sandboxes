from twilio.rest import Client
from __config__ import (account_sid, auth_token)

client = Client(account_sid, auth_token) 
message = client.messages.create( from_='+12564459170',  to='+18017077067', body='WHATs UP?' ) 

