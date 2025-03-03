Tour and Travel Server 

user
tour
review

user:{
    name
    email
    age
    photo
    role -> user | admin
    status -> active | inactive
}

tour:{
    name
    duration
    rating
    price
    coverImage
    image[]
    startDate
    location
}

review:{
    review
    rating
    tour -> ref
    user ->ref
}
