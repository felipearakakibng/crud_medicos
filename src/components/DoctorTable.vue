<script setup>
import DoctorService from '@/Network/Services/DoctorService'
import { nextTick, ref, reactive, onMounted } from 'vue'

const emit = defineEmits(['response'])
const dialog = ref(false)
const dialogDelete = ref(false)
let deleteObjectInfo = ref()
const editedIndex = ref(-1)
const model = defineModel()
let headers = reactive(model.value.headers)
let editedItem = reactive(model.value.editedItem)
let defaultItem = reactive(model.value.defaultItem)
let collection = reactive(model.value.collection)
let formTitle = ref()
const doctorService = new DoctorService()
let validateMessage

function setTitle(create) {
  if (create) {
    formTitle.value = 'Adicionar médico'
  } else {
    formTitle.value = 'Visualizar médico'
  }
}
async function getValidateMessage(item) {
  return await doctorService.validate(item)
}
function initialize() {}

let showTitle
function editItem(item) {
  setTitle()
  getValidateMessage(item).then((data) => {
    validateMessage = data.data
    showTitle = true
    dialog.value = true
  })
  editedIndex.value = collection.indexOf(item)
  editedItem = Object.assign({}, item)
}
function deleteItem(item) {
  editedIndex.value = collection.indexOf(item)
  editedItem = Object.assign({}, item)
  dialogDelete.value = true
  deleteObjectInfo.value = item.nome + ` (CRM: ${item.crm})`
}
function deleteItemConfirm() {
  collection.splice(editedIndex.value, 1)
  emit('response')
  closeDelete()
}
function close() {
  dialog.value = false
  nextTick(() => {
    editedItem = Object.assign({}, defaultItem)
    editedIndex.value = -1
  })
}
function closeDelete() {
  dialogDelete.value = false
  nextTick(() => {
    editedItem = Object.assign({}, defaultItem)
    editedIndex.value = -1
  })
}
function save() {
  if (editedIndex.value > -1) {
    // Edit
    Object.assign(collection[editedIndex.value], editedItem)
  } else {
    // Create
    collection.push(editedItem)
    doctorService.create(editedItem)
  }
  emit('response')
  close()
}

onMounted(() => {
  initialize()
})
</script>

<template>
  <slot>
    <v-data-table
      :headers="headers"
      :items="collection"
      :sort-by="[{ key: 'doctorName', order: 'asc' }]"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title style="flex: auto">Gestor de médicos</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn class="mb-2" color="primary" dark v-bind="props" @click="setTitle(true)">
                Adicionar
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="5" sm="6">
                      <v-text-field v-model="editedItem.doctorName" label="Nome"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="5" sm="6">
                      <v-text-field v-model="editedItem.crm" label="CRM"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="5" sm="6">
                      <v-text-field v-model="editedItem.crmUf" label="Estado"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="5" sm="6">
                      <v-text-field v-model="editedItem.status" label="Situação"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="5" sm="6">
                      <v-text-field v-model="editedItem.type" label="Tipo"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="5" sm="6">
                      <v-text-field
                        v-model="editedItem.specialties"
                        label="Especialidades"
                      ></v-text-field>
                    </v-col>
                    <span v-if="showTitle">{{ validateMessage }}</span>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close"> Cancelar </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="save"> Salvar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" width="fit-content" max-width="1200px">
            <v-card>
              <v-card-title class="text-h5"
                >Confirmar exclusão de {{ deleteObjectInfo }}?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancelar</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">Sim</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon class="me-2" size="small" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Resetar </v-btn>
      </template>
    </v-data-table>
  </slot>
</template>
