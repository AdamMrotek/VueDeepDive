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
      color: "",
      confirmedName: "",
      isValid: true,
      details: ["cotton:50%", "Wool:3%", "magic wool 100%"],
      sizes: [
        { size: "large", id: 0 },
        { size: "medium", id: 1 },
        { size: "small", id: 2 },
      ],
      variants: [
        { id: 1, color: "blue" },
        { id: 1, color: "green" },
        { id: 1, color: "yellow" },
      ],
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
    updateColor(colorVar) {
      this.color = colorVar;
      console.log(this.color);
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
