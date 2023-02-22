

const { Comment } = require('../models');

const commentData = [
    {
        "content": "ORM is so cool",
        "user_id": "2",
        "post_id": "3"
    },
    {
        "content": "MVC is really important. Thanks!",
        "user_id": "3",
        "post_id": "1"
    },
    {
        "content": "I now know the differences between Authentication and Authorization!",
        "user_id": "1",
        "post_id": "2"
    },
    {
        "content": "I never realized how important proper data backup and recovery processes are until I lost all my files!",
        "user_id": "2",
        "post_id": "3"
    },

    {
        "content": "Learning to code has been a real challenge, but it's also incredibly rewarding!",
        "user_id": "3",
        "post_id": "4"
    },

    {
        "content": "I can't believe how much my productivity has improved since I started using a Pomodoro timer!",
        "user_id": "4",
        "post_id": "5"
    },

    {
        "content": "I'm starting to understand the benefits of using version control for my projects.",
        "user_id": "5",
        "post_id": "6"
    },

    {
        "content": "Design patterns have been a game-changer for me as a software developer.",
        "user_id": "6",
        "post_id": "7"
    },
    {
        "content": "Losing all my files made me realize the critical importance of proper data backup and recovery processes!",
        "user_id": "10",
        "post_id": "3"
    },

    {
        "content": "Coding has been a challenging journey, but the rewards have been truly incredible!",
        "user_id": "11",
        "post_id": "4"
    },

    {
        "content": "Since starting to use a Pomodoro timer, I've been amazed at how much more productive I've become!",
        "user_id": "12",
        "post_id": "5"
    },

    {
        "content": "I'm beginning to see the advantages of incorporating version control into my projects.",
        "user_id": "10",
        "post_id": "6"
    },

    {
        "content": "As a software developer, discovering design patterns has truly revolutionized the way I work.",
        "user_id": "12",
        "post_id": "7"
    }
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments