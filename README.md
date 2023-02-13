# Backend Films

## TO DO:
 - [x] Install basic
 - [x] Model Film
 ```js
 const filmSchema = new Schema({
    image: String,
    titre: String,
    annee: Number,
    ratings: Number,
    genres: [String]
});
```
 - [ ] Modifier un film
 - [ ] Lire un film
 - [ ] Créer l'authentification