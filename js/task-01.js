const itemRef = document.querySelectorAll('.js-item');
console.log(`В списке ${listRef.length} категории`);

itemRef.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
})