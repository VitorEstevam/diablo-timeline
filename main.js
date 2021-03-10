
document.querySelector(".main-container").style.opacity = "0";

fetch("data.json")
    .then(response => response.json())
    .then((data) => initApp(data));

function initApp(data) {
    setTimeout(function () { document.querySelector(".main-container").style.opacity = "1"; }, 500);

    var app = new Vue({
        el: '#app',
        data: {
            steps: data,
            open: false,
            step: {}
        },
        async mounted() {
            var swiper = new Swiper('.swiper-container', {
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
        },
        methods: {
            openPopup: function (index) {
                this.step = this.steps[index]
                this.open = !this.open
                console.log(index)
                console.log(this.step)
            },
            closePopup: function (index) {
                this.open = false
                console.log(index)
            }
        }
    })
}

