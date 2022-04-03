<template>
  <h1>sdghusdh</h1>
</template>

<script>
const buf = require("buf")
const fs = require('fs')
import { Buffer } from 'buffer';
export default {
    mounted() {
        // fetch('../assets/uvs1.txt')
        // .then(response => response.text())
        // .then(txt => console.log(txt))
        // var strOrBuf = '½üû¼üù»üö¹üþ½ü';
        // var aString = buf.unbuf(strOrBuf);
        // console.log(strOrBuf)
        let reader = new FileReader();
        reader.readAsText('../assets/uvs1.buf');
        const data = fs.promises.readFile('../assets/uvs1.buf')
        var a = Buffer.from(data)
        console.log(a.toString())
    }
}
</script>

<style>

</style>