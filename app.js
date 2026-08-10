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
  return layout(`<div class="page"><div class="page-head"><div><h1>Good morning, Hazel</h1><p>Here is what is happening with your café today.</p></div><button class="btn" onclick="openEmployee()">+ Add Employee</button></div><section class="stat-grid">${stat('Total Employees',employees.filter(e=>e.status==='Active').length,'↑ 3 this month')}${stat('Present Today',summary.presentCount,`${summary.attendanceRate}% attendance rate`)}${stat('Late Employees',attendanceRecords.filter(r=>r.date===attendanceDate&&r.status==='late').length,'Needs attention','orange')}${stat('Payroll Status',currentPayrollState.status,isApproved?'Locked & Finalized':'Awaiting approval',isApproved?'green':'blue')}</section><section class="stat-grid">${stat('Payroll Period',currentPayrollPeriod,'Current period')}${stat('Payroll Expense',formatCurrency(summary.totalNetPay),'Current period total')}${stat('Pending Approval',isApproved?0:payrollRecords.filter(r=>r.period===currentPayrollPeriod&& !r.paid).length,isApproved?'All approved':'Waiting to pay','orange')}${stat('Attendance Rate',`${summary.attendanceRate}%`,`Today` )}</section><section class="payroll-summary-panel"><div class="payroll-summary-shell"><div class="attendance-ring" style="--ring-fill:${summary.attendanceRate * 3.6}deg"><div class="ring-center"><div class="ring-number">${summary.attendanceRate}%</div><div class="ring-text">Attendance Rate<br><span>Today</span></div></div></div><div class="summary-cards"><article class="summary-card"><div class="card-label">Net Pay</div><div class="card-value">${formatCurrency(summary.totalNetPay)}</div><div class="card-note">Current Period</div></article><article class="summary-card"><div class="card-label">Employees Paid</div><div class="card-value">${summary.paidCount} / ${summary.totalCount}</div><div class="card-note">Current Period</div></article></div></div></section><div class="two-col"><section class="panel"><div class="panel-title">Weekly attendance <span class="chip green">Live overview</span></div><div class="bar-chart">${[['Mon',72],['Tue',88],['Wed',61],['Thu',92],['Fri',76],['Sat',98],['Sun',54]].map(([d,h])=>`<div class="bar" style="height:${h}%"><span>${d}</span></div>`).join('')}</div></section><section class="panel"><div class="panel-title">Quick actions</div><div class="quick"><button onclick="openEmployee()">＋ Add employee</button><button onclick="go('approval')">✓ Payroll Approval</button><button onclick="go('payslips')">▤ View Payslips</button><button onclick="go('payroll')">₱ View reports</button></div></section></div><div class="two-col" style="margin-top:19px"><section class="panel"><div class="panel-title">Recent activities <button class="btn ghost">View all</button></div>${[['♙','Maria Santos was added','10 minutes ago'],['₱',`Payroll for ${currentPayrollPeriod} ${currentPayrollState.status.toLowerCase()}`,'1 hour ago'],['▤','Payslip downloaded by Juan Dela Cruz','2 hours ago'],['▦','Schedule updated for Kitchen Staff','Yesterday']].map(a=>`<div class="activity"><div class="activity-icon">${a[0]}</div><div>${a[1]}<small>${a[2]}</small></div></div>`).join('')}</section><section class="panel"><div class="panel-title">Payroll snapshot</div><p style="color:var(--muted);line-height:1.7">The current payroll period is status: <b style="color:var(--espresso)">${currentPayrollState.status}</b>. Review employee computations before final approval.</p><button class="btn full" onclick="go('approval')">Review payroll approval</button></section></div></div>`,'Dashboard')
}

