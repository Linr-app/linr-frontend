<template>
  <div class="about">
    <div class="content">
      <section class="hero">
        <div class="hero-body">
          <button class="button is-large is-primary" v-on:click="entrar_na_fila">ENTRAR NA FILA</button><br/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Entrarnafila',
        methods: {
            entrar_na_fila: function(event) {
                alert(this.$CalculateSnowflake(0, 0));
                console.log(event)
            }
        }
    }
</script>
