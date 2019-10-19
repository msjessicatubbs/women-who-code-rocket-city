# key y0wu4Rli2UtbDV0mbNHGbNKTWallaWXtQjWlUbTJ

import requests
import json
import pandas as pd

#=======================================================================================================================
#                                   USER-MODIFIABLE SETTINGS
#=======================================================================================================================

# My api key
api_key = 'y0wu4Rli2UtbDV0mbNHGbNKTWallaWXtQjWlUbTJ'

# url of api
eonet_cats = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories'

# Categories that we want images for
cats_to_query = ('Wildfires', 'Severe Storms', 'Sea and Lake Ice', 'Temperature Extremes', 'Dust and Haze')

# How many most recent events to query images for
limit = '5' # must be string

#=======================================================================================================================
#                                   ACCESS API AND LOAD DATA
#=======================================================================================================================

# Access the EONET API
cats = requests.get(eonet_cats + '?api_key=' + api_key)

# create json
data = json.loads(cats.text)

# query data for categories
query = data['categories']

# initialize empty lists and dictionary
cat_titles = []
cat_ids = []
cats_dictionary = {}

# build lists
for x in query:
    cat_titles.append(x['title'])
    cat_ids.append(x['id'])

# build dictionary
cats_dictionary = dict(zip(cat_titles, cat_ids))

#=======================================================================================================================
# Beginning to build queries for events in categories of interest listed below.
# Categories of interest:
#   - Wildfires (five events currently)
#   - Severe Storms (one event currently)
#   - Sea and Lake Ice ()
#   - Temperature Extremes (no events currently)
#   - Dust and Haze (no events currently)
#=======================================================================================================================

for cat in cats_to_query:
    identity = str(cats_dictionary.get(cat)) # must be string
    cat_query = requests.get(eonet_cats + '/' + '15' + '?limit=' + limit ) #+ '?api_key=' + api_key)
    cat_data = json.loads(cat_query.text)
    
    


   

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