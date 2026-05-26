import React, { useState, useRef, useEffect } from "react";

// Load Fotona brand fonts from Google Fonts
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
  return null;
};

const RED = "#ed1c24";
const RED_DIM = "rgba(237,28,36,0.07)";
const RED_BORDER = "rgba(237,28,36,0.25)";
const BLACK = "#000000";
const GREY = "#414042";
const GREY_LIGHT = "#80828a";
const GREY_BORDER = "#e5e5e5";
const GREY_BG = "#f5f5f5";
const WHITE = "#FFFFFF";

const TREATMENT_PRICES = {
  "Fotona®4D®":[300,800],"SmoothEye®":[250,600],"LipLase®":[200,500],"NightLase®":[600,1200],
  "SmoothLase®":[250,700],"TightSculpting®":[500,1500],"TensorTight®":[300,900],"VectorLift®":[400,900],
  "Fotona®4D® MEN":[300,800],"EndoTight™":[300,800],"Acne Scar Revision":[300,900],"FracRevive™":[300,900],
  "FracTAT®":[250,800],"Facial Vascular Lesion Removal":[200,700],"Hair Reduction / Removal":[150,500],
  "SWEEPS®":[250,700],"TwinLight® Periodontal Treatment":[300,800],"TwinLight® Peri-Implantitis Treatment":[400,1000],
  "Apicoectomy":[500,1200],"Cavity Preparation":[150,400],"Composite Material Removal":[150,400],
  "Cosmetic Dentistry":[300,1000],"Frenectomy Treatment":[250,700],"Gingivectomy":[250,700],
  "Gingivoplasty":[250,700],"Hard-Tissue Crown Lengthening":[400,1000],"Herpetic Lesions":[75,250],
  "Implant Recovery":[200,600],"Fibroma Removal":[150,500],"Hemangioma Treatment":[200,600],
  "ComfortLase®":[100,400],"CoreRestore™":[150,500],"Muscle Restoration":[100,400],
  "General Medicine & Rehabilitation":[100,350],"Holistic Wellness":[100,350],
  "ClearSteps®":[500,1500],"Endovenous Laser Ablation (EVLA)":[1500,3500],
};

const DEVICE_RECS = {
  dental:{
    leader:{device:"LightWalker MAX",tagline:"The flagship platform for practices setting the clinical standard.",fit:"Multi-indication depth across hard and soft tissue. SWEEPS® and TwinLight® protocols position this as a true leadership system — not just a versatile tool.",angle:"Clinical Leadership",cost:189000,payback:[10,18],treatments:["SWEEPS®","TwinLight® Periodontal Treatment","TwinLight® Peri-Implantitis Treatment","NightLase®","Cosmetic Dentistry","Apicoectomy"],expansion:"Advanced modules, expanded indications, deeper multi-protocol utilization across the practice."},
    optimizer:{device:"LightWalker AT-S",tagline:"Proven ROI across the procedures your practice already does.",fit:"SWEEPS® and hard-tissue capability in a workflow-efficient platform. Clear utilization logic tied to everyday procedures — Optimizers respond to economic clarity.",angle:"Efficiency & ROI",cost:149000,payback:[8,16],treatments:["SWEEPS®","Cavity Preparation","Apicoectomy","Composite Material Removal","NightLase®","Implant Recovery"],expansion:"Add indications as throughput and demand are proven — clear path to LightWalker MAX."},
    mainstream:{device:"LightWalker STE Pro Plus II",tagline:"Where most practices at this stage start — and succeed.",fit:"Versatile soft-tissue capability across the most common entry procedures. Low adoption friction, straightforward team onboarding, and a proven track record across GP practices.",angle:"Proven Adoption",cost:89000,payback:[6,14],treatments:["Frenectomy Treatment","Gingivectomy","Gingivoplasty","Herpetic Lesions","Fibroma Removal","Hemangioma Treatment"],expansion:"Incremental capability expansion after consistent usage — natural path to LightWalker AT-S."},
    certseeker:{device:"LightWalker STE Pro Plus II",tagline:"A structured, supported entry into laser dentistry.",fit:"The same platform most practices start with — but the angle here is the training pathway and onboarding structure, not the peer adoption story.",angle:"Training & Structure",cost:89000,payback:[6,14],treatments:["Frenectomy Treatment","Gingivectomy","Gingivoplasty","Herpetic Lesions","Fibroma Removal","Hemangioma Treatment"],expansion:"Capability unlock after certification milestones — sequenced, not rushed."},
    traditionalist:null,
  },
  aesthetics:{
    leader:{device:"SP Dynamis Max",tagline:"The premium platform for practices building a differentiated aesthetic brand.",fit:"Fotona®4D®, TightSculpting®, SmoothEye® and TensorTight® in one platform — the breadth and brand recognition to signal leadership in any market.",angle:"Premium Positioning",cost:189034,payback:[9,19],treatments:["Fotona®4D®","TightSculpting®","SmoothEye®","LipLase®","TensorTight®","NightLase®"],expansion:"Advanced modules, treatment bundling, expanded body and facial indications."},
    optimizer:{device:"TimeWalker® Fotona®4D® Pro",tagline:"Branded protocols with a clear revenue story.",fit:"Fotona®4D® and a focused set of high-demand branded aesthetic protocols with strong per-treatment revenue logic. Optimizers respond to the clear treatment-to-revenue connection.",angle:"Revenue Efficiency",cost:124950,payback:[10,20],treatments:["Fotona®4D®","SmoothEye®","LipLase®","VectorLift®","Fotona®4D® MEN","EndoTight™"],expansion:"Add body-focused treatments and higher-complexity indications as demand is validated."},
    mainstream:{device:"XP Dynamis",tagline:"High-demand treatments your market is already asking for.",fit:"Hair reduction, SmoothLase® and facial vascular treatments — the most commonly requested non-surgical services. Lead with what peers are already doing.",angle:"Proven Demand",cost:98000,payback:[7,15],treatments:["Hair Reduction / Removal","SmoothLase®","LipLase®","TensorTight®","Facial Vascular Lesion Removal"],expansion:"Incremental upgrades to advanced facial and body treatments as patient base grows."},
    certseeker:{device:"XP Dynamis",tagline:"A clear, supported entry into aesthetic laser services.",fit:"The same platform most aesthetic practices start with — frame this around the training infrastructure and protocol clarity, not the adoption numbers.",angle:"Protocol Clarity",cost:98000,payback:[7,15],treatments:["Hair Reduction / Removal","SmoothLase®","LipLase®","TensorTight®","Facial Vascular Lesion Removal"],expansion:"Capability unlock after training milestones — advanced treatments follow demonstrated readiness."},
    traditionalist:null,
  },
  medical:{
    leader:{device:"AvalancheLase",tagline:"Advanced clinical pathways for practices building specialty authority.",fit:"EVLA and advanced medical-grade capabilities position this as a genuine specialty platform — not a wellness add-on. Leaders respond to the clinical authority signal.",angle:"Specialty Authority",cost:165000,payback:[11,20],treatments:["Endovenous Laser Ablation (EVLA)","ClearSteps®","ComfortLase®","CoreRestore™","General Medicine & Rehabilitation","Holistic Wellness"],expansion:"Expanded specialty indications, advanced protocols, broader clinical scope."},
    optimizer:{device:"TimeWalker II",tagline:"Broad rehabilitation capability with a clear efficiency story.",fit:"A versatile medical platform covering rehabilitation, EVLA and wellness with strong utilization logic across multiple patient types.",angle:"Utilization Efficiency",cost:129000,payback:[9,18],treatments:["ComfortLase®","CoreRestore™","General Medicine & Rehabilitation","Holistic Wellness","ClearSteps®","Endovenous Laser Ablation (EVLA)"],expansion:"Add advanced indications as throughput and revenue are validated."},
    mainstream:{device:"XPulse",tagline:"Non-invasive wellness services — proven, practical, patient-friendly.",fit:"A straightforward entry into medical laser applications with strong patient acceptance and low clinical risk. Lead with the fact that this is how most practices start.",angle:"Low Clinical Risk",cost:79000,payback:[6,13],treatments:["ComfortLase®","CoreRestore™","Muscle Restoration","General Medicine & Rehabilitation","Holistic Wellness","ClearSteps®"],expansion:"Incremental capability expansion after consistent patient adoption."},
    certseeker:{device:"XPulse",tagline:"A structured, low-risk entry into medical laser therapy.",fit:"The same platform most practices start with — but the conversation centers on the training pathway, protocol availability, and what structured onboarding looks like.",angle:"Structured Protocols",cost:79000,payback:[6,13],treatments:["ComfortLase®","CoreRestore™","Muscle Restoration","General Medicine & Rehabilitation","Holistic Wellness","ClearSteps®"],expansion:"Capability unlock follows clinical competency milestones — not a timeline."},
    traditionalist:null,
  },
};

