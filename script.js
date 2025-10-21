
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


document.addEventListener('DOMContentLoaded', () => {

    const daneDiv = document.getElementById('dane');


    if ('Gyroscope' in window) {
        
     
        const sensor = new Gyroscope({ frequency: 60 }); // 60 odczytów na sekundę

        sensor.addEventListener('reading', () => {
            
            daneDiv.innerHTML = `
                X: ${sensor.x.toFixed(3)} <br>
                Y: ${sensor.y.toFixed(3)} <br>
                Z: ${sensor.z.toFixed(3)}
            `;
        });

        // Uruchamiamy sensor
        sensor.start();
        
    } else {
       
        daneDiv.innerHTML = 'Twoja przeglądarka nie wspiera API Gyroscope.';
    }
});

