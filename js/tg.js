const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('from-place-name').value;
  const phone = document.getElementById('from-place-phone').value;
  const from = document.getElementById('from-place-from').value;
  const to = document.getElementById('to-place').value;
  const dateStart = document.getElementById('date-start').value;
  const dateEnd = document.getElementById('date-end').value;

  // Ensure correct targeting of select elements
  const classType = document.querySelector('select[name="class"]')?.value;
  const adults = document.querySelector('select[name="adults"]')?.value;
  const children = document.querySelector('select[name="children"]')?.value;

  const sana = new Date().toLocaleString();

  // Russian translation message
  var myText = `Зарегистрированная заявка:%0A %0A - Имя: <b>${name}</b> %0A - Телефон: <b>${phone}</b> %0A- Откуда: <b>${from}</b> %0A- Куда: <b>${to}</b> %0A- Дата выезда: <b>${dateStart}</b> %0A- Дата возвращения: <b>${dateEnd}</b> %0A- Класс: <b>${classType}</b> %0A- Взрослые (12+): <b>${adults}</b> %0A- Дети (2-11): <b>${children}</b> %0A- Время: <b>${sana}</b>`;

  var token = '7962698280:AAHZ9lCx_uGR9HPdBWHru49y85ibfh9es0Y';
  var chatid = -1002421782732;
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&text=${myText}&parse_mode=html`;

  let api = new XMLHttpRequest();
  api.open('GET', url, true);

  // Sending the request and handling the response
  api.onreadystatechange = function () {
    if (api.readyState === XMLHttpRequest.DONE) {
      if (api.status === 200) {
        Toastify({
          text: "Ваши данные успешно отправлены!",
          duration: 3000, // Milliseconds
          backgroundColor: "green",
          close: true
        }).showToast();
      } else {
        Toastify({
          text: "Ошибка при отправке данных.",
          duration: 3000,
          backgroundColor: "red",
          close: true
        }).showToast();
      }
    }
  };

  api.send();
});

const form3 = document.querySelector('#modal_form');

form3.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('from-place-name_modal').value;
  const phone = document.getElementById('from-place-phone_modal').value;
  const from = document.getElementById('from-place-from_modal').value;
  const to = document.getElementById('to-place_modal').value;
  const dateStart = document.getElementById('date-start_modal').value;
  const dateEnd = document.getElementById('date-end_modal').value;

  // Ensure correct targeting of select elements
  const classType = document.querySelector('select[name="class_modal"]')?.value;
  const adults = document.querySelector('select[name="adults_modal"]')?.value;
  const children = document.querySelector('select[name="children_modal"]')?.value;

  const sana = new Date().toLocaleString();

  // Russian translation message
  var myText = `Зарегистрированная заявка:%0A %0A - Имя: <b>${name}</b> %0A - Телефон: <b>${phone}</b> %0A- Откуда: <b>${from}</b> %0A- Куда: <b>${to}</b> %0A- Дата выезда: <b>${dateStart}</b> %0A- Дата возвращения: <b>${dateEnd}</b> %0A- Класс: <b>${classType}</b> %0A- Взрослые (12+): <b>${adults}</b> %0A- Дети (2-11): <b>${children}</b> %0A- Время: <b>${sana}</b>`;

  var token = '7962698280:AAHZ9lCx_uGR9HPdBWHru49y85ibfh9es0Y';
  var chatid = -1002421782732;
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&text=${myText}&parse_mode=html`;

  let api = new XMLHttpRequest();
  api.open('GET', url, true);

  // Sending the request and handling the response
  api.onreadystatechange = function () {
    if (api.readyState === XMLHttpRequest.DONE) {
      if (api.status === 200) {
        Toastify({
          text: "Ваши данные успешно отправлены!",
          duration: 3000, // Milliseconds
          backgroundColor: "green",
          close: true
        }).showToast();
      } else {
        Toastify({
          text: "Ошибка при отправке данных.",
          duration: 3000,
          backgroundColor: "red",
          close: true
        }).showToast();
      }
    }
  };

  api.send();
});

const form2 = document.querySelector('#specificFormId');

form2.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('from-place-name2').value;
  const phone = document.getElementById('from-place-phone2').value;

  const sana = new Date().toLocaleString();

  // Russian translation message
  var myText = `Зарегистрированная заявка:%0A %0A - Имя: <b>${name}</b> %0A - Телефон: <b>${phone}</b> %0A- Время: <b>${sana}</b>`;

  var token = '7962698280:AAHZ9lCx_uGR9HPdBWHru49y85ibfh9es0Y';
  var chatid = -1002421782732;
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&text=${myText}&parse_mode=html`;

  let api = new XMLHttpRequest();
  api.open('GET', url, true);

  // Sending the request and handling the response
  api.onreadystatechange = function () {
    if (api.readyState === XMLHttpRequest.DONE) {
      if (api.status === 200) {
        Toastify({
          text: "Ваши данные успешно отправлены!",
          duration: 3000, // Milliseconds
          backgroundColor: "green",
          close: true
        }).showToast();
      } else {
        Toastify({
          text: "Ошибка при отправке данных.",
          duration: 3000,
          backgroundColor: "red",
          close: true
        }).showToast();
      }
    }
  };

  api.send();
});
