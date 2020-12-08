<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <button class="button" v-on:click="onBack()">Go Back</button>
        <SimpleCard widthStyle="405px">
          <form id="demo">
            <h1 class="title">Edit Company</h1>
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input type="text" class="input" v-model="name" />
              </div>
            </div>
            <div class="field">
              <label class="label">Domain</label>
              <div class="control">
                <input type="text" class="input" v-model="domain" />
              </div>
            </div>
            <div class="field">
              <label class="label">Number of Employees</label>
              <div class="control">
                <input type="text" class="input" v-model="numberOfEmployees" />
              </div>
            </div>
            <div class="field">
              <label class="label">Subscriptions Per Employee</label>
              <div class="control">
                <input type="text" class="input" v-model="subscriptionsPerEmployee" />
              </div>
            </div>
            <button class="button" v-on:click.stop="onSubmitChanges()">
              Submit Changes
            </button>
          </form>
        </SimpleCard>
      </div>
    </div>
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
