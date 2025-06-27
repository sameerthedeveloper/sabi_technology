const items = document.querySelectorAll('.item');
const home = document.querySelector('.home');
const invoice = document.querySelector('.quta');
const info = document.querySelector('.info');


// invoice.style.display = 'none';


items.forEach(item => {
    item.addEventListener('click', () => {

        items.forEach(element => {
            element.classList.remove('active');
        });


        item.classList.add('active');


        if (item.classList.contains('home')) {
            home.style.display = 'block';
            invoice.style.display = 'none';
            info.style.display = 'none';
        } else if (item.classList.contains('invoice')) {
            home.style.display = 'none';
            invoice.style.display = 'block';
            info.style.display = 'none';
        }
        else if (item.classList.contains('info')) {
            home.style.display = 'none';
            invoice.style.display = 'none';
            info.style.display = 'block';
        }
    });
});