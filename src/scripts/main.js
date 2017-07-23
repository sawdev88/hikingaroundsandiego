let map;
initMap = () => {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.715736, lng: -117.161087},
    zoom: 11,
  });
}
