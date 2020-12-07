<template>
  <div>
    <button v-on:click="onBack()">Go Back</button>
    <br />
    <br />
    <br />
    <form id="demo">
      <!-- text -->
      <p>
        name
        <input type="text" v-model="name" />
      </p>
      <p>
        domain
        <input type="text" v-model="domain" />
      </p>
      <p>
        numberOfEmployees
        <input type="text" v-model="numberOfEmployees" />
      </p>
      <p>
        subscriptionsPerEmployee
        <input type="text" v-model="subscriptionsPerEmployee" />
      </p>
      <button v-on:click.stop="onSubmitChanges()">Submit Changes</button>
    </form>
  </div>
</template>

<script>
import services from "../services/CompanyService";

export default {
  name: "edit",
  data() {
    return {
      name: null,
      domain: null,
      numberOfEmployees: null,
      subscriptionsPerEmployee: null,
    };
  },
  created() {
    this.getCompany();
  },
  methods: {
    getCompany() {
      console.log("twf");
      console.log(this.$route.params.id);
      const companyId = this.$route.params.id;
      services.getById(companyId).then((response) => {
        console.log(response);
        this.name = response.name;
        this.domain = response.domain;
        this.numberOfEmployees = response.numberOfEmployees;
        this.subscriptionsPerEmployee = response.subscriptionsPerEmployee;
      });
    },
    onBack: function () {
      this.$router.push("/");
    },
    onSubmitChanges: function () {
      const newCompDetails = `here are the changes you requested: ${this.name}, ${this.domain}, ${this.numberOfEmployees}, ${this.subscriptionsPerEmployee},`;
      alert(newCompDetails);
    },
  },
};
</script>
