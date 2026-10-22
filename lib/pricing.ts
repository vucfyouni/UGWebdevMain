export const packages = [
 {name:'Starter',low:400,high:700,pages:'1–3 pages',description:'A confident first step online.',features:['Responsive design','Basic SEO & contact form','2 revision rounds']},
 {name:'Business',low:900,high:1800,pages:'4–8 pages',description:'Room for your business to grow.',features:['Brand integration','Analytics setup','3 revision rounds']},
 {name:'Professional',low:2000,high:4000,pages:'8–15 pages',description:'A bigger vision, brought to life.',features:['Content management system','Advanced SEO & integrations','4 revision rounds']}
];
export const addons = [{id:'seo',name:'Expanded SEO setup',low:150,high:400,note:'Additional keyword and on-page setup; final scope confirmed in your quote.'},{id:'booking',name:'Booking integration',low:150,high:400,note:'Connect scheduling to your website.'},{id:'commerce',name:'E-commerce integration',low:400,high:1000,note:'Indicative range; complex stores may exceed $1,000.'}];
export const carePlans = [{name:'No care plan',price:0,note:'Hosting and ongoing support quoted separately.'},{name:'Basic',price:20,note:'Hosting, SSL, weekly backups & security updates.'},{name:'Managed',price:60,note:'Daily backups, monitoring & 1 content-edit hour.'},{name:'Premium',price:125,note:'Managed services, priority support & 3 content-edit hours.'}];
export function estimate(tier:number,extraPages:number,selected:string[],rush:boolean){const p=packages[tier];let low=p.low+extraPages*100,high=p.high+extraPages*200;for(const a of addons)if(selected.includes(a.id)){low+=a.low;high+=a.high;}return {low:Math.ceil(low*(rush?1.2:1)),high:Math.ceil(high*(rush?1.35:1))};}
export const money=(n:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
