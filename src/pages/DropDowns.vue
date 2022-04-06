<template>
  <div class="menu-container">
    <div class="menu">
      <div class="dropdown">
        <table class="dropdown_menu dropdown_menu-4">
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
          <tbody v-for="(product, index) in products" :key="product.id" :class="'dropdown_item-' + (index+1)" v-bind:style="{ display }">
              <tr >
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
       
      </div>
       <div class="button-group">
          <md-button class="md-danger">Hủy</md-button>
          <md-button @click="addProduct()" class="md-primary">Thêm sản phẩm</md-button>
          <md-button class="md-success">Thanh Toán</md-button>
        </div>
    </div>
     
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: "dropdowns",
  data() {
    return {
      products: [],
      display:'none',
      newdata: [
        {
          "id": "254",
          "product": "Oxy12345",
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
        this.display = 'table-header-group';
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Sen&display=swap");

body {
 height: 100%
}
table {
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

.menu-container {
  display: flex;
  justify-content: center;
}

.menu-container:nth-child(3) {
  margin-top: 200px;
}

.menu {
  justify-content: center;
  display: inline-table;
  position: absolute;
  top: 10%;

  .dropdown {
    justify-content: center;
    align-items: center;
    color: white;
    position: relative;
    font-size: 18px;
    perspective: 1000px;
    z-index: 100;
  }
  .dropdown_menu {
    top: 100%;
    left: 0;
    perspective: 1000px;
    z-index: -1;
    margin: 0px;
    padding: 0px;
    tbody {
      display: none;
      width: 100%;
      margin: 0px;
      font-size: 16px;
      opacity: 0;
    }
  }

  // Menu Items Animated invidually
  .dropdown_menu-4 {
    @for $num from 1 through 100 {
      .dropdown_item-#{$num} {
        transform-origin: top center;
        animation: scaleZ 300ms ($num * 100ms) ease-in-out forwards;
      }
    }
  }

  @keyframes scaleZ {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    80% {
      transform: scale(1.07);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>