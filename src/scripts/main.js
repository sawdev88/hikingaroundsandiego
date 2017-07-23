// Map
initMap = () => {
  let mapList = document.querySelector('.map-list ul');
  let initialCoords = {lat: 32.715736, lng: -117.161087};

  let map = new google.maps.Map(document.getElementById('map'), {
    center: initialCoords,
    zoom: 11,
  });
  locations.map(function (loc) {
    var marker = new google.maps.Marker({
      position: loc.coords,
      map: map,
      icon: loc.icon,
      id: loc.index
    })
    marker.addListener('click', function(x, i) {
      zoomInOnMap(map, loc.coords);
    });
  });

  // Map list
  locations.map(function (loc, i) {
    // Create list items
    let el = document.createElement('li');
    el.innerHTML = `${loc.title} ${'<br />'} ${loc.address1} ${'<br />'} ${loc.address2}`;
    el.setAttribute('index', loc.index)
    mapList.appendChild(el);

    // Highlist selected location on map
    el.addEventListener('click', function () {
      clearMapList();
      zoomInOnMap(map, loc.coords);
      this.classList.add('selected');
    })
  })

  document.querySelector('.clear-list').addEventListener('click', function() {
    zoomInOnMap(map, {lat: 32.715736, lng: -117.161087}, 11);
    clearMapList()
  })
}

zoomInOnMap = (map, coords, zoom = 15) => {
  map.setZoom(zoom)
  map.panTo(coords)
}

clearMapList = () => {
  var list = document.querySelectorAll('.map-list li');
  [].forEach.call(list, function(el) {
    el.classList.remove('selected');
  })
}

// Scroll Effect
window.addEventListener('scroll', function () {
  let opacityMarker = 1 - (window.pageYOffset / 700);

  if (opacityMarker > .1) {
    var opacityEls = document.querySelectorAll('.opacity-effect');
    [].forEach.call(opacityEls, function(els) {
      els.style.opacity = opacityMarker;
    })
  }
})
