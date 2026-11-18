// ✏️ Edit everything here. Leave a link/path empty ("") to show a placeholder instead.
export const site = {
  name: "Safaa Mohamed Elmhalawy",
  title: "Junior SOC Analyst | Security Operations | SIEM Monitoring | Incident Response | Threat Detection | Fortinet NSE 4",
  location: "Cairo, Egypt",
  email: "safaaelmhalawy188@gmail.com",
  linkedin: "https://www.linkedin.com/in/safaa-elmhalawy",
  github: "", // e.g. "https://github.com/your-username"
  cv: "/assets/Safaa_Elmhalawy_CV.pdf",
  photo: "/assets/profile.jpg",
  infographic: "/assets/apex-infographic.png",
  video: "/assets/apex-demo.mp4", // or a YouTube embed URL: "https://www.youtube.com/embed/VIDEO_ID"
  videoPoster: "/assets/apex-demo-poster.jpg",
  apexRepo: "", // GitHub repository of APEX
};

export const roles = ["Junior SOC Analyst", "SOC Analyst L1", "Security Operations Engineer", "Cybersecurity Analyst", "Blue Team Analyst", "Incident Response Analyst"];

export const summary = [
  "I am an entry-level cybersecurity professional focused on Security Operations, SIEM monitoring, incident investigation, threat detection, and incident response.",
  "I have practical training experience through the DigiLians Applied Cybersecurity Diploma (NTI / MCIT) and hands-on SOC training at Telecom Egypt (WE).",
  "I have worked with security monitoring platforms, investigated different attack scenarios, explored detection engineering, and developed automated security response workflows through my APEX project.",
  "My goal is to grow as a SOC Analyst and contribute to security operations, threat detection, and incident response teams.",
];

export const skills = [
  { title: "SIEM & Security Monitoring", icon: "Radar", items: ["Wazuh", "Splunk", "IBM QRadar"] },
  { title: "Incident Response", icon: "Siren", items: ["Alert Triage", "Log Analysis", "Incident Investigation", "Incident Handling", "Threat Detection"] },
  { title: "Threat Analysis", icon: "Crosshair", items: ["MITRE ATT&CK", "Phishing Analysis", "Brute Force Detection", "Password Spraying", "Kerberoasting", "Threat Hunting"] },
  { title: "Network Security", icon: "Network", items: ["Fortinet / FortiGate", "Wireshark", "Nmap", "Snort", "Zeek"] },
  { title: "Security Automation", icon: "Workflow", items: ["Shuffle SOAR", "n8n", "FastAPI", "VirusTotal", "AbuseIPDB", "URLScan"] },
  { title: "Other", icon: "Layers", items: ["Linux", "Active Directory Security", "Vulnerability Management"] },
];

export const training = [
  {
    org: "DigiLians Applied Cybersecurity Diploma",
    sub: "NTI / MCIT",
    dates: "Dec 2025 – Sep 2026",
    tag: "Diploma training",
    text: "Hands-on training as a SOC Analyst Trainee in a simulated SOC environment, and the program in which the APEX graduation project was built.",
    topics: ["Alert triage, log analysis and correlation with Wazuh SIEM", "Incident Response lifecycle exercises with Security Onion", "MITRE ATT&CK mapping of simulated adversary behavior", "Traffic analysis with Wireshark and Snort", "Vulnerability scanning with Nmap and Metasploit", "GRC module: ISO/IEC 27001"],
  },
  {
    org: "Telecom Egypt (WE)",
    sub: "Cybersecurity On-the-Job Training, SOC",
    dates: "Sep 2026 – Oct 2026",
    tag: "Completed practical training, not employment",
    text: "Practical SOC training focused on monitoring, investigation and response workflows.",
    topics: [
      "Splunk & IBM QRadar monitoring and investigation", "EDR solutions", "Active Directory security and attack paths",
      "Incident response: triage, containment, eradication, recovery, reporting", "Malware analysis awareness: Lumma & RedLine",
      "Phishing investigations", "Brute-force attacks", "Password spraying", "Kerberoasting", "Shamoon",
      "MITRE ATT&CK", "Threat Intelligence & Threat Hunting",
    ],
  },
];

export const exposure = ["Security Operations Center (SOC)", "SIEM Monitoring and Investigation", "Incident Response", "Threat Intelligence", "Threat Hunting", "Brand Protection"];

export const apex = {
  name: "APEX",
  full: "Automated Protection & Execution",
  text: "An open-source SOC + SOAR platform, built and attacked in a segmented virtual lab. It automates the full chain from telemetry to detection, decision, response and AI-assisted reporting, integrating SIEM, SOAR, threat intelligence, AI analysis and active response.",
  kind: "Graduation project (team) · DigiLians / NTI · Egyptian Military Academy",
  role: "Decision Engineer, Security Response Workflows",
  myWork: [
    "Designed and implemented Shuffle SOAR playbooks for Port Scan (MITRE ATT&CK T1046) and Phishing detection scenarios.",
    "Integrated VirusTotal, AbuseIPDB and urlscan.io for IOC and threat intelligence enrichment of alerts.",
    "Worked on verdict-to-block decision logic and its integration with the Sophos Firewall API for automated IP containment.",
    "Tested detection-to-response workflows through controlled attack simulations.",
  ],
  layers: [
    { label: "Telemetry", items: ["Sophos Firewall", "Windows Server 2022 (AD / DNS / DHCP)", "Linux endpoints (auditd)", "Cowrie honeypot logs"] },
    { label: "Detection", items: ["Wazuh SIEM with custom rules", "HORUS EDR agent (team component)", "MITRE ATT&CK mapping"] },
    { label: "Decision", items: ["Incident Aggregator", "Rule / Policy Engine", "Execution Tracker"] },
    { label: "Response", items: ["Shuffle SOAR playbooks", "Sophos Firewall API block group", "Wazuh Active Response", "TheHive case"] },
    { label: "AI Analysis & Report", items: ["n8n enrichment pipeline", "VirusTotal, AbuseIPDB, URLScan", "Local LLM (Ollama) for reports", "FastAPI services"] },
    { label: "Integrations", items: ["TheHive", "MISP", "Cortex", "Cowrie"] },
  ],
  results: [
    ["3 min", "attack to automatic block, end to end"],
    ["5,500 → 18", "events processed vs. decisions left to a human"],
    ["5 IPs", "added to the firewall block group automatically"],
    ["3,175", "flood packets dropped by the IPS in live testing"],
  ],
  resultsNote: "Figures were measured in the lab environment, not in production.",
};

export const certs = [
  { name: "Google Cybersecurity Certificate", type: "Certificate" },
  { name: "Fortinet NSE 4", type: "Certification" },
  { name: "TryHackMe SOC Level 1", type: "Learning path" },
  { name: "Red Hat RH124 training", type: "Training" },
  { name: "Linux Administration 1", type: "Training" },
  { name: "Huawei HCIA-Datacom", type: "Certification" },
  { name: "TryHackMe Pre-Security", type: "Learning path" },
];

export const education = [
  { name: "B.Sc. in Computer and Information Sciences", sub: "Major in Information Technology, Zagazig University" },
  { name: "DigiLians Applied Cybersecurity Diploma", sub: "NTI / MCIT" },
  { name: "Telecom Egypt (WE)", sub: "Cybersecurity On-the-Job Training" },
];

export const learning = ["Google Cybersecurity learning modules", "TryHackMe SOC Level 1 labs", "Red Hat RH124 and Linux Administration 1", "Relevant DigiLians training modules"];
