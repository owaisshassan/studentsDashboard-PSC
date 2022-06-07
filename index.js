function Student(n,c,u,b,i){
    this.name=n
    this.course=c;
    this.unit=u;
    this.batch=b;
    this.image=i

}


function storedata(){
    event.preventDefault()
    let form=document.getElementById("studentdata")
    let name=form.name.value
    let course=form.course.value
    let unit=form.unit.value
    let batch=form.batch.value
    let image=form.image.value
   let s1=new Student(name,course,unit,batch,image) 
   console.log(s1)

   let data=JSON.parse(localStorage.getItem("students"))||[]
   data.push(s1)
   localStorage.setItem("students",JSON.stringify(data))

}

 function calculate(){
    let data=JSON.parse(localStorage.getItem("students"))||[]
    let obj={}
    for(let i=0; i<data.length; i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch]=0
        }

    }
    for(let i=0; i<data.length; i++){

            obj[data[i].batch]++


    }

    localStorage.setItem("batchsize",JSON.stringify(obj)) 
    displaybatch(obj)
 }
 calculate()
 function displaybatch(obj){
     let nav=document.getElementById("navbar")
     nav.innerText=""
     for(k in obj){
         let div=document.createElement("div")
         div.innerText=k+"-"+obj[k]
         nav.append(div)
     }
 }