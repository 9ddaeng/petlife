<template>
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  ...
  </div>

</template>
<script>
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

export default ({
  name: "message",
})
</script>
