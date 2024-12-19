let time = document.querySelector('#time')
let date = document.querySelector('#date')

setInterval ( () => {
  today()
})

function today (){
  let today = new Date()
  // month names 
  const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul',  'aug', 'sep',  'okt', 'nov',  'dec'];
  
  // day names
  const daynames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  
  let currentTime = `${today.getHours() < 9 ? '0' + today.getHours() : today.getHours()} : ${today.getMinutes() < 9 ? '0' + today.getMinutes() : today.getMinutes()} : 
  ${today.getSeconds() < 9 ? '0' + today.getSeconds() : today.getSeconds()}`
  
  time.innerHTML = currentTime 
  
  // curent date
  
  let curentDate = `${daynames[today.getDay()]} , ${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;
  
  date.innerHTML = curentDate
}