"use client"

import React, {useEffect, useRef} from 'react';
import {Loader} from "@googlemaps/js-api-loader";
const MapComponent = () => {

    const mapRef = useRef(null) as HTMLDivElement;

    useEffect(() => {
        const initMap = async () => {
           const loader = new Loader({
               apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
               version: "weekly",
           })
            const {Map} = await loader.importLibrary('maps');

           const {Marker} = await loader.importLibrary('marker');

           const position = {
               lat: 52.311455,
               lng: 16.131883
           }
           const mapOptions: google.maps.MapOptions = {
               center: position,
               zoom: 17,
               mapId: 'MY_NEXTJS_MAPID'
           }

           const map = new Map(mapRef.current, mapOptions) as HTMLDivElement;

           const marker = new Marker({
               position: position,
               map: map,
           })
        }

        initMap()
    }, []);

    return (

            <div ref={mapRef} style={{height:'500px'}}/>

    );
};

export default MapComponent;