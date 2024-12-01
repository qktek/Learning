// load bottom Print
function btnIreportPrint_onclick(){
  window.open(encodeURI("/zReportUtil/report/sreport.jsp?ReportType=D&DSName=NaNaCustDS&Params=formInstOID~~printerID&ParamValues="+formInstOID+"~~"+userId+"&ParamTypes=12~~12&ReportName=CUS02&FileName=CUS02PDF&SubDir=Sample", "600", "800", "titlebar,scrollbars,status,resizable"));
}
///

document.write('<script type="text/javascript" src="../../dwrDefault/interface/ajax_DatabaseAccessor.js"></script>');
document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');
function formCreate(){

   return true;
}

//get data insert in grid
function formOpen(){
    var bodyGrid = document.getElementById("Griddsc");
   if(bodyGrid !=''){
   	var bodyData = eval(bodyGrid.value);
	if(bodyData != null  &&  bodyData != '' && bodyData != "undefined" ){
   		GriddscObj.reload(bodyData);
	}
   }
  
  
   var bodyGrid = document.getElementById("gdBody1");
   if(bodyGrid !=''){
   	var bodyData = eval(bodyGrid.value);
	if(bodyData != null  &&  bodyData != '' && bodyData != "undefined" ){
   		gdBody1Obj.reload(bodyData);
	}
   }
   Gridaddcomma();
  GetPURXCDetail();
   return true;
}

function formSave(){
   return true;
}

function formClose(){
   return true;
}

/*
Find PURMI05
*/

function gdBody1_rowClick(pRow){
    var PURI05CompanyId=document.getElementById("CompanyId").value;
    var sqlId = "FINDPURMI05"; 
/*
    if(PURI05CompanyId=='LWTEST'){
      sqlId = "FINDTESTLIWENPURMI05";
    }
   else if(PURI05CompanyId=='GPTEST'){
      sqlId = "FINDGPTESTPURMI05";
  }
  else if(PURI05CompanyId=='GP'){
      sqlId = "FINDGPPURMI05";
  }
  else if(PURI05CompanyId=='LW'){
      sqlId = "FINDLWTESTPURMI05";
  }
  else if(PURI05CompanyId=='MP'){
      sqlId = "FINDMPPURMI05";
  }
   else if(PURI05CompanyId=='JP'){
      sqlId = "FINDJPPURMI05";
  }
  else if(PURI05CompanyId=='JPTEST'){
      sqlId = "FINDJPTESTPURMI05";
  }
*/
	var PURI05FormType =pRow.TD026;
	var PURI05FormTypecode =pRow.TD027;  
       // alert(pRow.TD026);
       // alert(pRow.TD027);
		 var params = [];
         params.push(PURI05CompanyId);
		 params.push(PURI05FormType);
		 params.push(PURI05FormTypecode);
  
		 var types = [12,12,12]; 
		 DWREngine.setAsync(false);
		 ajax_DatabaseAccessor.query(sqlId, params, types, loadQuery1);  
		 DWREngine.setAsync(true);
		 var hdnFormDefId ="PURMI05";
		 var hdnCurrentUserId = userId;
		var hdnPOProcessInstOID=document.getElementById("PURMI05ProcessInstOID").value;
        if(hdnPOProcessInstOID!=""){	 
          window.open(encodeURI("/NaNaWeb/GP/WMS/TraceProcess/TraceProcessForSearchForm?hdnMethod=searchFormDetail&hdnFormDefId="+hdnFormDefId+"&hdnProcessInstOID="+hdnPOProcessInstOID+"&hdnCurrentUserId="+hdnCurrentUserId));
         
          
 // return true;
	 }
  
	 else{
		 alert("Do not find out any PURMI05 Form with this information in BPM system!");
	 }
	
	}


function loadQuery1(data){  
	 //alert(data.recordValues);// Du lieu tra ve la mang 2 chieu co ten la recordValues
    if(data.recordValues.length>0){
	document.getElementById("PURMI05ProcessInstOID").value=data.recordValues[0][0];
    }
  else{
    document.getElementById("PURMI05ProcessInstOID").value="";
  }
}



