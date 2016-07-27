import Vue from 'vue'

import AppBody from './AppBody'
import AppContent from './AppContent'
import AppHeader from './AppHeader'
import AppSidebar from './AppSidebar'

export default {
  register: function () {
    Vue.component('app-body', AppBody)
    Vue.component('app-content', AppContent)
    Vue.component('app-header', AppHeader)
    Vue.component('app-sidebar', AppSidebar)
  }
}
