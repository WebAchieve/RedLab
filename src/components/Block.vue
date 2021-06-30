<template>
  <div class="block">
    <div
      class="blok-wrap"
      v-scrollmagic
      :class="[typeof list.video == 'string' ? 'col-12' : '', 'col-6']"
      v-for="(list, index) in info"
      :key="index"
    >
      <div class="block-item">
        <div class="block-item__info">
          <div class="item-top">
            <div class="item-top__imgwrap">
              <img :src="getImgUrl(list.image)" :alt="list.name" />
              <div class="item-top__name">{{ list.name[lang] }}</div>
            </div>

            <div class="item-top__star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs"
                version="1.1"
                width="512"
                height="512"
                x="0"
                y="0"
                viewBox="0 0 511.98685 511"
                style="enable-background:new 0 0 512 512"
                xml:space="preserve"
                class=""
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0"
                    fill="#2196f3"
                    data-original="#000000"
                    style=""
                    class=""
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="item-id">#{{ list.id+1 }}</div>
          <div class="item-content">
            <div class="item-content__age">
              {{ list.age }}{{ lang == "ru" ? " лет" : " years old" }}
            </div>
            <div class="item-content__phone">{{ list.phone }}</div>
            <div class="item-content__text">
              <p>{{ list.phrase[lang] }}</p>
            </div>
          </div>
        </div>
        <div class="block-item__video" v-if="list.video">
          <video
            v-load
            class="videos"
            controls="controls"
            autoplay="0"
            :data-url="getVideoUrl(list.video)"
            src=""
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          ></video>
        </div>
      </div>
    </div>
    <div class="blok-wrap"></div>
  </div>
</template>
<script>
import load from "../directives/load";
export default {
  name: "Block",
  props: ["info", "lang"],
  methods: {
    getImgUrl(pic) {
      return require("../assets/images/" + pic + ".svg");
    },
    getVideoUrl(video) {
      return require("../assets/videos/" + video + ".mp4");
    },
   
  },
  directives: {
    load,
  },
};
</script>
