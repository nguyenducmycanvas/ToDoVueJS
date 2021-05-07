new Vue({
  el: "#app",
  data: {
    action: "all",
    newContent: "",
    count: 0,
    itemSort: [],
    items: [
      {
        id: 1,
        content: "テスト1",
        status: "done",
      },
      {
        id: 2,
        content: "テスト2",
        status: "working",
      },
      {
        id: 3,
        content: "テスト3",
        status: "done",
      },
      {
        id: 4,
        content: "テスト4",
        status: "working",
      },
      {
        id: 5,
        content: "テスト5",
        status: "working",
      },
    ],
  },
  mounted() {
    this.countItems("all");
    // this.count = this.items.length;
    // This action will be called if main component is created.
  },

  computed: {},
  methods: {
    toJapanese(word) {
      if (word == "done") {
        return "完了";
      }
      return "作業中";
    },
    addItem() {
      let last_id = this.items.length + 1;

      let comment = {
        id: last_id,
        content: this.newContent,
        status: "working",
      };

      if (this.newContent) {
        this.items.push(comment);
        this.newContent = "";
      }
      return;
    },
    countItems(action) {
      // this.count = this.items.length;
      this.action = action;
      if (this.action == "all") {
        this.count = this.items.length;
        this.itemSort = this.items;
      } else {
        this.itemSort = this.items.filter((item) => {
          return item.status === this.action;
        });
        this.count = this.itemSort.length;
      }
    },
    changeStatus(id) {
      let index = this.items
        .map(function (item) {
          return item.id;
        })
        .indexOf(id);

      if (this.items[index].status == "working") {
        this.items[index].status = "done";
      }
      this.countItems(this.action);
    },
    removeItem(id) {
      let removeIndex = this.items
        .map(function (item) {
          return item.id;
        })
        .indexOf(id);
      this.items.splice(removeIndex, 1);
      this.countItems(this.action);
    },
  },
});
