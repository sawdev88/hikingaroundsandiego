// Map
var map;
initMap = () => {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.715736, lng: -117.161087},
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
      console.log(this.id);
    });
  });

  // Map list
  let mapList = document.querySelector('.map-list ul');
  locations.map(function (loc, i) {
    // Create list items
    let el = document.createElement('li');
    el.innerHTML = loc.title;
    el.setAttribute('index', loc.index)
    mapList.appendChild(el);
    el.addEventListener('click', function () {
      map.setZoom(15);
      map.panTo(loc.coords)
    })
  })
}

let mapListItem = document.querySelectorAll('.map-list li');

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
