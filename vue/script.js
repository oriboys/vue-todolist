var mui = new Vue ({
  el: '#lista',
  data: {
    toDo: [
      "spesa",
      "ginnastica",
      "esercizi",
      "chiamare università"
    ],
    nuovoToDo: '',
    toDoDone: []
  },
  methods: {
    cancella: function(index){
      this.toDo.splice(index,1);

    }
  }

});
