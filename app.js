setInterval(() => {
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  const a = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const c = Math.floor(Math.random() * 255);
  const renk = `rgb(${a},${b},${c})`;
  
  const time = new Date();
  
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let day = time.getDay();
  const gun = days[day];

  let date = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear();
