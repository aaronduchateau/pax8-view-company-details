<template>
  <div>
    <h1>This is the home page {{ companyList }}</h1>
    <ul id="example-1">
      <table>
        <tr v-for="item in companyList" :key="item.id">
          <td>{{ item.id }} sdlkjsdlsjdl</td>
          <td>{{ item.name }} sdlkjsdlsjdl</td>
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
    </ul>
  </div>
</template>

<script>
import services from "../services/CompanyService";

export default {
  name: "home",
  data() {
    services.getAll().then((response) => {
      return {
        companyList: null,
      };
    });
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
      console.log(targetId); // returns 'foo'
      this.$router.push(tRoute + "/" + targetId);
    },
  },
};
</script>
