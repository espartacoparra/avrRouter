<template>
  <div class="about">
    <Imgfrag
      url="https://images.unsplash.com/photo-1504392964536-1eeba96e9d0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    />
    <div class="container mt-5">
      <transition-group name="fade" tag="ul">
        <div class="row" key="team" v-if="teamList.length>0">
          <div v-for="item in teamList" :key="item.id" class="col-lg-4">
            <title>Placeholder</title>
            <img :src="item.avatar" class="rounded-circle" />

            <h2>{{item.first_name}} {{item.last_name}}</h2>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
            </p>
            <p></p>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Imgfrag from "../components/partials/Imgfrag";
import Request from "../services/request";
import Query from "../queries/queries";
export default {
  name: "About",
  components: {
    Imgfrag
  },
  created() {
    this.getTeam();
  },
  data() {
    return {
      teamList: []
    };
  },
  methods: {
    async getTeam() {
      this.teamList = (await Request.getTeam(Query.allUsers)).allUsers;
    }
  }
};
</script>

<style scoped>
.about {
  margin-top: 55px;
}
</style>