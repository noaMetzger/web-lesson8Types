function resultPlus()
{
  let x=document.getElementById("num1").value 
  let y=document.getElementById("num2").value
    alert(x+"+"+y+"= "+((+x)+(+y)) )
}
function resultMul()
{
    let x=document.getElementById("num1").value
    let y=document.getElementById("num2").value
      alert(x+"*"+y+"= "+((+x)*(+y)))
}
function resultPow()
{
    let x=document.getElementById("num1").value
    let y=document.getElementById("num2").value
      alert(x+"^"+y+"= "+((+x)**(+y)))
}
function save()
{
    let name=document.getElementById("name").value||"guest"
    let y=document.getElementById("pass").value||1234
    alert("hello "+name+" pass "+y)

}
function resultBin()
{
    let x=parseInt(document.getElementById("num1").value,2)
    let y=parseInt(document.getElementById("num2").value,2)
    let sum=x+y
    console.log(sum);
    alert(sum.toString(2))

}