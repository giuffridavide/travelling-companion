import math
import pandas as pd
import numpy as np
from scipy.spatial.distance import squareform, pdist
from random import randint



def mockup(trip, dist, th=500):
    dfs = []
    for tup, tmp in trip.groupby(['destination_id','start_date']):
        idx, date = tup

        tmp = tmp.assign(city_id = tmp['destination_id'])
        dfs.append(tmp)
        
        reacheable = dist[(dist[idx]<=th) & (dist[idx]>0)][idx]
        
        to_visit = reacheable.sample(min(reacheable.shape[0], randint(0, reacheable.shape[0]))).index

        for city_id in to_visit:
            tmp = tmp.assign(city_id = city_id)
            dfs.append(tmp)
    df = pd.concat(dfs, ignore_index=True)
    df.to_csv('trip.csv', index=False)
    

def haversine(coord1,coord2):
    lon1,lat1=coord1
    lon2,lat2=coord2
    
    R=6371000                               # radius of Earth in meters
    phi_1=math.radians(lat1)
    phi_2=math.radians(lat2)

    delta_phi=math.radians(lat2-lat1)
    delta_lambda=math.radians(lon2-lon1)

    a=math.sin(delta_phi/2.0)**2+\
        math.cos(phi_1)*math.cos(phi_2)*\
        math.sin(delta_lambda/2.0)**2
    c=2*math.atan2(math.sqrt(a),math.sqrt(1-a))
    
    meters=R*c                         # output distance in meters
    return meters/1000.0              # output distance in kilometers


dest = pd.read_csv('trip/fixtures/destination.csv')
cities = pd.read_csv('trip/fixtures/city.csv')
trip = pd.read_csv('trip/fixtures/trip.csv')


def getNearby(dest_name: str):
    cities = pd.read_csv('trip/fixtures/city.csv')
    cities = cities.drop_duplicates(subset=['name'])
    map_cities = cities['name'].to_dict()


    distance_matrix = pdist(
        cities.loc[:, ['latitude', 'longitude']],
        metric=haversine
    )
    dist = pd.DataFrame(squareform(distance_matrix), index=cities['name'], columns=cities['name'])
    dist = dist.reset_index(drop=True)
    
    cities_idx = dist[(dist[dest_name]<=200) & (dist[dest_name]>0)][dest_name].index#.to_dict()
    cities = [map_cities[idx] for idx in cities_idx]
    cities = dict(zip(cities_idx, cities))
    cities_list = []
    for idx, c in cities.items():
        cities_list.append({'idx': idx, 'city_name': c})
    return(cities_list)


idx_city = cities['name'].to_dict()
getNearby(cities)
# mockup(trip, dist)


'''
{"dest_name": "Paris"}

# '''