const COMPETITORS = {
  dental:[
    {key:"biolase",name:"Biolase",flagship:"WaterLase iPlus",modality:"Er,Cr:YSGG + Diode",weakness:"Limited hard-tissue versatility vs Fotona® dual-wavelength; higher consumable costs per procedure.",fotona_edge:"SWEEPS® protocol has no Biolase equivalent. LightWalker covers broader indications with fewer handpieces and lower consumable dependency."},
    {key:"periolase",name:"PerioLase",flagship:"MVP-7",modality:"Nd:YAG",weakness:"Single-indication focus (LANAP); limited versatility outside periodontics; high price for narrow scope.",fotona_edge:"TwinLight® Periodontal Treatment delivers comparable perio outcomes with full multi-indication platform capability — no single-use premium."},
    {key:"lightscalpel",name:"LightScalpel",flagship:"CO₂ Laser Systems",modality:"CO₂",weakness:"Soft tissue only; no hard-tissue capability; limited protocol depth; requires supplemental systems.",fotona_edge:"LightWalker covers both hard and soft tissue in a single platform — LightScalpel requires additional investment for hard-tissue work."},
    {key:"dentsply",name:"Dentsply Sirona",flagship:"SIROLaser",modality:"Diode",weakness:"Diode only; limited to soft-tissue procedures; no branded protocols; minimal clinical differentiation.",fotona_edge:"Er:YAG + Nd:YAG dual-wavelength opens hard-tissue, endo, and perio indications completely unavailable with diode systems."},
  ],
  aesthetics:[
    {key:"cynosure",name:"Cynosure Lutronic",flagship:"Icon / Palomar",modality:"IPL / Fractional",weakness:"Heavy consumable dependency; IPL limitations on darker skin tones; less differentiated in non-surgical lifting.",fotona_edge:"Fotona®'s proprietary protocols (Fotona®4D®, TightSculpting®) have no direct Cynosure equivalent and require zero consumables."},
    {key:"cutera",name:"Cutera",flagship:"Secret RF / Excel V+",modality:"RF Microneedling / KTP",weakness:"RF microneedling requires consumables and involves skin penetration; less differentiated for non-invasive facial lifting.",fotona_edge:"Fotona®4D® and VectorLift® deliver lifting and tightening results without needles, consumables, or downtime — a clearer patient story."},
    {key:"inmode",name:"InMode",flagship:"Morpheus8 / Optimus",modality:"RF Microneedling",weakness:"Invasive RF microneedling model; significant consumable costs; downtime risk makes patient-facing marketing harder.",fotona_edge:"Fotona® branded protocols are non-invasive with minimal downtime — a differentiating advantage for patient acquisition and marketing."},
    {key:"sciton",name:"Sciton",flagship:"JOULE / HALO",modality:"Er:YAG / BBL",weakness:"High price point; HALO limited to resurfacing — narrower protocol library than Fotona®'s full platform.",fotona_edge:"Fotona®'s multi-wavelength platform covers resurfacing, lifting, tightening and body in one system vs Sciton's modular add-on approach."},
    {key:"btl",name:"BTL Aesthetics",flagship:"Emsculpt NEO / Exilis",modality:"HIFEM / RF",weakness:"Body-only focus; no facial indications; entirely different patient profile from aesthetic laser buyers.",fotona_edge:"Fotona® serves facial and body from a single platform. BTL requires a separate system investment to cover facial indications."},
  ],
  medical:[
    {key:"erchonia",name:"Erchonia",flagship:"FX 635 / Emerald",modality:"Low-Level Laser",weakness:"Limited clinical depth; low-level therapy only; no surgical or advanced indications.",fotona_edge:"Fotona®'s higher-power platforms enable surgical-grade indications and EVLA that are entirely outside Erchonia's clinical scope."},
    {key:"lumenis",name:"Lumenis",flagship:"AcuPulse / UltraPulse",modality:"CO₂ / Pulse Dye",weakness:"Primarily aesthetic-surgical focus; limited rehabilitation or wellness pathway depth for medical practices.",fotona_edge:"Fotona®'s medical platforms bridge aesthetic and rehabilitation indications — broader practice revenue diversification opportunity."},
    {key:"angiodynamics",name:"AngioDynamics",flagship:"VenaCure EVLT",modality:"980nm Diode (EVLA)",weakness:"EVLA-only focus; no multi-indication capability; practice revenue limited to a single procedure type.",fotona_edge:"Fotona® EVLA capability combined with rehabilitation and wellness indications creates a diversified platform vs a single-use device."},
  ],
};

const BUYING_SIGNALS = [
  {key:"leader",label:"I want to lead my market",sub:"Differentiation and reputation matter most. I want to be the practice others look to first.",color:"#7c3aed"},
  {key:"optimizer",label:"I need to see the ROI clearly",sub:"I evaluate decisions carefully — payback period, utilization, and efficiency all matter.",color:"#0284c7"},
  {key:"mainstream",label:"I want something proven",sub:"I prefer solutions with a track record. I want to know other practices are already succeeding with this.",color:"#059669"},
  {key:"certseeker",label:"I want training and support",sub:"Before I commit, I need to know my team will be fully supported and confident from day one.",color:"#d97706"},
  {key:"traditionalist",label:"I'm not sure I need to change",sub:"What we're doing works. I'm open to learning more, but I'm not ready to make a decision.",color:"#6b7280"},
];

const PERSONA_GUIDANCE = {
  leader:{talking:["Position around clinical leadership and market differentiation — this practice sets the standard.","Emphasize advanced capability and future-ready platform depth, not versatility alone.","Reference KOL usage and peer-level validation — not broad adoption numbers.","Frame the investment as a competitive advantage, not just an operational upgrade."],next:["Move quickly once credibility is established — don't linger on fundamentals.","Set up an advanced demo or clinical deep-dive as the next step.","Identify a proof moment: an advanced case or peer introduction that validates capability.","Avoid prolonged ROI justification — this buyer leads on clinical ambition."]},
  optimizer:{talking:["Open with efficiency gains and throughput impact tied to everyday procedures.","Make the economic logic explicit — time per case, utilization rate, payback window.","Show how this fits existing workflow rather than requiring a workflow rebuild.","Use peer examples from similar practices — operators, not thought leaders."],next:["Establish ROI credibility early — this is the unlock for the rest of the conversation.","Progress step-by-step; avoid jumping to advanced capability before value is validated.","Define the proof moment: increased case volume, faster procedures, team adoption.","Set a follow-up with concrete utilization milestones to track progress."]},
  mainstream:{talking:["Lead with broad adoption data and peer case stories from comparable practices.","Address implementation simplicity and standard workflow integration head-on.","Keep technical depth minimal — lead with outcomes, not features.","Use social proof extensively; volume of proof matters more than depth here."],next:["Don't rush — this buyer needs to feel safe before they feel excited.","Peer introduction or site visit is the highest-value next step.","Set a low-commitment demo with familiar practices in their area.","Leave behind simple, outcome-focused collateral."]},
  certseeker:{talking:["Walk through the full education pathway with timelines and milestones.","Reference comparable onboarding examples and staff readiness support.","Be specific about post-go-live resources and escalation paths.","Frame the entry configuration as a structured, low-commitment first step."],next:["Lead with the training and certification roadmap — not the device specs.","Offer a structured demo tied to a specific protocol, not a full system overview.","Connect them with a practice that went through the same onboarding journey.","Slow down — confidence is built incrementally for this buyer."]},
  traditionalist:{talking:["Acknowledge their current workflow — don't argue with what's working.","Ask what would need to change for them to reconsider, then listen without pushing.","Plant a seed — leave a simple leave-behind and set a low-key follow-up.","Do not push for commitment; patience is the only play here."],next:["Do not push for commitment — redirect time to higher-value prospects.","Note for future re-engagement when market adoption data is stronger.","Leave one simple asset; schedule a follow-up in 6–12 months.","Move on — don't over-invest in a buyer signaling no urgency."]},
};

