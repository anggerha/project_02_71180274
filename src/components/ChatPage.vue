<template>
    <div>
        <v-app>
          <v-card>
              <v-layout >
                  <v-navigation-drawer permanent location="left" class="drawer">
                      <template v-slot:prepend>
                          <v-list-item lines="one" style="float: inline-start;">Pesan Terakhir</v-list-item>
                          <v-list-item lines="one" style="float: inline-end;" @click="logout">Logout</v-list-item>
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
                    <header style="background-color:blue; height: 3rem; color: white;">
                        <b style="float: inline-start; margin: 1% 0% 0% 1%;">@kristianadi</b>
                    </header>
                    <body style="height: 87vh;">
                        <div v-for="item in riwayat" :key="item.message">
                            <span>
                                <h3 class="chat">{{item.message}}</h3>
                            </span>
                        </div>
                    </body>
                    <footer>
                        <div class="footer">
                            <v-responsive class="mx-auto input" width="50%" style="float: inline-start;">
                                <v-text-field clearable label="ketik pesan" v-model="pesan"></v-text-field>
                            </v-responsive>
                            <v-btn @click="storeChat">Kirim</v-btn>
                        </div>
                    </footer>
                  </v-main>
              </v-layout>
          </v-card>
      </v-app>
    </div>
</template>

<script>
import { setDoc, doc, getFirestore } from 'firebase/firestore'
import * as firestore from 'firebase/firestore'
import { firebase } from '../firebase'

const db = getFirestore(firebase)

export default {
    name: 'ChatPage',
    data() {
        return {
            pesan:'',
            counter: 0,
            riwayat:[]
        }
    },
    created(){
        this.getData()
    },
    methods: {
        async storeChat(){
            this.riwayat = []
            if(this.pesan != ''){
                await setDoc(doc(db, "Message", 'pesan '+this.counter), {
                    message: this.pesan
                })
            }
            this.getData()
        },
        async getData(){
            const querySnapshot = await (firestore.getDocs(firestore.collection(db, "Message")))
            this.counter = querySnapshot.size
            querySnapshot.forEach((doc) => {
                const stringified = doc.data()
                this.riwayat.push(stringified)
            });
        },
        logout(){
            this.$router.push('/')
        }
    },
}
</script>

<style>
footer{
    bottom: 0;
}
.chat{
    background-color: pink;
    margin: 1%;
}
.footer{
    position: sticky;
}
</style>