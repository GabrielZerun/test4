
/* document.addEventListener('DOMContentLoaded', () => {


    const lokalizacjaDiv = document.getElementById('lokalizacja');


    if ('geolocation' in navigator) {
        
        lokalizacjaDiv.innerHTML = '<p>Pytam o pozwolenie na dostęp...</p>';

        
        navigator.geolocation.getCurrentPosition(
            

            (position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;

       
                lokalizacjaDiv.innerHTML = `
                    <h2>Twoja pozycja:</h2>
                    <p><strong>Szerokość geograficzna:</strong> ${lat}</p>
                    <p><strong>Długość geograficzna:</strong> ${long}</p>
                `;
            },
            
      

        );

    } else {
        
        lokalizacjaDiv.innerHTML = '<p class="error">blad</p>';
    }

});
*/

// Czekamy na załadowanie strony
document.addEventListener('DOMContentLoaded', () => {

    const daneDiv = document.getElementById('dane');

    // Sprawdzamy, czy przeglądarka wspiera to zdarzenie
    if (window.DeviceOrientationEvent) {
        
        // Uruchamiamy nasłuchiwanie na zmianę orientacji
        window.addEventListener('deviceorientation', (event) => {
            
            // event.alpha: Obrót wokół osi Z (jak kompas, 0-360 stopni)
            // event.beta: Pochylenie przód/tył (oś X, -180 do 180)
            // event.gamma: Przechylenie lewo/prawo (oś Y, -90 do 90)

            daneDiv.innerHTML = `
                Alpha (Z): ${event.alpha.toFixed(2)}° <br>
                Beta (X):  ${event.beta.toFixed(2)}° <br>
                Gamma (Y): ${event.gamma.toFixed(2)}°
            `;
        });

    } else {
        daneDiv.innerHTML = 'Twoja przeglądarka nie wspiera DeviceOrientationEvent.';
    }
});

