const app = Vue.createApp({
  data() {
    return {
      pokemon: [
        { name: 'Bulbasaur', type: 'Grass', img: 'assets/001Bulbasaur.webp', isFav: false },
        { name: 'Charmander', type: 'Fire', img: 'assets/004Charmander.webp', isFav: true },
        { name: 'Squirtle', type: 'Water', img: 'assets/007Squirtle.webp', isFav: true },
      ]
    }
  },
  methods: {
    toggleFav(pkmn) {
      pkmn.isFav = !pkmn.isFav
    }
  },
  computed: {
    favoritePokemon() {
      return this.pokemon.filter((pokemon) => pokemon.isFav)
    }
  }
})

app.mount('#app')
