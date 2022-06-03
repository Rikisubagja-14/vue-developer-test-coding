<script setup>
import Header from "../components/Header.vue";
import CardIdentitas from "../components/CardIdentitas.vue";
</script>

<template>
  <main>
    <div class="posts">
      <div class="container mt-0">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="card">
              <router-link :class="['btn btn-md btn-dark mb-1']" to="/create"
                >ADD LIST</router-link
              >
              <div class="card-body">
                <hr />
                <div class="table-responsive">
                  <table class="table table-dark">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Comments</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="post in posts" :key="posts.id">
                        <td>{{ post.name }}</td>
                        <td>{{ post.email }}</td>
                        <td>{{ post.body }}</td>
                        <td class="text-center">
                          <div class="d-grid gap-2">
                            <router-link
                              :to="{ name: 'edit', params: { id: post.id } }"
                              class="btn btn-sm btn-success mr-2"
                              >EDIT</router-link
                            >
                            <button
                              @click.prevent="PostDelete(post.id)"
                              class="btn btn-sm btn-danger"
                            >
                              DELETE
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Header></Header>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments/")
      .then((response) => (this.posts = response.data));
  },
  methods: {
    PostDelete(id) {
      console.log(id);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/1/comments/${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>
