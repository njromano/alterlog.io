<template>
  <v-container>
    <v-layout justify-center row wrap>
      <v-flex>
        <v-card v-if="showNewCard" class="mb-3 white--text" color="primary">
          <v-card-title class="white--text">
            <v-layout column>
              <h2 class="headline mb-0">New log</h2>
              <div>
                <v-text-field v-model="newCard.title"
                  placeholder="Title" dark></v-text-field>
              </div>
              <div>
                <v-textarea v-model="newCard.text"
                  placeholder="Text"
                  rows="10"
                  dark/>
              </div>
              <div>
                <v-btn color="secondary black--text" @click="onSaveBtn">
                  SAVE
                </v-btn>
                <v-btn color="white" @click="showNewCard = false">
                  CANCEL
                </v-btn>
              </div>
            </v-layout>
          </v-card-title>
        </v-card>
        <v-card class="mb-3" v-for="(card, index) in cards" :key="card.Date">
          <v-card-title primary-title>
            <v-layout justify-space-between>
              <h3 class="headline mb-0">{{ card.title }}</h3>
              <div>{{ card.date.toLocaleString() }}</div>
            </v-layout>
          </v-card-title>
          <v-card-text v-if="index === editingIndex">
            <v-text-field v-model="card.text"></v-text-field>
          </v-card-text>
          <v-card-text v-else> {{ card.text }} </v-card-text>
          <v-card-actions>
            <v-layout justify-start>
              <v-icon @click.stop="editingIndex = index" v-if="index !== editingIndex">edit</v-icon>
              <v-layout justify-start v-else>
                <v-btn class="secondary" @click="onSave">save</v-btn>
                <v-btn @click="onDiscard">discard</v-btn>
              </v-layout>
            </v-layout>
            <v-layout justify-end>
              <v-icon @click.stop="confirmDeleteIndex = index">delete</v-icon>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn
      absolute
      color="primary"
      fab
      top
      right
      @click="onAddBtn">
        <v-icon v-if="showNewCard" dark>cancel</v-icon>
        <v-icon v-else>add</v-icon>
    </v-btn>
    <v-dialog v-model="confirmDelete"
      width="500">
      <v-card>
        <v-card-text>Do you want to delete this log entry?</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="confirmDeleteIndex = -1" flat color="primary">CANCEL</v-btn>
          <v-btn @click="onDeleteBtn" flat color="primary">DELETE</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
  import {Vue, Component, Watch} from "vue-property-decorator";
  import store from 'localforage';
  import LogCard from './LogCard';

  @Component
  export default class Home extends Vue {
    protected cards = new Array<LogCard>();
    private newCard = new LogCard('', new Date(), '');
    private showNewCard = false;
    private confirmDeleteIndex = -1;
    private confirmDelete = false;
    private editingIndex = -1;

    public onAddBtn() {
      if (this.showNewCard) {
        this.showNewCard = false;
        return;
      }

      this.newCard = new LogCard('', new Date(), '');
      this.showNewCard = true;
    }

    @Watch("confirmDelete")
    public onConfirmDeleteChange(val: boolean) {
      if (!val) {
        this.confirmDeleteIndex = -1;
      }
    }

    @Watch("confirmDeleteIndex")
    public onConfirmDeleteIndexChange(val: number) {
        this.confirmDelete = val > -1;
    }


    public onSaveBtn() {
      this.cards.push(this.newCard);
      store
        .setItem("logs", this.cards);
      this.showNewCard = false;
    }

    public onDeleteBtn() {
      this.cards.splice(this.confirmDeleteIndex, 1);
      store.setItem("logs", this.cards);
      this.confirmDeleteIndex = -1;
    }
    public created() {
      store
        .getItem("logs")
        .then((values) => {
          if (!values) {
            return new Array<LogCard>();
          }
          this.cards = values as [LogCard];
        });
    }

    public onSave() {
      store.setItem("logs", this.cards);
      this.editingIndex = -1;
    }

    public onDiscard() {
      store
              .getItem("logs")
              .then((values) => {
                if (!values) {
                  return new Array<LogCard>();
                }
                this.cards = values as [LogCard];
                this.editingIndex = -1;
              });
    }
  }
</script>

<style>

</style>
