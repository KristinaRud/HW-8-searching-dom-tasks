# HW-8-searching-dom-tasks
1. Опишіть своїми словами що таке Document Object Model (DOM)
    Це об'єктна модель докумета. Тобто весь вміст сторінки представлений у вигляді об'єктів, які можна змінювати.
2. Яка різниця між властивостями HTML-елементів innerHTML та innerText?
    innerHTML може змінювати розмітку дочірніх єлементів.
    innerText змінює лише текст, як контент що знаходиться всередині елемента.
3. Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
    Можна звернутися 
    document.getElementById() по id
    document.getElementsByName() по name
    document.getElementsByTagName() по тегу
    document.getElementsByClassName() за вказаним класом
    document.querySelector() за вказаним CSS селектором
    document.querySelectorAll() повертає набір єлементів за вказаним CSS селектором

    кращий querySelector() та querySelectorAll() замінюють всі інші способи
    