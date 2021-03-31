document.querySelector(".main-container").style.opacity = "0";

var app;

fetch("data-3.json")
    .then(response => response.json())
    .then((data) => initApp(data));

function initApp(data) {
    setTimeout(function () { document.querySelector(".main-container").style.opacity = "1"; }, 500);

    app = new Vue({
        el: '#app',
        data: {
            steps: data,
            open: false,
            open2:false,
            refs:[],
            step: data[0],
            swiper2: Object,
        },
        async mounted() {
            var swiper = new Swiper('.swiper-container-main', {
                slidesPerView: "auto",
                centeredSlides: true,
                // spaceBetween: 15,
                paginationClickable: true,
                grabCursor: true,
                paginationClickable: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            });

            this.swiper2 = new Swiper('.swiper-container-pop-up', {
                slidesPerView: "auto",
                centeredSlides: true,
                // spaceBetween: 15,
                paginationClickable: true,
                grabCursor: true,
                paginationClickable: true,
                lazy: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            });
        },
        methods: {
            openPopup: function (index) {
                this.step = this.steps[index]
                this.open = !this.open
                console.log(index)
                console.log(this.step)

                this.swiper2 = new Swiper('.swiper-container-pop-up', {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    paginationClickable: true,
                    grabCursor: true,
                    lazy: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        },
                    },
                });
                setTimeout(() => this.swiper2.init(), 1)
            },
            closePopup: function (index) {
                this.open = false
                console.log(index)
            },
            openPopup2: function (){
                this.open2 = true
            },
            closePopup2: function () {
                this.open2 = false
            },

        }
    })
}
