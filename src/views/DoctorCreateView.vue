
<div>
  <DoctorForm :label="action" v-model="doctor" @response="(obj) => checkAction(obj)" />
</div>
