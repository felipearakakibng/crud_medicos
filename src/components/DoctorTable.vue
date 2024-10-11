<script setup>
  import { nextTick, ref, watch, onMounted } from 'vue'
  
  const emit = defineEmits(['response'])
  const dialog = ref(false)
  const dialogDelete = ref(false)
  let deleteObjectInfo = ref()
  const model = defineModel()
  const headers = ref(model.value.headers)
  const editedIndex = ref(-1)
  const editedItem = ref(model.value.editedItem)
  const defaultItem = ref(model.value.defaultItem)
  const collection = ref(model.value.collection)
  let formTitle = ref()
  function setTitle(create) {
    if (create) {
      formTitle.value = 'Adicionar médico'
    } else {
      formTitle.value = 'Editar médico'
    }
  }
  function initialize () {
  }
  function editItem (item) {
    setTitle()
    editedIndex.value = collection.value.indexOf(item)
    editedItem.value = Object.assign({}, item)
    dialog.value = true
  }
  function deleteItem (item) {
    editedIndex.value = collection.value.indexOf(item)
    editedItem.value = Object.assign({}, item)
    dialogDelete.value = true
    deleteObjectInfo.value = item.nome + ` (CRM: ${item.crm})`
  }
  function deleteItemConfirm () {
    collection.value.splice(editedIndex.value, 1)
    emit('response')
    closeDelete()
  }
  function close () {
    dialog.value = false
    nextTick(() => {
      editedItem.value = Object.assign({}, defaultItem.value)
      editedIndex.value = -1
    })
  }
  function closeDelete () {
    dialogDelete.value = false
    nextTick(() => {
      editedItem.value = Object.assign({}, defaultItem.value)
      editedIndex.value = -1
    })
  }
  function save () {
    if (editedIndex.value > -1) {
      // Edit
      Object.assign(collection.value[editedIndex.value], editedItem.value)
    } else {
      // Create
      collection.value.push(editedItem.value)
    }
    emit('response')
    close()
  }
  watch(dialog, val => {
    val || close()
  })
  watch(dialogDelete, val => {
    val || closeDelete()
  })

  onMounted(() => {
    initialize()
  })
</script>

<template>
  <slot>
    <v-data-table
      :headers="headers"
      :items="collection"
      :sort-by="[{ key: 'nome', order: 'asc' }]"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title style="flex: auto;">Gestor de médicos</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                class="mb-2"
                color="primary"
                dark
                v-bind="props"
                @click="setTitle(true)"
              >
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
                    <v-col
                      cols="12"
                      md="5"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.nome"
                        label="Nome"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="5"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.crm"
                        label="CRM"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="5"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.estado"
                        label="Estado"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="5"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.situacao"
                        label="Situação"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="close"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="save"
                >
                  Salvar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
  
          <v-dialog v-model="dialogDelete" width="fit-content" max-width="1200px">
            <v-card>
              <v-card-title class="text-h5">Confirmar exclusão de {{ deleteObjectInfo }}?</v-card-title>
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
        <v-icon
          class="me-2"
          size="small"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          size="small"
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Resetar
        </v-btn>
      </template>
    </v-data-table>
  </slot>
</template>
