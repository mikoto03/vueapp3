<template>
  <v-app>
    <v-navigation-drawer app clipped v-model="drawer">
      <v-container>
      <v-row>
        <v-col cols="12">
          <v-btn to="/" class="mb-3" color="primary" block>หน้าหลัก</v-btn>
          <v-btn to="/customers" class="mb-3" color="primary" block>ลูกค้า</v-btn>
          <v-btn to="/products" class="mb-3" color="primary" block>สินค้า</v-btn>
          <v-btn to="/reports" class="mb-3" color="primary" block>รายงาน</v-btn>
          <v-btn to="/about" class="mb-3" color="error" block>เกี่ยวกับ</v-btn>
        </v-col>
      </v-row>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-btn class="ma-2" outlined fad @click="drawer=!drawer">
      <v-icon color="dark"> mdi-format-list-bulleted-square </v-icon> 
      </v-btn>
      <v-toolbar-title>
        ระบบเก็บข้อมูลสินค้า
      
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
        <router-view></router-view>
    </v-main>
    <v-footer app>
     <span>&copy;RMUTL{{new Date().getFullYear()+543}}</span>



    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      message: "RMUTL",
      drawer: null
    };
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
#app{
  font-family: 'Itim', cursive;
}
</style>