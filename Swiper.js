<script>
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is <= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 768px
            768: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is <= 1024px
            1024: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
</script>
