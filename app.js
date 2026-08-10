const $ = (s) => document.querySelector(s);
const employees = [
  {id:'EMP-001',qrCode:'QR-EMP-001',name:'Juan Dela Cruz',role:'Kitchen Staff',rate:80,status:'Active',hired:'Jul 10, 2026'},
  {id:'EMP-002',qrCode:'QR-EMP-002',name:'Maria Santos',role:'Barista',rate:85,status:'Active',hired:'Jul 12, 2026'},
  {id:'EMP-003',qrCode:'QR-EMP-003',name:'Carlo Reyes',role:'Cashier',rate:82,status:'Active',hired:'Jul 14, 2026'},
  {id:'EMP-004',qrCode:'QR-EMP-004',name:'Anne Garcia',role:'Service Staff',rate:78,status:'Active',hired:'Jul 17, 2026'},
  {id:'EMP-005',qrCode:'QR-EMP-005',name:'Leo Cruz',role:'Manager',rate:110,status:'Active',hired:'Jun 01, 2026'},
  {id:'EMP-006',qrCode:'QR-EMP-006',name:'Nina Velasco',role:'Cashier',rate:77,status:'Active',hired:'Jul 05, 2026'},
  {id:'EMP-007',qrCode:'QR-EMP-007',name:'Tomas Lopez',role:'Barista',rate:83,status:'Active',hired:'Jul 08, 2026'},
  {id:'EMP-008',qrCode:'QR-EMP-008',name:'Ivy Mendoza',role:'Service Staff',rate:76,status:'Active',hired:'Jul 09, 2026'},
  {id:'EMP-009',qrCode:'QR-EMP-009',name:'Paulo Ramirez',role:'Kitchen Staff',rate:79,status:'Active',hired:'Jul 11, 2026'},
  {id:'EMP-010',qrCode:'QR-EMP-010',name:'Carla De Vera',role:'Host',rate:74,status:'Active',hired:'Jul 13, 2026'},
  {id:'EMP-011',qrCode:'QR-EMP-011',name:'Miguel Santos',role:'Kitchen Staff',rate:81,status:'Active',hired:'Jul 15, 2026'},
  {id:'EMP-012',qrCode:'QR-EMP-012',name:'Aria Tan',role:'Service Staff',rate:75,status:'Active',hired:'Jul 16, 2026'},
  {id:'EMP-013',qrCode:'QR-EMP-013',name:'Bea Lim',role:'Barista',rate:86,status:'Active',hired:'Jul 18, 2026'},
  {id:'EMP-014',qrCode:'QR-EMP-014',name:'Kian Ong',role:'Cashier',rate:80,status:'Active',hired:'Jul 19, 2026'},
  {id:'EMP-015',qrCode:'QR-EMP-015',name:'Rosa Yamada',role:'Service Staff',rate:77,status:'Active',hired:'Jul 20, 2026'}
];
const currentPayrollPeriod = 'Jul 16 - 31';
const attendanceDate = '2026-07-27';
const attendanceRecords = [
  {employeeId:'EMP-001',date:'2026-07-27',status:'present',timeIn:'7:56 AM',timeOut:'5:10 PM'},
  {employeeId:'EMP-002',date:'2026-07-27',status:'present',timeIn:'7:58 AM',timeOut:'5:00 PM'},
  {employeeId:'EMP-003',date:'2026-07-27',status:'present',timeIn:'8:03 AM',timeOut:'5:05 PM'},
  {employeeId:'EMP-004',date:'2026-07-27',status:'present',timeIn:'7:52 AM',timeOut:'5:20 PM'},
  {employeeId:'EMP-005',date:'2026-07-27',status:'present',timeIn:'7:50 AM',timeOut:'5:00 PM'},
  {employeeId:'EMP-006',date:'2026-07-27',status:'present',timeIn:'7:59 AM',timeOut:'5:00 PM'},
  {employeeId:'EMP-007',date:'2026-07-27',status:'present',timeIn:'8:02 AM',timeOut:'5:10 PM'},
  {employeeId:'EMP-008',date:'2026-07-27',status:'present',timeIn:'7:57 AM',timeOut:'4:55 PM'},
  {employeeId:'EMP-009',date:'2026-07-27',status:'present',timeIn:'7:53 AM',timeOut:'5:25 PM'},
  {employeeId:'EMP-010',date:'2026-07-27',status:'present',timeIn:'7:55 AM',timeOut:'5:00 PM'},
  {employeeId:'EMP-011',date:'2026-07-27',status:'present',timeIn:'7:48 AM',timeOut:'5:30 PM'},
  {employeeId:'EMP-012',date:'2026-07-27',status:'present',timeIn:'8:01 AM',timeOut:'5:00 PM'},
  {employeeId:'EMP-013',date:'2026-07-27',status:'late',timeIn:'8:17 AM',timeOut:'4:50 PM'},
  {employeeId:'EMP-014',date:'2026-07-27',status:'late',timeIn:'8:24 AM',timeOut:'4:55 PM'},
  {employeeId:'EMP-015',date:'2026-07-27',status:'absent',timeIn:'',timeOut:''}
];
const deductionRules = [
  {id:'DR-001',name:'SSS Contribution',category:'Mandatory Contributions',type:'percentage',rate:0.045,amount:null,frequency:'Every Payroll',appliesTo:'All',effectiveFrom:'2026-07-01',active:true,notes:'Configurable government contribution'},
  {id:'DR-002',name:'PhilHealth Contribution',category:'Mandatory Contributions',type:'percentage',rate:0.02,amount:null,frequency:'Every Payroll',appliesTo:'All',effectiveFrom:'2026-07-01',active:true,notes:'Configurable government contribution'},
  {id:'DR-003',name:'Pag-IBIG Contribution',category:'Mandatory Contributions',type:'fixed',rate:null,amount:100,frequency:'Every Payroll',appliesTo:'All',effectiveFrom:'2026-07-01',active:true,notes:'Configurable government contribution'},
  {id:'DR-004',name:'Withholding Tax',category:'Mandatory Contributions',type:'percentage',rate:0.05,amount:null,frequency:'Every Payroll',appliesTo:'All',effectiveFrom:'2026-07-01',active:true,notes:'Configurable government contribution'},
  {id:'DR-005',name:'Salary Advance',category:'Other Authorized Deductions',type:'fixed',rate:null,amount:1000,frequency:'Every Payroll',appliesTo:['EMP-002'],effectiveFrom:'2026-07-01',active:true,notes:'Salary advance for Maria Santos'},
  {id:'DR-006',name:'Employee Loan',category:'Other Authorized Deductions',type:'fixed',rate:null,amount:500,frequency:'Every Payroll',appliesTo:['EMP-005'],effectiveFrom:'2026-07-01',active:true,notes:'Loan deduction example'},
  {id:'DR-007',name:'Cash Advance',category:'Other Authorized Deductions',type:'fixed',rate:null,amount:800,frequency:'One Payroll',appliesTo:['EMP-008'],effectiveFrom:'2026-07-01',active:false,notes:'Inactive sample rule'}
];
const deductionHistory = [
  {employeeId:'EMP-002',period:currentPayrollPeriod,ruleId:'DR-005',type:'Salary Advance',category:'Other Authorized Deductions',amount:1000,source:'Rule',status:'Applied',note:'Automatically applied salary advance'},
  {employeeId:'EMP-013',period:currentPayrollPeriod,ruleId:'MN-001',type:'Late & undertime',category:'Other Authorized Deductions',amount:120,source:'Manual',status:'Applied',note:'Attendance adjustment'},
  {employeeId:'EMP-014',period:currentPayrollPeriod,ruleId:'MN-002',type:'Late deduction',category:'Other Authorized Deductions',amount:90,source:'Manual',status:'Applied',note:'Attendance adjustment'},
  {employeeId:'EMP-015',period:currentPayrollPeriod,ruleId:'MN-003',type:'Absent deduction',category:'Other Authorized Deductions',amount:140,source:'Manual',status:'Applied',note:'Attendance adjustment'}
];

