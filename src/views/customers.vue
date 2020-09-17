<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row >
          <v-col cols="6">
        <v-text-field 
        v-model="name" 
        :counter="20" 
        :rules="nameRules" 
        label="ชื่อ" 
        required
        ></v-text-field>
        </v-col>
        
      <v-col cols="6">
        <v-text-field 
        v-model="lastname" 
        :counter="20" 
        :rules="lastnameRules" 
        label="นามสกุล" 
        required
        ></v-text-field>
      </v-col>   
      </v-row>

    <v-row>
    <v-col cols="6">
       <v-text-field 
        v-model="email"
        :counter="50"  
        :rules="emailRules" 
        label="อีเมล" 
        required
       ></v-text-field>
    </v-col>
    
    <v-col cols="6">
       <v-text-field 
        v-model="tel" 
        :counter="50"
        :rules="telRules" 
        label="เบอร์โทร" 
        required
       ></v-text-field>
    </v-col>
    </v-row>

    <v-row>
       <v-col cols=2>
        <v-text-field 
        v-model="a_number" 
        :counter="50"
        :rules="addressRules" 
        label="เลขที่อยู่" 
        required
       ></v-text-field>
       </v-col>

       <v-col cols=2>
       <v-text-field 
        v-model="a_group" 
        :counter="20"
        :rules="addressRules" 
        label="หมู่ที่" 
        required
       ></v-text-field>
       </v-col>


        <v-col cols=4>
        <v-text-field 
        v-model="a_road" 
        :counter="20"
        :rules="addressRules" 
        label="ถนน" 
        required
       ></v-text-field>
       </v-col>

        <v-col cols=4>
        <v-text-field 
        v-model="a_lane" 
        :counter="50"
        :rules="addressRules" 
        label="ซอย/ตรอก" 
        required
       ></v-text-field>
       </v-col>
       
   </v-row>

   <v-row>
       <v-col cols=4>
        <v-text-field 
        v-model="a_subdis" 
        :counter="50"
        :rules="addressRules" 
        label="ตำบล" 
        required
       ></v-text-field>
       </v-col>
        <v-col cols=4>
        <v-text-field 
        v-model="a_dis" 
        :counter="20"
        :rules="addressRules" 
        label="อำเภอ" 
        required
       ></v-text-field>
       </v-col>
        <v-col cols=4>
        <v-text-field 
        v-model="a_proovine" 
        :counter="50"
        :rules="addressRules" 
        label="จังหวัด" 
        required
       ></v-text-field>
       </v-col>
       
   </v-row>

      <v-select
        v-model="select"
        :items="sex"
        :rules="[v => !!v || 'กรุณาเลือกเพศ']"
        label="เพศ"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="checkboxRules"
        label="ยอมรับเงื่อนไข"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">สมัครสมาชิกครับ</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">เคลียร์</v-btn>

      <!-- <v-btn color="warning" @click="resetValidation">เคลียร์การตรวจสอบ</v-btn> -->
    </v-form>

    <v-row>
        <v-col cols="12">
            <v-card>
    <v-card-title>
     ข้อมูลลูกค้า
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
        </v-card>
     </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    lastname :" ",
    nameRules: [
      v => !!v || "กรุณากรอกชื่อ",
      v => (v && v.length <= 20) || "ชื่อต้องมีขนาดไม่เกิน20ตัวอักษร",
    ],
    lastnameRules: [
      v => !!v || "กรุณากรอกนามสกุล",
      v => (v && v.length <= 20) || "นามสกุลต้องมีขนาดไม่เกิน20ตัวอักษร",
    ],
    email: "",
    emailRules: [
      v => !!v || "กรุณากรอกอีเมล",
      v => /.+@.+\..+/.test(v) || "รูแปบบอีเมลไม่ถูกต้อง",
      v => (v && v.length <= 50) || "อีเมลต้องมีขนาดไม่เกิน50ตัวอักษร",
    ],
    tel: "",
    telRules: [
      v => !!v || "กรุณากรอกเบอร์โทรศัพท์",
      v => (v && v.length <= 10) || "เบอร์โทรศัพท์ต้องมีขนาดไม่เกิน10ตัวอักษร",
    ],
    
    checkboxRules:[v => !!v || "คุณต้องกดยอมรับเงื่อนไขก่อนสมัครสมาชิก"],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    sex: ["ชาย","หญิง"],
    
    checkbox: false,
    a_number:"",
    a_group:"",
    a_road:"",
    a_lane:"",
    a_subdis:"",
    a_dis:"",
    a_proovine:"",
    addressRules:[
      v => !!v || "กรุณากรอกข้อมูล",
      v => (v && v.length <= 20) || "ข้อมูลต้องมีขนาดไม่เกิน20ตัวอักษร",
    ],
    search: '',
    headers: [
          { text: "ชื่อ-นามสกุล",value: 'fulname'},
          { text: 'เบอร์โทร', value: 'tel'},
          { text: 'อีเมล', value: 'email'},
          { text: 'เพศ (g)', value: 'sex'},
          { text: 'เลขที่อยู่', value: 'address'},
    ],
    desserts: []
 
  }),
  
  methods: {
    validate() {
    if (this.$refs.form.validate()){
    //   console.log(this.name)
    //   console.log(this.lastname)
    //   console.log(this.Email)
    //   console.log(this.tel)
    //   console.log(this.select)
    //   console.log(this.a_number)
    //   console.log(this.a_group)
    //   console.log(this.a_road)
    //   console.log(this.a_lane)
    //   console.log(this.a_subdis)
    //   console.log(this.a_dis)
    //   console.log(this.a_proovine)
    this.desserts.push(
        {
         fulname: `${this.neme} ${this.lastname}`,
         tel :`${this.tel}`,
         email: `${this.email}`,
         sex: `${this.sex}`,
         address: `${this.a_number} ม.${this.a_group} ถ.${this.a_road} 
         ซ/ต.${this.a_lane} ต.${this.select} อ.${this.a_dis} จ.${this.a_proovine}`,
         }
        )
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style>
</style>