const PRACTICE_TYPES = {
  dental:[
    {key:"gp",label:"General Practitioner (GP)",sub:"We offer broad-scope dentistry — restorative, cosmetic, and preventive care."},
    {key:"endo",label:"Endodontist",sub:"We're a specialty referral practice. Our focus is root canal therapy and related care."},
    {key:"perio",label:"Periodontist",sub:"We focus on periodontal health, gum disease treatment, and implant procedures."},
    {key:"oral",label:"Oral Surgery",sub:"We handle surgical extractions, implant placement, and complex oral procedures."},
  ],
  aesthetics:[
    {key:"medspa",label:"Medical Spa / Aesthetic Clinic",sub:"We offer non-surgical aesthetic services across a range of treatment types."},
    {key:"derm",label:"Dermatology / Plastic Surgery",sub:"We're a medically-led practice with high clinical standards and complex cases."},
    {key:"wellness",label:"Wellness / Anti-Aging",sub:"We focus on holistic, wellness-centered aesthetic care for our patients."},
    {key:"multi",label:"Multi-Specialty Aesthetic",sub:"We offer multiple aesthetic disciplines and treatment categories under one roof."},
  ],
  medical:[
    {key:"rehab",label:"Wellness / Rehabilitation",sub:"We specialize in holistic care, physical therapy, and patient recovery programs."},
    {key:"surgical",label:"Surgical / Specialty Medical",sub:"We're a higher-acuity practice with specialist-level clinical expectations and cases."},
  ],
};

const STAGES=[{key:"foundation",label:"Just Getting Started",sub:"New to laser, or adding it for the first time. We want a clear, supported entry point."},{key:"advanced",label:"Growing & Adding Services",sub:"We have a base in place and are ready to expand into new treatments and grow revenue."},{key:"elite",label:"High Volume & Looking to Lead",sub:"Laser is already part of our workflow. We want to upgrade, differentiate, or do more."}];

const money=(v)=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(Number.isFinite(v)?v:0);
function mPmt(cost,annualRate=0.15){const r=annualRate/12;return cost*(r*Math.pow(1+r,60))/(Math.pow(1+r,60)-1);}

// ─── SHARED UI ────────────────────────────────────────────────────────────────
function Label({children}){return <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}><div style={{width:3,height:18,background:RED}}/><div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:10,letterSpacing:"0.35em",color:RED,textTransform:"uppercase",fontWeight:700}}>{children}</div></div>;}
function H1({children}){return <h1 style={{fontFamily:"Georgia,serif",fontSize:34,fontWeight:700,color:BLACK,lineHeight:1.15,marginBottom:10,letterSpacing:"-0.01em"}}>{children}</h1>;}
function Sub({children}){return <p style={{fontFamily:"Georgia,serif",fontSize:15,color:GREY,lineHeight:1.75,marginBottom:32}}>{children}</p>;}

function Card({active,onClick,label,sub,accent}){
  return(
    <div onClick={onClick} style={{border:active?`2px solid ${accent||RED}`:`1px solid ${GREY_BORDER}`,background:active?(accent?`${accent}08`:RED_DIM):WHITE,padding:"20px 22px",cursor:"pointer",transition:"all 0.15s",boxShadow:active?`0 0 0 1px ${accent||RED}`:"0 1px 3px rgba(0,0,0,0.05)",position:"relative",height:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column"}}>
      {active&&<div style={{position:"absolute",top:12,right:12,width:18,height:18,borderRadius:"50%",background:accent||RED,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{color:WHITE,fontSize:10,fontWeight:800}}>✓</span></div>}
      <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:14,fontWeight:700,color:BLACK,marginBottom:sub?8:0,paddingRight:active?24:0,lineHeight:1.3,minHeight:42}}>{label}</div>
      {sub&&<div style={{fontFamily:"Georgia,serif",fontSize:13,color:GREY,lineHeight:1.6}}>{sub}</div>}
    </div>
  );
}

function Btn({onClick,children,disabled,secondary}){
  return(
    <button onClick={onClick} disabled={disabled} style={{padding:"12px 28px",background:disabled?GREY_BG:secondary?WHITE:RED,border:secondary?`1px solid ${GREY_BORDER}`:"none",color:disabled?GREY_LIGHT:secondary?GREY:WHITE,cursor:disabled?"not-allowed":"pointer",fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase"}}>
      {children}
    </button>
  );
}

function Nav({onBack,onNext,nextLabel="Next →",disabled}){
  return(
    <div style={{display:"flex",gap:12,marginTop:40,paddingTop:28,borderTop:`1px solid ${GREY_BORDER}`}}>
      {onBack&&<Btn onClick={onBack} secondary>← Back</Btn>}
      <Btn onClick={onNext} disabled={disabled}>{nextLabel}</Btn>
    </div>
  );
}

function SessionSidebar({data}){
  const rows=[
    data.division&&{l:"Division",v:data.division.charAt(0).toUpperCase()+data.division.slice(1)},
    data.practiceType&&{l:"Practice Type",v:(PRACTICE_TYPES[data.division]||[]).find(p=>p.key===data.practiceType)?.label},
    data.stage&&{l:"Stage",v:STAGES.find(s=>s.key===data.stage)?.label},
    data.persona&&{l:"What Matters Most",v:BUYING_SIGNALS.find(s=>s.key===data.persona)?.label},
    data.device&&{l:"Recommended System",v:data.device.device},
    (data.competitors||[]).filter(k=>k!=="__none__").length>0&&{l:"Comparing Against",v:(data.competitors||[]).filter(k=>k!=="__none__").map(k=>(COMPETITORS[data.division]||[]).find(c=>c.key===k)?.name).filter(Boolean).join(", ")},
  ].filter(Boolean);
  return(
    <div style={{background:BLACK,padding:"20px 24px",position:"sticky",top:84,borderTop:`3px solid ${RED}`}}>
      <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,letterSpacing:"0.35em",color:RED,textTransform:"uppercase",marginBottom:16,fontWeight:700}}>Session Summary</div>
      {rows.length===0
        ?<div style={{fontFamily:"Georgia,serif",fontSize:12,color:"rgba(255,255,255,0.28)",fontStyle:"italic",lineHeight:1.6}}>Your answers will appear here as you progress.</div>
        :<div style={{display:"flex",flexDirection:"column",gap:10}}>
          {rows.map(r=>(
            <div key={r.l} style={{background:WHITE,padding:"12px 14px",borderLeft:`3px solid ${RED}`}}>
              <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:RED,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:4,fontWeight:700}}>{r.l}</div>
              <div style={{fontFamily:"Georgia,serif",fontSize:13,color:BLACK,fontWeight:600,lineHeight:1.4}}>{r.v}</div>
            </div>
          ))}
        </div>}
    </div>
  );
}

