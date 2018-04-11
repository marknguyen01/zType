'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var zType = function () {
        function zType() {
                var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelectorAll("[ztype-data]")[0];
                var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

                _classCallCheck(this, zType);

                this.element = element;
                this.data = JSON.parse(element.getAttribute('ztype-data'));
                this.interval = 0;
                this.duration = parseInt(duration, 10) || 2000;
                this.text = '';
                this.isDeleting = false;
                this.run();
        }

        zType.prototype.run = function run() {
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
                setTimeout(function () {
                        that.run();
                }, delta);
        };

        return zType;
}();