app.component("product-display", {
  props: {
    color: {
      type: String,
      required: true,
    },
  },

  template:
    //es6-string-html
    /*html*/
    `
  <div class="color-display">
    <p >real color</p>
    <p :style="{backgroundColor: color}">{{color}}</p>
  </div>


  `,
});
