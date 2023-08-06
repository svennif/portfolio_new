import { createApp } from 'vue'
import App from './App.vue'
import router from './assets/router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithubSquare, faTwitterSquare, faInstagramSquare, faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTwitterSquare, faGithubSquare, faInstagramSquare, faLinkedin, faGithub, faArrowUpRightFromSquare)


createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
