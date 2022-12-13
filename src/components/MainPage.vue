<template>
    <div>
        <v-app>
          <v-card>
              <v-layout style="height: 100vh;">
                  <v-navigation-drawer permanent location="left" class="drawer">
                      <template v-slot:prepend>
                          <v-list-item lines="one" style="float: inline-start;">Pesan Terakhir</v-list-item>
                          <v-list-item lines="one" style="float: inline-end;">Logout</v-list-item>
                      </template>

                      <v-divider></v-divider>

                      <template v-slot:append>
                        <v-list-item lines="two">Kirim Pesan Ke:</v-list-item>
                        <v-responsive class="mx-auto input">
                            <v-text-field clearable label="username teman..." @click="click"></v-text-field>
                        </v-responsive>
                      </template>
                  </v-navigation-drawer>
                  <v-main style="height:100%" class="container">
                    <router-view></router-view>
                  </v-main>
              </v-layout>
          </v-card>
      </v-app>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
    methods: {
        click(){
            this.$router.push('ChatPage')
        }
    },
}
</script>

<style>
.drawer{
    background-color: #4958e3;
    color: white;
}
</style>