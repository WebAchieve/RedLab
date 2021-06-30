<template>
  <div class="home">
    <Navbar @change="langGange" />
    <div class="container">
      <List v-if="mainlayout" :info="info" :lang="lang" :key="count" />
      <Block v-else :info="info" :lang="lang" :key="count" />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import List from "../components/List.vue";
import Block from "../components/Block.vue";
export default {
  name: "Home",

  data: () => ({
    info: [],
    mainlayout: true,
    lang: "ru",
    count: 0,
  }),

  components: {
    Navbar,
    List,
    Block,
  },
  created() {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.info = data
      });
  },
  methods: {
    langGange(data) {
      if (data) {
        this.lang = "en";
      } else {
        this.lang = "ru";
      }
    },
    filterList() {
      this.count++;
      const urlQuery = this.$route.query;
      this.liveSerch(urlQuery.serch);
      const order = urlQuery.rait == "up" ? 1 : -1;
      this.mainlayout = urlQuery.layout == "block" ? false : true;
      if (urlQuery.filter == "name") {
        if (urlQuery.rait == "up") {
          this.info.sort((a, b) =>
            a.name[this.lang].localeCompare(b.name[this.lang])
          );
        } else {
          this.info.sort((a, b) =>
            b.name[this.lang].localeCompare(a.name[this.lang])
          );
        }
      } else {
        return this.info.sort(function(a, b) {
          return (a[urlQuery.filter] - b[urlQuery.filter]) * order;
        });
      }
    },
    liveSerch(serchQuery) {
      let serchArr = this.info.filter((elem) => {
        return elem.name[this.lang]
          .toLowerCase()
          .includes(serchQuery.toLowerCase());
      });
      if (serchArr.length == 0) serchArr = this.info;
      this.info = serchArr;
    },
  },

  mounted() {
    const nav = document.getElementById("nav-wrap");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= nav.offsetHeight) {
        nav.classList.add("sticky");
      } else if (window.pageYOffset <= nav.offsetHeight) {
        nav.classList.remove("sticky");
      }
    });
    this.$router
      .push({
        name: "Home",
        query: { layout: "list", filter: "id", rait: "up", serch: "" },
      })
      .catch(() => {});
  },
  watch: {
    "$route.query"() {
      this.filterList();
    },
  },
};
</script>
