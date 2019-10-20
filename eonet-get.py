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

# url of layers
eonet_layers = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/layers'

# Categories that we want images for
cats_to_query = ('Wildfires', 'Severe Storms') #, 'Sea and Lake Ice', 'Temperature Extremes', 'Dust and Haze')

# How many most recent events to query images for
limit = '5' # must be string

# folders to populate (same order as cats_to_query)
cats_folders = ('.\wildfires' , '.\severe_storms')#, '.\sea_and_lake_ice', '.\\temperature_extremes', '.\dust_and_haze')

#=======================================================================================================================
#                                   INITIALIZE VARIABLES
#=======================================================================================================================

cat_titles = []
cat_ids = []
cats_dictionary = {}

#=======================================================================================================================
#                                   ACCESS API AND LOAD DATA
#=======================================================================================================================

# Access the EONET API
cats = requests.get(eonet_cats + '?api_key=' + api_key)

# laod json
data = json.loads(cats.text)

# query data for categories
query = data['categories']

# build lists
for x in query:
    cat_titles.append(x['title'])
    cat_ids.append(x['id'])

# build dictionary of category titles and category IDs
cats_dictionary = dict(zip(cat_titles, cat_ids))

#=======================================================================================================================
# Beginning to build queries for layers in categories of interest listed below.
# Categories of interest:
#   - Wildfires 
#   - Severe Storms 
#   - Sea and Lake Ice 
#   - Temperature Extremes
#   - Dust and Haze 
#======================================================================================================================= 

cats_folders_dict = dict(zip(cats_to_query, cats_folders))



for cat in cats_to_query:
    identity = str(cats_dictionary.get(cat)) # must be string
    cat_query = requests.get(eonet_cats + '/' + identity + '?limit=' + limit ) #+ '?api_key=' + api_key)
    cat_data = json.loads(cat_query.text)





for cat in cats_to_query:
    # initializing here for a reason
    layer_of_layers =[]
    layer1_data = []
    layer2_data =[]  
    layer3_data = []
    check_params = []
    urls = []
    
    # Get the identity of the current category
    identity = str(cats_dictionary.get(cat)) # must be string
    
    # Searching layers for current category's ID
    layers_query = requests.get(eonet_layers + '/' + identity)
    
    # load json
    layers_data = json.loads(layers_query.text)
    
    # Obtain a list of the layers category data
    layer_cat = layers_data['categories']
    
    # Will have all layers for all categories of interest
    for layer in layer_cat:
        layer_of_layers.append(layer)
    
    for layer in layer_of_layers:
        layer1_data.append(layer['layers'])
    
    count = 0
    for layer in layer1_data:
        layer2_data.append(layer)
        count += 1

    for layer in layer2_data:
        layer3_data = layer
    
    for x in layer:
        check_params.append(x['name'])
        urls.append(x['serviceUrl'])
        
        # build visit url 
        #https://gibs.earthdata.nasa.gov/wmts/epsg{EPSG:Code}/best/{ProductName}
        #/default
        #/{Time}
        #/{TileMatrixSet}   : TILEMATRIXSET
        #/{ZoomLevel}       : 200m
        #/{TileRow}
        #/{TileCol}.png
        
        #visit = x['serviceUrl'] + '/' + 'SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0#+ x['name']
    
            



   

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