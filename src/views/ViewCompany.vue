<template>
  <div>
    <h1>View Company</h1>
    <button v-on:click="onBack()">Go Back</button>
    <br />
    <br />
    <br />
    <form id="demo">
      <!-- text -->
      <h1 class="title">Name</h1>
      <p>
        {{ name }}
      </p>
      <h1 class="title">domain</h1>
      <p>
        {{ domain }}
      </p>
      <h1 class="title">Employees</h1>
      <p>
        {{ numberOfEmployees }}
        <Inc v-bind:num="numberOfEmployees" @bump="handleBump" />
      </p>
      <h1 class="title">Subscriptions Per Employee</h1>
      <p>
        {{ subscriptionsPerEmployee }}
      </p>
      <h1 class="title">Company Subscriptions</h1>
      <p>
        {{ companySubscriptions }}
      </p>
    </form>
  </div>
</template>

<script>
import services from "../services/CompanyService";
import Inc from "../components/Inc";

export default {
  name: "edit",
  data() {
    return {
      name: null,
      domain: null,
      numberOfEmployees: null,
      subscriptionsPerEmployee: null,
      companySubscriptions: null,
    };
  },
  created() {
    this.getCompany();
  },
  methods: {
    localBump(newNum) {
      this.numberOfEmployees = newNum;
    },
    getCompany() {
      const companyId = this.$route.params.id;
      services.getById(companyId).then((response) => {
        console.log(response);
        this.name = response.name;
        this.domain = response.domain;
        this.numberOfEmployees = response.numberOfEmployees;
        this.subscriptionsPerEmployee = response.subscriptionsPerEmployee;
        this.companySubscriptions =
          response.numberOfEmployees * response.subscriptionsPerEmployee;
      });
    },
    onBack: function () {
      this.$router.push("/");
    },
    onSubmitChanges: function () {
      const newCompDetails = `here are the changes you requested: ${this.name}, ${this.domain}, ${this.numberOfEmployees}, ${this.subscriptionsPerEmployee},`;
      alert(newCompDetails);
    },
    handleBump(newNum) {
      this.localBump(newNum);
    },
  },
};
</script>
