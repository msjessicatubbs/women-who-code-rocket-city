# key y0wu4Rli2UtbDV0mbNHGbNKTWallaWXtQjWlUbTJ

import requests
import json
import pandas as pd

categories = {}

cats = requests.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories?api_key=y0wu4Rli2UtbDV0mbNHGbNKTWallaWXtQjWlUbTJ')

# create json
data = json.loads(cats.text)
# exporting to json
with open('categories.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

# Read json into pandas dataframe
cats_df = pd.read_json('.\categories.json')

#url = "https:eonet.sci.gsfc.nasa.gov/api/v2.1/events"
#connection = urllib.request.urlopen(url)
#
#with open('location/urls_to_download_2.csv') as csvfile:
#    csvrows = csv.reader(csvfile, delimiter=',', quotechar='"')
#    for row in csvrows:
#        if 'view.php' in row[0]:
#            filename = row[0]
#            url = row[0]
#            locn=row[2]
#            print(locn)