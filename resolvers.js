const nanoid = require("nanoid").nanoid;

class Course {
    constructor(id,{name,Price,TeachingAssists}){
        this.id = id,
        this.name = name,
        this.Price = Price,
        this.TeachingAssists = TeachingAssists
    }

}

const courses = {}

const resolvers = {
    getCourse: ({ name }) => {
        for(var key in courses)
        {
            if(courses[key].name == name)
            {
                return new Course(key,courses[key])
            }
        }
        },
    createCourse: ({ input }) => {
        let id = nanoid()
        courses[id] = input
        console.log(courses)
        return new Course(id,input)
    }
}

module.exports = resolvers;