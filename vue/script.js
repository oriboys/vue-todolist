var mui = new Vue ({
  el: '#lista',
  data: {
    toDo: [
      'spesa',
      'ginnastica',
      'esercizi',
      'chiamare università'
    ],
    nuovoToDo: '',
    toDoDone: []
  },
  methods: {
    cancella(index){
      this.toDoDone.push(this.toDo[index]);
      // console.log(this.toDoz);
      // this.toDo.splice(index,1);
      console.log(this.toDo[index]);

    },
    aggiungi: function(){
      this.toDo.push(this.nuovoToDo);

    }
  }

});
