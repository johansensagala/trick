let latitude = null;
let longitude = null;

const success = (position) => {
    console.log(position)
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    document.querySelector(".latitude").innerHTML = latitude;
    document.querySelector(".longitude").innerHTML = longitude;

    initMap();
}

const error = () => {
    document.querySelector('.status').textContent = 'Tidak dapat menampilkan lokasi'
}

navigator.geolocation.getCurrentPosition(success, error);