// --- InfusoPay State & Global Constants ---
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

let currentPayrollPeriod = 'Jul 16 - 31';
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
  {employeeId:'EMP-002',period:'Jul 16 - 31',ruleId:'DR-005',type:'Salary Advance',category:'Other Authorized Deductions',amount:1000,source:'Rule',status:'Applied',note:'Automatically applied salary advance'},
  {employeeId:'EMP-013',period:'Jul 16 - 31',ruleId:'MN-001',type:'Late & undertime',category:'Other Authorized Deductions',amount:120,source:'Manual',status:'Applied',note:'Attendance adjustment'},
  {employeeId:'EMP-014',period:'Jul 16 - 31',ruleId:'MN-002',type:'Late deduction',category:'Other Authorized Deductions',amount:90,source:'Manual',status:'Applied',note:'Attendance adjustment'},
  {employeeId:'EMP-015',period:'Jul 16 - 31',ruleId:'MN-003',type:'Absent deduction',category:'Other Authorized Deductions',amount:140,source:'Manual',status:'Applied',note:'Attendance adjustment'}
];

// Master Payroll Records
const payrollRecords = [
  {employeeId:'EMP-001',period:'Jul 16 - 31',regularHours:48,overtimeHours:4,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-002',period:'Jul 16 - 31',regularHours:49,overtimeHours:5,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-003',period:'Jul 16 - 31',regularHours:48,overtimeHours:3,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-004',period:'Jul 16 - 31',regularHours:46,overtimeHours:2,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-005',period:'Jul 16 - 31',regularHours:50,overtimeHours:6,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-006',period:'Jul 16 - 31',regularHours:48,overtimeHours:4,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-007',period:'Jul 16 - 31',regularHours:47,overtimeHours:5,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-008',period:'Jul 16 - 31',regularHours:49,overtimeHours:2,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-009',period:'Jul 16 - 31',regularHours:46,overtimeHours:7,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-010',period:'Jul 16 - 31',regularHours:48,overtimeHours:0,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-011',period:'Jul 16 - 31',regularHours:50,overtimeHours:6,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-012',period:'Jul 16 - 31',regularHours:47,overtimeHours:3,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-013',period:'Jul 16 - 31',regularHours:44,overtimeHours:1,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-014',period:'Jul 16 - 31',regularHours:45,overtimeHours:0,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  {employeeId:'EMP-015',period:'Jul 16 - 31',regularHours:44,overtimeHours:2,paid:false,status:'Ready for Approval',processed:'Jul 31, 2026'},
  
  // Historical Periods (Pre-Approved)
  {employeeId:'EMP-001',period:'Jul 1 - 15',regularHours:48,overtimeHours:2,paid:true,status:'Approved',processed:'Jul 16, 2026'},
  {employeeId:'EMP-002',period:'Jul 1 - 15',regularHours:48,overtimeHours:4,paid:true,status:'Approved',processed:'Jul 16, 2026'},
  {employeeId:'EMP-003',period:'Jul 1 - 15',regularHours:45,overtimeHours:0,paid:true,status:'Approved',processed:'Jul 16, 2026'},
  {employeeId:'EMP-001',period:'Jun 16 - 30',regularHours:48,overtimeHours:0,paid:true,status:'Approved',processed:'Jul 01, 2026'}
];

// Period Master Status Tracking
const periodApprovalStatus = {
  'Jul 16 - 31': { status: 'Ready for Approval', locked: false, approvedBy: '', approvedDate: '' },
  'Jul 1 - 15': { status: 'Approved', locked: true, approvedBy: 'Hazel (Owner)', approvedDate: 'Jul 16, 2026' },
  'Jun 16 - 30': { status: 'Approved', locked: true, approvedBy: 'Hazel (Owner)', approvedDate: 'Jul 01, 2026' }
};

// Automatic Generated Payslips Archive
const payslipArchive = [
  {id:'PS-20260716-001', employeeId:'EMP-001', period:'Jul 1 - 15', payDate:'Jul 16, 2026', status:'Generated'},
  {id:'PS-20260716-002', employeeId:'EMP-002', period:'Jul 1 - 15', payDate:'Jul 16, 2026', status:'Generated'},
  {id:'PS-20260716-003', employeeId:'EMP-003', period:'Jul 1 - 15', payDate:'Jul 16, 2026', status:'Generated'},
  {id:'PS-20260701-001', employeeId:'EMP-001', period:'Jun 16 - 30', payDate:'Jul 01, 2026', status:'Generated'}
];

const reportFilters = {employee:'',employeeId:'',period:'',month:'',year:'',designation:'',status:''};
let active = 'approval';
let selected = null;
let modalPayload = null;

// --- Helper & Utility Calculations ---
function employeeById(id){ return employees.find(e=>e.id===id) || {id:'',name:'Unknown',role:'Unknown',rate:0,status:'Unknown',hired:'Unknown'}; }
function payrollFor(employeeId,period){ return payrollRecords.find(p=>p.employeeId===employeeId && p.period===period) || null; }

function ruleAppliesToEmployee(rule,employeeId){
  if(!rule.active) return false;
  return rule.appliesTo==='All' || (Array.isArray(rule.appliesTo) && rule.appliesTo.includes(employeeId));
}

function applicableDeductionRules(employeeId,period){ return deductionRules.filter(rule=>ruleAppliesToEmployee(rule,employeeId)); }

function regularPay(record){
  const emp = employeeById(record.employeeId);
  return Math.round((record.regularHours * emp.rate)*100)/100;
}

function overtimePay(record){
  const emp = employeeById(record.employeeId);
  return Math.round((record.overtimeHours * emp.rate * 1.25)*100)/100;
}

function grossPay(record){ return Math.round((regularPay(record) + overtimePay(record))*100)/100; }

function computeRuleDeduction(record,rule){
  const gross = grossPay(record);
  if(rule.type==='fixed') return rule.amount || 0;
  if(rule.type==='percentage') return Math.round((gross * (rule.rate || 0))*100)/100;
  return 0;
}

function deductionHistoryFor(employeeId,period){
  const record = payrollFor(employeeId,period) || {employeeId,period,regularHours:0,overtimeHours:0};
  const manual = deductionHistory.filter(d=>d.employeeId===employeeId && d.period===period);
  const ruleEntries = applicableDeductionRules(employeeId,period).map(rule=>({
    employeeId, period, ruleId:rule.id, type:rule.name, category:rule.category,
    amount:computeRuleDeduction(record,rule), source:'Rule', status:'Applied'
  }));
  return [...manual, ...ruleEntries];
}

function payrollDeductionsTotal(record){
  const items = deductionHistoryFor(record.employeeId, record.period);
  return Math.round(items.reduce((sum, item) => sum + (item.amount || 0), 0)*100)/100;
}

function netPay(record){ return Math.round((grossPay(record) - payrollDeductionsTotal(record))*100)/100; }

function formatCurrency(val){ return `₱${Number(val||0).toLocaleString('en-PH', {minimumFractionDigits:2, maximumFractionDigits:2})}`; }

function toast(message, type='success'){
  const region = $('#toast-region') || document.body;
  const e = document.createElement('div');
  e.className = 'toast ' + type;
  e.style.cssText = `position:fixed;bottom:20px;right:20px;background:${type==='error'?'#8B0000':'#4A342A'};color:#FFFDF1;padding:12px 20px;border-radius:8px;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.15);font-weight:600;`;
  e.textContent = message;
  region.appendChild(e);
  setTimeout(() => e.remove(), 3200);
}

// --- Navigation & Core Layout ---
const nav = [
  ['dashboard','⌂','Dashboard'],
  ['employees','♙','Employees'],
  ['schedules','▦','Schedules'],
  ['payroll','₱','Payroll Reports'],
  ['deductions','−','Deduction Rules'],
  ['approval','✓','Payroll Approval'],
  ['payslips','▤','Payslips'],
  ['attendance','◷','Attendance Monitoring'],
  ['settings','⚙','Settings'],
  ['archive','▣','Archive']
];

function go(page){
  active = page;
  selected = null;
  render();
  window.scrollTo(0, 0);
}

function layout(content, title){
  return `
    <style>
      :root {
        --bg-main: #FDFBF7;
        --card-bg: #FFFFFF;
        --text-color: #3D2E24;
        --text-light: #7A685D;
        --accent-brown: #4A342A;
        --accent-camel: #C59B27;
        --accent-light: #F4EFEA;
        --border-color: #E8E2D9;
        --success-bg: #EAF5EA;
        --success-text: #2D6A2E;
        --warning-bg: #FFF3E0;
        --warning-text: #E65100;
        --lock-bg: #F0EDE6;
      }
      body { background: var(--bg-main); color: var(--text-color); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; }
      .shell { display: flex; min-height: 100vh; }
      .sidebar { width: 250px; background: var(--accent-brown); color: #FFFDF1; padding: 20px 0; display: flex; flex-direction: column; flex-shrink: 0; }
      .brand { font-size: 1.4rem; font-weight: 700; padding: 0 20px 20px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); }
      .nav-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #C5B0A2; padding: 15px 20px 5px; }
      .nav-item { display: flex; align-items: center; gap: 12px; padding: 12px 20px; color: #E0D3C9; background: none; border: none; width: 100%; text-align: left; cursor: pointer; font-size: 0.95rem; font-weight: 500; transition: all 0.2s; }
      .nav-item:hover, .nav-item.active { background: rgba(255,255,255,0.12); color: #FFFFFF; }
      .nav-item.active { border-left: 4px solid var(--accent-camel); }
      .content { flex: 1; padding: 30px; background: var(--bg-main); overflow-x: hidden; }
      .topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid var(--border-color); }
      .crumb { font-size: 0.85rem; color: var(--text-light); }
      .top-actions { display: flex; align-items: center; gap: 15px; }
      .avatar { width: 36px; height: 36px; border-radius: 50%; background: var(--accent-camel); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem; }
      
      /* Reusable Components & UI Cards */
      .card { background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border-color); padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); margin-bottom: 20px; }
      .flex-between { display: flex; justify-content: space-between; align-items: center; }
      .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 20px; }
      .stat-card { background: var(--card-bg); border: 1px solid var(--border-color); padding: 18px; border-radius: 10px; }
      .stat-card .val { font-size: 1.5rem; font-weight: 700; color: var(--accent-brown); margin-top: 5px; }
      .stat-card .lbl { font-size: 0.85rem; color: var(--text-light); }
      
      /* Buttons */
      .btn { background: var(--accent-brown); color: #FFFDF1; border: none; padding: 10px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem; transition: background 0.2s; display: inline-flex; align-items: center; gap: 8px; }
      .btn:hover { background: #35241C; }
      .btn-secondary { background: var(--accent-light); color: var(--accent-brown); border: 1px solid var(--border-color); }
      .btn-secondary:hover { background: #EAE3DA; }
      .btn-success { background: #2E7D32; color: #FFF; }
      .btn-success:hover { background: #1B5E20; }
      .btn-warning { background: var(--warning-text); color: #FFF; }
      .btn-sm { padding: 6px 12px; font-size: 0.8rem; border-radius: 6px; }
      .btn:disabled { opacity: 0.55; cursor: not-allowed; }

      /* Badges */
      .badge { display: inline-block; padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 600; text-transform: uppercase; }
      .badge-ready { background: var(--warning-bg); color: var(--warning-text); }
      .badge-approved { background: var(--success-bg); color: var(--success-text); }
      .badge-locked { background: var(--lock-bg); color: var(--text-light); border: 1px solid var(--border-color); }

      /* Tables */
      .table-responsive { overflow-x: auto; }
      table.data-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; }
      table.data-table th { background: var(--accent-light); color: var(--accent-brown); padding: 12px 14px; font-weight: 600; border-bottom: 1px solid var(--border-color); }
      table.data-table td { padding: 12px 14px; border-bottom: 1px solid var(--border-color); color: var(--text-color); }
      table.data-table tr:hover { background: #FAF7F2; }

      /* Filter Controls */
      .filter-bar { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; background: var(--accent-light); padding: 15px; border-radius: 10px; }
      .filter-group { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 140px; }
      .filter-group label { font-size: 0.75rem; font-weight: 600; color: var(--text-light); text-transform: uppercase; }
      .filter-group select, .filter-group input { padding: 8px 12px; border-radius: 6px; border: 1px solid var(--border-color); font-size: 0.88rem; background: #FFF; }

      /* Modal Styling */
      .modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center; z-index: 900; }
      .modal-content { background: #FFF; border-radius: 12px; width: 100%; max-width: 650px; max-height: 90vh; overflow-y: auto; padding: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
      .modal-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; margin-bottom: 16px; }
      .modal-footer { display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--border-color); padding-top: 16px; margin-top: 20px; }

      /* Printable Payslip Specific Style */
      .payslip-paper { background: #FFFDF9; border: 2px solid var(--accent-brown); padding: 25px; border-radius: 8px; font-family: 'Courier New', Courier, monospace; color: #2B1E16; }
      .payslip-header { text-align: center; border-bottom: 2px dashed var(--accent-brown); padding-bottom: 12px; margin-bottom: 16px; }
      .payslip-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 16px; }
      .payslip-section-title { font-weight: bold; border-bottom: 1px solid var(--accent-brown); padding-bottom: 4px; margin-bottom: 8px; text-transform: uppercase; font-size: 0.85rem; }
      .payslip-row { display: flex; justify-content: space-between; font-size: 0.88rem; padding: 3px 0; }
      .payslip-total { border-top: 2px solid var(--accent-brown); padding-top: 8px; font-weight: bold; font-size: 1.05rem;
