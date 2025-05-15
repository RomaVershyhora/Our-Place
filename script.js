// 1. Отримуємо всі кнопки з класом .color-dot
const colorButtons = document.querySelectorAll('.color-dot');

// 2. Отримуємо картинку сковорідки за її ID
const panImg = document.getElementById('pan');

// 3. Для кожної кнопки додаємо обробник кліку
colorButtons.forEach(button => {
  button.addEventListener('click', () => {

    // 4. При кліку спочатку знімаємо клас 'active' з усіх кнопок
    colorButtons.forEach(btn => btn.classList.remove('active'));

    // 5. Потім додаємо клас 'active' тільки тій кнопці, по якій клікнули
    button.classList.add('active');

    // 6. Отримуємо значення атрибута data-color (наприклад: "blue", "red")
    const color = button.getAttribute('data-color');

    // 7. Міняємо зображення сковорідки, додаючи назву кольору в ім’я файла
    panImg.src = `images/pan-${color}.png`;
  });
});
