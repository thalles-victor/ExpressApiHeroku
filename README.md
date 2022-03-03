# ExpressApiHeroku

API de teste que usei para hospedar na heroku.
Observer que: 
  na hora de hospedar na heroku, ela escolhe por conta própria a porta, por isso é necessário passar
  como variável de ambiente para não dar um breack no deploy
  
```js
  const port = process.env.PORT || 3000
```