// Global status state tracking current payroll lifecycle stage
let currentPayrollState = {
  period: currentPayrollPeriod,
  status: 'Ready for Approval', // Lifecycle: 'Draft' -> 'Automatically Computed' -> 'Ready for Approval' -> 'Approved'
  locked: false,
  approvedBy: null,
  approvedAt: null
};

const payrollRecords = [
  {employeeId:'EMP-001',period:currentPayrollPeriod,regularHours:48,overtimeHours:4,deductions:80,paid:true,processed:'Jul 31, 2026'},
  {employeeId:'EMP-002',period:currentPayrollPeriod,regularHours:49,overtimeHours:5,deductions:90,paid:true,processed:'Jul 31, 2026'},
  {employeeId:'EMP-003',period:currentPayrollPeriod,regularHours:48,overtimeHours:3,deductions:60,paid:true,processed:'Jul 31, 2026'},
  {employeeId:'EMP-004',period:currentPayrollPeriod,regularHours:46,overtimeHours:2,deductions:100,paid:true,processed:'Jul 31, 2026'},
  {employeeId:'EMP-005',period:currentPayrollPeriod,regularHours:50,overtimeHours:6,deductions:40,paid:true,processed:'Jul 31, 2026'},
  {employeeId:'EMP-006',period:currentPayrollPeriod,regularHours:48,overtimeHours:4,deductions:70,paid:true,processed:'Jul 31, 2026'},
  {employeeId:'EMP-007',period:currentPayrollPeriod,regularHours:47,overtimeHours:5,deductions:65,paid:true,processed:'Jul 31, 2026'},
  {employeeId:'EMP-008',period:currentPayrollPeriod,regularHours:49,overtimeHours:2,deductions:55,paid:true,processed:'Jul 31, 2026'},
  {employeeId:'EMP-009',period:currentPayrollPeriod,regularHours:46,overtimeHours:7,deductions:80,paid:true,processed:'Jul 31, 2026'},
  {employeeId:'EMP-010',period:currentPayrollPeriod,regularHours:48,overtimeHours:0,deductions:30,paid:true,processed:'Jul 31, 2026'},
  {employeeId:'EMP-011',period:currentPayrollPeriod,regularHours:50,overtimeHours:6,deductions:50,paid:true,processed:'Jul 31, 2026'},
  {employeeId:'EMP-012',period:currentPayrollPeriod,regularHours:47,overtimeHours:3,deductions:45,paid:true,processed:'Jul 31, 2026'},
  {employeeId:'EMP-013',period:currentPayrollPeriod,regularHours:44,overtimeHours:1,deductions:120,paid:false,processed:'Jul 31, 2026'},
  {employeeId:'EMP-014',period:currentPayrollPeriod,regularHours:45,overtimeHours:0,deductions:110,paid:false,processed:'Jul 31, 2026'},
  {employeeId:'EMP-015',period:currentPayrollPeriod,regularHours:44,overtimeHours:2,deductions:95,paid:false,processed:'Jul 31, 2026'}
];
const payrollHistory = [
  {period:'Jun 16 - 30',employees:14,grossPayroll:53120,totalDeductions:2480,netPayroll:50640,status:'Approved',processed:'Jul 01, 2026'},
  {period:'Jul 1 - 15',employees:15,grossPayroll:54550,totalDeductions:2565,netPayroll:51985,status:'Approved',processed:'Jul 16, 2026'}
];
const reportFilters = {employee:'',employeeId:'',period:'',month:'',year:'',designation:'',status:''};
let active='welcome', selected=null, cameraStream=null, activeAttendanceEmployee=null;

