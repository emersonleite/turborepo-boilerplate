<template>
  <v-col cols="12" md="6"> <DuckButton>Olá mundo</DuckButton></v-col>
  <button class="button-red">Teste de cor</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const result = ref(0);

const rules = useFormRules();

const { sum } = useOperations();

//const useSplit = useSplitString;

console.log(sum(1, 2));

console.log(rules.ruleRequired(""));

//console.log(useSplit("Emerson Batista Leite"));
</script>
