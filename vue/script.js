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
    delete: function(){
      this.toDo.push('ciao');
      console.log(this.toDo);
    }
  }

});