function employeesPage(){let rows=employees.filter(e=>e.status!=='Archived');return layout(`<div class="page"><div class="page-head"><div><h1>Employee Management</h1><p>Manage employee information, work details, and identification records.</p></div><button class="btn" onclick="openEmployee()">+ Add Employee</button></div><section class="stat-grid">${stat('Total Employees',rows.length,'All registered employees')}${stat('Active Employees',rows.filter(e=>e.status==='Active').length,'Currently employed')}${stat('Inactive Employees',rows.filter(e=>e.status==='Inactive').length,'Archived or inactive','orange')}${stat('New This Month','3','↑ 20% vs. June','blue')}</section><div class="toolbar"><div class="search"><input oninput="filterEmployees(this.value)" placeholder="Search employee name or Employee ID..." /></div><select onchange="filterEmployees('',this.value)"><option value="">All Designations</option>${['Kitchen Staff','Service Staff','Cashier','Barista','Manager'].map(x=>`<option>${x}</option>`)}</select><select onchange="filterEmployees('', '',this.value)"><option value="">All Status</option><option>Active</option><option>Inactive</option></select><button class="btn secondary" onclick="toast('Employee list exported successfully')">Export</button></div><div class="table-wrap"><table><thead><tr><th>Employee ID</th><th>Employee</th><th>Designation</th><th>Hourly rate</th><th>Status</th><th>Date hired</th><th>QR</th><th>Actions</th></tr></thead><tbody id="employee-rows">${employeeRows(rows)}</tbody></table></div><p style="color:var(--muted);font-size:12px">Showing ${rows.length} of ${rows.length} employees · Rows per page: 10</p></div>`,'Employees')}
function employeeRows(list){return list.map(e=>`<tr><td><b>${e.id}</b></td><td><div class="person"><i class="photo">${e.name.split(' ').map(x=>x[0]).join('')}</i>${e.name}</div></td><td>${e.role}</td><td>₱${e.rate.toFixed(2)}/hr</td><td><span class="chip ${e.status==='Active'?'green':'gray'}">${e.status}</span></td><td>${e.hired}</td><td><button class="icon-btn" onclick="qr('${e.id}')">▦</button></td><td><div class="actions"><button class="icon-btn" title="View" onclick="profile('${e.id}')">◉</button><button class="icon-btn" title="Edit" onclick="openEmployee('${e.id}')">✎</button><button class="icon-btn" title="ID Card" onclick="idCard('${e.id}')">▣</button><button class="icon-btn" title="Archive" onclick="archiveEmployee('${e.id}')">⌫</button></div></td></tr>`).join('')}
function filterEmployees(q='',role='',status=''){q=q.toLowerCase();const data=employees.filter(e=>(!q||Object.values(e).join(' ').toLowerCase().includes(q))&&(!role||e.role===role)&&(!status||e.status===status));$('#employee-rows').innerHTML=employeeRows(data)}
function schedules(){let days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];return layout(`<div class="page"><div class="page-head"><div><h1>Schedule Management</h1><p>Assign and manage employee schedules while monitoring attendance performance.</p></div><button class="btn" onclick="openSchedule()">+ Assign Schedule</button></div><section class="stat-grid">${stat('Scheduled Today','12','Employees on shift')}${stat('Off Duty','3','Rest day or leave')}${stat('Late Today','2','Requires review','orange')}${stat('Overtime Today','4','Approved hours','blue')}</section><div class="toolbar"><div class="search"><input placeholder="Search Employee Name or Employee ID..." /></div><select><option>All Designations</option><option>Kitchen Staff</option><option>Service Staff</option><option>Cashier</option><option>Barista</option></select><select><option>All Schedule Status</option><option>Scheduled</option><option>Off Duty</option></select><button class="btn secondary" onclick="toast('Monthly calendar selected')">Monthly view</button></div><section class="panel"><div class="panel-title">This week's roster <span><button class="btn ghost">‹ Previous</button><button class="btn ghost">Today</button><button class="btn ghost">Next ›</button></span></div><div style="overflow:auto"><div class="schedule-grid">${days.map((d,i)=>`<div class="day"><strong>${d}<br><span style="color:var(--muted);font-weight:400">Jul ${27+i}</span></strong><div class="shift">Morning<br>8:00 AM - 5:00 PM</div>${i===2?'<div class="shift" style="background:#e7f0f8">Closing<br>1:00 PM - 10:00 PM</div>':''}</div>`).join('')}</div></div></section><div class="two-col" style="margin-top:19px"><section class="panel"><div class="panel-title">Attendance monitoring</div><div class="activity"><div class="activity-icon">✓</div><div><b>On Time</b><small>10 employees clocked in as scheduled</small></div></div><div class="activity"><div class="activity-icon">!</div><div><b>Late</b><small>2 employees · 15 average minutes late</small></div></div><div class="activity"><div class="activity-icon">+</div><div><b>Overtime</b><small>4 employees currently on approved overtime</small></div></div></section><section class="panel"><div class="panel-title">Schedule tools</div><p style="color:var(--muted);line-height:1.7">Attendance is matched against assigned shifts and automatically updates payroll hours.</p><button class="btn full" onclick="toast('Schedule exported as PDF')">Export schedule</button></section></div></div>`,'Schedules')}
function attendance(){return layout(`<div class="page attendance-page"><div class="page-head"><div><h1>Attendance Monitoring</h1><p>View employee time in and time out records, working hours, and attendance status.</p></div><span class="chip green">Admin / Manager view</span></div><section class="stat-grid">${stat('Present Today','12','On shift')}${stat('Late Arrivals','2','Needs follow-up','orange')}${stat('Hours Logged','96 hrs','This week','blue')}${stat('Pending Review','3','Attendance exceptions','orange')}</section><section class="two-col"><section class="panel"><div class="panel-title">Monitoring tools <span class="chip green">View-only module</span></div><div class="activity"><div class="activity-icon">◷</div><div><b>Review only</b><small>This module is for monitoring, filtering, and reporting employee attendance records. It does not use cameras, QR scanners, or face verification.</small></div></div><div class="activity"><div class="activity-icon">▦</div><div><b>Employee clock-in flow</b><small>Time In and Time Out are handled in the separate Employee Attendance Scanner module for employees.</small></div></div></section><section class="panel"><div class="panel-title">Filters</div><div class="toolbar"><div class="search"><input placeholder="Search employee name or id..." /></div><select><option>All departments</option><option>Kitchen</option><option>Service</option><option>Front Desk</option></select><select><option>All statuses</option><option>On Time</option><option>Late</option><option>Absent</option></select></div></section></section><section class="panel attendance-log"><div class="panel-title">Today's attendance <span class="chip blue">July 27, 2026</span></div><div class="table-wrap"><table><thead><tr><th>Employee</th><th>Time in</th><th>Time out</th><th>Scheduled shift</th><th>Status</th></tr></thead><tbody id="attendance-log-rows"><tr><td><div class="person"><i class="photo">JD</i>Juan Dela Cruz</div></td><td>7:56 AM</td><td>—</td><td>8:00 AM - 5:00 PM</td><td><span class="chip green">On Time</span></td></tr><tr><td><div class="person"><i class="photo">MS</i>Maria Santos</div></td><td>8:12 AM</td><td>—</td><td>8:00 AM - 5:00 PM</td><td><span class="chip orange">12 min late</span></td></tr></tbody></table></div></section></div>`,'Attendance Monitoring')}