function Gridaddcomma(){
 var tGrd=gdBody1Obj.getData();//grbang LA MA SO GRID
 for(i=0;i<tGrd.length;i++){
       //tGrd[i].TD008=setThousandths(tGrd[i].TD008, true);
       //tGrd[i].TD030=setThousandths(tGrd[i].TD030, true);
	  // tGrd[i].TD058=setThousandths(tGrd[i].TD058, true);
	   tGrd[i].TD010=setThousandths(tGrd[i].TD010, true);
	   tGrd[i].TD011=setThousandths(tGrd[i].TD011, true);
	   
}
  gdBody1Obj.reload(tGrd);
}

// HAM THEM DAU PHAN CACH PHAN NGHIN
function setThousandths(pValue, pTrue){
 if(pValue == null){return "";}
 var tValue = pValue.toString().replace(/,/g, '');
 var tResult = '';
 if (tValue.length > 0) { 
  if (pTrue) { //顯示千分位
   re = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;//千分號
   tValue = eval(tValue).toString();
   tResult = tValue.replace(re, "$1,"); //

   tIndexNum = tResult.indexOf(".");
   var tNum_1 = "";
   var tNum_2 = "";
   if(tIndexNum != -1){
    var tNum_1 = tResult.substring(0,tIndexNum);
    var tNum_2 = tResult.substring(tIndexNum);
    tNum_2 = tNum_2.replace(/,/g,"");
    tResult = tNum_1 + tNum_2;
   }
    
  }
  else {//不顯示千分位
   tValue = tValue.replace(/,/g, '');
   tResult = eval(tValue).toString();
  }
 }
//  alert(tResult);
  
 return tResult;
}



// START 1
function GetPURMI09OID() {
       var tSqlId = "BDNFindPURMI09OID";
       var PURMI09FormType =document.getElementById("TG001").value;
       var PURMI09FormTypecode =document.getElementById("TG002").value;
       var tParma = [];
       tParma.push(PURMI09FormType);
       tParma.push(PURMI09FormTypecode);
       //tParma.push(PURMI09FormSN);
       var tParmaType = [];
       tParmaType.push(12);
       tParmaType.push(12);
       DWREngine.setAsync(false);
       ajax_DatabaseAccessor.query(tSqlId, tParma, tParmaType, function (data) {
        // alert( data.recordValues);
        if(data.recordValues.length>0){
        document.getElementById("DNFindPURMI09OID").value = data.recordValues[0][0];
        // alert( data.recordValues[0][0]);
        }
         else{
           alert("Can't not find any PURMI09 in BPM system!!!");
         }
       });
       DWREngine.setAsync(true);
}

/*
function GetPURXCDetail() {
       var tSqlId = "LWTESTPURXC";
  
      // var PURMI07FormType =document.getElementById("TC001").value;
      // var PURMI07FormNo =document.getElementById("TC002").value;
       var tParma = [];
      // alert("1");
      // tParma.push(PURMI07FormType);
     //  tParma.push(PURMI07FormNo);
       var tParmaType = [];
     //  tParmaType.push(12);
      // tParmaType.push(12);
       DWREngine.setAsync(false);
       ajax_DatabaseAccessor.query(tSqlId, tParma, tParmaType, function (data) {
       var tGrdArray = new Array();
		if (data.recordValues.length > 0) {
			for (var i = 0; i < data.recordValues.length; i++) {
				tGrdArray.push(data.recordValues[i]);
			}
		}
		GriddscObj.reload(tGrdArray);
       });
       DWREngine.setAsync(true);
  
}
*/

function GetPURXCDetail() {
  var tSqlId = "";
 if(document.getElementById("CompanyId").value=='LWTEST'){
   tSqlId = "LWTESTPURXC";
 }
  else if(document.getElementById("CompanyId").value=='JPTEST'){
   tSqlId = "JPTESTPURXC";
 }
 else if(document.getElementById("CompanyId").value=='GPTEST'){
   tSqlId = "GPTESTPURXC";
 }
  else if(document.getElementById("CompanyId").value=='GP'){
   tSqlId = "GPPURXC";
 }
  else if(document.getElementById("CompanyId").value=='JP'){
   tSqlId = "JPPURXC";
 }
 else {
   tSqlId = "LWPURXC";
 }
      
       var PURMI07FormType =document.getElementById("TC001").value;
       var PURMI07FormNo =document.getElementById("TC002").value;
       var tParma = [];
      // alert("1");
       tParma.push(PURMI07FormType);
       tParma.push(PURMI07FormNo);
       var tParmaType = [];
       tParmaType.push(12);
       tParmaType.push(12);
       DWREngine.setAsync(false);
       ajax_DatabaseAccessor.query(tSqlId, tParma, tParmaType, function (data) {
       var tGrdArray = new Array();
		if (data.recordValues.length > 0) {
			for (var i = 0; i < data.recordValues.length; i++) {
				tGrdArray.push(data.recordValues[i]);
			}
		}
		GriddscObj.reload(tGrdArray);
       });
       Griddsccomma();
       DWREngine.setAsync(true);
  
}


