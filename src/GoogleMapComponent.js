import React, { useCallback, useRef } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import PlaceInfo from "./PlaceInfo";

//import mapStyles from "./mapUtils/mapStyles";
// 地図のデザインを指定することができます。
// デザインは https://snazzymaps.com からインポートすることができます。

const libraries = ["places"];
const mapContainerStyle = {
  height: "60vh",
  width: "100%"
};
// 地図の大きさを指定します。

const options = {
  //  styles: mapStyles,
  disableDefaultUI: true,
  // デフォルトUI（衛星写真オプションなど）をキャンセルします。
  zoomControl: true
};

export default function GoogleMapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    //googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey,
    googleMapsApiKey: "AIzaSyARN4ZLpzuzwGo2M6PKr2M--juR5zJyrew",
    // ここにAPIキーを入力します。今回は.envに保存しています。''
    libraries
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  //API読み込み後に再レンダーを引き起こさないため、useStateを使わず、useRefとuseCallbackを使っています。

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={14} // デフォルトズーム倍率を指定します。
      center={{
        lat: 35.64860429083234,
        lng: 138.57693376912908
      }} // 札幌周辺にデフォルトのセンターを指定しました。
      options={options}
      onLoad={onMapLoad}
    >
      <PlaceInfo />
    </GoogleMap>
  );
}
