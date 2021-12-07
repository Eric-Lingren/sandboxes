import requests
from bs4 import BeautifulSoup
import os


download_folder = '/Volumes/External/survivor-library/'
# doc = 'http://www.survivorlibrary.com/library-download.html'
base_url = 'http://www.survivorlibrary.com'
# res = requests.get(doc)
# soup = BeautifulSoup(res.content, "html.parser")
# project_href = [i['href'] for i in soup.find_all('a', href=True)]

link = 'http://www.survivorlibrary.com/index.php/8-category/171-library-rat-control'
# for link in project_href:
links = []
if 'category' in link:
    folder_name = link.rsplit('/', 1)[1]
    if '.html' in folder_name:
        folder_name = folder_name[:-5]
    new_path = f'{download_folder}{folder_name}' 
    if not os.path.exists(new_path):
        os.makedirs(new_path)
    sublink = base_url + link
    subres = requests.get(sublink)
    subsoup = BeautifulSoup(subres.content, "html.parser")
    download_links = [i['href'] for i in subsoup.find_all('a', href=True)]
    print(download_links)

    for pdf_link in download_links:
        if '.pdf' in pdf_link:
            file_name = pdf_link.rsplit('/', 1)[1]
            if not os.path.exists(new_path + '/' + file_name):
                print('\n\n\n-----------------------')
                print('DOWNLOADING :')
                print(folder_name)
                print(file_name)
                print('-----------------------')
                try:
                    r = requests.get(base_url + pdf_link, stream=True)
                    with open(new_path + '/' + file_name, 'wb') as f:
                        f.write(r.content)
                except Exception as e:
                    print("An exception occurred: ", e) 