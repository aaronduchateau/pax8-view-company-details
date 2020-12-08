<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <button class="button" v-on:click="onBack()">Go Back</button>
        <SimpleCard widthStyle="405px">
          <form id="demo">
            <!-- text -->
            <h1 class="title">View Company</h1>
            <hr/>
            <p class="label">Name</p>
            <p class="text">
              {{ name }}
            </p>

            <hr/>
            <p class="label">Domain</p>
            <p class="text">
              {{ domain }}
            </p>

            <hr/>
            <p class="label">Employees</p>
            <p class="text">
              {{ numberOfEmployees }}
            </p>
            <Inc :num="numberOfEmployees" @bump="handleBump" />

            <hr/>
            <p class="label">Subscriptions Per Employee</p>
            <p class="text">
              {{ subscriptionsPerEmployee }}
            </p>

            <hr/>
            <p class="label">Company Subscriptions</p>
            <p class="text">
              {{ companySubscriptions }}
            </p>


          </form>
        </SimpleCard>
      </div>
    </div>
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
      numberOfEmployees: 0,
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
    handleBump(newNum) {
      this.localBump(newNum);
    },
  },
};
</script>
