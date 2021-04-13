const router = require("express").Router();
const commentController = require("../controllers/commentsController");

router.route("/")
    .get(commentController.findAll)
    .post(commentController.create);

router.route("/:id")
    .get(commentController.findById)
    .put(commentController.update)
    .delete(commentController.remove);

router.route("/art").get((req, res) => {
    commentController.findAll()
    .then(foundComments => {res.json(foundComments);
    });
})
router.route("/writing").get((req, res) => {
    commentController.findAll()
    .then(foundComments => {res.json(foundComments);
    });
})
router.route("/engineering").get((req, res) => {
    commentController.findAll()
    .then(foundComments => {res.json(foundComments);
    });
})
router.route("/science").get((req, res) => {
    commentController.findAll()
    .then(foundComments => {res.json(foundComments);
    });
})
router.route("/technology").get((req, res) => {
    commentController.findAll()
    .then(foundComments => {res.json(foundComments);
    });
})
router.route("/reading").get((req, res) => {
    commentController.findAll()
    .then(foundComments => {res.json(foundComments);
    });
})
router.route("/math").get((req, res) => {
    commentController.findAll()
    .then(foundComments => {res.json(foundComments);
    });
})
module.exports = router;
