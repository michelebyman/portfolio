import Vue from 'vue'
import Router from 'vue-router'
// import JavaScript from './components/JavaScript'
// import HtmlCss from './components/HtmlCss'
import Home from './components/Home'
import MyWork from './components/MyWork'
import Contact from './components/Contact'
import About from './components/About';


Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
//     {
//       path: "/javascript",
//       name: "javascript",
//       component: JavaScript
//     },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/mywork",
      name: "mywork",
      component: MyWork
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
//     {
//       path: "/htmlcss",
//       name: "htmlcss",
//       component: HtmlCss
//     },

    {
      path: "/about",
      name: "about",
      component: About
     
    }
  ]
});
