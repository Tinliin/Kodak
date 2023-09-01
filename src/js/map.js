// Функция инициализации карты
function initMap() {
  // Координаты местоположения
  const location = { lat: 49.47323, lng: 24.13525 }; // Лондон, например

  // Создаем объект карты
  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 15, // Уровень масштабирования
    styles: [
      {
        featureType: "all",
        elementType: "all",
        stylers: [{ saturation: -100 }], // Убираем насыщенность цвета
      },
    ],
  });

  // Создаем маркер вашего местоположения
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Мое местоположение",
  });

  // Создаем информационное окно с описанием места
  const infowindow = new google.maps.InfoWindow({
    content: "Фокус, фотосалон",
  });

  // Открываем информационное окно при клике на маркер
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}