function Griddsccomma(){
 var tGrd=GriddscObj.getData();//grbang LA MA SO GRID
 for(i=0;i<tGrd.length;i++){
       if(tGrd[i].TD004=='LIWEN TEST'||tGrd[i].TD004=='LIWEN TEST CO'||tGrd[i].TD004=='LIWEN TEST CO'){
         tGrd[i].TD004='LWTEST立文';
       }
         if(tGrd[i].TD004=='LIWEN'){
         tGrd[i].TD004='LW立文';
       }
      if(tGrd[i].TD004=='GP TEST CO'||tGrd[i].TD004=='GIA PHU TEST'){
         tGrd[i].TD004='GPTEST嘉富';
       }
         if(tGrd[i].TD004=='LIWEN'){
         tGrd[i].TD004='LW立文';
       }
       
       if(tGrd[i].TD004=='JPTEST CO'||tGrd[i].TD004=='JIPHU TEST'){
         tGrd[i].TD004='JPTEST吉富';
       }
         if(tGrd[i].TD004=='JP CO'){
         tGrd[i].TD004='JP吉富';
       }
   
       if(tGrd[i].TD004=='MPTEST CO'||tGrd[i].TD004=='MPTEST CO'){
         tGrd[i].TD004='MPTEST明富';
       }
         if(tGrd[i].TD004=='MP CO'){
         tGrd[i].TD004='MP明富';
       }
       //tGrd[i].TD008=setThousandths(tGrd[i].TD008, true);
       //tGrd[i].TD030=setThousandths(tGrd[i].TD030, true);
	  // tGrd[i].TD058=setThousandths(tGrd[i].TD058, true);
	   tGrd[i].TD008=setThousandths(tGrd[i].TD008, true);
	   tGrd[i].TD009=setThousandths(tGrd[i].TD009, true);
}
  GriddscObj.reload(tGrd);
}



SELECT DISTINCT Users.OID,Users.id AS userID,Users.userName AS userName, Users.mailAddress AS mailAddress, Users.phoneNumber,FunctionDefinition.functionDefinitionName ,Organization.organizationName,OrganizationUnit.id AS organizationUnitID, OrganizationUnit.organizationUnitName
FROM Users
INNER join Functions on Functions.occupantOID = Users.OID
INNER join OrganizationUnit on OrganizationUnit.OID = Functions.organizationUnitOID
INNER join Organization on Organization.OID = OrganizationUnit.organizationOID
INNER Join FunctionDefinition ON FunctionDefinition.OID=Functions.definitionOID
WHERE (Users.leaveDate is NULL or datediff(day, getdate(), Users.leaveDate) > 0) and Functions.isMain = 1 and OrganizationUnit.organizationUnitType = 0

select XC004, XC005, convert(nvarchar(20),(CONVERT(datetime, XC006, 103)),111) ,XC007,XC008,XC009,XC010,XC011,XC012 from PURXC where CONVERT(datetime, XC006, 103) BETWEEN DATEADD(DAY, -1200, GETDATE()) AND GETDATE() and XC001=? and XC002=? order by XC004,XC005



SELECT E.EmployeeCode,E.LastName + ' ' + E.FirstName,HCSSYS_Departments.DepartmentName,HCSLS_JobWorking.JobWName,convert(nvarchar(20),(CONVERT(datetime, E.JoinDate, 103)),111),HCSEM_EmpBasicSalary.RealSalary,HCSEM_EmpBasicSalary.InsSalary
  FROM HCSEM_Employees as E
  INNER join HCSEM_EmpBasicSalary on E.EmployeeCode = HCSEM_EmpBasicSalary.EmployeeCode
  INNER join HCSSYS_Departments on E.DepartmentCode = HCSSYS_Departments.DepartmentCode
  INNER join HCSLS_JobWorking on E.JobWCode = HCSLS_JobWorking.JobWCode
  where HCSEM_EmpBasicSalary.IsCurrent ='1' and E.EmployeeCode like  '%LW%'

