const buildSchema = require("graphql").buildSchema
//import {buildSchema} from "graphql";

const schema = buildSchema(`
    type Course {
        id: ID
        name: String
        Price: Int
        TeachingAssists: [TeachingAssists]
    }
    type TeachingAssists {
        name: String
        Experience: Experience
    }
    enum Experience {
        MID
        GOOD
        BAD
    }
    type Query {
        getCourse(name: String!): Course
    }
    input CourseInput {
        name: String
        Price: Int
        TeachingAssists: [TeachingAssistsInput]
    }
    input TeachingAssistsInput {
        name: String
        Experience: Experience
    }
    type Mutation {
        createCourse(input: CourseInput): Course
    }
`)

module.exports = schema