function toggleSidebar(){
  const open = document.body.classList.toggle('sidebar-open');
  const btn = document.querySelector('.hamburger');
  if(btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}
window.addEventListener('resize', ()=>{ if(window.innerWidth>800){ document.body.classList.remove('sidebar-open'); const btn=document.querySelector('.hamburger'); if(btn) btn.setAttribute('aria-expanded','false'); } });
const nav=[['dashboard','⌂','Dashboard'],['employees','♙','Employees'],['schedules','▦','Schedules'],['payroll','₱','Payroll Reports'],['deductions','−','Deduction Rules'],['approval','✓','Payroll Approval'],['payslips','▤','Payslips'],['attendance','◷','Attendance Monitoring'],['settings','⚙','Settings'],['archive','▣','Archive']];

function generateEmployeeId(){return `EMP-${String(employees.length + 1).padStart(3,'0')}`}
function generateQrCode(id){return `QR-${id}`}
function generateUserIcon(){return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="50" cy="35" r="15" fill="currentColor"/><path d="M 20 75 Q 20 60 50 60 Q 80 60 80 75 Q 80 85 50 85 Q 20 85 20 75" fill="currentColor"/></svg>`}
function generateQrMarkup(seed){const size=21;const modules=Array.from({length:size},()=>Array(size).fill(0));const fillFinder=(x,y)=>{for(let row=0;row<7;row++){for(let col=0;col<7;col++){const edge=row===0||row===6||col===0||col===6;const inner=row>=2&&row<=4&&col>=2&&col<=4;if(edge||inner){modules[y+row][x+col]=1}}}};fillFinder(0,0);fillFinder(size-7,0);fillFinder(0,size-7);const hash=String(seed).split('').reduce((sum,ch)=>sum+ch.charCodeAt(0),0);for(let y=0;y<size;y++){for(let x=0;x<size;x++){if(modules[y][x]===1)continue;const isFinderZone=(x<7&&y<7)||(x>size-8&&y<7)||(x<7&&y>size-8);if(isFinderZone)continue;const value=((hash+x*29+y*17+Math.floor(Math.random()*17))%100)<55;modules[y][x]=value?1:0}};const rects=[];modules.forEach((row,y)=>row.forEach((value,x)=>{if(value){rects.push(`<rect x="${x}" y="${y}" width="1" height="1" rx="0.2" />`)}}));return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="QR code"><rect width="${size}" height="${size}" fill="#fffdfa"></rect><g fill="#4a342a">${rects.join('')}</g></svg>`}
function parseTime(value){if(!value)return null;const [time,period]=value.split(' ');if(!period)return null;let [hour,minute]=time.split(':').map(Number);if(period==='PM'&&hour<12)hour+=12; if(period==='AM'&&hour===12)hour=0;return hour*60+minute}
function hoursFromTimes(inTime,outTime){const start=parseTime(inTime);const end=parseTime(outTime);if(start===null||end===null||end<=start)return 0;return Math.round(((end-start)/60)*100)/100}
function employeeById(id){return employees.find(e=>e.id===id)||{id:'',name:'Unknown',role:'Unknown',rate:0,status:'Unknown',hired:'Unknown'}}
function deductionsFor(employeeId,period){return deductionHistoryFor(employeeId,period)}
function payrollFor(employeeId,period){return payrollRecords.find(p=>p.employeeId===employeeId&&p.period===period)||null}
function attendanceFor(employeeId){return attendanceRecords.filter(a=>a.employeeId===employeeId)}
function ruleAppliesToEmployee(rule,employeeId){if(!rule.active)return false;return rule.appliesTo==='All'||(Array.isArray(rule.appliesTo)&&rule.appliesTo.includes(employeeId))}
function applicableDeductionRules(employeeId,period){return deductionRules.filter(rule=>ruleAppliesToEmployee(rule,employeeId))}
function computeRuleDeduction(record,rule){const gross=grossPay(record);if(rule.type==='fixed')return rule.amount||0; if(rule.type==='percentage')return Math.round((gross*(rule.rate||0))*100)/100;return 0}
function payrollRuleDeductionsTotal(record){return applicableDeductionRules(record.employeeId,record.period).reduce((sum,rule)=>sum+computeRuleDeduction(record,rule),0)}
function payrollManualDeductionsTotal(record){return deductionHistory.filter(d=>d.employeeId===record.employeeId&&d.period===record.period&&d.source!=='Rule').reduce((sum,d)=>sum+(d.amount||0),0)}
function payrollDeductionsTotal(record){return Math.round((payrollManualDeductionsTotal(record)+payrollRuleDeductionsTotal(record))*100)/100}
function deductionHistoryFor(employeeId,period){const record=payrollFor(employeeId,period)||{employeeId,period,regularHours:0,overtimeHours:0};const manual=deductionHistory.filter(d=>d.employeeId===employeeId&&d.period===period);const ruleEntries=applicableDeductionRules(employeeId,period).map(rule=>({employeeId,period,ruleId:rule.id,type:rule.name,category:rule.category,amount:computeRuleDeduction(record,rule),source:'Rule',status:'Applied',frequency:rule.frequency,appliedFrom:rule.effectiveFrom}));return [...manual, ...ruleEntries]}
function reportFiltersMatch(record,filters){return (!filters.employee||record.name.toLowerCase().includes(filters.employee.toLowerCase()))&&(!filters.employeeId||record.id===filters.employeeId)&&(!filters.period||record.period===filters.period)&&(!filters.month||record.date.includes(filters.month))&&(!filters.year||record.date.includes(filters.year))&&(!filters.designation||record.role===filters.designation)&&(!filters.status||(filters.status==='Paid'?record.paid===true:filters.status==='Pending'?record.paid===false:true))}
function updateReportFilter(field,value){reportFilters[field]=value;render()}
function resetReportFilters(){reportFilters.employee='';reportFilters.employeeId='';reportFilters.period='';reportFilters.month='';reportFilters.year='';reportFilters.designation='';reportFilters.status='';render()}

function regularPay(record){const emp=employeeById(record.employeeId);return Math.round((record.regularHours*(emp.rate||0))*100)/100}
function overtimePay(record){const emp=employeeById(record.employeeId);return Math.round((record.overtimeHours*(emp.rate||0)*1.25)*100)/100}
function grossPay(record){return Math.round((regularPay(record)+overtimePay(record))*100)/100}
function netPay(record){return Math.round((grossPay(record)-payrollDeductionsTotal(record))*100)/100}

function payrollPeriods(){return [...new Set(payrollRecords.map(r=>r.period))]}
function payrollFilteredRecords(){return payrollRecords.map(r=>({
  ...r,
  id:r.employeeId,
  name:employeeById(r.employeeId).name,
  role:employeeById(r.employeeId).role,
  date:r.processed,
  month:new Date(r.processed).toLocaleString('en-US',{month:'short'}),
  year:String(new Date(r.processed).getFullYear()),
  deductions: payrollDeductionsTotal(r),
  net: netPay(r)
})).filter(r=>reportFiltersMatch(r,reportFilters))}

function exportPayrollReport(){const rows=payrollFilteredRecords();if(!rows.length){toast('No payroll data matches the selected filters','error');return}const header=['Employee ID','Name','Role','Period','Gross Pay','Deductions','Net Pay','Status','Processed'];const csv=[header.join(',')].concat(rows.map(r=>[r.id,`"${r.name}"`,r.role,r.period,grossPay(r).toFixed(2),(r.deductions||0).toFixed(2),netPay(r).toFixed(2),r.paid?'Paid':'Pending',r.processed].join('\n'))).join('\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='payroll-report.csv';document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);toast('Payroll report exported successfully')}
function toast(message,type='success'){const e=document.createElement('div');e.className='toast '+type;e.textContent=message;$('#toast-region').append(e);setTimeout(()=>e.remove(),3200)}
function go(page){
  if(page!=='attendance')stopCamera();
  active=page;selected=null;render();window.scrollTo(0,0);
  document.body.classList.remove('sidebar-open');
  const btn=document.querySelector('.hamburger'); if(btn) btn.setAttribute('aria-expanded','false');
}
function layout(content,title){return `<div class="shell"><aside class="sidebar"><div class="brand"><i class="brand-mark">☕</i><span>InfusoPay</span></div><div class="nav-label">Workspace</div>${nav.map(n=>`<button class="nav-item ${active===n[0]?'active':''}" title="${n[2]}" aria-label="${n[2]}" onclick="go('${n[0]}')"><span>${n[1]}</span><span>${n[2]}</span></button>`).join('')}<div class="nav-label">Account</div><button class="nav-item" title="Logout" aria-label="Logout" onclick="showLogout()"><span>⇥</span><span>Logout</span></button></aside><div class="sidebar-overlay" onclick="toggleSidebar()"></div><section class="content"><header class="topbar"><button class="hamburger" aria-label="Toggle navigation" aria-expanded="false" onclick="toggleSidebar()">☰</button><div><b>${title}</b><div class="crumb">InfusoPay / ${title}</div></div><div class="top-actions"><span class="date">July 27, 2026 · 10:30 AM</span><button class="icon-btn" onclick="toast('You have 3 new notifications')">♧</button><div class="avatar">HD</div></div></header>${content}</section></div>`}
function stat(label,num,delta,kind=''){return `<article class="stat"><div class="label">${label}</div><div class="num">${num}</div><div class="delta ${kind}">${delta}</div></article>`}
function formatCurrency(value){return `₱${value.toLocaleString('en-PH',{minimumFractionDigits:2,maximumFractionDigits:2})}`}
function payrollSummaryData(){const activeEmployees=employees.filter(e=>e.status==='Active').length;const todayRecords=attendanceRecords.filter(r=>r.date===attendanceDate);const presentCount=todayRecords.filter(r=>r.status==='present').length;const attendanceRate=activeEmployees?Math.round((presentCount/activeEmployees)*100):0;const periodRecords=payrollRecords.filter(r=>r.period===currentPayrollPeriod);const totalNetPay=periodRecords.reduce((sum,r)=>sum+netPay(r),0);const paidCount=periodRecords.filter(r=>r.paid).length;const totalCount=periodRecords.length;return{attendanceRate,presentCount,totalNetPay,paidCount,totalCount};}

function dashboard(){
  const summary=payrollSummaryData();
  const isApproved = currentPayrollState.status === 'Approved';
  return layout(`<div class="page"><div class="page-head"><div><h1>Good morning, Hazel</h1><p>Here is what is happening with your café today.</p></div><button class="btn" onclick="openEmployee()">+ Add Employee</button></div><section class="stat-grid">${stat('Total Employees',employees.filter(e=>e.status==='Active').length,'↑ 3 this month')}${stat('Present Today',summary.presentCount,`${summary.attendanceRate}% attendance rate`)}${stat('Late Employees',attendanceRecords.filter(r=>r.date===attendanceDate&&r.status==='late').length,'Needs attention','orange')}${stat('Payroll Status',currentPayrollState.status,isApproved?'Locked & Finalized':'Awaiting approval',isApproved?'green':'blue')}</section><section class="stat-grid">${stat('Payroll Period',currentPayrollPeriod,'Current period')}${stat('Payroll Expense',formatCurrency(summary.totalNetPay),'Current period total')}${stat('Pending Approval',isApproved?0:payrollRecords.filter(r=>r.period===currentPayrollPeriod&& !r.paid).length,isApproved?'All approved':'Waiting to pay','orange')}${stat('Attendance Rate',`${summary.attendanceRate}%`,`Today` )}</section><section class="payroll-summary-panel"><div class="payroll-sum