////


function formOpen(){
	var bodyGrid = document.getElementById("GridHRM");
	if(bodyGrid !=''){
	var bodyData = eval(bodyGrid.value);
	if(bodyData != null  &&  bodyData != '' && bodyData != "undefined" ){
	GridDetailObj.reload(bodyData);
		}
}  
  document.getElementById("btnIreportPrint").disabled = false; 
  return true;
}

function formSave(){
// Get hiddenCompanyId  
//  alert(document.getElementById("txtDept_txt").value);
//  alert((document.getElementById("txtDept_txt").value).substring(0, 2));
  if((document.getElementById("txtDept_txt").value).substring(0, 2)=='GP'){
    document.getElementById("hiddenCompanyId").value='GIAPHU';
  }
  else if((document.getElementById("txtDept_txt").value).substring(0, 2)=='MP'){
    document.getElementById("hiddenCompanyId").value='MINHPHU';
  }
    else if((document.getElementById("txtDept_txt").value).substring(0, 2)=='JP'){
    document.getElementById("hiddenCompanyId").value='JIPHU';
  }
    else if((document.getElementById("txtDept_txt").value).substring(0, 2)=='LW'){
    document.getElementById("hiddenCompanyId").value='LIWEN';
  }


  var bodyGrid=GridHRMObj.getData();
	if(bodyGrid ==''){
	alert ("DIEN DU LIEU DI MAY BE");
  return false;
}  
  else{
     return true;
  }
 
}


var bodyGrid = document.getElementById("GridHRM");
if(bodyGrid !=''){
var bodyData = eval(bodyGrid.value);
if(bodyData != null  &&  bodyData != '' && bodyData != "undefined" ){
GridHRMObj.reload(bodyData);
  }
}


var bodyGrid=gdHRMObj.getData();
	if(bodyGrid ==''){
	alert ("Điền dữ liệu vào đi bé..!");
  return false;
}  
  else{
  return true;
	}
}


var bodyGrid = document.getElementById("gdBody1");
if(bodyGrid !=''){
  var bodyData = eval(bodyGrid.value);
if(bodyData != null  &&  bodyData != '' && bodyData != "undefined" ){
    gdBody1Obj.reload(bodyData);
}
}
Gridaddcomma();
GetPURXCDetail();
return true;
}


/// '##,##0'


SELECT top (10) E.EmployeeCode,E.LastName + ' ' + E.FirstName,HCSSYS_Departments.DepartmentName,HCSLS_JobWorking.JobWName,convert(nvarchar(20),(CONVERT(datetime, E.JoinDate, 103)),111),FORMAT(HCSEM_EmpBasicSalary.RealSalary,'##,##0'),FORMAT(HCSEM_EmpBasicSalary.InsSalary, '##,##0')
  FROM HCSEM_Employees as E
  INNER join HCSEM_EmpBasicSalary on E.EmployeeCode = HCSEM_EmpBasicSalary.EmployeeCode
  INNER join HCSSYS_Departments on E.DepartmentCode = HCSSYS_Departments.DepartmentCode
  INNER join HCSLS_JobWorking on E.JobWCode = HCSLS_JobWorking.JobWCode
  where HCSEM_EmpBasicSalary.IsCurrent ='1' and E.EmployeeCode like  '%JP%'





  function addGridBySQL(){  
    var tDataSource= new DataSource("formId","SQLId"); //建立連線(填入表單代號以及SQL Commend代號)  
    var tSql= "Select column1, column2 from table1";  
    var tResult= tDataSource.query(tSql);  //執行SQL查詢  
    if(typeof(gridTestObj) != "undefined"){  
      gridTestObj.reload(eval(tResult));  
    }  
  } 





