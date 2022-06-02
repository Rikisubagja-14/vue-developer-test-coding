<template>
    <div class="posts">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card bg-dark">
                        <div class="card-header text-white">
                            CREATE LIST
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="PostStore">

                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" v-model="post.name"
                                        placeholder="Input Name">
                                    <div v-if="validation.title">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.title[0] }}
                                        </div>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" v-model="post.email"
                                        placeholder="Input Email">
                                    <div v-if="validation.title">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.title[0] }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Comment</label>
                                    <textarea class="form-control" v-model="post.comments" rows="5"
                                        placeholder="Comments....."></textarea>
                                    <div v-if="validation.content">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.content[0] }}
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="d-grid gap-2">
                                    <router-link :to="{ name: 'KomentarView' }" class="btn btn-sm btn-info mr-2">BACK
                                    </router-link>
                                    
                                    <button type="submit" class="btn btn-sm btn-primary mr-1">SAVE</button>
                                    <button type="reset" class="btn btn-sm btn-danger mr-2">MOVE</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {
            post: {},
            validation: []
        }
    },
    methods: {
        PostStore() {
            axios.post('https://jsonplaceholder.typicode.com/posts/1/comments', this.post)
                .then((response) => {
                    this.$router.push({
                        name: 'posts'
                    });
                    console.log(response.data);
                }).catch(error => {
                    this.validation = error.response.data;
                });
        }
    }
}
</script>
