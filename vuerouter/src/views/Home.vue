<template>
  <div class="home">
    <div id="backimg">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 class="text-white">Welcome Vue Router</h1>
    </div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            height="800px"
            src="https://images.unsplash.com/photo-1494261951946-b0c26b70410c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1082&q=80"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            height="800px"
            src="https://images.unsplash.com/photo-1529611934128-376c7bb1c88a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            height="800px"
            src="https://images.unsplash.com/photo-1488149048941-581936ced6d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <Imgfrag
      url="https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    >
      <div class="row">
        <div
          v-for="(item, index) in Drones"
          :key="index"
          class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3"
        >
          <div id="card-body" class="card" style="width: 18rem;">
            <img :src="item" width="200px" height="300px" class="card-img-top" alt="..." />
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Name
                  <span class="badge badge-secondary badge-pill">Phanton</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Speed
                  <span class="badge badge-secondary badge-pill">50 km/h</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Battery
                  <span class="badge badge-secondary badge-pill">1 lithium polymer</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Camara
                  <span class="badge badge-secondary badge-pill">1080P HD</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Weight
                  <span class="badge badge-secondary badge-pill">1,06 Kg</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Imgfrag>
  </div>
</template>

<script>
// @ is an alias to /src
import Imgfrag from "../components/partials/Imgfrag";
export default {
  name: "Home",
  components: {
    Imgfrag
  },
  data() {
    return {
      Drones: [
        "https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1494261951946-b0c26b70410c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1082&q=80",
        "https://images.unsplash.com/photo-1488149048941-581936ced6d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1514505213055-b456c4420f67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      ]
    };
  }
};
</script>

<style >
#backimg {
  position: relative;
  width: 100%;
  height: 900px;
  min-height: 35rem;
  padding: 15rem 0;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.7) 75%,
      #000000 100%
    ),
    url("https://images.unsplash.com/photo-1486611367184-17759508999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}

.list-group li,
#card-body {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>