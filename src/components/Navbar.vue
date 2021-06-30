<template>
  <nav id="nav">
    <div id="nav-wrap">
      <div class="navbar-top">
        <div class="navbar-top__item">
          <input
            v-model="serch"
            type="text"
            :placeholder="!lang ? 'Поиск' : 'Search'"
          />
          <button @click="changeSetch()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs"
              version="1.1"
              width="512"
              height="512"
              x="0"
              y="0"
              viewBox="0 0 56.966 56.966"
              style="enable-background:new 0 0 512 512"
              xml:space="preserve"
              class=""
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                fill="#2196f3"
                data-original="#000000"
                style=""
                class=""
              />
            </svg>
          </button>
        </div>
        <div class="navbar-top__item">
          <label class="switch">
            <input
              @change="changeLang()"
              v-model="lang"
              type="checkbox"
              class="switch-checkbox"
              checked
            />
            <span class="switch-slider"></span>
          </label>
        </div>
      </div>
      <div class="navbar" :class="{ slide: slide }">
        <div class="navbar-items">
          <p>{{ !lang ? "Сортировка" : "Sorting" }}</p>
          <div class="button-wrap">
            <button
              :class="{ active: buttonFilter == 'id' }"
              class="navbar-buttons "
              @click.prevent="chancgeNewFilter('id')"
            >
              ID
            </button>
            <button
              :class="{ active: buttonFilter == 'name' }"
              class="navbar-buttons"
              @click.prevent="chancgeNewFilter('name')"
            >
              {{ !lang ? "Имя" : "Name" }}
            </button>
            <button
              :class="{ active: buttonFilter == 'age' }"
              class="navbar-buttons"
              @click.prevent="chancgeNewFilter('age')"
            >
              {{ !lang ? "Возраст" : "Age" }}
            </button>
          </div>
          <div class="button-wrap">
            <button
              :class="{ active: buttonRait == 'up' }"
              class="navbar-buttons"
              @click.prevent="chancgeRait('up')"
            >
              {{ !lang ? "По возрастанию" : "Ascending" }}
            </button>
            <button
              :class="{ active: buttonRait == 'down' }"
              class="navbar-buttons"
              @click.prevent="chancgeRait('down')"
            >
              {{ !lang ? "По убыванию" : "Descending" }}
            </button>
          </div>
        </div>
        <div class="navbar-items">
          <p>{{ !lang ? "Вид" : "View" }}</p>
          <button
            :class="{ active: buttonLayout == 'list' }"
            class="navbar-buttons"
            @click.prevent="chancgeLayout('list')"
          >
            {{ !lang ? "Таблица" : "Table" }}
          </button>
          <button
            :class="{ active: buttonLayout == 'block' }"
            class="navbar-buttons"
            @click.prevent="chancgeLayout('block')"
          >
            {{ !lang ? "Превью" : "Preview" }}
          </button>
        </div>
        <button class="modile-button" @click="slide = !slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="512"
            height="512"
            x="0"
            y="0"
            viewBox="0 0 292.362 292.362"
            style="enable-background:new 0 0 512 512"
            xml:space="preserve"
            class=""
          >
            <g xmlns="http://www.w3.org/2000/svg">
              <path
                d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
                fill="#2196f3"
                data-original="#000000"
                style=""
                class=""
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      urlLayout: "",
      serch: "",
      slide: false,
      lang: false,
      buttonFilter: "id",
      buttonRait: "up",
      buttonLayout: "list",
    };
  },
  methods: {
    changeLang() {
      this.$emit("change", this.lang);
    },
    chancgeNewFilter(newfilter) {
      this.buttonFilter = newfilter;
      this.$router
        .push({
          query: Object.assign({}, this.$route.query, { filter: newfilter }),
        })
        .catch(() => {});
    },
    chancgeRait(newRait) {
      this.buttonRait = newRait;
      this.$router
        .push({
          query: Object.assign({}, this.$route.query, { rait: newRait }),
        })
        .catch(() => {});
    },
    chancgeLayout(newLayout) {
      this.buttonLayout = newLayout;
      this.$router
        .push({
          query: Object.assign({}, this.$route.query, { layout: newLayout }),
        })
        .catch(() => {});
    },
    changeSetch() {
      this.$router
        .push({
          query: Object.assign({}, this.$route.query, { serch: this.serch }),
        })
        .catch(() => {});
      this.serch = "";
    },
  },
};
</script>
