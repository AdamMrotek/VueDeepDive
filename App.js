const app = Vue.createApp({
  data() {
    return {
      //   message: "Hello Vue!",
      //   courseGoalA: "<h2>Finish the course to learn Vue!</h2>",
      //   courseGoalB: "Smash the course to learn Vue!",
      //   vueLink: "//vuejs.org",
      //   myAge: 29,
      //   vueImageLink:
      //     "https://pbs.twimg.com/profile_images/669120346264616960/4dy8ZO9Z_400x400.jpg",
      counter: 0,
      num: 3,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
    addToCounter(num) {
      this.counter += num;
    },
    reduceCounter(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    confirmeName(lastName) {
      this.confirmedName = this.name + " " + lastName;
    },
    resetInput() {
      this.name = "";
    },
  },
});
app.mount("#app");
const appDOM = document.querySelector("#app");
appDOM.addEventListener("keydown", (e) => {
  console.log(e);
});
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      console.log(e.key);

      break;
    case "ArrowLeft":
      break;
    default:
      return;
  }
});
