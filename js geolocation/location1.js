// let coor = navigator.geolocation.getCurrentPosition(success, error);
let coor = navigator.geolocation.getCurrentPosition(success);

// const findState = () => {
//     const status = document.querySelector('.status');
    
//     const success = (position) => {
//         console.log(position)
//     }

//     const error = () => {
//         status.textContent = 'Tidak dapat menampilkan lokasi'
//     }

    
// }

// document.querySelector('.find-state').addEventListener('click', findState);
// document.querySelector('.sample').innerHTML = findState;
// document.querySelector('.sample').addEventListener('click', findState);


// function initMap() {
//     let myLatLng = {lat: , lng: 106.84513};
  
//     let map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 12,
//       center: myLatLng
//     });
  
//     let marker = new google.maps.Marker({
//       position: myLatLng,
//       map: map,
//       title: 'Lokasi Saya'
//     });
//   }
  