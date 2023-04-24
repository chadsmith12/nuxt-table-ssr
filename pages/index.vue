<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Person</th>
          <th>Expiration</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people" :key="person.id">
          <td>{{ person.firstName }}</td>
          <td>{{ displayDate(person.startTime) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const { data: people } = await useFetch('/api/people');
const displayDate = (dateString: string): string => {
  const date = new Date(dateString);
  const formatter = Intl.DateTimeFormat(undefined, { timeStyle: 'short' });

  return formatter.format(date);
};
</script>
