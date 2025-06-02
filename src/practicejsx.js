function TaskJsx() {
  function callFun() {
    alert("Function called");
  }
  const name="mahesh pawale";
  let x=20;
  let y=22;

   const path="https://www.bing.com/images/search?view=detailV2&ccid=2jvORRfi&id=B137D14DBA7AF47D2CDF18A446B1C12C42F06DB6&thid=OIP.2jvORRfiFe4JaApQi1UxEgHaE7&mediaurl=https%3A%2F%2Fwww.pawsandstay.co.uk%2Fupload%2F2024%2F2%2F5%2FDog_training_tips_by_Dogtor_Adem_4181a279da.jpeg&exph=1999&expw=3000&q=Dog+Training&simid=608047076772828346&FORM=IRPRST&ck=8A7947DA93FA0792E740A663F0920EFC&selectedIndex=1&itb=0&cw=683&ch=658&ajaxhist=0&ajaxserp=0";
  function fruits()
  {
    return "apple, banana, orange ,kiwi , greps";
  }
  
   function sum(a,b){
        return a+b;
   }

   function ifelsecondition(a,b, op)
   {
    if(op=="+"){
        return a+b;
    }
    else if(op=="-")
    {
        return  a-b;
    }
    else{
        return a*b;
    }
   }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{x+y}</h1>
      <h1>{x-y},{x*y}</h1>
      <h1>{fruits}</h1>
      <h1>{sum(10,10)}</h1>
      <h1>{ifelsecondition(11,22, "-")}</h1>
      <br></br>
      <button onClick={callFun}>click me</button>
      <h1>{path}</h1>
    </div>
  );
}

export default TaskJsx;