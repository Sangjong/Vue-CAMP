(function(global, Vue){
  'use strict';

  global.demo = new Vue({
    el: '.demo',
    data: {
      is_block_show: true,
      using_register: false,
      class_name: 'front-end design camp',
      // fdc: front-end design camp
      fdc: classUsingArray // [{}, {}, {}, ...] length: 10
    },
    // Life Cycle Hook
    mounted: function() {
      console.log('Vue 객체(인스턴스) 마운트 이후 시점');

      // ——————————————————————————————————————————————————————————————————————————————————————————
      // Vue.js 방법을 사용하지 않고, DOM 스크립트 + 라이프사이클 훅(mounted)을 사용하여 이벤트 핸들링 (비효율적)
      // ——————————————————————————————————————————————————————————————————————————————————————————

      var document               = global.document;
      var _this                  = this;
      var demo                   = _this.$el; // <div class="demo">
      var register_btn           = demo.querySelector('.button.using-register');

      register_btn.addEventListener('click', toggleRegisterView);

      function toggleRegisterView () {
        _this.using_register = !_this.using_register;
        var register_classmate_btn = demo.querySelector('.register-classmate');
        register_classmate_btn.addEventListener('click', registerClassMate);
      }

      function registerClassMate(e) {
        var inputs = demo.querySelectorAll('input');
        var dataset = [];
        Array.prototype.forEach.call(inputs, function(item){
          dataset.push(item.value.trim() || null);
          item.value = '';
        });
        addListItem({
          name: dataset[0],
          age: dataset[1],
          major: dataset[2],
          school: {name: dataset[3]}
        });
      }

      function addListItem(classmate) {
        _this.fdc.unshift(classmate);
      }

    }
  });

})(window, window.Vue);