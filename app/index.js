 
<!DOCTYPE html>
<html lang="en">
  <head>
     
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
     <script>
        function p(){   
          return new Promise(res=>{
            res({name:''})
          })
        }
        function p1(){
          return new Promise(res=>{
            res({name1:''})
          })
        }
        function p2(){
          return new Promise(res=>{
            res({name2:''})
          })
        }

        function pro(){
          let result = Promise.all([p(),p1(),p2()])

          console.log(result[0])
          // result.forEach(item=>{
          //   console.log(item)
          // })
        }

        pro()
     </script>
  </body>
</html>
