/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import App from "./App.vue";
import Grid from "./components/Grid.vue";
import Page from "./components/Page.vue";
import Teaser from "./components/Teaser.vue";
import Feature from "./components/Feature.vue";
import Article from "./components/Article.vue";
import BlogPreviews from "./components/blogs/BlogPreviews.vue";
import Blog from "./components/blogs/Blog.vue";
import router from "./router";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import "./index.css";
import CTA from "./components/CTA.vue";

const app = createApp(App);

app.use(router);

app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_APP_PREVIEW_TOKEN,
  use: [apiPlugin],
});

app.component("Grid", Grid);
app.component("Page", Page);
app.component("Teaser", Teaser);
app.component("Feature", Feature);
app.component("Article", Article);
app.component("Blog", Blog);
app.component("blog-previews", BlogPreviews);
app.component("cta", CTA);

app.mount("#app");
