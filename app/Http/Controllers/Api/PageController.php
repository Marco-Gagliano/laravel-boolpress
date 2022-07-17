<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Post;
use App\Category;
use App\Tag;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index(){

        $posts = Post::with('category')->with('tags')->paginate(6);
        $categories = Category::all();
        $tags = Tag::all();

        return response()->json(compact('posts', 'categories','tags'));
    }


    public function show($slug){

        $post = Post::where('slug', $slug)->with(['category', 'tags'])->first();

        return response()->json($post);
    }


    public function getPostsByCategory($slug_category){

        $category = Category::where('slug', $slug_category)->with('posts')->first();

        return response()->json($category);
    }


    public function getPostsByTag($slug_tag){

        $tag = tag::where('slug', $slug_tag)->with('posts')->first();

        return response()->json($tag);
    }

}
