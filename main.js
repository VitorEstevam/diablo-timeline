const data = [
    { dateLabel: 'January 2017', title: 'Gathering Information' },
    { dateLabel: 'February 2017', title: 'Planning' },
    { dateLabel: 'March 2017', title: 'Design' },
    { dateLabel: 'April 2017', title: 'Content Writing and Assembly' },
    { dateLabel: 'May 2017', title: 'Coding' },
    { dateLabel: 'June 2017', title: 'Testing, Review & Launch' },
    { dateLabel: 'July 2017', title: 'Maintenance' }
];

new Vue({
    el: '#app',
    data: {
        steps: data,
        open: false,
    },
    mounted() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: "auto",
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
        openPopup: function () {
            this.open = !this.open
        }
    }
})