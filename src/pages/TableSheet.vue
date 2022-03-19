<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <div>
          <md-card>
            <md-card-header data-background-color="green">
              <h4 class="title">Giỏ hàng của bạn</h4>
            </md-card-header>
            <md-card-content>
              <md-table v-model="users">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Row Id">{{ item.id }}</md-table-cell>
                  <md-table-cell md-label="Sản phẩm">{{ item.product }}</md-table-cell>
                  <md-table-cell md-label="Nhóm hàng">{{ item.category }}</md-table-cell>
                  <md-table-cell md-label="Mã giảm">{{ item.discount_code }}</md-table-cell>
                  <md-table-cell md-label="Phân loại">{{ item.classify }}</md-table-cell>
                  <md-table-cell md-label="Kho">{{ item.total_product }}</md-table-cell>
                  <md-table-cell md-label="Số lượng">{{ item.quantity }}</md-table-cell>
                  <md-table-cell md-label="Đơn giá">{{ item.price }}</md-table-cell>
                  <md-table-cell md-label="Giá tiền">{{ item.total_prince }}</md-table-cell>
                  <md-table-cell md-label="Khuyến mãi">{{ item.promotion }}</md-table-cell>
                </md-table-row>
              </md-table>
            </md-card-content>
          </md-card>
        </div>
        <div>
          <md-button class="md-danger">Hủy</md-button>
          <md-button @click="addProduct()" class="md-primary">Thêm sản phẩm</md-button>
          <md-button class="md-success">Thanh Toán</md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: "sheet-table",
  data() {
    return {
      selected: [],
      users: [],
      newdata: [
        {
          "id": "254",
          "product": "Oxy",
          "category": "Xtreme Admin",
          "discount_code": "024680",
          "classify": "B",
          "total_product": 100,
          "quantity": 2,
          "price": 50000,
          "total_prince": 100000,
          "promotion": "Pending"
        }
      ]
    };
  },
  mounted() {
    axios.get('https://sheetdb.io/api/v1/fmnmuqs7ss0wp')
      .then(response => {
        console.log(response);
        this.users = response.data;
      })
      .error(error => {
        console.log(error);
      })
  },

  methods: {
    addProduct() {
      axios.post('https://sheetdb.io/api/v1/fmnmuqs7ss0wp', this.newdata)
      .then(response => {
        console.log(response);
        location.reload();
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
};
</script>