// START 1
function GetPURMI09OID() {
  var tSqlId = "BDNFindPURMI09OID";
  var PURMI09FormType =document.getElementById("TG001").value;
  var PURMI09FormTypecode =document.getElementById("TG002").value;
  var tParma = [];
  tParma.push(PURMI09FormType);
  tParma.push(PURMI09FormTypecode);
  //tParma.push(PURMI09FormSN);
  var tParmaType = [];
  tParmaType.push(12);
  tParmaType.push(12);
  DWREngine.setAsync(false);
  ajax_DatabaseAccessor.query(tSqlId, tParma, tParmaType, function (data) {
   // alert( data.recordValues);
   if(data.recordValues.length>0){
   document.getElementById("DNFindPURMI09OID").value = data.recordValues[0][0];
   // alert( data.recordValues[0][0]);
   }
    else{
      alert("Can't not find any PURMI09 in BPM system!!!");
    }
  });
  DWREngine.setAsync(true);
}

/*
function GetPURXCDetail() {
  var tSqlId = "LWTESTPURXC";

 // var PURMI07FormType =document.getElementById("TC001").value;
 // var PURMI07FormNo =document.getElementById("TC002").value;
  var tParma = [];
 // alert("1");
 // tParma.push(PURMI07FormType);
//  tParma.push(PURMI07FormNo);
  var tParmaType = [];
//  tParmaType.push(12);
 // tParmaType.push(12);
  DWREngine.setAsync(false);
  ajax_DatabaseAccessor.query(tSqlId, tParma, tParmaType, function (data) {
  var tGrdArray = new Array();
if (data.recordValues.length > 0) {
 for (var i = 0; i < data.recordValues.length; i++) {
   tGrdArray.push(data.recordValues[i]);
 }
}
GriddscObj.reload(tGrdArray);
  });
  DWREngine.setAsync(true);

}
*/

function GetPURXCDetail() {
var tSqlId = "";
if(document.getElementById("CompanyId").value=='LWTEST'){
tSqlId = "LWTESTPURXC";
}
else if(document.getElementById("CompanyId").value=='JPTEST'){
tSqlId = "JPTESTPURXC";
}
else if(document.getElementById("CompanyId").value=='GPTEST'){
tSqlId = "GPTESTPURXC";
}
else if(document.getElementById("CompanyId").value=='GP'){
tSqlId = "GPPURXC";
}
else if(document.getElementById("CompanyId").value=='JP'){
tSqlId = "JPPURXC";
}
else {
tSqlId = "LWPURXC";
}
 
  var PURMI07FormType =document.getElementById("TC001").value;
  var PURMI07FormNo =document.getElementById("TC002").value;
  var tParma = [];
 // alert("1");
  tParma.push(PURMI07FormType);
  tParma.push(PURMI07FormNo);
  var tParmaType = [];
  tParmaType.push(12);
  tParmaType.push(12);
  DWREngine.setAsync(false);
  ajax_DatabaseAccessor.query(tSqlId, tParma, tParmaType, function (data) {
  var tGrdArray = new Array();
if (data.recordValues.length > 0) {
 for (var i = 0; i < data.recordValues.length; i++) {
   tGrdArray.push(data.recordValues[i]);
 }
}
GriddscObj.reload(tGrdArray);
  });
  Griddsccomma();
  DWREngine.setAsync(true);

}






  SELECT TOP (10) [RecID]
      ,[EmployeeCode]
      ,[DowCode]
      ,[BasicSalary]
      ,[InsSalary]
      ,[MainSal]
      ,[SIAmountE]
      ,[SIAmountC]
      ,[HIAmountE]
      ,[HIAmountC]
      ,[UIAmountE]
      ,[UIAmountC]
      ,[TotalKowSal]
      ,[TotalAllowance]
      ,[OTSalTax]
      ,[OTSalNonTax]
      ,[TotalOTSal]
      ,[AddToSal]
      ,[AddToSalVND]
      ,[AdvanceSal]
      ,[AdvanceSalVND]
      ,[UnitSal]
      ,[GrossSal]
      ,[GrossSalVND]
      ,[FamilyTaxFreeOwn]
      ,[FamilyTaxFree]
      ,[FamilyTaxFreeUnit]
      ,[TaxableIncome]
      ,[NetSal]
      ,[NetSalVND]
      ,[IncomeCalcHouseGross]
      ,[CurrencyCode]
      ,[NETBanktransfer]
      ,[NETBanktransferVND]
      ,[Layer]
  FROM [LAPVAN].[dbo].[HCSPR_PayIncome_Layer]
and EmployeeCode=?  order by RecID desc