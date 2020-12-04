<template>
  <div class="mt-5">
    <h1>Formulario</h1>
    <form action="">
      <b-row>
        <b-col md="3">
          <b-form-input type="text" v-model="texto" :state="comprobar">
          </b-form-input>
          <small>Minimo 3 caracteres</small>
        </b-col>
        <b-col md="3">
          <b-form-select v-model="select" :options="animales"></b-form-select>
        </b-col>
        <b-col md="3">
            <b-form-radio-group v-model="radio" :options="opcionesRadio">
                
            </b-form-radio-group>
        </b-col>
        <b-col md="3">
            <b-form-checkbox-group id="checkbox-group-2" v-model="check" :options="opcionesRadio" name="flavour-2">
                <p>Multiple{{check}} </p>
      </b-form-checkbox-group>
        </b-col>
      </b-row>

      <p>{{ texto }}</p>
    </form>
  </div>
</template>
<script>
export default {
  name: "forms",
  data() {
    return {
      texto: "",
      select: null,
      radio:null,
      check:null,
      animales: [
        {value: null,text: "Selecciona un animal" },
        {  value: "perro", text: "Perro"},
         { value: "gato", text: "Gato"},
         { value: "pato", text: "Pato"},
        ,
      ],
     opcionesRadio: [       
        {  value: "perro", text: "Perro"},
         { value: "gato", text: "Gato"},
         { value: "pato", text: "Pato"},
        ,
      ],
    };
  },
  computed: {
    comprobar() {
      return this.texto.length > 2 ? true : false;
    },
  },
};
</script>