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
      this.toDo.splice(index,1);
    },
    aggiungi: function(){
      this.toDo.push(this.nuovoToDo);
      this.nuovoToDo= ''
    },
    cancellaTutto: function(){
      this.toDoDone = [];
    },
    ripristina: function(index){
      this.toDo.push(this.toDoDone[index]);
      this.toDoDone.splice(index,1);
    },
    cancellaDefinitivo(index){
      this.toDoDone.splice(index,1)
    },
    eliminaTutto: function(){
      for (var i = 0; i < this.toDo.length; i++){
        this.toDoDone.push(this.toDo[i]);
      }
      this.toDo = [];
    },
    ripristinaTutto: function(){
      for (var i = 0; i < this.toDoDone.length; i++){
        this.toDo.push(this.toDoDone[i]);
      }
      this.toDoDone = [];
    },
    modifica(index){
      this.toDo.splice(index,1, prompt('parola'));
      console.log(this.toDo);
    }
  }
});
