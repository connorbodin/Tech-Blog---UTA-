const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        });
        console.log(newComment)

        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete comment by id 
// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const commentData = await Comment.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id
//             }
//         });

//         if (!commentData) {
//             res.status(404).json({ message: 'No comment found with this id!' });
//             return;
//         }

//         res.status(200).json(commentData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // router.get all comments 
// router.delete('/:id', async (req, res) => {
//     // delete a category by its `id` value
//     try {
//       const commentData = await Comment.destroy({
//         where: {
//           id: req.params.id
//         }
//       });
  
//       if (!commentData) {
//         res.status(404).json({ message: 'No category found with this id!' });
//         return;
//       }
  
//       res.status(200).json(commentData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });



module.exports = router