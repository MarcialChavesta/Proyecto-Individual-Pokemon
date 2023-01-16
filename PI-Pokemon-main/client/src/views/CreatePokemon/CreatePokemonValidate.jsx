export const validations = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Campo obligatorio";
  } else if (!/^[a-zA-Z ]+$/.test(input.name)) {
    errors.name = "Sólo letras";
  } else if (input.name.length <= 2 || input.name.length >= 20) {
    errors.name = "El nombre debe tener entre 2 a 10 letras";
  } else if (!input.hp) {
    errors.hp = "Campo obligatorio";
  } else if (input.hp > 150) {
    errors.hp = "No debe ser mayor a 150";
  } else if (input.hp <= 0) {
    errors.hp = "Debe ser mayor a 0";
  } else if (!input.attack) {
    errors.attack = "Campo obligatorio";
  } else if (input.attack > 150) {
    errors.attack = "No debe ser mayor a 150";
  } else if (input.attack <= 0) {
    errors.attack = "Debe ser mayor a 0";
  } else if (!input.defense) {
    errors.defense = "Campo obligatorio";
  } else if (input.defense > 150) {
    errors.defense = "No debe ser mayor a 150";
  } else if (input.defense <= 0) {
    errors.defense = "Debe ser mayor a 0";
  } else if (!input.speed) {
    errors.speed = "Campo obligatorio";
  } else if (input.speed > 150) {
    errors.speed = "No debe ser mayor a 150";
  } else if (input.speed <= 0) {
    errors.speed = "Debe ser mayor a 0";
  } else if (!input.height) {
    errors.height = "Campo obligatorio";
  } else if (input.height > 3) {
    errors.height = "No debe ser mayor a 3 metros";
  } else if (input.height <= 0) {
    errors.height = "Debe ser mayor a 0";
  } else if (!input.weight) {
    errors.weight = "Campo obligatorio";
  } else if (input.weight > 250) {
    errors.weight = "No debe ser mayor a 250 kg";
  } else if (input.weight <= 0) {
    errors.weight = "Debe ser mayor a 0";
  } else if (!/(https?:\/\/.*\.(?:png|jpg|bmp|svg|gif|tiff))/.test(input.img)) {
    errors.img = "Formato no válido";
  }

  return errors;
};
