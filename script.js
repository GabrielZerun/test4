
document.addEventListener('DOMContentLoaded', () => {


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