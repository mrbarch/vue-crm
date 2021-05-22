<template>
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <select>
          <option
          >name cat
          </option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="income"
          />
          <span>Доход</span>
        </label>
      </p>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
          />
          <span>Расход</span>
        </label>
      </p>

      <div class="input-field">
        <input
          id="amount"
          type="number"
        >
        <label for="amount">Сумма</label>
        <span class="helper-text invalid">amount пароль</span>
      </div>

      <div class="input-field">
        <input
          id="description"
          type="text"
        >
        <label for="description">Описание</label>
        <span
          class="helper-text invalid">description пароль</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "record",
  data: () => ({
    loading: true,
    select: null,
    categories: []
  }),
  async mounted() {
    this.categories = await this.$store.dispatch('fetch')
    this.loading = false

    this.select = window.M.FormSelect.init(this.$refs.select);
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy
    }
  }
}
</script>

