<template>
  <div class="posts">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card bg-dark">
            <div class="card-header text-white">EDIT LIST</div>
            <div class="card-body">
              <form @submit.prevent="PostUpdate">
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="post.name"
                    placeholder="Input Name"
                  />
                  <div v-if="validation.name">
                    <div class="alert alert-danger mt-1" role="alert">
                      {{ validation.name[0] }}
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="post.email"
                    placeholder="Input Email"
                  />
                  <div v-if="validation.email">
                    <div class="alert alert-danger mt-1" role="alert">
                      {{ validation.email[0] }}
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label>Comment</label>
                  <textarea
                    class="form-control"
                    v-model="post.body"
                    rows="5"
                    placeholder="Comments....."
                  ></textarea>
                  <div v-if="validation.body">
                    <div class="alert alert-danger mt-1" role="alert">
                      {{ validation.body[0] }}
                    </div>
                  </div>
                </div>
                <br />
                <div class="d-grid gap-2">
                  <router-link
                    :to="{ name: 'KomentarView' }"
                    class="btn btn-sm btn-info mr-2"
                    >BACK
                  </router-link>
                  <button type="submit" class="btn btn-sm btn-primary mr-2">
                    UPDATE
                  </button>
                  <button type="reset" class="btn btn-sm btn-danger">
                    MOVE
                  </button>
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
import axios from "axios";

export default {
  data() {
    return {
      post: {},
      validation: [],
    };
  },
  created(id) {
    console.log(this.$route.params);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/1/comments/${this.$route.params.id}`
      )
      .then((response) => {
        this.post = response.data;
      });
  },
  methods: {
    PostUpdate() {
      axios
        .put(
          `https://jsonplaceholder.typicode.com/posts/1/comments/${this.$route.params.id}`,
          this.post
        )
        .then((response) => {
          this.$router.push({
            name: "create",
          });
          console.log(response);
        })
        .catch((error) => {
          this.validation = error.response.data.data;
        });
    },
  },
};
</script>
