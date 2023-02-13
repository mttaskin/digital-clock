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

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  date = date < 10 ? "0" + date : date;
  month = month < 10 ? "0" + month : month;

  const timeDiv = document.querySelector("#time span");
  timeDiv.innerText = hours + " : " + minutes + " : " + seconds;
  timeDiv.style.color = `${renk}`;

  const dateDiv = document.querySelector("#date");
  dateDiv.innerText = date + " / " + month + " / " + year;

  const dayDiv = document.querySelector("#day");
  dayDiv.innerText = gun;

}, 1000);
