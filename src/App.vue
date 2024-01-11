<template>
  <div class="topnav" id="myTopnav">
    <span class="letter">Welcome to your tasks </span>
  </div>
  <pro-crud
    v-model="form"
    :columns="columns"
    :menu="{ label: 'Actions' }"
    :data="data"
    :detail="detail"
    :before-open="beforeOpen"
    label-width="100px"
    @submit="submit"
    @delete="deleteRow"
  />
</template>
<script>
import { defineComponent, ref } from "vue";
import { ElMessage } from "element-plus";

export default defineComponent({
  setup() {
    const form = ref({});
    const detail = ref({});
    const columns = [
      {
        label: "Description",
        prop: "description",
        component: "el-input",
        add: true,
        detail: true,
      },
      {
        label: "Days a week",
        prop: "days",
        component: "el-input",
        add: true,
        edit: true,
        detail: true,
      },
    ];

    const data = ref([
      {
        description: "Study",
        days: "From Monday into Saturday.",
      },
      {
        description: "Work",
        days: "From Monday into Friday.",
      },
      {
        description: "Meditation",
        days: "Every day.",
      },
      {
        description: "Gym",
        days: "3 days a week.",
      },
    ]);

    const beforeOpen = (done, type, row) => {
      if (type === "edit") {
        form.value = row || {};
      } else if (type === "detail") {
        detail.value = row || {};
      }
      done();
    };

    const submit = (close, done, type, isValid) => {
      ElMessage(`submit: ${type}, ${isValid}`);
      setTimeout(() => {
        isValid ? close() : done();
      }, 1000);
    };

    const deleteRow = (row) => {
      ElMessage("deleteRow");
      console.log("deleteRow", row);
    };

    return {
      form,
      detail,
      data,
      columns,
      beforeOpen,
      submit,
      deleteRow,
    };
  },
});
</script>

<style>
.topnav {
  background-color: black;
  overflow: hidden;
  width: 100%;
  height: 50px;
  margin-bottom: 50px;
}

/* Style the links inside the navigation bar */

.letter {
  color: yellow;
  float: center;
  display: block;
  text-align: center;
  padding: 14px 16px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-decoration: none;
  font-size: 25px;
}

button.el-button.el-button--primary {
  color: black;
  background-color: yellow !important;
  border: yellow;
  width: 80px;
  height: 30px;
  border-radius: 8px;
}
button.el-button.el-button--primary.el-button:hover {
  color: black;
  outline: 0 !important;
}

button.el-button--info.is-link {
  width: 80px;
  height: 30px;
  border-radius: 8px;
  color: black;
  background-color: green;
}
button.el-button.is-link:hover {
  color: black;
}
button.el-button--danger.is-link {
  width: 80px;
  height: 30px;
  border-radius: 8px;
  color: black;
  background-color: red;
}
button.el-button.el-button--primary.is-link {
  color: black;
}
</style>
