const express = require("express");
const resolvers = require("./resolvers")
const graph1lhttp = require("express-graphql").graphqlHTTP
const schema = require("./schema")

const app = express()

app.get("/",(req,res) => {
    res.send("Welcome to graphql")
})

app.use("/graphql",graph1lhttp({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(5000,() => 
console.log("Up and running at port 5000")
)