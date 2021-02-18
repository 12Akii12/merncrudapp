const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

//to save post
router.post('/post/save',(req,res)=>{
    let newPost = new Posts(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts save successfully"

        });
    });
});

//get post
router.get('/posts',async(req,res) =>{
    const page = parseInt(req.query.page || "0");
    const pos = await Posts.find({}).limit(3);
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts,
        });
    });
});


//get specific post
router.get('/post/:id',(req,res) =>{
    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });
});


//update posts

router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"updated successfully"
            });
        }
    );
});

//delete post

router.delete('/post/delete/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
        if(err) return res.status(400).json({
            message:"delete unsuccessful",err
        });

        return res.json({
            message:"Delete successfull",deletedPost
        });
    });
});

module.exports = router;