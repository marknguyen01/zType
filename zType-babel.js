class zType {
        constructor(element = document.querySelectorAll("[ztype-data]")[0], duration = 2000) {
                this.element = element;
                this.data = JSON.parse(element.getAttribute('ztype-data'));
                this.interval = 0;
                this.duration = parseInt(duration, 10) || 2000;
                this.text = '';
                this.isDeleting = false;
                this.run();
        }
        run() {
                var eachData = this.data[this.interval % this.data.length];
                if (this.isDeleting) {
                        this.text = eachData.substring(0, this.text.length - 1);
                } else {
                        this.text = eachData.substring(0, this.text.length + 1);
                }
                this.element.innerHTML = '<span class="ztype-text">' + this.text + '</span><span class="ztype-symbol">|</span>';
                var delta = 200 - Math.random() * 100;
                if (this.isDeleting) { 
                        delta /= 2; 
                }
                if (!this.isDeleting && this.text === eachData) {
                        delta = this.duration;
                        this.isDeleting = true;
                } else if (this.isDeleting && this.text === '') {
                        this.isDeleting = false;
                        this.interval++;
                        delta = 500;
                }
                var that = this;
                setTimeout(function() {
                        that.run();
                }, delta);
        }
}