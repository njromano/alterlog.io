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
                <v-btn color="secondary" @click="onSaveBtn">
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
          <v-card-text>
            {{ card.text }}
          </v-card-text>
          <v-card-actions>
            <v-layout justify-end>
              <v-icon small @click.stop="confirmDeleteIndex = index">delete</v-icon>
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
    <v-dialog v-model="showConfirmDeleteDialog"
      width="500">
      <v-card>
        <v-card-text>Do you want to delete this log entry?</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="confirmDeleteIndex = 0" flat color="primary">CANCEL</v-btn>
          <v-btn @click="onDeleteBtn" flat color="primary">DELETE</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import store from 'localforage';

  class LogCard {
    title: string;
    date: Date;
    text: string;
    constructor(title: string, date: Date, text: string)
    {
      this.title = title;
      this.date = date;
      this.text = text;
    }
  }

  @Component
  export default class Home extends Vue {
    cards = new Array<LogCard>();
    newCard = new LogCard('', new Date(), '');
    showNewCard = false;
    confirmDeleteIndex = -1;

    onAddBtn() {
      if (this.showNewCard) {
        this.showNewCard = false;
        return;
      }

      this.newCard = new LogCard('', new Date(), '');
      this.showNewCard = true;
    }

    get showConfirmDeleteDialog(): boolean {
      return this.confirmDeleteIndex > -1;
    }

    onSaveBtn() {
      this.cards.push(this.newCard);
      store
        .setItem("logs", this.cards);
      this.showNewCard = false;
    }

    onDeleteBtn() {
      this.cards.splice(this.confirmDeleteIndex, 1);
      store.setItem("logs", this.cards);
      this.confirmDeleteIndex = -1;
    }
    created() {
      store
        .getItem("logs")
        .then((values) => {
          if (!values)
            return new Array<LogCard>();
          this.cards = values as [LogCard]
        });
    }

  }
</script>

<style>

</style>
