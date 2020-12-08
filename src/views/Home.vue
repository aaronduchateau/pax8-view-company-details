<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <SimpleCard widthStyle="360px">
          <h2 class="title">Companies</h2>
          <table class="table">
            <tr v-for="item in companyList" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <button
                  :id="item.id"
                  v-on:click="onNavigate($event, 'edit-company')"
                >
                  Edit details
                </button>
              </td>
              <td>
                <button
                  :id="item.id"
                  v-on:click="onNavigate($event, 'view-company')"
                >
                  View details
                </button>
              </td>
            </tr>
          </table>
        </SimpleCard>
      </div>
    </div>
  </div>
</template>

<script>
import services from "../services/CompanyService";

export default {
  name: "home",
  data() {
    return {
      companyList: null,
    };
  },
  created() {
    this.getCompanyList();
  },
  methods: {
    getCompanyList() {
      services.getAll().then((response) => {
        this.companyList = response;
      });
    },
    onNavigate: function (event, tRoute) {
      const targetId = event.currentTarget.id;
      this.$router.push(tRoute + "/" + targetId);
    },
  },
};
</script>
