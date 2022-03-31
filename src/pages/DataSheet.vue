<template>
  <div class="content">
    <div class="md-layout">
      <div style="margin: 40px auto">
        <table>
    <thead>
        <tr>
            <th>Row ID</th>
            <th>Sản phẩm</th>
            <th>Nhóm hàng</th>
            <th>Mã giảm</th>
            <th>Phân loại</th>
            <th>Kho</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Giá tiền</th>
            <th>Khuyến mãi</th>
        </tr>
    </thead>
    <tbody v-for="product in products" :key="product.id">
        <tr>
            <td>{{product.id}}</td>
            <td>{{product.product}}</td>
            <td>{{product.category}}</td>
            <td>{{product.discount_code}}</td>
            <td>{{product.classify}}</td>
            <td>{{product.total_product}}</td>
            <td>{{product.quantity}}</td>
            <td>{{product.price}}</td>
            <td>{{product.total_prince}}</td>
            <td>{{product.promotion}}</td>
        </tr>
    </tbody>
        </table>
      
        <div class="button-group">
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
      products: [],
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
        this.products = response.data;
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
<style scoped>
table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 10px;
}
tbody {
    background: #FFFFFF
}
tr {
    height: 40px;
    margin-bottom: 10px;
}
th {
    font-family: Montserrat-Medium;
    font-size: 16px;
    color: #fff;
    line-height: 1.4;
    text-transform: uppercase;
    background-color: orange;
}
td {
    font-family: Montserrat-Regular;
    font-size: 16px;
    color: #808080;
    line-height: 1.4;
    text-align: center;
}
.button-group {
    float: right;
}
</style>

