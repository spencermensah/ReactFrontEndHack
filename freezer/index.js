function handleReading(e) {
   const container = document.getElementById('root');

   console.log(e);
   container.innerHTML = `${e.target.x}, ${e.target.y}, ${e.target.z}`;

(() => {
   const sensor = new Accelerometer();

   sensor.addEventListener('reading', handleReading);
   sensor.start();
})();