function Shell({children,sidebar,step,total}){
  return(
    <div style={{maxWidth:1160,margin:"0 auto",padding:"40px 32px",display:"grid",gridTemplateColumns:sidebar?"1fr 300px":"1fr",gap:36,alignItems:"start"}}>
      <div>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:28}}>
          {Array.from({length:total},(_,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:8}}>
              <div style={{width:i+1===step?28:20,height:i+1===step?28:20,borderRadius:"50%",background:i+1<step?RED:i+1===step?BLACK:GREY_BG,border:i+1===step?`2px solid ${BLACK}`:i+1<step?"none":`1px solid ${GREY_BORDER}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:800,color:i+1<step?WHITE:i+1===step?WHITE:GREY_LIGHT,transition:"all 0.2s",flexShrink:0}}>
                {i+1<step?"✓":i+1}
              </div>
              {i<total-1&&<div style={{width:24,height:2,background:i+1<step?RED:GREY_BORDER}}/>}
            </div>
          ))}
        </div>
        {children}
      </div>
      {sidebar&&<div>{sidebar}</div>}
    </div>
  );
}

// ─── SCREENS ─────────────────────────────────────────────────────────────────

function FotonaLogo({color="white", size=1}){
  // SVG-based logo for pixel-perfect replication of Fotona brand mark
  const w = 160 * size;
  const h = 52 * size;
  const textColor = color === "white" ? "#ffffff" : "#000000";
  const taglineColor = color === "white" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.5)";
  return(
    <div style={{display:"inline-block",cursor:"pointer",userSelect:"none"}}>
      <svg width={w} height={h} viewBox="0 0 160 52" xmlns="http://www.w3.org/2000/svg">
        {/* Wordmark — "Fotona" in serif bold */}
        <text
          x="0" y="34"
          fontFamily="Georgia,'Times New Roman',serif"
          fontSize="36"
          fontWeight="700"
          fill={textColor}
          letterSpacing="0.5"
        >Fotona</text>
        {/* Red laser dot — above the "a" */}
        <circle cx="133" cy="7" r="6" fill="#ed1c24"/>
        {/* ® — small, at baseline just right of the "a" */}
        <text
          x="137" y="34"
          fontFamily="Georgia,serif"
          fontSize="7"
          fill={textColor}
          opacity="0.8"
        >®</text>
        {/* choose perfection tagline */}
        <text
          x="0" y="50"
          fontFamily="'Inter Tight','Inter',Arial,sans-serif"
          fontSize="10"
          fontWeight="400"
          fill={taglineColor}
          letterSpacing="3"
        >choose perfection</text>
      </svg>
    </div>
  );
}

function Landing({onStart}){
  return(
    <div style={{background:WHITE,display:"flex",flexDirection:"column",minHeight:"100vh"}}>
      {/* Nav */}
      <div style={{background:BLACK,borderBottom:`3px solid ${RED}`,padding:"0 32px",flexShrink:0}}>
        <div style={{maxWidth:1160,margin:"0 auto",display:"flex",alignItems:"center",height:72}}>
          <FotonaLogo color="white" size={0.85}/>
        </div>
      </div>

      {/* Content — single column, no auto margins pushing things apart */}
      <div style={{maxWidth:900,width:"100%",margin:"0 auto",padding:"56px 32px 0",boxSizing:"border-box"}}>

        {/* Eyebrow */}
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
          <div style={{width:8,height:8,borderRadius:"50%",background:RED}}/>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:10,letterSpacing:"0.35em",color:RED,textTransform:"uppercase",fontWeight:600}}>Guided Customer Journey</div>
        </div>

        {/* Headline */}
        <h1 style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:68,fontWeight:700,color:BLACK,lineHeight:0.93,letterSpacing:"-0.025em",marginBottom:28,textTransform:"uppercase"}}>
          Find Your<br/>Perfect<br/><span style={{color:RED}}>Fotona®</span><br/>System.
        </h1>

        {/* Body */}
        <p style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:15,color:GREY,lineHeight:1.75,maxWidth:520,marginBottom:32,fontWeight:400}}>
          A guided experience that identifies the right device for your practice, benchmarks it against the competition, and models your revenue potential.
        </p>

        {/* Step bar — immediately below body copy */}
        <div style={{borderTop:`2px solid ${BLACK}`,marginBottom:32}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0}}>
            {[
              {n:"01",t:"Identify",d:"Select your division, practice type, and where you are in your growth journey."},
              {n:"02",t:"Profile",d:"We identify your buyer profile and match you with the right Fotona® system."},
              {n:"03",t:"Benchmark",d:"See a side-by-side comparison against any competing systems you're evaluating."},
              {n:"04",t:"Model ROI",d:"Input your patient volume and see an illustrative revenue potential estimate."},
            ].map((s,i)=>(
              <div key={s.n}
                style={{padding:"24px 20px",borderRight:i<3?`1px solid ${GREY_BORDER}`:"none",borderBottom:`1px solid ${GREY_BORDER}`}}>
                <div style={{fontFamily:"Georgia,serif",fontSize:34,fontWeight:700,color:RED,marginBottom:8,lineHeight:1,fontStyle:"italic"}}>{s.n}</div>
                <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:11,fontWeight:700,color:BLACK,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.1em"}}>{s.t}</div>
                <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:12,color:GREY,lineHeight:1.6,fontWeight:400}}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA — directly below step bar */}
        <div style={{display:"flex",gap:16,alignItems:"center",paddingBottom:48}}>
          <Btn onClick={onStart}>Begin Assessment →</Btn>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:10,color:GREY_LIGHT,letterSpacing:"0.15em",textTransform:"uppercase"}}>Approx. 4 minutes</div>
        </div>

      </div>

      {/* Footer */}
      <div style={{marginTop:"auto",background:BLACK,padding:"12px 32px"}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:10,color:"rgba(255,255,255,0.4)",letterSpacing:"0.2em",textTransform:"uppercase"}}>Fotona® — choose perfection</div>
        </div>
      </div>

    </div>
  );
}

function S1_Division({data,setData,onNext}){
  return(
    <Shell step={1} total={8} sidebar={<SessionSidebar data={data}/>}>
      <Label>Step 1 of 8 — Your Practice</Label>
      <H1>What best describes your practice?</H1>
      <Sub>Let's start with the area of care your practice focuses on. This helps us tailor everything that follows to your specific situation.</Sub>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14}}>
        {[{key:"dental",label:"Dental",sub:"Dental and dental-adjacent treatment pathways — GP, specialist, and surgical."},{key:"aesthetics",label:"Aesthetics",sub:"Facial, body, and skin-focused treatment pathways — medspa, derm, and plastic surgery."},{key:"medical",label:"Medical",sub:"Wellness, rehabilitation, and broader medical treatment pathways."}].map(d=>(
          <Card key={d.key} label={d.label} sub={d.sub} active={data.division===d.key} onClick={()=>setData({...data,division:d.key,practiceType:null,stage:null,persona:null,device:null,competitor:null,roi:null})}/>
        ))}
      </div>
      <Nav onNext={onNext} disabled={!data.division} nextLabel="Next →"/>
    </Shell>
  );
}

function S2_PracticeType({data,setData,onNext,onBack}){
  const types=PRACTICE_TYPES[data.division]||[];
  return(
    <Shell step={2} total={8} sidebar={<SessionSidebar data={data}/>}>
      <Label>Step 2 of 8 — Practice Type</Label>
      <H1>Which best describes your practice type?</H1>
      <Sub>Select the option that most closely matches how your practice is structured. This helps us match you with the right Fotona® solution.</Sub>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:14}}>
        {types.map(t=><Card key={t.key} label={t.label} sub={t.sub} active={data.practiceType===t.key} onClick={()=>setData({...data,practiceType:t.key})}/>)}
      </div>
      <Nav onBack={onBack} onNext={onNext} disabled={!data.practiceType} nextLabel="Next →"/>
    </Shell>
  );
}

function S3_Stage({data,setData,onNext,onBack}){
  return(
    <Shell step={3} total={8} sidebar={<SessionSidebar data={data}/>}>
      <Label>Step 3 of 8 — Where You Are Today</Label>
      <H1>Where is your practice in its growth journey?</H1>
      <Sub>Every practice is at a different stage. Knowing where you are helps us recommend the right system for right now — and where you're headed.</Sub>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,alignItems:"stretch"}}>
        {STAGES.map(s=><Card key={s.key} label={s.label} sub={s.sub} active={data.stage===s.key} onClick={()=>setData({...data,stage:s.key})}/>)}
      </div>
      <Nav onBack={onBack} onNext={onNext} disabled={!data.stage} nextLabel="Next →"/>
    </Shell>
  );
}

function S4_Persona({data,setData,onNext,onBack}){
  return(
    <Shell step={4} total={8} sidebar={<SessionSidebar data={data}/>}>
      <Label>Step 4 of 8 — What Matters Most to You</Label>
      <H1>What best describes how you make decisions like this?</H1>
      <Sub>Everyone approaches a major practice investment differently. Select the statement that feels most true to how you think about this.</Sub>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:14}}>
        {BUYING_SIGNALS.map(s=><Card key={s.key} label={s.label} sub={s.sub} active={data.persona===s.key} onClick={()=>setData({...data,persona:s.key})} accent={s.color}/>)}
      </div>
      <Nav onBack={onBack} onNext={onNext} disabled={!data.persona} nextLabel="Next →"/>
    </Shell>
  );
}

function S5_Device({data,setData,onNext,onBack}){
  const rec=(DEVICE_RECS[data.division]||{})[data.persona];
  const persona=BUYING_SIGNALS.find(s=>s.key===data.persona);
  const guidance=PERSONA_GUIDANCE[data.persona];
  if(rec&&!data.device) setData({...data,device:rec});

  if(!rec){
    return(
      <Shell step={5} total={8} sidebar={<SessionSidebar data={data}/>}>
        <Label>Step 5 of 8 — Your System Match</Label>
        <H1>Let's find the right moment for your practice.</H1>
        <Sub>Based on what you've shared, it sounds like now may not be the right time for a new investment — and that's completely okay. When you're ready to explore what's possible, we'll be here.</Sub>
        <div style={{background:GREY_BG,borderLeft:`3px solid ${GREY_BORDER}`,padding:"24px 28px",marginBottom:20}}>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:13,color:GREY,lineHeight:1.75}}>We'd love to stay in touch. When the time feels right — whether that's next quarter or next year — we can walk you through what Fotona® practices in your area are doing and what results they're seeing. No pressure, no timeline.</div>
        </div>
        <Nav onBack={onBack} onNext={onNext} nextLabel="Continue →"/>
      </Shell>
    );
  }

  return(
    <Shell step={5} total={8} sidebar={<SessionSidebar data={{...data,device:rec}}/>}>
      <Label>Step 5 of 8 — Your System Match</Label>
      <H1>Here's the system we'd recommend for your practice.</H1>
      <Sub>Based on your practice profile and what matters most to you, here's the Fotona® system best suited for where you are — and where you're headed.</Sub>

      <div style={{border:`2px solid ${RED}`,background:RED_DIM,padding:32,marginBottom:24}}>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:20}}>
          <div>
            <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:10,color:RED,letterSpacing:"0.25em",textTransform:"uppercase",marginBottom:8,fontWeight:700}}>Recommended For You</div>
            <div style={{fontFamily:"Georgia,serif",fontSize:28,fontWeight:700,color:BLACK,lineHeight:1.1,marginBottom:6}}>{rec.device}</div>
            <div style={{fontFamily:"Georgia,serif",fontSize:14,color:GREY,fontStyle:"italic"}}>{rec.tagline}</div>
          </div>
          <div style={{background:persona?.color||BLACK,color:WHITE,padding:"7px 14px",fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",fontWeight:700,flexShrink:0,marginTop:4}}>{rec.angle}</div>
        </div>
        <div style={{background:WHITE,padding:"18px 22px",marginBottom:20,borderLeft:`3px solid ${RED}`}}>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:GREY_LIGHT,textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:8}}>Why This Fits Your Practice</div>
          <div style={{fontFamily:"Georgia,serif",fontSize:14,color:BLACK,lineHeight:1.75}}>{rec.fit}</div>
        </div>

        <div style={{marginBottom:18}}>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:GREY_LIGHT,textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:10}}>Treatments You Could Offer</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
            {rec.treatments.map(t=><span key={t} style={{background:WHITE,border:`1px solid ${GREY_BORDER}`,padding:"5px 12px",fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:11,color:BLACK}}>{t}</span>)}
          </div>
        </div>
        <div style={{borderTop:`1px solid ${RED_BORDER}`,paddingTop:14}}>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:GREY_LIGHT,textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:6}}>Where This Can Take You</div>
          <div style={{fontFamily:"Georgia,serif",fontSize:13,color:GREY,lineHeight:1.6}}>→ {rec.expansion}</div>
        </div>
      </div>
      <Nav onBack={onBack} onNext={onNext} nextLabel="Next: How We Compare →"/>
    </Shell>
  );
}

function S6_Competitive({data,setData,onNext,onBack}){
  const compScrollRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.pageX;
    scrollStartX.current = compScrollRef.current?.scrollLeft || 0;
    if(compScrollRef.current){
      compScrollRef.current.style.cursor = "grabbing";
      compScrollRef.current.style.scrollSnapType = "none";
    }
  };
  const onMouseMove = (e) => {
    if(!isDragging.current) return;
    e.preventDefault();
    const dx = e.pageX - dragStartX.current;
    if(compScrollRef.current) compScrollRef.current.scrollLeft = scrollStartX.current - dx;
  };
  const onMouseUp = () => {
    if(!isDragging.current) return;
    isDragging.current = false;
    if(compScrollRef.current){
      compScrollRef.current.style.cursor = "grab";
      compScrollRef.current.style.scrollSnapType = "x mandatory";
    }
  };

  const competitors=COMPETITORS[data.division]||[];
  // competitors is now an array of keys; __none__ is a special single value
  const selected = Array.isArray(data.competitors) ? data.competitors : [];
  const noneSelected = selected.includes("__none__");

  const toggle = (key) => {
    if(key==="__none__"){
      setData({...data,competitors:["__none__"],competitor:"__none__"});
      return;
    }
    const next = selected.includes(key)
      ? selected.filter(k=>k!==key && k!=="__none__")
      : [...selected.filter(k=>k!=="__none__"), key];
    setData({...data, competitors: next, competitor: next[0]||null});
  };

  const selectedComps = competitors.filter(c=>selected.includes(c.key));
  const canNext = selected.length > 0;

  return(
    <Shell step={6} total={8} sidebar={<SessionSidebar data={data}/>}>
      <Label>Step 6 of 8 — Your Evaluation</Label>
      <H1>Are you comparing other systems?</H1>
      <Sub>Select all the systems you're evaluating alongside Fotona® — we'll show you a side-by-side comparison for each one.</Sub>
      <div style={{display:"flex",flexWrap:"wrap",gap:12,marginBottom:28}}>
        {competitors.map(c=>{
          const active=selected.includes(c.key);
          return(
            <div key={c.key} onClick={()=>toggle(c.key)} style={{border:active?`2px solid ${RED}`:`1px solid ${GREY_BORDER}`,background:active?RED_DIM:WHITE,padding:"18px 20px",cursor:"pointer",transition:"all 0.15s",position:"relative",display:"flex",alignItems:"flex-start",gap:12,width:"calc(50% - 6px)",boxSizing:"border-box"}}>
              <div style={{width:18,height:18,flexShrink:0,border:active?`2px solid ${RED}`:`2px solid ${GREY_BORDER}`,borderRadius:3,background:active?RED:"transparent",display:"flex",alignItems:"center",justifyContent:"center",marginTop:2}}>
                {active&&<span style={{color:WHITE,fontSize:10,fontWeight:800}}>✓</span>}
              </div>
              <div>
                <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:14,fontWeight:700,color:BLACK,minHeight:42,lineHeight:1.3}}>{c.name}</div>
                <div style={{fontFamily:"Georgia,serif",fontSize:12,color:GREY_LIGHT}}>{c.flagship} · {c.modality}</div>
              </div>
            </div>
          );
        })}
        <div onClick={()=>toggle("__none__")} style={{border:noneSelected?`2px solid ${GREY}`:`1px solid ${GREY_BORDER}`,background:noneSelected?GREY_BG:WHITE,padding:"18px 20px",cursor:"pointer",transition:"all 0.15s",display:"flex",alignItems:"flex-start",gap:12,width:"calc(50% - 6px)",boxSizing:"border-box"}}>
          <div style={{width:18,height:18,flexShrink:0,border:noneSelected?`2px solid ${GREY}`:`2px solid ${GREY_BORDER}`,borderRadius:3,background:noneSelected?GREY:"transparent",display:"flex",alignItems:"center",justifyContent:"center",marginTop:2}}>
            {noneSelected&&<span style={{color:WHITE,fontSize:10,fontWeight:800}}>✓</span>}
          </div>
          <div>
            <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:14,fontWeight:700,color:BLACK,minHeight:42,lineHeight:1.3}}>I'm only looking at Fotona®</div>
            <div style={{fontFamily:"Georgia,serif",fontSize:12,color:GREY_LIGHT}}>No head-to-head comparison needed.</div>
          </div>
        </div>
      </div>

      {selectedComps.length>0&&(
        <>
        <div style={{position:"relative"}}>
        <div ref={compScrollRef} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} style={{display:"flex",overflowX:"hidden",gap:16,marginBottom:0,paddingBottom:8,scrollSnapType:"x mandatory",WebkitOverflowScrolling:"touch",scrollBehavior:"smooth",cursor:"grab",userSelect:"none",maxWidth:856,width:"100%"}}>
          {selectedComps.map(sel=>(
            <div key={sel.key} style={{border:`1px solid ${GREY_BORDER}`,padding:24,minWidth:420,maxWidth:420,flexShrink:0,scrollSnapAlign:"start"}}>
              <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:20}}>
                <div>
                  <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:GREY_LIGHT,textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:6}}>Comparing Against</div>
                  <div style={{fontFamily:"Georgia,serif",fontSize:22,fontWeight:700,color:BLACK}}>{sel.name}</div>
                  <div style={{fontFamily:"Georgia,serif",fontSize:12,color:GREY,marginTop:3}}>{sel.flagship} · {sel.modality}</div>
                </div>
                <div style={{background:RED,color:WHITE,padding:"7px 14px",fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",fontWeight:700,flexShrink:0}}>FOTONA WINS</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:14}}>
                <div style={{background:GREY_BG,padding:"14px 16px",borderLeft:`3px solid ${GREY_LIGHT}`}}>
                  <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:GREY_LIGHT,textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:6}}>{sel.name} — Limitations</div>
                  <div style={{fontFamily:"Georgia,serif",fontSize:12,color:GREY,lineHeight:1.65}}>{sel.weakness}</div>
                </div>
                <div style={{background:RED_DIM,padding:"14px 16px",borderLeft:`3px solid ${RED}`}}>
                  <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:RED,textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:6}}>The Fotona® Difference</div>
                  <div style={{fontFamily:"Georgia,serif",fontSize:12,color:BLACK,lineHeight:1.65}}>{sel.fotona_edge}</div>
                </div>
              </div>
              {data.device&&(
                <div style={{background:BLACK,padding:"16px 20px"}}>
                  <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:RED,textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:6,fontWeight:700}}>Why the {data.device.device} Stands Apart</div>
                  <div style={{fontFamily:"Georgia,serif",fontSize:13,color:"rgba(255,255,255,0.7)",lineHeight:1.7}}>
                    The <strong style={{color:WHITE}}>{data.device.device}</strong> addresses where {sel.name} falls short: {sel.weakness.split(";")[0].toLowerCase()}. {sel.fotona_edge.split(".")[0]}.
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {selectedComps.length>1&&(
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:16,padding:"14px 0",marginBottom:8}}>
            <button onClick={()=>compScrollRef.current?.scrollBy({left:-436,behavior:"smooth"})} style={{width:36,height:36,borderRadius:"50%",border:`1px solid ${GREY_BORDER}`,background:WHITE,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:GREY,flexShrink:0}}>←</button>
            <div style={{display:"flex",gap:6,alignItems:"center"}}>
              {selectedComps.map((_,i)=>(
                <div key={i} onClick={()=>compScrollRef.current?.scrollTo({left:i*436,behavior:"smooth"})} style={{width:i===0?20:8,height:8,borderRadius:4,background:i===0?RED:GREY_BORDER,cursor:"pointer",transition:"all 0.2s"}}/>
              ))}
            </div>
            <button onClick={()=>compScrollRef.current?.scrollBy({left:436,behavior:"smooth"})} style={{width:36,height:36,borderRadius:"50%",border:`1px solid ${GREY_BORDER}`,background:WHITE,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:GREY,flexShrink:0}}>→</button>
          </div>
        )}
        </div>
        </>
      )}
      <Nav onBack={onBack} onNext={onNext} disabled={!canNext} nextLabel="Next: See Your Revenue Potential →"/>
    </Shell>
  );
}

function S7_ROI({data,setData,onNext,onBack}){
  const rec=data.device;
  if(!rec) return null;
  const avail=rec.treatments;

  // Median price per treatment (midpoint of low/high)
  const getMedian=(t)=>{ const r=TREATMENT_PRICES[t]||[300,700]; return Math.round((r[0]+r[1])/2); };

  const [patientsPerWeek,setPpw]=useState(100);
  const [adoptionPct,setAdopt]=useState(4);
  const [interestRate,setInterestRate]=useState(15);
  const [selTx,setSelTx]=useState([]);
  const [txPrices,setTxPrices]=useState(()=>{
    const init={};
    avail.forEach(t=>{ init[t]=getMedian(t); });
    return init;
  });

  const toggleTx=(t)=>setSelTx(prev=>prev.includes(t)?prev.filter(x=>x!==t):[...prev,t]);
  const activeTx=selTx.length>0?selTx:[avail[0]];

  const annualPts=patientsPerWeek*52*(adoptionPct/100);
  let monthlyRev=0;
  activeTx.forEach(t=>{ monthlyRev+=(annualPts/12)*(txPrices[t]||getMedian(t)); });
  const pm=mPmt(rec.cost, interestRate/100);
  const netRev=Math.max(0,monthlyRev-pm);

  return(
    <Shell step={7} total={8} sidebar={<SessionSidebar data={data}/>}>
      <Label>Step 7 of 8 — Your Revenue Potential</Label>
      <H1>What could this look like for your practice?</H1>
      <Sub>Select the treatments you're most interested in. We'll estimate monthly revenue using average market pricing — your specialist can adjust any figure to match your market.</Sub>

      {/* Treatment selector */}
      <div style={{marginBottom:32}}>
        <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:GREY_LIGHT,textTransform:"uppercase",letterSpacing:"0.25em",marginBottom:14}}>Which treatments interest you most?</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10}}>
          {avail.map(t=>{
            const active=selTx.includes(t);
            return(
              <div key={t} onClick={()=>toggleTx(t)} style={{border:active?`2px solid ${RED}`:`1px solid ${GREY_BORDER}`,background:active?RED_DIM:WHITE,padding:"13px 16px",cursor:"pointer",transition:"all 0.15s",display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:17,height:17,flexShrink:0,border:active?`2px solid ${RED}`:`2px solid ${GREY_BORDER}`,background:active?RED:"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  {active&&<span style={{color:WHITE,fontSize:10,fontWeight:800}}>✓</span>}
                </div>
                <div>
                  <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:13,color:BLACK,fontWeight:active?700:400}}>{t}</div>
                  <div style={{fontFamily:"Georgia,serif",fontSize:11,color:GREY_LIGHT,marginTop:2}}>Avg. {money(getMedian(t))} / session</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 300px",gap:32,alignItems:"start"}}>
        <div>
          {/* Sliders */}
          {[
            {label:"How many patients do you see per week?",val:patientsPerWeek,set:setPpw,min:20,max:300,step:10,display:`${patientsPerWeek}`},
            {label:"What % of patients might book a laser treatment?",val:adoptionPct,set:setAdopt,min:1,max:15,step:1,display:`${adoptionPct}%`,note:"Even a conservative 2–4% can generate meaningful revenue"},
          ].map(({label,val,set,min,max,step,display,note})=>(
            <div key={label} style={{marginBottom:28}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:10}}>
                <label style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:10,color:GREY,textTransform:"uppercase",letterSpacing:"0.15em"}}>{label}</label>
                <span style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:28,fontWeight:700,color:BLACK}}>{display}</span>
              </div>
              <input type="range" min={min} max={max} step={step} value={val} onChange={e=>set(+e.target.value)} style={{width:"100%",accentColor:RED}}/>
              {note&&<div style={{fontFamily:"Georgia,serif",fontSize:11,color:GREY_LIGHT,marginTop:4}}>{note}</div>}
            </div>
          ))}

          {/* Interest rate selector */}
          <div style={{marginBottom:28}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:12}}>
              <label style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:10,color:GREY,textTransform:"uppercase",letterSpacing:"0.15em"}}>Estimated financing rate</label>
              <span style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:28,fontWeight:700,color:BLACK}}>{interestRate}%</span>
            </div>
            <div style={{display:"flex",gap:8}}>
              {[10,12,15,18,20].map(r=>(
                <button key={r} onClick={()=>setInterestRate(r)} style={{flex:1,padding:"10px 4px",border:interestRate===r?`2px solid ${RED}`:`1px solid ${GREY_BORDER}`,background:interestRate===r?RED_DIM:WHITE,color:interestRate===r?RED:GREY,fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:12,fontWeight:interestRate===r?700:400,cursor:"pointer",transition:"all 0.15s"}}>
                  {r}%
                </button>
              ))}
            </div>
            <div style={{display:"flex",justifyContent:"space-between",fontFamily:"Georgia,serif",fontSize:11,color:GREY_LIGHT,marginTop:6}}>
              <span>Best case</span>
              <span style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:10,color:GREY_LIGHT}}>60-month term · typical aesthetics range: 10–20%</span>
              <span>Worst case</span>
            </div>
          </div>

          {/* Editable price table — rep can adjust */}
          {activeTx.length>0&&(
            <div style={{border:`1px solid ${GREY_BORDER}`,padding:20,marginBottom:20}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
                <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:GREY_LIGHT,textTransform:"uppercase",letterSpacing:"0.2em"}}>Average Price Per Session</div>
                <div style={{fontFamily:"Georgia,serif",fontSize:11,color:GREY_LIGHT,fontStyle:"italic"}}>Adjust to match your market</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {activeTx.map(t=>(
                  <div key={t} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,paddingBottom:10,borderBottom:`1px solid ${GREY_BG}`}}>
                    <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:13,color:BLACK,flex:1}}>{t}</div>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      <span style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:13,color:GREY}}>$</span>
                      <input
                        type="number"
                        value={txPrices[t]||getMedian(t)}
                        onChange={e=>setTxPrices(p=>({...p,[t]:Math.max(1,+e.target.value)}))}
                        style={{width:90,padding:"6px 10px",border:`1px solid ${GREY_BORDER}`,fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:14,fontWeight:700,color:BLACK,textAlign:"right",outline:"none"}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Device context */}
          <div style={{background:BLACK,padding:"20px 24px"}}>
            <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:GREY_LIGHT,textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:12}}>Device Context</div>
            <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:14,fontWeight:700,color:WHITE,marginBottom:14}}>{rec.device}</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              {[{l:"Investment",v:money(rec.cost)},{l:`Est. Monthly Payment (${interestRate}% / 60mo)`,v:money(pm)},{l:"Typical Payback Window",v:`${rec.payback[0]}–${rec.payback[1]} months`}].map(({l,v})=>(
                <div key={l}><div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:4}}>{l}</div><div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:14,color:WHITE,fontWeight:600}}>{v}</div></div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue output panel */}
        <div style={{background:BLACK,padding:28,position:"sticky",top:84}}>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,letterSpacing:"0.3em",color:RED,textTransform:"uppercase",fontWeight:700,marginBottom:20}}>Estimated Revenue</div>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:11,color:"rgba(255,255,255,0.4)",marginBottom:4}}>Monthly estimate</div>
          <div style={{fontFamily:"Georgia,serif",fontSize:40,fontWeight:700,color:WHITE,lineHeight:1,marginBottom:20}}>{money(monthlyRev)}</div>
          <div style={{height:1,background:"rgba(255,255,255,0.1)",marginBottom:20}}/>
          {[
            {l:"Annual Projection",v:money(monthlyRev*12)},
            {l:"Est. Net / Month",v:money(netRev),accent:"#4ade80",note:"After est. monthly payment"},
            {l:"Est. Monthly Payment",v:money(pm)},
          ].map(({l,v,accent,note})=>(
            <div key={l} style={{marginBottom:18}}>
              <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:"rgba(255,255,255,0.38)",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:4}}>{l}</div>
              <div style={{fontFamily:"Georgia,serif",fontSize:17,fontWeight:700,color:accent||WHITE}}>{v}</div>
              {note&&<div style={{fontFamily:"Georgia,serif",fontSize:10,color:"rgba(255,255,255,0.28)",marginTop:2}}>{note}</div>}
            </div>
          ))}
          <div style={{fontFamily:"Georgia,serif",fontSize:10,color:"rgba(255,255,255,0.2)",lineHeight:1.65,fontStyle:"italic",marginTop:16,borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:14}}>
            Based on average market pricing. Adjust prices above to reflect your specific market.
          </div>
        </div>
      </div>
      <Nav onBack={onBack} onNext={()=>{setData({...data,roi:{monthlyRev,netRev,pm,activeTx,txPrices,patientsPerWeek,adoptionPct,interestRate}});onNext();}} nextLabel="See Your Full Summary →"/>
    </Shell>
  );
}

function RepGuidancePanel({guidance,persona}){
  const[open,setOpen]=useState(false);
  if(!guidance) return null;
  return(
    <div style={{marginTop:8}}>
      <button onClick={()=>setOpen(o=>!o)} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 20px",background:BLACK,border:"none",cursor:"pointer",textAlign:"left"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:RED}}/>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:10,color:WHITE,letterSpacing:"0.25em",textTransform:"uppercase",fontWeight:700}}>Rep View — Internal Sales Guidance</div>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:"rgba(255,255,255,0.3)",letterSpacing:"0.1em",textTransform:"uppercase"}}>Not visible to customer</div>
        </div>
        <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:18,color:RED,fontWeight:700,transform:open?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s"}}>⌄</div>
      </button>
      {open&&(
        <div style={{border:`1px solid ${GREY_BORDER}`,borderTop:"none",padding:28}}>
          <div style={{background:"rgba(232,25,44,0.05)",border:`1px solid ${RED_BORDER}`,padding:"10px 16px",marginBottom:24,display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:5,height:5,borderRadius:"50%",background:RED,flexShrink:0}}/>
            <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:11,color:RED}}>Internal use only — do not present this section to the customer directly.</div>
          </div>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:11,color:GREY_LIGHT,textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:20}}>Buyer Persona: <strong style={{color:BLACK}}>{persona?.label}</strong></div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:28}}>
            {[{title:"What to Lead With",items:guidance.talking},{title:"Next Best Actions",items:guidance.next}].map(({title,items})=>(
              <div key={title}>
                <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:GREY_LIGHT,textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:12}}>{title}</div>
                {items.map((t,i)=>(
                  <div key={i} style={{display:"flex",gap:10,marginBottom:10}}>
                    <div style={{width:5,height:5,borderRadius:"50%",background:RED,marginTop:8,flexShrink:0}}/>
                    <div style={{fontFamily:"Georgia,serif",fontSize:13,color:GREY,lineHeight:1.65}}>{t}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function S8_Summary({data,onReset}){
  const persona=BUYING_SIGNALS.find(s=>s.key===data.persona);
  const selectedCompKeys=(data.competitors||[]).filter(k=>k!=="__none__");
  const selectedComps=selectedCompKeys.map(k=>(COMPETITORS[data.division]||[]).find(c=>c.key===k)).filter(Boolean);
  const guidance=PERSONA_GUIDANCE[data.persona];
  const roi=data.roi;
  return(
    <div style={{background:WHITE,minHeight:"100vh"}}>
      <div style={{maxWidth:1160,margin:"0 auto",padding:"40px 32px"}}>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:40,paddingBottom:28,borderBottom:`4px solid ${RED}`}}>
          <div>
            <Label>Step 8 of 8 — Your Summary</Label>
            <div style={{fontFamily:"Georgia,serif",fontSize:44,fontWeight:700,color:BLACK,lineHeight:1.05}}>Your Fotona®<br/>Practice Profile</div>
          </div>
          <div style={{display:"flex",gap:12,marginTop:16,flexShrink:0}}>
            <Btn>Schedule Demo →</Btn>
            <Btn secondary onClick={onReset}>Start Over</Btn>
          </div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,marginBottom:20}}>
          <div style={{border:`1px solid ${GREY_BORDER}`,padding:28}}>
            <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:RED,textTransform:"uppercase",letterSpacing:"0.3em",marginBottom:18,fontWeight:700}}>Your Practice</div>
            {[{l:"Area of Care",v:data.division?.charAt(0).toUpperCase()+data.division?.slice(1)},{l:"Practice Type",v:(PRACTICE_TYPES[data.division]||[]).find(p=>p.key===data.practiceType)?.label},{l:"Where You Are Today",v:STAGES.find(s=>s.key===data.stage)?.label},{l:"What Matters Most",v:persona?.label}].map(({l,v})=>v&&(
              <div key={l} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",borderBottom:`1px solid ${GREY_BG}`,paddingBottom:12,marginBottom:12,gap:16}}>
                <span style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:11,color:GREY_LIGHT,flexShrink:0}}>{l}</span>
                <span style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:13,color:BLACK,fontWeight:600,textAlign:"right"}}>{v}</span>
              </div>
            ))}
          </div>
          {data.device&&(
            <div style={{background:BLACK,padding:28}}>
              <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:RED,textTransform:"uppercase",letterSpacing:"0.3em",marginBottom:18,fontWeight:700}}>Your Recommended System</div>
              <div style={{fontFamily:"Georgia,serif",fontSize:22,fontWeight:700,color:WHITE,marginBottom:6}}>{data.device.device}</div>
              <div style={{fontFamily:"Georgia,serif",fontSize:13,color:"rgba(255,255,255,0.45)",fontStyle:"italic",marginBottom:20}}>{data.device.tagline}</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                <div><div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:4}}>System Investment</div><div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:16,color:WHITE,fontWeight:700}}>{money(data.device.cost)}</div></div>
              </div>
              {data.device.treatments&&(
                <div style={{marginTop:18,paddingTop:16,borderTop:"1px solid rgba(255,255,255,0.1)"}}>
                  <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10}}>Treatments You Could Offer</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                    {data.device.treatments.map(t=><span key={t} style={{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.12)",padding:"4px 10px",fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:10,color:"rgba(255,255,255,0.7)"}}>{t}</span>)}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div style={{display:"grid",gridTemplateColumns:selectedComps.length>0&&roi?"1fr 1fr":selectedComps.length>0||roi?"1fr":"1fr",gap:20,marginBottom:20}}>
          {selectedComps.length>0&&(
            <div style={{border:`1px solid ${GREY_BORDER}`,padding:28}}>
              <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:RED,textTransform:"uppercase",letterSpacing:"0.3em",marginBottom:18,fontWeight:700}}>How Fotona® Compares</div>
              <div style={{display:"flex",overflowX:"auto",gap:14,paddingBottom:6,scrollSnapType:"x mandatory"}}>
                {selectedComps.map(competitor=>(
                  <div key={competitor.key} style={{minWidth:280,maxWidth:280,flexShrink:0,scrollSnapAlign:"start"}}>
                    <div style={{fontFamily:"Georgia,serif",fontSize:15,fontWeight:700,color:BLACK,marginBottom:2}}>vs. {competitor.name}</div>
                    <div style={{fontFamily:"Georgia,serif",fontSize:12,color:GREY,marginBottom:10}}>{competitor.flagship} · {competitor.modality}</div>
                    <div style={{background:RED_DIM,borderLeft:`3px solid ${RED}`,padding:"12px 14px"}}>
                      <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:RED,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:6}}>The Fotona® Difference</div>
                      <div style={{fontFamily:"Georgia,serif",fontSize:13,color:BLACK,lineHeight:1.7}}>{competitor.fotona_edge}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {roi&&(
            <div style={{background:BLACK,padding:28}}>
              <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:RED,textTransform:"uppercase",letterSpacing:"0.3em",marginBottom:18,fontWeight:700}}>Your Revenue Potential</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
                {(()=>{
                const paybackMonths = roi.monthlyRev > 0 ? Math.ceil(data.device.cost / roi.monthlyRev) : null;
                const paybackLabel = paybackMonths ? (paybackMonths <= 60 ? `~${paybackMonths} months` : "60+ months") : "—";
                return [{l:"Est. Monthly Revenue",v:money(roi.monthlyRev)},{l:"Annual Projection",v:money(roi.monthlyRev*12)},{l:"Est. Net / Month",v:money(roi.netRev),accent:"#4ade80"},{l:`Monthly Payment (${roi.interestRate||15}% / 60mo)`,v:money(roi.pm)},{l:"Est. Payback Window",v:paybackLabel,note:"Based on your inputs"}];
              })().map(({l,v,accent,note})=>(
                  <div key={l}><div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:"rgba(255,255,255,0.32)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:4}}>{l}</div><div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:14,fontWeight:700,color:accent||WHITE}}>{v}</div>{note&&<div style={{fontFamily:"Georgia,serif",fontSize:10,color:"rgba(255,255,255,0.28)",marginTop:2}}>{note}</div>}</div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Customer-facing CTA */}
        <div style={{background:BLACK,padding:"32px 36px",marginBottom:20,display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:32}}>
          <div>
            <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:9,color:RED,textTransform:"uppercase",letterSpacing:"0.3em",marginBottom:10,fontWeight:700}}>Ready to Take the Next Step?</div>
            <div style={{fontFamily:"Georgia,serif",fontSize:20,fontWeight:700,color:WHITE,marginBottom:8}}>Connect with a Fotona® specialist.</div>
            <div style={{fontFamily:"Georgia,serif",fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.7}}>Your specialist will review this profile with you, answer questions, and build a custom financial model — at no cost or commitment.</div>
          </div>
          <Btn>Schedule My Demo →</Btn>
        </div>

        <div style={{background:GREY_BG,padding:"16px 24px",marginBottom:32}}>
          <div style={{fontFamily:"Georgia,serif",fontSize:11,color:GREY_LIGHT,fontStyle:"italic"}}>Revenue estimates are directional and based on the inputs you provided. Actual results will vary. Your Fotona® specialist will build a custom model in your first conversation.</div>
        </div>

        {/* Rep-only panel — collapsed, below the customer summary */}
        {guidance&&<RepGuidancePanel guidance={guidance} persona={persona}/>}
      </div>
    </div>
  );
}


// ─── TOP NAV ─────────────────────────────────────────────────────────────────
function TopNav({step,onReset}){
  return(
    <div style={{background:BLACK,borderBottom:`3px solid ${RED}`,padding:"0 32px",position:"sticky",top:0,zIndex:100}}>
      <div style={{maxWidth:1160,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <div onClick={onReset} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:12}}>
          <FotonaLogo color="white"/>
          <div style={{width:1,height:24,background:"rgba(255,255,255,0.15)"}}/>
          <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:10,color:"rgba(255,255,255,0.4)",letterSpacing:"0.2em",textTransform:"uppercase"}}>Customer Journey</div>
        </div>
        <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",fontSize:10,color:"rgba(255,255,255,0.4)",letterSpacing:"0.1em"}}>STEP {step} OF 8</div>
        <button onClick={onReset} style={{background:"transparent",border:`1px solid rgba(255,255,255,0.2)`,color:WHITE,padding:"7px 16px",fontSize:10,cursor:"pointer",letterSpacing:"0.15em",fontFamily:"'Inter Tight','Inter',Arial,sans-serif",textTransform:"uppercase"}}>Start Over</button>
      </div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
const SCREENS=["landing","division","practiceType","stage","persona","device","competitive","roi","summary"];

export default function App(){
  const[screen,setScreen]=useState("landing");
  const[data,setData]=useState({division:null,practiceType:null,stage:null,persona:null,device:null,competitor:null,competitors:[],roi:null});
  const reset=()=>{setScreen("landing");setData({division:null,practiceType:null,stage:null,persona:null,device:null,competitor:null,competitors:[],roi:null});};
  const go=(s)=>{setScreen(s);window.scrollTo(0,0);};
  const stepNum=SCREENS.indexOf(screen);
  return(
    <div style={{fontFamily:"'Inter Tight','Inter',Arial,sans-serif",background:WHITE,minHeight:"100vh"}}><FontLoader/>
      {screen!=="landing"&&<TopNav step={stepNum} onReset={reset}/>}
      {screen==="landing"&&<Landing onStart={()=>go("division")}/>}
      {screen==="division"&&<S1_Division data={data} setData={setData} onNext={()=>go("practiceType")}/>}
      {screen==="practiceType"&&<S2_PracticeType data={data} setData={setData} onNext={()=>go("stage")} onBack={()=>go("division")}/>}
      {screen==="stage"&&<S3_Stage data={data} setData={setData} onNext={()=>go("persona")} onBack={()=>go("practiceType")}/>}
      {screen==="persona"&&<S4_Persona data={data} setData={setData} onNext={()=>go("device")} onBack={()=>go("stage")}/>}
      {screen==="device"&&<S5_Device data={data} setData={setData} onNext={()=>go("competitive")} onBack={()=>go("persona")}/>}
      {screen==="competitive"&&<S6_Competitive data={data} setData={setData} onNext={()=>go("roi")} onBack={()=>go("device")}/>}
      {screen==="roi"&&<S7_ROI data={data} setData={setData} onNext={()=>go("summary")} onBack={()=>go("competitive")}/>}
      {screen==="summary"&&<S8_Summary data={data} onReset={reset}/>}
    </div>
  );
}
