/*! DetailProduct.js @ 2017, yamoo9.net */

(function(global, _){
  'use strict';

  // 뷰 컴포넌트로 사용할 객체
  _.DetailProduct = {
    template: `
      <article class="product column is-half">
        <img
          class="product-image image"
          :src="product.image"
          :alt="product.image_title">
        <h4 class="product-name title is-4">{{product.name}}</h4>
        <p class="product-desc">{{product.description}}</p>
      </article>
    `,
    // 상위 컴포넌트(인스턴스)로부터 전달되는 데이터
    props: {
      product: {
        required: true,
        type: Object
      }
    },
    // 컴포넌트 자신이 접근 가능한 독립적인 데이터
    // data: function() {
    //   return {};
    // }
  };

})(window, (window.y9 = window.y9 || {}) );