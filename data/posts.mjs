
const posts= [
      {
        "id": 1,
        "userId": 1,
        "title": "My First Hiking Adventure",
        "content": "I just came back from an amazing hike! The views were breathtaking.",
        "likes": 30,
        "comments": [
          { "commentId": 1, "userId": 2, "content": "Sounds incredible! Where did you go?" },
          { "commentId": 2, "userId": 3, "content": "Hiking is the best! Did you take any photos?" }
        ]
      },
      {
        "id": 2,
        "userId": 2,
        "title": "Cooking Experiment Success!",
        "content": "I tried a new recipe today and it turned out great. Who wants the recipe?",
        "likes": 50,
        "comments": [
          { "commentId": 1, "userId": 1, "content": "Yes, please share it!" },
          { "commentId": 2, "userId": 3, "content": "What did you cook? I’m curious!" }
        ]
      },
      {
        "id": 3,
        "userId": 3,
        "title": "Cycling Through the Countryside",
        "content": "Spent the weekend cycling through some beautiful countryside roads. Pure bliss!",
        "likes": 40,
        "comments": [
          { "commentId": 1, "userId": 1, "content": "That sounds so peaceful. Did you find any hidden gems?" },
          { "commentId": 2, "userId": 2, "content": "Nice! How many miles did you cover?" }
        ]
      }
    ]
  
  export default posts;