// PAYROLL APPROVAL MODULE IMPLEMENTATION
function payrollApprovalPage(){
  const records = payrollRecords.filter(r=>r.period===currentPayrollPeriod);
  const isApproved = currentPayrollState.status === 'Approved';
  const totalGross = records.reduce((sum,r)=>sum+grossPay(r),0);
  const totalDeductions = records.reduce((sum,r)=>sum+payrollDeductionsTotal(r),0);
  const totalNet = records.reduce((sum,r)=>sum+netPay(r),0);

  return layout(`
    <div class="page">
      <div class="page-head">
        <div>
          <h1>Payroll Approval</h1>
          <p>Review, verify, and approve finalized payroll calculations for ${currentPayrollPeriod}.</p>
        </div>
        <div style="display:flex;gap:10px;align-items:center">
          <span class="chip ${isApproved?'green':'orange'}" style="font-size:12px;padding:8px 14px">
            Status: ${currentPayrollState.status} ${isApproved ? '🔒 (Locked)' : ''}
          </span>
          ${!isApproved ? 
            `<button class="btn" onclick="promptApprovePayroll()">Approve Payroll</button>` : 
            `<button class="btn secondary" onclick="promptUnlockPayroll()">Unlock / Adjustment</button>`
          }
        </div>
      </div>

      <section class="stat-grid">
        ${stat('Total Records', records.length, 'Active payroll period')}
        ${stat('Total Gross Pay', formatCurrency(totalGross), 'Computed total')}
        ${stat('Total Deductions', formatCurrency(totalDeductions), 'Deductions & rules', 'orange')}
        ${stat('Total Net Pay', formatCurrency(totalNet), 'Final payout total', 'blue')}
      </section>

      ${isApproved ? `
        <div class="panel" style="background:#e5f2ea;border-color:var(--green);margin-bottom:20px;padding:16px 20px">
          <b style="color:var(--green)">✓ Payroll Finalized and Locked</b>
          <p style="margin:4px 0 0;color:var(--espresso);font-size:13px">
            This payroll was approved by <b>${currentPayrollState.approvedBy || 'Owner/Admin'}</b> on <b>${currentPayrollState.approvedAt}</b>. Amounts, attendance data, and deduction calculations are locked against unauthorized editing.
          </p>
        </div>
      ` : ''}

      <section class="panel">
        <div class="panel-title">
          <span>Payroll Review (${currentPayrollPeriod})</span>
          <small style="color:var(--muted)">Review detailed pay computations before approving</small>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Payroll Period</th>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Designation</th>
                <th>Total Hours</th>
                <th>Regular Pay</th>
                <th>Overtime Pay</th>
                <th>Gross Pay</th>
                <th>Total Deductions</th>
                <th>Net Pay</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${records.map(r => {
                const emp = employeeById(r.employeeId);
                const hrs = (r.regularHours || 0) + (r.overtimeHours || 0);
                const regPay = regularPay(r);
                const otPay = overtimePay(r);
                const gross = grossPay(r);
                const deds = payrollDeductionsTotal(r);
                const net = netPay(r);
                return `
                  <tr>
                    <td>${r.period}</td>
                    <td><b>${r.employeeId}</b></td>
                    <td><div class="person"><i class="photo">${emp.name.split(' ').map(x=>x[0]).join('')}</i>${emp.name}</div></td>
                    <td>${emp.role}</td>
                    <td>${hrs} hrs</td>
                    <td>${formatCurrency(regPay)}</td>
                    <td>${formatCurrency(otPay)}</td>
                    <td><b>${formatCurrency(gross)}</b></td>
                    <td style="color:var(--orange)">${formatCurrency(deds)}</td>
                    <td style="color:var(--green);font-weight:700">${formatCurrency(net)}</td>
                    <td><span class="chip ${isApproved?'green':'orange'}">${currentPayrollState.status}</span></td>
                    <td>
                      <button class="btn secondary" style="padding:5px 10px;font-size:11px" onclick="viewPayrollDetails('${r.employeeId}')">View Details</button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `, 'Payroll Approval');
}

function viewPayrollDetails(employeeId){
  const emp = employeeById(employeeId);
  const rec = payrollFor(employeeId, currentPayrollPeriod) || {regularHours:0, overtimeHours:0};
  const regPay = regularPay(rec);
  const otPay = overtimePay(rec);
  const gross = grossPay(rec);
  const dedBreakdown = deductionHistoryFor(employeeId, currentPayrollPeriod);
  const totDeductions = payrollDeductionsTotal(rec);
  const net = netPay(rec);

  modal(`
    <div class="modal-head">
      <div>
        <h2>Payroll Calculation Breakdown</h2>
        <p>${emp.name} (${emp.id}) · Period: ${currentPayrollPeriod}</p>
      </div>
      <button class="icon-btn" onclick="closeModal()">×</button>
    </div>
    
    <div class="form-grid" style="margin-bottom:15px">
      <div class="field"><label>DESIGNATION</label><b>${emp.role}</b></div>
      <div class="field"><label>HOURLY RATE</label><b>₱${emp.rate.toFixed(2)}/hr</b></div>
      <div class="field"><label>REGULAR HOURS</label><span>${rec.regularHours} hrs (₱${regPay.toFixed(2)})</span></div>
      <div class="field"><label>OVERTIME HOURS</label><span>${rec.overtimeHours} hrs @ 1.25x (₱${otPay.toFixed(2)})</span></div>
    </div>

    <div style="background:#fcfaf7;padding:12px;border-radius:10px;border:1px solid var(--line);margin-bottom:15px">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span>Regular Earnings:</span><b>${formatCurrency(regPay)}</b></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span>Overtime Earnings:</span><b>${formatCurrency(otPay)}</b></div>
      <div style="display:flex;justify-content:space-between;border-top:1px solid var(--line);padding-top:6px;font-weight:700"><span>Gross Pay:</span><b>${formatCurrency(gross)}</b></div>
    </div>

    <b style="font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:var(--muted)">Deductions Itemized</b>
    <div class="table-wrap" style="margin:8px 0 15px">
      <table>
        <thead>
          <tr><th>Item</th><th>Category</th><th>Source</th><th>Amount</th></tr>
        </thead>
        <tbody>
          ${dedBreakdown.length ? dedBreakdown.map(d=>`
            <tr>
              <td>${d.type}</td>
              <td>${d.category}</td>
              <td><span class="chip gray">${d.source}</span></td>
              <td style="color:var(--orange)">${formatCurrency(d.amount||0)}</td>
            </tr>
          `).join('') : '<tr><td colspan="4" style="text-align:center">No deductions applied</td></tr>'}
        </tbody>
      </table>
    </div>

    <div style="background:#e5f2ea;padding:12px;border-radius:10px;border:1px solid var(--green);display:flex;justify-content:space-between;align-items:center">
      <span style="font-weight:700;color:var(--espresso)">Calculated Net Pay:</span>
      <span style="font-size:20px;font-weight:800;color:var(--green)">${formatCurrency(net)}</span>
    </div>

    <div class="modal-actions">
      <button class="btn secondary" onclick="closeModal()">Close Details</button>
      <button class="btn" onclick="closeModal();go('payslips')">View Payslip</button>
    </div>
  `);
}

function promptApprovePayroll(){
  modal(`
    <div class="modal-head">
      <div>
        <h2>Confirm Payroll Approval</h2>
        <p>Period: ${currentPayrollPeriod}</p>
      </div>
      <button class="icon-btn" onclick="closeModal()">×</button>
    </div>
    <div style="padding:10px 0 20px;line-height:1.6;color:var(--espresso)">
      <p style="font-size:15px;font-weight:600;margin-bottom:12px">
        “Are you sure you want to approve this payroll? Once approved, the payroll will be locked and cannot be edited.”
      </p>
      <p style="font-size:12px;color:var(--muted)">
        Approving will lock all attendance computations, deductions, gross/net formulas, and finalize employee payslip records.
      </p>
    </div>
    <div class="modal-actions">
      <button class="btn secondary" onclick="closeModal()">Cancel</button>
      <button class="btn" onclick="executeApprovePayroll()">Confirm & Approve Payroll</button>
    </div>
  `);
}

function executeApprovePayroll(){
  currentPayrollState.status = 'Approved';
  currentPayrollState.locked = true;
  currentPayrollState.approvedBy = 'Owner / Admin';
  currentPayrollState.approvedAt = new Date().toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
  
  payrollRecords.forEach(r => {
    if(r.period === currentPayrollPeriod) {
      r.paid = true;
    }
  });

  closeModal();
  toast('Payroll successfully approved and locked!');
  render();
}

function promptUnlockPayroll(){
  modal(`
    <div class="modal-head">
      <div>
        <h2>Authorized Payroll Unlock / Adjustment</h2>
        <p>Finalized Payroll Adjustment Process</p>
      </div>
      <button class="icon-btn" onclick="closeModal()">×</button>
    </div>
    <form onsubmit="executeUnlockPayroll(event)">
      <p style="font-size:13px;color:var(--muted);margin-bottom:15px">
        Approved payroll records are locked against direct editing. Provide authorized credentials and reason to perform an official adjustment unlock.
      </p>
      <div class="field">
        <label>AUTHORIZATION PIN / PASSWORD *</label>
        <input type="password" id="unlock-pass" placeholder="Enter admin password" required />
      </div>
      <div class="field">
        <label>REASON FOR ADJUSTMENT *</label>
        <input id="unlock-reason" placeholder="e.g. Attendance adjustment for EMP-013" required />
      </div>
      <div class="modal-actions">
        <button type="button" class="btn secondary" onclick="closeModal()">Cancel</button>
        <button class="btn danger" type="submit">Unlock Payroll for Adjustment</button>
      </div>
    </form>
  `);
}

function executeUnlockPayroll(ev){
  ev.preventDefault();
  const pass = $('#unlock-pass').value;
  if(!pass){
    toast('Please enter authorization password', 'error');
    return;
  }
  currentPayrollState.status = 'Ready for Approval';
  currentPayrollState.locked = false;
  closeModal();
  toast('Payroll unlocked for authorized adjustment');
  render();
}

// PAYSLIP GENERATION MODULE IMPLEMENTATION
function payslipsPage(){
  const records = payrollRecords.filter(r=>r.period===currentPayrollPeriod);
  return layout(`
    <div class="page">
      <div class="page-head">
        <div>
          <h1>Payslips</h1>
          <p>Automatic payslip generation and distribution for ${currentPayrollPeriod}.</p>
        </div>
        <button class="btn secondary" onclick="toast('All payslips sent to employees')">Bulk Email Payslips</button>
      </div>

      <section class="stat-grid">
        ${stat('Generated Payslips', records.length, 'Current period')}
        ${stat('Payroll Status', currentPayrollState.status, currentPayrollState.locked ? 'Finalized' : 'Pending lock', currentPayrollState.locked ? 'green' : 'orange')}
        ${stat('Paid Payslips', records.filter(r=>r.paid).length, 'Disbursed', 'blue')}
        ${stat('Pending Payslips', records.filter(r=>!r.paid).length, 'Unpaid', 'orange')}
      </section>

      <section class="panel">
        <div class="panel-title">
          <span>Employee Payslips (${currentPayrollPeriod})</span>
          <span class="chip blue">Auto-Generated</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Role</th>
                <th>Gross Pay</th>
                <th>Deductions</th>
                <th>Net Pay</th>
                <th>Payslip Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${records.map(r => {
                const emp = employeeById(r.employeeId);
                const gross = grossPay(r);
                const deds = payrollDeductionsTotal(r);
                const net = netPay(r);
                return `
                  <tr>
                    <td><b>${r.employeeId}</b></td>
                    <td><div class="person"><i class="photo">${emp.name.split(' ').map(x=>x[0]).join('')}</i>${emp.name}</div></td>
                    <td>${emp.role}</td>
                    <td>${formatCurrency(gross)}</td>
                    <td style="color:var(--orange)">${formatCurrency(deds)}</td>
                    <td style="color:var(--green);font-weight:700">${formatCurrency(net)}</td>
                    <td>
                      <span class="chip ${currentPayrollState.locked ? 'green' : 'orange'}">
                        ${currentPayrollState.locked ? 'Generated & Finalized' : 'Draft Payslip'}
                      </span>
                    </td>
                    <td>
                      <button class="btn" style="padding:5px 12px;font-size:11px" onclick="generatePayslipModal('${r.employeeId}')">View Payslip</button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `, 'Payslips');
}

function generatePayslipModal(employeeId){
  const emp = employeeById(employeeId);
  const rec = payrollFor(employeeId, currentPayrollPeriod) || {regularHours:0, overtimeHours:0};
  const regPay = regularPay(rec);
  const otPay = overtimePay(rec);
  const gross = grossPay(rec);
  const dedBreakdown = deductionHistoryFor(employeeId, currentPayrollPeriod);
  const totDeductions = payrollDeductionsTotal(rec);
  const net = netPay(rec);

  modal(`
    <div class="modal-head">
      <div>
        <h2>Official Payslip</h2>
        <p>InfusoPay Payroll System</p>
      </div>
      <button class="icon-btn" onclick="closeModal()">×</button>
    </div>

    <div style="background:var(--white);border:1px solid var(--line);border-radius:14px;padding:20px;box-shadow:0 4px 12px rgba(0,0,0,0.03)" id="printable-payslip">
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid var(--espresso);padding-bottom:12px;margin-bottom:16px">
        <div class="brand"><i class="brand-mark">☕</i>InfusoPay Café</div>
        <div style="text-align:right">
          <b style="font-size:16px;color:var(--espresso)">PAYSLIP</b>
          <div style="font-size:12px;color:var(--muted)">Period: ${currentPayrollPeriod}</div>
        </div>
      </div>

      <div class="form-grid" style="margin-bottom:16px;font-size:12px">
        <div><span style="color:var(--muted)">Employee ID:</span> <b>${emp.id}</b></div>
        <div><span style="color:var(--muted)">Pay Date:</span> <b>Jul 31, 2026</b></div>
        <div><span style="color:var(--muted)">Employee Name:</span> <b>${emp.name}</b></div>
        <div><span style="color:var(--muted)">Designation:</span> <b>${emp.role}</b></div>
        <div><span style="color:var(--muted)">Hourly Rate:</span> <b>₱${emp.rate.toFixed(2)}</b></div>
        <div><span style="color:var(--muted)">Status:</span> <b>${currentPayrollState.status}</b></div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">
        <div style="border:1px solid var(--line);border-radius:10px;padding:12px">
          <b style="font-size:11px;text-transform:uppercase;color:var(--muted)">Earnings Breakdown</b>
          <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:12px">
            <span>Regular Pay (${rec.regularHours} hrs)</span>
            <span>${formatCurrency(regPay)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:4px;font-size:12px">
            <span>Overtime Pay (${rec.overtimeHours} hrs)</span>
            <span>${formatCurrency(otPay)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:10px;padding-top:6px;border-top:1px dashed var(--line);font-weight:700">
            <span>Gross Earnings</span>
            <span>${formatCurrency(gross)}</span>
          </div>
        </div>

        <div style="border:1px solid var(--line);border-radius:10px;padding:12px">
          <b style="font-size:11px;text-transform:uppercase;color:var(--muted)">Deductions Breakdown</b>
          ${dedBreakdown.length ? dedBreakdown.map(d=>`
            <div style="display:flex;justify-content:space-between;margin-top:4px;font-size:12px">
              <span>${d.type}</span>
              <span style="color:var(--orange)">-${formatCurrency(d.amount||0)}</span>
            </div>
          `).join('') : '<div style="font-size:12px;color:var(--muted);margin-top:8px">No deductions</div>'}
          <div style="display:flex;justify-content:space-between;margin-top:10px;padding-top:6px;border-top:1px dashed var(--line);font-weight:700">
            <span>Total Deductions</span>
            <span style="color:var(--orange)">-${formatCurrency(totDeductions)}</span>
          </div>
        </div>
      </div>

      <div style="background:var(--espresso);color:#fff;padding:14px;border-radius:10px;display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:13px;font-weight:600">NET TAKE-HOME PAY:</span>
        <span style="font-size:22px;font-weight:800;color:#85e0a3">${formatCurrency(net)}</span>
      </div>
    </div>

    <div class="modal-actions">
      <button class="btn secondary" onclick="closeModal()">Close</button>
      <button class="btn secondary" onclick="window.print()">Print Payslip</button>
      <button class="btn" onclick="toast('Payslip downloaded as PDF')">Download PDF</button>
    </div>
  `);
}

function placeholder(page){const labels={payroll:['Payroll Reports','Review and generate payroll reports for each pay period.'],deductions:['Deduction Rules','Configure late, undertime, and other payroll deductions.'],approval:['Payroll Approval','Review generated payroll before final approval.'],payslips:['Payslip Management','Generate and distribute employee payslips.'],attendance:['Attendance Monitoring','Monitor employee time in and time out records, working hours, and attendance status.'],settings:['Settings','Manage your business and system preferences.'],archive:['Archive','Restore or permanently remove archived employee records.']};let [h,p]=labels[page];return layout(`<div class="page"><div class="page-head"><div><h1>${h}</h1><p>${p}</p></div><button class="btn" onclick="toast('This prototype action is ready for demonstration')">New action</button></div><section class="panel" style="text-align:center;padding:70px 25px"><div style="font-size:48px">☕</div><h2>${h}</h2><p style="color:var(--muted);max-width:480px;margin:0 auto 23px;line-height:1.7">This connected prototype area is ready for your workflow. Use the navigation to explore employee and schedule management.</p><button class="btn" onclick="go('dashboard')">Return to dashboard</button></section></div>`,h)}
function welcome(){return `<div class="welcome"><section class="welcome-card"><div class="brand"><i class="brand-mark">☕</i>InfusoPay</div><div class="eyebrow" style="margin-top:25px">Payroll & Workforce Management</div><h1>Welcome to InfusoPay</h1><p class="lead">A simpler, warmer way for small cafés to manage their people, schedules, attendance, and payroll.</p><div class="choices"><article class="choice"><div class="choice-icon">▦</div><h2>Payroll Management</h2><p>Manage employee records, payroll processing, schedules, deductions, reports, approvals, and payslips.</p><button class="btn" onclick="go('login')">Open payroll workspace →</button></article><article class="choice"><div class="choice-icon">◷</div><h2>Employee Time In</h2><p>Employees use this module to record their attendance by time in and time out.</p><button class="btn secondary" onclick="go('employee-attendance')">Open employee time in →</button></article></div><div class="footer">Version 1.0 · © 2026 InfusoPay</div></section></div>`}
function login(){return `<div class="login"><section class="login-card"><div class="brand"><i class="brand-mark">☕</i>InfusoPay</div><h1>Welcome back</h1><p>Secure payroll management for business owners and administrators.</p><form onsubmit="loginSubmit(event)"><div class="field" id="user-field"><label>USERNAME</label><input id="username" placeholder="Enter username" /></div><div class="field" id="pass-field"><label>PASSWORD</label><input id="password" type="password" placeholder="Enter password" /></div><div class="login-row"><label><input type="checkbox" /> Remember me</label><a onclick="forgotPassword()">Forgot password?</a></div><button class="btn full">LOGIN</button></form><button class="btn ghost full" style="margin-top:12px" onclick="go('welcome')">← Back to welcome</button></section></div>`}
function loginSubmit(e){e.preventDefault();let u=$('#username'),p=$('#password');document.querySelectorAll('.field').forEach(x=>x.classList.remove('invalid'));if(!u.value||!p.value){if(!u.value)$('#user-field').classList.add('invalid');if(!p.value)$('#pass-field').classList.add('invalid');toast('Please complete all required fields','error');return}toast('Signing in...');setTimeout(()=>go('dashboard'),650)}
function modal(html){$('#modal-root').innerHTML=`<div class="modal-cover" onclick="if(event.target===this)closeModal()"><section class="modal">${html}</section></div>`}function closeModal(){$('#modal-root').innerHTML=''}
function openEmployee(id){let e=id?employees.find(x=>x.id===id):null;let generatedId=e?.id||generateEmployeeId();let generatedQr=e?.qrCode||generateQrCode(generatedId);modal(`<div class="modal-head"><div><h2>${e?'Edit':'Add'} Employee</h2><p>${e?'Update employee information.':'Employee ID and QR code are generated automatically and can be viewed, printed, or included on the employee ID card.'}</p></div><button class="icon-btn" onclick="closeModal()">×</button></div><form onsubmit="saveEmployee(event,'${id||''}')"><div class="form-grid"><div class="field"><label>EMPLOYEE NAME *</label><input id="emp-name" value="${e?.name||''}" placeholder="e.g. Juan Dela Cruz" required></div><div class="field"><label>DESIGNATION *</label><select id="emp-role">${['Kitchen Staff','Service Staff','Cashier','Barista','Manager'].map(x=>`<option ${e?.role===x?'selected':''}>${x}</option>`)}</select></div><div class="field"><label>HOURLY RATE (₱) *</label><input id="emp-rate" type="number" min="0" value="${e?.rate||''}" placeholder="80.00" required></div><div class="field"><label>DATE HIRED *</label><input id="emp-date" type="date" max="2026-07-27" value="${e?'2026-07-10':'2026-07-27'}" required></div><div class="field"><label>EMPLOYEE ID</label><input value="${generatedId}" disabled></div><div class="field"><label>QR CODE</label><input value="${generatedQr}" disabled></div><div class="field"><label>PHOTO UPLOAD</label><input type="file" accept=".jpg,.jpeg,.png"></div></div><div class="modal-actions"><button type="button" class="btn secondary" onclick="closeModal()">Cancel</button><button class="btn">${e?'Save Changes':'Save Employee'}</button></div></form>`)}
function saveEmployee(ev,id){ev.preventDefault();let n=$('#emp-name').value,role=$('#emp-role').value,rate=Number($('#emp-rate').value);if(id){let e=employees.find(x=>x.id===id);Object.assign(e,{name:n,role,rate});toast('Employee information updated successfully')}else{let newId=generateEmployeeId();employees.push({id:newId,qrCode:generateQrCode(newId),name:n,role,rate,status:'Active',hired:'Jul 27, 2026'});toast('Employee added successfully')}closeModal();go('employees')}
function profile(id){let e=employees.find(x=>x.id===id);selected=id;modal(`<div class="modal-head"><div><h2>Employee Profile</h2><p>Employee record and current activity.</p></div><button class="icon-btn" onclick="closeModal()">×</button></div><div class="id-person"><div class="id-photo">${generateUserIcon()}</div><div><div class="id-name" style="color:var(--espresso)">${e.name}</div><div style="color:var(--muted)">${e.id} · ${e.role}</div></div></div><div class="form-grid"><div class="field"><label>HOURLY RATE</label><b>₱${e.rate.toFixed(2)}/hr</b></div><div class="field"><label>EMPLOYMENT STATUS</label><span><i class="chip green">${e.status}</i></span></div><div class="field"><label>ATTENDANCE</label><b>92% this month</b></div><div class="field"><label>CURRENT SCHEDULE</label><b>8:00 AM - 5:00 PM</b></div></div><div class="modal-actions"><button class="btn secondary" onclick="idCard('${id}')">Preview ID</button><button class="btn" onclick="openEmployee('${id}')">Edit Employee</button></div>`)}
function idCard(id){let e=employees.find(x=>x.id===id);modal(`<div class="modal-head"><div><h2>Employee ID Preview</h2><p>Professional InfusoPay identification card.</p></div><button class="icon-btn" onclick="closeModal()">×</button></div><div class="id-card"><div class="brand"><i class="brand-mark">☕</i>InfusoPay <span style="margin-left:auto;font-size:9px;font-weight:500">EMPLOYEE ID</span></div><div class="id-person"><div class="id-photo">${generateUserIcon()}</div><div><div class="id-name">${e.name}</div><small>${e.role}<br>${e.id}</small></div><div class="qr">${generateQrMarkup(e.id)}</div></div><small>${e.qrCode} · Payroll & Workforce Management · Active employee</small></div><div class="modal-actions"><button class="btn secondary" onclick="toast('ID JPEG downloaded')">Download JPEG</button><button class="btn secondary" onclick="toast('ID PDF downloaded')">Download PDF</button><button class="btn" onclick="window.print()">Print ID</button></div>`)}
function qr(id){let e=employees.find(x=>x.id===id);modal(`<div class="modal-head"><div><h2>QR Code Preview</h2><p>Use this code for the employee attendance scanner.</p></div><button class="icon-btn" onclick="closeModal()">×</button></div><div style="display:grid;place-items:center;gap:18px;padding:16px"><div class="qr" style="width:180px;height:180px;background-size:24px 24px">${generateQrMarkup(e.id)}</div><div style="text-align:center"><b>${e.name}</b><br><span style="color:var(--muted)">${e.id} · ${e.qrCode} · ${e.role}</span></div></div><div class="modal-actions"><button class="btn secondary" onclick="toast('QR PNG downloaded')">Download PNG</button><button class="btn" onclick="window.print()">Print QR</button></div>`)}
function archiveEmployee(id){let e=employees.find(x=>x.id===id);modal(`<div class="modal-head"><div><h2>Archive employee?</h2><p>${e.name} will be moved to the archive and removed from active records.</p></div><button class="icon-btn" onclick="closeModal()">×</button></div><div class="modal-actions"><button class="btn secondary" onclick="closeModal()">Cancel</button><button class="btn danger" onclick="confirmArchive('${id}')">Archive Employee</button></div>`)}function confirmArchive(id){employees.find(x=>x.id===id).status='Archived';closeModal();toast('Employee archived successfully');go('employees')}
function openSchedule(){modal(`<div class="modal-head"><div><h2>Assign Schedule</h2><p>Create a work schedule for an active employee.</p></div><button class="icon-btn" onclick="closeModal()">×</button></div><form onsubmit="event.preventDefault();closeModal();toast('Schedule assigned successfully');go('schedules')"><div class="form-grid"><div class="field"><label>EMPLOYEE *</label><select>${employees.filter(e=>e.status==='Active').map(e=>`<option>${e.name} (${e.id})</option>`)}</select></div><div class="field"><label>SCHEDULE TYPE *</label><select><option>Weekly</option><option>Monthly</option></select></div><div class="field"><label>SHIFT NAME *</label><input value="Morning Shift" required></div><div class="field"><label>EFFECTIVE DATE *</label><input type="date" value="2026-07-27" required></div><div class="field"><label>TIME IN *</label><input type="time" value="08:00" required></div><div class="field"><label>TIME OUT *</label><input type="time" value="17:00" required></div></div><div class="field"><label>WORKING DAYS *</label><div style="display:flex;gap:8px;flex-wrap:wrap">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d,i)=>`<label style="font-weight:400"><input type="checkbox" ${i<6?'checked':''}> ${d}</label>`).join('')}</div></div><div class="modal-actions"><button type="button" class="btn secondary" onclick="closeModal()">Cancel</button><button class="btn">Assign Schedule</button></div></form>`)}
function forgotPassword(){modal(`<div class="modal-head"><div><h2>Reset password</h2><p>We’ll send a password reset link to your email.</p></div><button class="icon-btn" onclick="closeModal()">×</button></div><form onsubmit="event.preventDefault();closeModal();toast('Password reset link has been sent')"><div class="field"><label>EMAIL ADDRESS</label><input type="email" placeholder="owner@cafe.com" required></div><div class="modal-actions"><button class="btn secondary" type="button" onclick="closeModal()">Cancel</button><button class="btn">Send reset link</button></div></form>`)}
function showLogout(){modal(`<div class="modal-head"><div><h2>Log out?</h2><p>You will need to sign in again to access payroll information.</p></div><button class="icon-btn" onclick="closeModal()">×</button></div><div class="modal-actions"><button class="btn secondary" onclick="closeModal()">Cancel</button><button class="btn danger" onclick="closeModal();go('login');toast('You have been logged out')">Logout</button></div>`)}

function render(){
  let v=active==='welcome'?welcome():
        active==='login'?login():
        active==='dashboard'?dashboard():
        active==='employees'?employeesPage():
        active==='schedules'?schedules():
        active==='payroll'?payrollReports():
        active==='deductions'?deductionRulesPage():
        active==='approval'?payrollApprovalPage():
        active==='payslips'?payslipsPage():
        active==='attendance'?attendance():
        active==='employee-attendance'||active==='attendance-scanner'?employeeAttendancePage():
        placeholder(active);
  $('#app').innerHTML=v;
}
render();
