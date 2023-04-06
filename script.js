//Slider//

var swiper = new Swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        }
    }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});

//Boton para ir hacia arriba//

$(document).ready(function() {

    $('.ir-arriba').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('ir-arriba').slideDown(300);
        } else {
            $('ir-arriba').slideUp(300);
        }
    });
    
});

//Boton del primer modal//

    const openModal1 = document.querySelector('.btn-2');
    const modal1 = document.querySelector('.modal1');
    const closeModal1 = document.querySelector('.modal1_close')

    openModal1.addEventListener('click', (e)=>{
        e.preventDefault();
        modal1.classList.add('modal1--show');
    });

    closeModal1.addEventListener('click', (e)=>{
        e.preventDefault();
        modal1.classList.remove('modal1--show');
    });

    //Boton de los productos que se escode ver menos//

    let hideLastFourBtn = document.querySelector('#hide-last-four');
    let loadMoreBtn = document.querySelector('#load-more');
    let boxes = [...document.querySelectorAll('.box-container .box')];
    let initialBoxCount = boxes.length; // número de elementos iniciales en la página
    let currentItem = 4;
    hideLastFourBtn.style.display = 'none'; // Inicialmente, ocultar el botón "hide-last-four"

    hideLastFourBtn.onclick = () => {
    boxes.slice(initialBoxCount - 8).forEach(box => {
    box.style.display = 'none'; // Ocultar cada uno de los últimos ocho elementos
    });
    currentItem = initialBoxCount - 4; // Actualizar el índice actual para que el botón "load-more"     muestre los últimos 4 elementos otra vez
    hideLastFourBtn.style.display = 'none'; // Ocultar el botón "hide-last-four" después de usarlo
    if (loadMoreBtn.style.display === 'none') {
    loadMoreBtn.style.display = 'inline-block'; // Mostrar el botón "load-more" si estaba oculto
        }
    };

    loadMoreBtn.onclick = () => {
    for (var i = currentItem; i < currentItem + 8 && i < initialBoxCount; i++) {
    boxes[i].style.display = 'inline-block';
    }
    currentItem += 8;
    if (currentItem >= initialBoxCount) {
    loadMoreBtn.style.display = 'none';
    }
    if (currentItem >= 8) {
    hideLastFourBtn.style.display = 'inline-block'; // Mostrar el botón "hide-last-four" después    de     mostrar los primeros 8 elementos agregados
    }
    };

    //Modal Productos//

    // Obtener elementos del DOM
    const comprarBtns = document.querySelectorAll('.comprar-btn');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-product-title');
    const modalImage = document.getElementById('modal-product-image');
    const modalDescription = document.getElementById('modal-product-description');
    const confirmarBtn = document.getElementById('confirmar-btn');
    const closeBtn = document.getElementsByClassName('close')[0];

    //Formulario de compra//
    const formulario = document.getElementById('formulario');
    const closeBtns = document.querySelectorAll('.close');

    confirmarBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      formulario.style.display = 'block';
    });

    closeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        formulario.style.display = 'none';
        modal.style.display = 'block';
      });
    });

    // Agregar clase "close-modal" al elemento "closeBtn"
    closeBtn.classList.add('close-modal');

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Agregar listener de eventos "click" al elemento "closeBtn"
    closeBtn.addEventListener('click', closeModal);

    // Función para mostrar el modal
    function showModal(title, imageSrc, description) {
        modalTitle.textContent = title;
        modalImage.src = imageSrc;
        modalDescription.textContent = description;
        modal.style.display = "block";
    } 

    // Enlazar evento de clic en botones de comprar
    comprarBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const img = btn.getAttribute('data-img');
        const description = btn.getAttribute('data-description');
        showModal(title, img, description);
      });
    });

    //Modal Acerca de nosotros//

    const modal3Container = document.querySelector('.modal3-container');
    const modal3 = document.querySelector('.modal3');
    const modal3Close = document.querySelector('.modal3-close');
    const modalBtn = document.querySelector('#modal-btn');

    modalBtn.addEventListener('click', () => {
    modal3Container.style.display = 'block';
    });

    modal3Close.addEventListener('click', () => {
    modal3Container.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
    if (e.target == modal3Container) {
    modal3Container.style.display = 'none';
    }
    });