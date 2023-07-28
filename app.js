var map = L.map('map').setView([45.750000, 4.850000], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        // Charger le premier fichier GeoJSON depuis une URL
        /*fetch('https://raw.githubusercontent.com/linabm/leaflet/main/carte.json')
            .then(response => response.json())
            .then(data => {
                L.geoJSON(data).addTo(map);
            })
            .catch(error => console.error('Erreur de chargement des données GeoJSON:', error));*/

        // Charger le deuxième fichier GeoJSON depuis une URL
        fetch('https://raw.githubusercontent.com/linabm/leaflet/main/batiment.json')
            .then(response => response.json())
            .then(data => {
                L.geoJSON(data).addTo(map);
            })
            .catch(error => console.error('Erreur de chargement des données GeoJSON:', error));

        // Charger le troisième fichier GeoJSON depuis une URL
        fetch('https://raw.githubusercontent.com/linabm/leaflet/main/toit.json')
            .then(response => response.json())
            .then(data => {
                L.geoJSON(data).addTo(map);
            })
            .catch(error => console.error('Erreur de chargement des données GeoJSON:', error));

var marker = L.marker([45.757198, 4.8312188]).addTo(map);