/* ============== I18N ============== */
const I18N = {
en:{brand:"ORCA Marine Intelligence",nav_dashboard:"Dashboard",nav_agents:"Agent Activity",nav_zones:"Zone Intelligence",nav_border:"Border Intelligence",nav_compare:"Compare Zones",nav_safety:"Safety & Route",nav_alerts:"Alerts",nav_sources:"Data Sources",emg_btn:"🚨 SIMULATE EMERGENCY",assistant_title:"ORCA Assistant & Marine Map",lbl_location:"Fisherman location",ph_location:"Enter any coastal place name, or lat,lon",btn_search:"Search",btn_gps:"Use My Location",hint_click:"Click anywhere on the map to select your location, or type any place name and press Search.",lbl_question:"Question",ph_question:"Which nearby water body is safest for fishing tomorrow morning?",btn_analyze:"ORCA ANALYZE",legend_green:"Green = good",legend_yellow:"Yellow = changing",legend_red:"Red = avoid",legend_blue:"Blue = fisherman",legend_maritime:"Sri Lanka maritime boundary",legend_state:"State boundary",legend_boundary:"Monitored boundary (approx.)",legend_you:"You",show_borders:"Show state/maritime borders on map",hint_independent:"Conditions are location-specific — nearby zones can have different fishing and weather suitability.",status_title:"Marine Status",st_overall:"Overall Risk",st_weather:"Weather",st_water:"Water",st_geofence:"Geofence",st_fishing:"Fishing Suitability",st_border:"Border",hint_status:"Reflects the currently selected / recommended zone only.",agents_title:"Agent Activity",agents_hint:"Press ORCA ANALYZE on the Dashboard to run the multi-agent reasoning workflow.",zoneintel_title:"Zone Intelligence",zoneintel_hint:"All nearby fishing zones within the 20 km search range, evaluated independently.",fetching_live:"🔄 Checking for live satellite/weather data…",compare_title:"Compare Zones",compare_hint:"Select up to 3 locations to compare, independently of ORCA Assistant.",btn_compare:"Compare Selected Locations",safety_title:"Safety & Route",safety_checklist:"Departure checklist",btn_route:"Show Safer Demo Route",route_disclaimer:"DEMO ROUTE — NOT OFFICIAL NAVIGATION.",alerts_title:"Marine Alerts",alerts_hint:"Generated from the current zones around your selected location.",sources_title:"Data Sources",sources_hint:"This prototype clearly separates real data from simulated/demo data.",src_live:"LIVE MAP",src_map_desc:"Used for interactive map display and tiles.",src_geo:"LIVE / API",src_geo_h:"Place Search",src_geo_desc:"Any place name is geocoded live via OpenStreetMap Nominatim — not limited to a fixed town list.",src_liveapi:"LIVE / API (fallback: simulated)",src_proto:"PROTOTYPE",src_dataset:"ORCA Fishing Suitability",src_dataset_desc:"Fallback/simulated fish-suitability score used only when neither the satellite backend nor Open-Meteo are reachable.",src_sim:"SIMULATED",src_weather:"Weather & Waves",src_weather_desc:"Wind, sea-surface temperature and wave height are fetched live from Open-Meteo where available; falls back to simulated demo values if the request fails.",src_satellite:"LIVE / SATELLITE (optional backend)",src_satellite_h:"Fishing Suitability — Satellite tier",src_satellite_desc:"When the included Python backend (backend/main.py) is running, fish-suitability is computed from REAL satellite Sea-Surface Temperature and Chlorophyll-a (NOAA CoastWatch ERDDAP) — the same two signals INCOIS's official PFZ advisories are built on. Without the backend running, this falls back to the Weather-only tier above, then to the fully simulated tier — check the SATELLITE / LIVE / SIM badge on each zone card to see which applied.",src_treaty:"TREATY-BASED (approximate)",src_boundary:"Boundary Data",src_boundary_desc:"India–Sri Lanka line uses the real coordinate points from the 1974 Palk Strait and 1976 Gulf of Mannar agreements. State/UT boundaries use real GADM-derived polygons (see the State Boundaries & Water Bodies source below) — the older coastal-latitude approximation only applies if that dataset fails to load. Neither is a substitute for an official chart — always verify with authorities.",src_family:"Family Alerts",src_family_desc:"SMS/call notifications are simulated only. No real message or call is sent by this prototype.",footer:"ORCA Marine Intelligence — Student Innovation Hackathon 2026 Prototype. No real marine data is used.",settings_title:"Settings",settings_lang:"Language",settings_login:"Demo Login",settings_phone:"Login Phone Number",btn_continue:"Continue with Phone",login_note:"Prototype login — no real OTP is sent.",btn_save:"Save Settings",settings_tracking:"Location Tracking",settings_live:"Live Tracking",settings_interval_note:"Updates roughly every 1 second while active, subject to GPS/browser availability.",settings_border_alerts:"Border Alerts",settings_border_toggle:"Border Alerts",settings_voice_toggle:"Voice Alerts",settings_thresholds:"Warning Distance (km)",settings_warning:"Warning",settings_highwarning:"High Warning",settings_critical:"Critical",settings_family:"Emergency & Family Contacts",settings_family_note:"Used only for the simulated alert log — no real SMS/call is sent.",settings_self_phone:"Your phone number",settings_family1:"Family contact 1",settings_family2:"Family contact 2",settings_country:"Country",settings_state:"State",emg_title:"Critical Marine Incident — Demo",emg_loc:"Last known location",emg_note:"This is a simulation. No real emergency call is made.",no_location:"Please select or search a location first.",finding_title:"ORCA Nearby Finding",reco_title:"🏆 ORCA Recommendation",reco_prefix:"is the strongest choice — it balances fishing suitability with the safest overall marine and border conditions.",reco_border_note:"ORCA deprioritized a higher fish-score zone because it carries more weather/ocean risk or is closer to a monitored boundary — safety is weighed before catch. Verify current conditions and applicable restrictions before proceeding.",good:"Good",changing:"Changing",highrisk:"High Risk",low:"Low",medium:"Medium",high:"High",safe:"Safe",approaching:"Approaching",critical:"Critical",fish_indicated:"FISH INDICATED",checked:"Checked",zone:"Zone",distance:"Distance",fish:"Fish",weather:"Weather",waves:"Waves",wind:"Wind",sst:"SST",chlorophyll:"Chlorophyll",ocean_risk:"Ocean Risk",geofence:"Geofence",overall:"Overall",border_distance:"Border Distance",border_risk:"Border Risk",view_on_map:"View on Map",compare_max:"You can compare up to 3 zones only.",compare_pick:"Select at least 2 zones to compare.",agent_planner:"ORCA Planner Agent",agent_weather:"Weather Agent",agent_ocean:"Ocean Agent",agent_fishing:"Fishing Agent",agent_geo:"Geo Agent",agent_risk:"Risk Agent",agent_border:"Border Agent",agent_safety:"Safety Agent",agent_reasoner:"ORCA Reasoner",task_planner:"Understand location, question and requested time.",result_planner:"Fishing + safety query identified.",complete:"COMPLETE",checklist_items:["Check official marine warnings","Carry communication equipment","Check fuel level","Check battery / power bank","Check navigation equipment","Stay within permitted fishing areas"],emg_steps:["Capture current location","Prepare emergency message","Family notification (simulated)","Rescue-channel message (simulated)"],
border_title:"Border & Maritime Intelligence",border_hint:"Prototype boundary data — not authoritative. Always verify current official maritime regulations before proceeding near a border.",border_click_hint:"You can also click anywhere on the map below to check that location's border status.",border_status_title:"Details",family_log_title:"Family Alert Log",family_log_hint:"Simulated only — no real SMS or call is ever sent from this prototype.",chat_title:"Talk to ORCA",chat_ph:"Type your question... e.g. How far am I from the border?",btn_send:"SEND",btn_live_off:"Start Live Tracking",btn_live_on:"Stop Live Tracking",btn_demo_move:"Demo: Simulate Approach",btn_return:"Suggest Return Route",live_lat:"Latitude",live_lon:"Longitude",live_acc:"GPS Accuracy",live_update:"Last Update",current_state:"Currently In",current_state_line:"📍 Currently in {state} waters/coast.",current_state_lanka:"📍 Currently in Sri Lankan waters (across the monitored line).",nearest_state:"Nearest State Boundary",other_state_boundary:"Also near",nearest_maritime:"Maritime Boundary (Sri Lanka)",status:"Status",direction:"Direction",crossed_label:"Possible boundary crossing",gps_denied:"Location permission is unavailable. Select a location manually.",hero_safe:"✅ SAFE — you are {d} km from the nearest monitored boundary ({name}).",hero_approaching:"🟡 APPROACHING — {d} km from {name}. Keep an eye on your position.",hero_high:"🟠 HIGH WARNING — only {d} km from {name}. Please verify your permitted fishing area.",hero_critical:"🔴 CRITICAL — just {d} km from {name}. Do not proceed further without checking your position.",hero_crossed:"🚨 POSSIBLE BOUNDARY CROSSING — your position appears to be on the other side of {name} (~{d} km past it). Stop and verify your position and applicable maritime regulations immediately.",tips_safe:["You're comfortably inside the monitored area — continue normal operations.","Recheck this page occasionally while you're out at sea.","Boundary lines here are approximate — always trust official charts too."],tips_approaching:["Note your current heading and distance from the boundary.","Keep this page open while you're near a monitored line.","Avoid drifting further toward the boundary."],tips_high:["Consider turning back toward safer water now.","This is a prototype estimate — cross-check with local knowledge and charts.","Let a nearby boat or your family contact know your position."],tips_critical:["Stop and do not go further in this direction.","Turn back immediately toward safer water.","Use your family/coast-guard contact channel now."],tips_crossed:["Stop the boat immediately.","Turn back the way you came.","This prototype cannot confirm legal status — treat this as a serious warning and verify with authorities."],alert_safe:"You are {d} km from the nearest monitored boundary ({name}). No immediate concern.",alert_approaching:"You are approaching {name}. Distance: {d} km.",alert_high:"⚠️ You are within {d} km of {name}. Please verify your permitted fishing area.",alert_critical:"🚨 You are very close ({d} km) to {name}. Do not proceed further without verifying your position and applicable maritime regulations.",alert_crossed:"🚨 Your position appears to be on the other side of {name} (~{d} km past it). Stop and verify your position and applicable maritime regulations immediately.",family_alert_border:"Fisherman reached {tier} status near a monitored boundary ({d} km).",family_alert_redzone:"Fisherman's live position is inside/near a RED (high-risk) fishing zone.",family_alert_cyclone:"Fisherman's live position is near a High-Risk weather (cyclone-type) zone.",family_sms:"📨 SMS simulated to family contacts",family_call:"📞 Call simulated to family contacts",no_contacts:"No family contact numbers set — add them in Settings to enable alert simulation.",return_route_msg:"Based on current wind (~{w} km/h) near {z}, the suggested return heading is {dir} toward {label}, approximately {d} km. Re-verify official marine advisories before returning.",chat_welcome:"Hello, I'm ORCA. Select a location and I can tell you about nearby fishing zones and boundary distance. Try asking: 'How far am I from the border?'",chat_no_location:"Please select a fisherman location first (on the Dashboard) so I have something to analyze.",chat_border_answer:"You are approximately {d} km from {label}, status: {status}.",chat_continue_answer:"Your live position status near the monitored boundary is currently {status} ({d} km). I recommend remaining within the permitted fishing area and checking the latest official marine advisories before continuing.",chat_safer_answer:"Based on fishing suitability, weather and border distance combined, {zone} currently looks like the safer choice ({score}/100 combined score).",chat_weather_answer:"Nearest recommended zone {zone} currently shows {weather} weather with {wave} m waves and {wind} km/h wind.",chat_default:"I can answer questions like 'how far am I from the border', 'can I continue fishing', or 'which zone is safer'. Try one of those, or check the panel above.",voice_unsupported:"Voice recognition is not supported in this browser — please type your question instead.",voice_listening:"🎤 Listening...",gps_watch_error:"Location permission is unavailable. Select a location manually or check browser permissions.",geocode_searching:"⏳",geocode_notfound:"not found — try a nearby town or a lat,lon pair",lbl_radius:"Search radius (km)",lbl_zonecount:"Number of zones",zoneintel_hint_dyn:"All nearby fishing zones within the {km} km search range, evaluated independently.",legend_ring_warn:"Yellow ring = border caution",legend_ring_high:"Orange ring = high warning",legend_ring_crit:"Red ring = critical",chat_dash_hint:"Ask about this map directly — fishing zones and border risk together, e.g. \"how far am I from the border?\" or \"which zone is safer?\"",legend_wind:"Wind flow (approx., same data as zone wind)",show_wind:"Show animated wind flow (approximate)",nav_cyclone:"Cyclone Intel",cyclone_title:"Cyclone Intelligence",cyclone_hint:"PROTOTYPE — this is a demo heuristic plus a simulated storm scenario, not a live cyclone tracker. For real cyclone warnings on Indian coasts, always check IMD (mausam.imd.gov.in) and INCOIS (incois.gov.in) directly.",cyclone_heuristic_title:"Current Storm-Risk Heuristic",cyclone_heuristic_sub:"Heuristic score {index}/100 — {tier}. Built from real live wind + pressure + wave data, combined with simple thresholds — not a real cyclone detection system.",cyclone_pressure:"Pressure",cyclone_risk_index:"Risk Index",cyclone_risk_low:"Low",cyclone_risk_elevated:"Elevated",cyclone_risk_watch:"Watch",cyclone_risk_high:"High",cyclone_demo_title:"Simulated Demo System: {name}",cyclone_demo_sub:"{cat} · {d} km away · forward speed and ETA are simulated, not a real tracked storm.",cyclone_category:"Category",cyclone_forward_speed:"Forward Speed",cyclone_eta:"ETA (simulated)",cyclone_regen:"Regenerate Demo Scenario",cyclone_checklist_title:"Cyclone Safety Checklist",cyclone_checklist_items:["Treat this page as a demo only — always check official IMD/INCOIS bulletins for real cyclone warnings","Keep emergency contacts, radio and battery equipment charged and ready","If a real official warning is issued for your area, return to shore immediately","Secure loose equipment on deck before rough weather arrives","Know your nearest safe harbor and its distance from your current position"],cyclone_official_note:"Data sources: live wind/pressure/wave from Open-Meteo (same as the rest of this app). The named storm, its category, track and ETA are entirely simulated for demo purposes — they do not represent any real weather system.",family_alert_cyclone_demo:"Simulated cyclone system {name} is at a high/critical demo tier, {d} km from the fisherman's position (DEMO SCENARIO — not a real storm).",src_cyclone:"SIMULATED / HEURISTIC",src_cyclone_h:"Cyclone Intelligence",src_cyclone_desc:"The storm-risk number uses real live wind, pressure and wave data (same Open-Meteo source as elsewhere), combined into a simple heuristic — not real cyclone detection. The named storm system shown is a fully simulated demo scenario, not a real IMD-tracked cyclone. Always check IMD and INCOIS directly for real cyclone warnings.",freshness_asof:"as of {time}",nav_tripplanner:"Trip Planner",trip_title:"Trip Planner",trip_hint:"Plan ahead using Open-Meteo's real hourly forecast for your selected location. Safety assessment uses the worst hour in your window, not the average. Beyond the forecast horizon (~15 days) or if the forecast can't be fetched, this clearly falls back to a simulated estimate.",lbl_trip_date:"Departure date",lbl_trip_time:"Departure time",lbl_trip_duration:"Trip duration (hours)",btn_plan_trip:"Plan Trip",trip_pick_datetime:"Pick a departure date and time first.",trip_advisory_go:"✅ Conditions look fishable for your planned window",trip_advisory_caution:"🟡 Conditions may change during your planned window — proceed with caution",trip_advisory_nogo:"🔴 High-risk conditions expected during your planned window — reconsider this trip",trip_window_label:"Departure {start} → Return {end}",trip_worst_hour_note:"This assessment uses the single worst hour in your window, not the average — a trip is only as safe as its worst moment. Always verify with official IMD marine warnings before departing.",src_forecast_near:"FORECAST",src_forecast_far:"FORECAST (extended — lower confidence)",harbor_popup_note:"Known fishing harbor (reference only — general knowledge, approximate position)",nearest_harbor_line:"⚓ Nearest known fishing harbor: {name} — {d} km (reference only, approximate)",show_harbors:"Show known fishing harbors",legend_harbor:"Known fishing harbor (reference)",health_intro:"Live check of whether each external data source is actually reachable right now — not a claim, a real timed request to each one.",health_check_btn:"Check Data Sources Now",health_backend:"Python Backend",health_weather:"Open-Meteo (Weather)",health_marine:"Open-Meteo (Marine)",health_geocode:"Nominatim (Place Search)",health_gps:"Browser GPS",health_network:"Network",health_online:"Online",health_offline:"Offline",health_unreachable:"unreachable",health_asof:"Checked at {time}",src_geo_bearing:"REAL GEOGRAPHY",src_geo_bearing_h:"Seaward Candidate Zones",src_geo_bearing_desc:"Candidate zone bearings are constrained to a realistic seaward cone based on which Indian coast (Bay of Bengal or Arabian Sea) the selected point is on, instead of a uniformly random 0-360° bearing that could occasionally point back toward land.",src_harbors:"REFERENCE (approximate)",src_harbors_h:"Known Fishing Harbors",src_harbors_desc:"A small curated list of real, publicly known major Indian fishing harbors, shown as map markers and a \"nearest harbor\" fact. General-knowledge approximate positions, not survey-grade coordinates and not a live feed."},
ta:{nav_dashboard:"டாஷ்போர்டு",nav_agents:"ஏஜென்ட் செயல்பாடு",nav_zones:"மண்டல நுண்ணறிவு",nav_border:"எல்லை நுண்ணறிவு",nav_compare:"மண்டலங்களை ஒப்பிடு",nav_safety:"பாதுகாப்பு & பாதை",nav_alerts:"எச்சரிக்கைகள்",nav_sources:"தரவு மூலங்கள்",assistant_title:"ஓர்கா உதவியாளர் & வரைபடம்",lbl_location:"மீனவர் இருப்பிடம்",btn_gps:"எனது இருப்பிடத்தை பயன்படுத்து",btn_analyze:"ஓர்கா பகுப்பாய்வு",status_title:"கடல் நிலை",zoneintel_title:"மண்டல நுண்ணறிவு",compare_title:"மண்டலங்களை ஒப்பிடு",safety_title:"பாதுகாப்பு & பாதை",alerts_title:"கடல் எச்சரிக்கைகள்",sources_title:"தரவு மூலங்கள்",settings_title:"அமைப்புகள்",settings_lang:"மொழி",border_title:"எல்லை & கடல்சார் நுண்ணறிவு",chat_title:"ஓர்காவிடம் பேசு",btn_send:"அனுப்பு",emg_btn:"🚨 அவசரநிலையை உருவகப்படுத்து"},
te:{nav_dashboard:"డాష్‌బోర్డ్",nav_agents:"ఏజెంట్ కార్యకలాపం",nav_zones:"జోన్ ఇంటెలిజెన్స్",nav_border:"సరిహద్దు ఇంటెలిజెన్స్",nav_compare:"జోన్‌లను పోల్చండి",nav_safety:"భద్రత & మార్గం",nav_alerts:"హెచ్చరికలు",nav_sources:"డేటా మూలాలు",assistant_title:"ఓర్కా అసిస్టెంట్ & మ్యాప్",lbl_location:"మత్స్యకారుడి స్థానం",btn_gps:"నా స్థానాన్ని ఉపయోగించండి",btn_analyze:"ఓర్కా విశ్లేషణ",status_title:"మెరైన్ స్థితి",zoneintel_title:"జోన్ ఇంటెలిజెన్స్",compare_title:"జోన్‌లను పోల్చండి",safety_title:"భద్రత & మార్గం",alerts_title:"మెరైన్ హెచ్చరికలు",sources_title:"డేటా మూలాలు",settings_title:"సెట్టింగ్‌లు",settings_lang:"భాష",border_title:"సరిహద్దు & సముద్ర ఇంటెలిజెన్స్",chat_title:"ఓర్కాతో మాట్లాడండి",btn_send:"పంపు",emg_btn:"🚨 అత్యవసర పరిస్థితిని అనుకరించండి"},
kn:{nav_dashboard:"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",nav_agents:"ಏಜೆಂಟ್ ಚಟುವಟಿಕೆ",nav_zones:"ವಲಯ ಬುದ್ಧಿಮತ್ತೆ",nav_border:"ಗಡಿ ಬುದ್ಧಿಮತ್ತೆ",nav_compare:"ವಲಯಗಳನ್ನು ಹೋಲಿಸಿ",nav_safety:"ಸುರಕ್ಷತೆ & ಮಾರ್ಗ",nav_alerts:"ಎಚ್ಚರಿಕೆಗಳು",nav_sources:"ಡೇಟಾ ಮೂಲಗಳು",assistant_title:"ಓರ್ಕಾ ಸಹಾಯಕ & ನಕ್ಷೆ",lbl_location:"ಮೀನುಗಾರರ ಸ್ಥಳ",btn_gps:"ನನ್ನ ಸ್ಥಳವನ್ನು ಬಳಸಿ",btn_analyze:"ಓರ್ಕಾ ವಿಶ್ಲೇಷಣೆ",status_title:"ಮೆರೈನ್ ಸ್ಥಿತಿ",zoneintel_title:"ವಲಯ ಬುದ್ಧಿಮತ್ತೆ",compare_title:"ವಲಯಗಳನ್ನು ಹೋಲಿಸಿ",safety_title:"ಸುರಕ್ಷತೆ & ಮಾರ್ಗ",alerts_title:"ಮೆರೈನ್ ಎಚ್ಚರಿಕೆಗಳು",sources_title:"ಡೇಟಾ ಮೂಲಗಳು",settings_title:"ಸೆಟ್ಟಿಂಗ್‌ಗಳು",settings_lang:"ಭಾಷೆ",border_title:"ಗಡಿ & ಸಮುದ್ರ ಬುದ್ಧಿಮತ್ತೆ",chat_title:"ಓರ್ಕಾ ಜೊತೆ ಮಾತನಾಡಿ",btn_send:"ಕಳುಹಿಸಿ",emg_btn:"🚨 ತುರ್ತುಸ್ಥಿತಿ ಅನುಕರಿಸಿ"},
ml:{nav_dashboard:"ഡാഷ്ബോർഡ്",nav_agents:"ഏജന്റ് പ്രവർത്തനം",nav_zones:"സോൺ ഇന്റലിജൻസ്",nav_border:"അതിർത്തി ഇന്റലിജൻസ്",nav_compare:"സോണുകൾ താരതമ്യം ചെയ്യുക",nav_safety:"സുരക്ഷ & റൂട്ട്",nav_alerts:"അലേർട്ടുകൾ",nav_sources:"ഡാറ്റ സ്രോതസ്സുകൾ",assistant_title:"ഓർക്ക അസിസ്റ്റന്റ് & മാപ്പ്",lbl_location:"മത്സ്യത്തൊഴിലാളിയുടെ സ്ഥലം",btn_gps:"എന്റെ സ്ഥാനം ഉപയോഗിക്കുക",btn_analyze:"ഓർക്ക വിശകലനം",status_title:"മറൈൻ സ്ഥിതി",zoneintel_title:"സോൺ ഇന്റലിജൻസ്",compare_title:"സോണുകൾ താരതമ്യം ചെയ്യുക",safety_title:"സുരക്ഷ & റൂട്ട്",alerts_title:"മറൈൻ അലേർട്ടുകൾ",sources_title:"ഡാറ്റ സ്രോതസ്സുകൾ",settings_title:"ക്രമീകരണങ്ങൾ",settings_lang:"ഭാഷ",border_title:"അതിർത്തി & സമുദ്ര ഇന്റലിജൻസ്",chat_title:"ഓർക്കയോട് സംസാരിക്കുക",btn_send:"അയക്കുക",emg_btn:"🚨 അടിയന്തരാവസ്ഥ അനുകരിക്കുക"},
hi:{nav_dashboard:"डैशबोर्ड",nav_agents:"एजेंट गतिविधि",nav_zones:"ज़ोन इंटेलिजेंस",nav_border:"सीमा इंटेलिजेंस",nav_compare:"ज़ोन की तुलना करें",nav_safety:"सुरक्षा और मार्ग",nav_alerts:"अलर्ट",nav_sources:"डेटा स्रोत",assistant_title:"ओर्का असिस्टेंट और मानचित्र",lbl_location:"मछुआरे का स्थान",btn_gps:"मेरा स्थान उपयोग करें",btn_analyze:"ओर्का विश्लेषण",status_title:"मरीन स्थिति",zoneintel_title:"ज़ोन इंटेलिजेंस",compare_title:"ज़ोन की तुलना करें",safety_title:"सुरक्षा और मार्ग",alerts_title:"मरीन अलर्ट",sources_title:"डेटा स्रोत",settings_title:"सेटिंग्स",settings_lang:"भाषा",border_title:"सीमा और समुद्री इंटेलिजेंस",chat_title:"ओर्का से बात करें",btn_send:"भेजें",emg_btn:"🚨 आपातकाल सिम्युलेट करें"}
};
/* Additional translations merged in on top of the hand-written blocks above —
   keeps the original per-language literals untouched (smaller diff) while
   filling in every key that previously silently fell back to English. */
Object.assign(I18N.ta, {brand:"ஓர்கா மெரின் இன்டெலிஜென்ஸ்",ph_location:"கடலோர இட பெயரை உள்ளிடவும், அல்லது lat,lon",btn_search:"தேடு",hint_click:"உங்கள் இருப்பிடத்தைத் தேர்ந்தெடுக்க வரைபடத்தில் எங்கும் கிளிக் செய்யவும், அல்லது ஒரு இட பெயரைத் தட்டச்சு செய்து தேடு அழுத்தவும்.",lbl_question:"கேள்வி",ph_question:"நாளை காலை மீன்பிடிக்க எந்த அருகிலுள்ள நீர்நிலை பாதுகாப்பானது?",legend_green:"பச்சை = நல்லது",legend_yellow:"மஞ்சள் = மாறுகிறது",legend_red:"சிவப்பு = தவிர்க்கவும்",legend_blue:"நீலம் = மீனவர்",legend_maritime:"இலங்கை கடல்சார் எல்லை",legend_state:"மாநில எல்லை",legend_boundary:"கண்காணிக்கப்படும் எல்லை (தோராயம்)",legend_you:"நீங்கள்",show_borders:"வரைபடத்தில் மாநில/கடல்சார் எல்லைகளைக் காட்டு",hint_independent:"நிலைமைகள் இட-குறிப்பிட்டவை — அருகிலுள்ள மண்டலங்களில் வெவ்வேறு மீன்பிடி மற்றும் வானிலை தகுதி இருக்கலாம்.",st_overall:"மொத்த ஆபத்து",st_weather:"வானிலை",st_water:"நீர்",st_geofence:"புவி வேலி",st_fishing:"மீன்பிடி தகுதி",st_border:"எல்லை",hint_status:"தற்போது தேர்ந்தெடுக்கப்பட்ட / பரிந்துரைக்கப்பட்ட மண்டலத்தை மட்டுமே பிரதிபலிக்கிறது.",agents_title:"ஏஜென்ட் செயல்பாடு",agents_hint:"பல-ஏஜென்ட் பகுத்தறிதல் செயல்முறையை இயக்க டாஷ்போர்டில் ஓர்கா பகுப்பாய்வு அழுத்தவும்.",zoneintel_hint:"20 கிமீ தேடல் வரம்பிற்குள் உள்ள அனைத்து அருகிலுள்ள மீன்பிடி மண்டலங்களும், சுயாதீனமாக மதிப்பிடப்படுகின்றன.",fetching_live:"🔄 நேரடி செயற்கைக்கோள்/வானிலை தரவைச் சரிபார்க்கிறது…",compare_hint:"ஓர்கா உதவியாளரிலிருந்து சுயாதீனமாக ஒப்பிட 3 இடங்கள் வரை தேர்ந்தெடுக்கவும்.",btn_compare:"தேர்ந்தெடுக்கப்பட்ட இடங்களை ஒப்பிடு",safety_checklist:"புறப்படும் சரிபார்ப்பு பட்டியல்",btn_route:"பாதுகாப்பான டெமோ பாதையைக் காட்டு",route_disclaimer:"டெமோ பாதை — உத்தியோகபூர்வ வழிசெலுத்தல் அல்ல.",alerts_hint:"உங்கள் தேர்ந்தெடுக்கப்பட்ட இடத்தைச் சுற்றியுள்ள தற்போதைய மண்டலங்களிலிருந்து உருவாக்கப்பட்டது.",sources_hint:"இந்த முன்மாதிரி உண்மையான தரவை உருவகப்படுத்தப்பட்ட/டெமோ தரவிலிருந்து தெளிவாக பிரிக்கிறது.",settings_login:"டெமோ உள்நுழைவு",settings_phone:"உள்நுழைவு தொலைபேசி எண்",btn_continue:"தொலைபேசி மூலம் தொடரவும்",login_note:"முன்மாதிரி உள்நுழைவு — உண்மையான OTP அனுப்பப்படவில்லை.",btn_save:"அமைப்புகளைச் சேமி",settings_tracking:"இருப்பிட கண்காணிப்பு",settings_live:"நேரடி கண்காணிப்பு",settings_interval_note:"செயலில் இருக்கும்போது ஏறக்குறைய ஒவ்வொரு 1 வினாடிக்கும் புதுப்பிக்கப்படுகிறது, GPS/உலாவி இருப்புக்கு உட்பட்டது.",settings_border_alerts:"எல்லை எச்சரிக்கைகள்",settings_border_toggle:"எல்லை எச்சரிக்கைகள்",settings_voice_toggle:"குரல் எச்சரிக்கைகள்",settings_thresholds:"எச்சரிக்கை தூரம் (கிமீ)",settings_warning:"எச்சரிக்கை",settings_highwarning:"உயர் எச்சரிக்கை",settings_critical:"மிக முக்கியமான",settings_family:"அவசரநிலை & குடும்ப தொடர்புகள்",settings_family_note:"உருவகப்படுத்தப்பட்ட எச்சரிக்கை பதிவுக்கு மட்டும் பயன்படுத்தப்படுகிறது — உண்மையான SMS/அழைப்பு அனுப்பப்படவில்லை.",settings_self_phone:"உங்கள் தொலைபேசி எண்",settings_family1:"குடும்ப தொடர்பு 1",settings_family2:"குடும்ப தொடர்பு 2",settings_country:"நாடு",settings_state:"மாநிலம்",emg_title:"முக்கியமான கடல்சார் சம்பவம் — டெமோ",emg_loc:"கடைசியாக அறியப்பட்ட இடம்",emg_note:"இது ஒரு உருவகப்படுத்துதல். உண்மையான அவசர அழைப்பு செய்யப்படவில்லை.",no_location:"முதலில் ஒரு இடத்தைத் தேர்ந்தெடுக்கவும் அல்லது தேடவும்.",finding_title:"ஓர்கா அருகிலுள்ள கண்டுபிடிப்பு",reco_title:"🏆 ஓர்கா பரிந்துரை",reco_prefix:"மிகவும் வலுவான தேர்வு — இது மீன்பிடி தகுதியை பாதுகாப்பான மொத்த கடல் மற்றும் எல்லை நிலைமைகளுடன் சமநிலைப்படுத்துகிறது.",reco_border_note:"அதிக மீன் மதிப்பெண் கொண்ட மண்டலம் அதிக வானிலை/கடல் ஆபத்தை கொண்டிருப்பதால் அல்லது கண்காணிக்கப்படும் எல்லைக்கு அருகில் இருப்பதால் ஓர்கா அதை முன்னுரிமையிலிருந்து குறைத்தது — பாதுகாப்பு பிடிக்கு முன் எடைபோடப்படுகிறது. தொடர்வதற்கு முன் தற்போதைய நிலைமைகள் மற்றும் பொருந்தும் கட்டுப்பாடுகளை சரிபார்க்கவும்.",good:"நல்லது",changing:"மாறுகிறது",highrisk:"அதிக ஆபத்து",low:"குறைவு",medium:"நடுத்தரம்",high:"அதிகம்",safe:"பாதுகாப்பானது",approaching:"நெருங்குகிறது",critical:"மிக முக்கியமான",fish_indicated:"மீன் குறிக்கப்பட்டுள்ளது",checked:"சரிபார்க்கப்பட்டது",zone:"மண்டலம்",distance:"தூரம்",fish:"மீன்",weather:"வானிலை",waves:"அலைகள்",wind:"காற்று",sst:"SST",chlorophyll:"குளோரோஃபில்",ocean_risk:"கடல் ஆபத்து",geofence:"புவி வேலி",overall:"மொத்தம்",border_distance:"எல்லை தூரம்",border_risk:"எல்லை ஆபத்து",view_on_map:"வரைபடத்தில் காண்க",compare_max:"நீங்கள் 3 மண்டலங்கள் வரை மட்டுமே ஒப்பிடலாம்.",compare_pick:"ஒப்பிட குறைந்தது 2 மண்டலங்களைத் தேர்ந்தெடுக்கவும்.",src_live:"நேரடி வரைபடம்",src_map_desc:"ஊடாடும் வரைபட காட்சி மற்றும் டைல்களுக்குப் பயன்படுத்தப்படுகிறது.",src_geo:"நேரடி / API",src_geo_h:"இட தேடல்",src_geo_desc:"எந்த இட பெயரும் OpenStreetMap Nominatim மூலம் நேரடியாக புவிக்குறியாக்கப்படுகிறது — ஒரு நிலையான நகர பட்டியலுக்கு மட்டுப்படுத்தப்படவில்லை.",src_liveapi:"நேரடி / API (பின்வாங்கல்: உருவகப்படுத்தப்பட்டது)",src_proto:"முன்மாதிரி",src_dataset:"ஓர்கா மீன்பிடி தகுதி",src_dataset_desc:"செயற்கைக்கோள் பின்தளமோ Open-Meteo-வோ அணுக முடியாதபோது மட்டுமே பயன்படுத்தப்படும் பின்வாங்கல்/உருவகப்படுத்தப்பட்ட மீன்-தகுதி மதிப்பெண்.",src_sim:"உருவகப்படுத்தப்பட்டது",src_weather:"வானிலை & அலைகள்",src_weather_desc:"காற்று, கடல் மேற்பரப்பு வெப்பநிலை மற்றும் அலை உயரம் கிடைக்கும் இடத்தில் Open-Meteo இலிருந்து நேரடியாகப் பெறப்படுகிறது; கோரிக்கை தோல்வியடைந்தால் உருவகப்படுத்தப்பட்ட டெமோ மதிப்புகளுக்குத் திரும்புகிறது.",src_satellite:"நேரடி / செயற்கைக்கோள் (விருப்ப பின்தளம்)",src_satellite_h:"மீன்பிடி தகுதி — செயற்கைக்கோள் அடுக்கு",src_satellite_desc:"இணைக்கப்பட்ட பைதான் பின்தளம் (backend/main.py) இயங்கும்போது, மீன்-தகுதி உண்மையான செயற்கைக்கோள் கடல் மேற்பரப்பு வெப்பநிலை மற்றும் குளோரோஃபில்-a (NOAA CoastWatch ERDDAP) இலிருந்து கணக்கிடப்படுகிறது — INCOIS-இன் உத்தியோகபூர்வ PFZ ஆலோசனைகள் கட்டமைக்கப்பட்ட அதே இரண்டு சமிக்ஞைகள். பின்தளம் இயங்காதபோது, இது மேலே உள்ள வானிலை-மட்டும் அடுக்குக்குத் திரும்புகிறது, பின்னர் முழுமையாக உருவகப்படுத்தப்பட்ட அடுக்குக்கு — எது பொருந்தியது என்பதைக் காண ஒவ்வொரு மண்டல அட்டையிலும் SATELLITE / LIVE / SIM பேட்ஜைச் சரிபார்க்கவும்.",src_treaty:"ஒப்பந்த அடிப்படையிலான (தோராயம்)",src_boundary:"எல்லை தரவு",src_boundary_desc:"இந்தியா-இலங்கை கோடு 1974 பாக் ஜலசந்தி மற்றும் 1976 மன்னார் வளைகுடா ஒப்பந்தங்களின் உண்மையான ஆயத்தொலைவு புள்ளிகளைப் பயன்படுத்துகிறது. மாநில/யூனியன் பிரதேச எல்லைகள் உண்மையான GADM-அடிப்படையிலான வரைபடங்களைப் பயன்படுத்துகின்றன (கீழே உள்ள மாநில எல்லைகள் & நீர்நிலைகள் மூலத்தைப் பார்க்கவும்) — பழைய கடலோர-அட்சரேகை தோராயம் அந்த தரவு ஏற்றத் தவறினால் மட்டுமே பயன்படுத்தப்படும். இரண்டும் ஒரு உத்தியோகபூர்வ விளக்கப்படத்திற்கு மாற்றாக இல்லை — எப்போதும் அதிகாரிகளுடன் சரிபார்க்கவும்.",src_family:"குடும்ப எச்சரிக்கைகள்",src_family_desc:"SMS/அழைப்பு அறிவிப்புகள் உருவகப்படுத்தப்பட்டவை மட்டுமே. இந்த முன்மாதிரியால் உண்மையான செய்தி அல்லது அழைப்பு அனுப்பப்படவில்லை.",footer:"ஓர்கா மெரின் இன்டெலிஜென்ஸ் — மாணவர் புத்தாக்க ஹேக்கத்தான் 2026 முன்மாதிரி. உண்மையான கடல்சார் தரவு பயன்படுத்தப்படவில்லை.",agent_planner:"ஓர்கா திட்டமிடல் ஏஜென்ட்",agent_weather:"வானிலை ஏஜென்ட்",agent_ocean:"கடல் ஏஜென்ட்",agent_fishing:"மீன்பிடி ஏஜென்ட்",agent_geo:"புவி ஏஜென்ட்",agent_risk:"ஆபத்து ஏஜென்ட்",agent_border:"எல்லை ஏஜென்ட்",agent_safety:"பாதுகாப்பு ஏஜென்ட்",agent_reasoner:"ஓர்கா பகுத்தறிவாளர்",task_planner:"இடம், கேள்வி மற்றும் கோரப்பட்ட நேரத்தைப் புரிந்துகொள்ளுங்கள்.",result_planner:"மீன்பிடி + பாதுகாப்பு வினவல் அடையாளம் காணப்பட்டது.",complete:"முடிந்தது",checklist_items:["உத்தியோகபூர்வ கடல்சார் எச்சரிக்கைகளைச் சரிபார்க்கவும்","தொடர்பு உபகரணங்களை எடுத்துச் செல்லுங்கள்","எரிபொருள் அளவைச் சரிபார்க்கவும்","பேட்டரி / பவர் பேங்க் சரிபார்க்கவும்","வழிசெலுத்தல் உபகரணத்தைச் சரிபார்க்கவும்","அனுமதிக்கப்பட்ட மீன்பிடி பகுதிகளுக்குள் இருங்கள்"],emg_steps:["தற்போதைய இருப்பிடத்தைப் பிடிக்கவும்","அவசர செய்தியைத் தயாரிக்கவும்","குடும்ப அறிவிப்பு (உருவகப்படுத்தப்பட்டது)","மீட்பு-சேனல் செய்தி (உருவகப்படுத்தப்பட்டது)"],border_hint:"முன்மாதிரி எல்லை தரவு — அதிகாரப்பூர்வமானது அல்ல. ஒரு எல்லைக்கு அருகில் தொடர்வதற்கு முன் எப்போதும் தற்போதைய உத்தியோகபூர்வ கடல்சார் விதிமுறைகளை சரிபார்க்கவும்.",border_click_hint:"கீழே உள்ள வரைபடத்தில் எங்கு வேண்டுமானாலும் கிளிக் செய்து அந்த இடத்தின் எல்லை நிலையை சரிபார்க்கலாம்.",border_status_title:"விவரங்கள்",family_log_title:"குடும்ப எச்சரிக்கை பதிவு",family_log_hint:"உருவகப்படுத்தப்பட்டது மட்டுமே — இந்த முன்மாதிரியிலிருந்து உண்மையான SMS அல்லது அழைப்பு ஒருபோதும் அனுப்பப்படாது.",chat_ph:"உங்கள் கேள்வியை தட்டச்சு செய்யவும்... எ.கா. நான் எல்லையிலிருந்து எவ்வளவு தூரத்தில் இருக்கிறேன்?",btn_live_off:"நேரடி கண்காணிப்பைத் தொடங்கு",btn_live_on:"நேரடி கண்காணிப்பை நிறுத்து",btn_demo_move:"டெமோ: அணுகுமுறையை உருவகப்படுத்து",btn_return:"திரும்பும் பாதையை பரிந்துரைக்கவும்",live_lat:"அட்சரேகை",live_lon:"தீர்க்கரேகை",live_acc:"GPS துல்லியம்",live_update:"கடைசி புதுப்பிப்பு",current_state:"தற்போது இருக்கும் இடம்",current_state_line:"📍 தற்போது {state} நீர்/கடலோரத்தில் உள்ளீர்கள்.",current_state_lanka:"📍 தற்போது இலங்கை நீரில் உள்ளீர்கள் (கண்காணிக்கப்படும் கோட்டைத் தாண்டி).",nearest_state:"அருகிலுள்ள மாநில எல்லை",other_state_boundary:"மேலும் அருகில்",nearest_maritime:"கடல்சார் எல்லை (இலங்கை)",status:"நிலை",direction:"திசை",crossed_label:"சாத்தியமான எல்லை மீறல்",gps_denied:"இருப்பிட அனுமதி கிடைக்கவில்லை. ஒரு இடத்தை கைமுறையாக தேர்ந்தெடுக்கவும்.",hero_safe:"✅ பாதுகாப்பானது — நீங்கள் அருகிலுள்ள கண்காணிக்கப்படும் எல்லையிலிருந்து ({name}) {d} கிமீ தொலைவில் உள்ளீர்கள்.",hero_approaching:"🟡 நெருங்குகிறது — {name} இலிருந்து {d} கிமீ. உங்கள் நிலையை கவனியுங்கள்.",hero_high:"🟠 உயர் எச்சரிக்கை — {name} இலிருந்து வெறும் {d} கிமீ. உங்கள் அனுமதிக்கப்பட்ட மீன்பிடி பகுதியை சரிபார்க்கவும்.",hero_critical:"🔴 மிக முக்கியமான — {name} இலிருந்து வெறும் {d} கிமீ. உங்கள் நிலையை சரிபார்க்காமல் மேலும் தொடர வேண்டாம்.",hero_crossed:"🚨 சாத்தியமான எல்லை மீறல் — உங்கள் நிலை {name} இன் மறுபுறத்தில் இருப்பதாகத் தெரிகிறது (~{d} கிமீ கடந்து). நிறுத்தி உங்கள் நிலையையும் பொருந்தும் கடல்சார் விதிமுறைகளையும் உடனடியாக சரிபார்க்கவும்.",tips_safe:["நீங்கள் கண்காணிக்கப்படும் பகுதிக்குள் வசதியாக இருக்கிறீர்கள் — சாதாரண செயல்பாடுகளைத் தொடரவும்.","கடலில் இருக்கும்போது இந்தப் பக்கத்தை அவ்வப்போது சரிபார்க்கவும்.","இங்குள்ள எல்லைக் கோடுகள் தோராயமானவை — எப்போதும் உத்தியோகபூர்வ விளக்கப்படங்களையும் நம்புங்கள்."],tips_approaching:["உங்கள் தற்போதைய திசை மற்றும் எல்லையிலிருந்து தூரத்தை குறிக்கவும்.","கண்காணிக்கப்படும் கோட்டிற்கு அருகில் இருக்கும்போது இந்தப் பக்கத்தைத் திறந்து வையுங்கள்.","எல்லையை நோக்கி மேலும் நகர்வதைத் தவிர்க்கவும்."],tips_high:["இப்போது பாதுகாப்பான நீரை நோக்கி திரும்புவதைக் கருதுங்கள்.","இது ஒரு முன்மாதிரி மதிப்பீடு — உள்ளூர் அறிவு மற்றும் விளக்கப்படங்களுடன் குறுக்கு-சரிபார்க்கவும்.","அருகிலுள்ள படகு அல்லது உங்கள் குடும்ப தொடர்புக்கு உங்கள் நிலையைத் தெரியப்படுத்துங்கள்."],tips_critical:["நிறுத்தி இந்த திசையில் மேலும் செல்ல வேண்டாம்.","உடனடியாக பாதுகாப்பான நீரை நோக்கி திரும்புங்கள்.","இப்போது உங்கள் குடும்பம்/கடலோர காவல்படை தொடர்பு சேனலைப் பயன்படுத்துங்கள்."],tips_crossed:["படகை உடனடியாக நிறுத்துங்கள்.","நீங்கள் வந்த வழியே திரும்புங்கள்.","இந்த முன்மாதிரி சட்ட நிலையை உறுதிப்படுத்த முடியாது — இதை ஒரு தீவிர எச்சரிக்கையாகக் கருதி அதிகாரிகளுடன் சரிபார்க்கவும்."],alert_safe:"நீங்கள் அருகிலுள்ள கண்காணிக்கப்படும் எல்லையிலிருந்து ({name}) {d} கிமீ தொலைவில் உள்ளீர்கள். உடனடி கவலை இல்லை.",alert_approaching:"நீங்கள் {name} ஐ நெருங்குகிறீர்கள். தூரம்: {d} கிமீ.",alert_high:"⚠️ நீங்கள் {name} இன் {d} கிமீ க்குள் உள்ளீர்கள். உங்கள் அனுமதிக்கப்பட்ட மீன்பிடி பகுதியை சரிபார்க்கவும்.",alert_critical:"🚨 நீங்கள் {name} க்கு மிக அருகில் ({d} கிமீ) உள்ளீர்கள். உங்கள் நிலை மற்றும் பொருந்தும் கடல்சார் விதிமுறைகளை சரிபார்க்காமல் மேலும் தொடர வேண்டாம்.",alert_crossed:"🚨 உங்கள் நிலை {name} இன் மறுபுறத்தில் இருப்பதாகத் தெரிகிறது (~{d} கிமீ கடந்து). நிறுத்தி உங்கள் நிலையையும் பொருந்தும் கடல்சார் விதிமுறைகளையும் உடனடியாக சரிபார்க்கவும்.",family_alert_border:"மீனவர் ஒரு கண்காணிக்கப்படும் எல்லைக்கு அருகில் {tier} நிலையை அடைந்தார் ({d} கிமீ).",family_alert_redzone:"மீனவரின் நேரடி நிலை ஒரு சிவப்பு (அதிக ஆபத்து) மீன்பிடி மண்டலத்திற்குள்/அருகில் உள்ளது.",family_alert_cyclone:"மீனவரின் நேரடி நிலை உயர்-ஆபத்து வானிலை (சூறாவளி வகை) மண்டலத்திற்கு அருகில் உள்ளது.",family_sms:"📨 குடும்ப தொடர்புகளுக்கு SMS உருவகப்படுத்தப்பட்டது",family_call:"📞 குடும்ப தொடர்புகளுக்கு அழைப்பு உருவகப்படுத்தப்பட்டது",no_contacts:"குடும்ப தொடர்பு எண்கள் அமைக்கப்படவில்லை — எச்சரிக்கை உருவகப்படுத்துதலை இயக்க அமைப்புகளில் அவற்றைச் சேர்க்கவும்.",return_route_msg:"தற்போதைய காற்றின் அடிப்படையில் (~{w} கிமீ/மணி) {z} அருகில், பரிந்துரைக்கப்படும் திரும்பும் திசை {dir} ஆக {label} நோக்கி, தோராயமாக {d} கிமீ. திரும்புவதற்கு முன் உத்தியோகபூர்வ கடல்சார் ஆலோசனைகளை மீண்டும் சரிபார்க்கவும்.",chat_welcome:"வணக்கம், நான் ஓர்கா. ஒரு இடத்தைத் தேர்ந்தெடுக்கவும், அருகிலுள்ள மீன்பிடி மண்டலங்கள் மற்றும் எல்லை தூரம் பற்றி என்னால் உங்களுக்குச் சொல்ல முடியும். கேட்டு பாருங்கள்: 'நான் எல்லையிலிருந்து எவ்வளவு தூரத்தில் இருக்கிறேன்?'",chat_no_location:"முதலில் ஒரு மீனவர் இருப்பிடத்தைத் தேர்ந்தெடுக்கவும் (டாஷ்போர்டில்) நான் பகுப்பாய்வு செய்ய ஏதாவது இருக்கும்படி.",chat_border_answer:"நீங்கள் {label} இலிருந்து தோராயமாக {d} கிமீ தொலைவில் உள்ளீர்கள், நிலை: {status}.",chat_continue_answer:"கண்காணிக்கப்படும் எல்லைக்கு அருகில் உங்கள் நேரடி நிலை தற்போது {status} ({d} கிமீ). தொடர்வதற்கு முன் அனுமதிக்கப்பட்ட மீன்பிடி பகுதிக்குள் இருக்கவும் மற்றும் சமீபத்திய உத்தியோகபூர்வ கடல்சார் ஆலோசனைகளை சரிபார்க்கவும் என்று பரிந்துரைக்கிறேன்.",chat_safer_answer:"மீன்பிடி தகுதி, வானிலை மற்றும் எல்லை தூரம் ஒன்றிணைந்து, {zone} தற்போது பாதுகாப்பான தேர்வாகத் தெரிகிறது ({score}/100 ஒருங்கிணைந்த மதிப்பெண்).",chat_weather_answer:"அருகிலுள்ள பரிந்துரைக்கப்பட்ட மண்டலம் {zone} தற்போது {weather} வானிலையை {wave} மீ அலைகள் மற்றும் {wind} கிமீ/மணி காற்றுடன் காட்டுகிறது.",chat_default:"'நான் எல்லையிலிருந்து எவ்வளவு தூரத்தில் இருக்கிறேன்', 'என்னால் தொடர்ந்து மீன்பிடிக்க முடியுமா', அல்லது 'எந்த மண்டலம் பாதுகாப்பானது' போன்ற கேள்விகளுக்கு என்னால் பதிலளிக்க முடியும். இவற்றில் ஒன்றை முயற்சிக்கவும், அல்லது மேலே உள்ள பேனலைச் சரிபார்க்கவும்.",voice_unsupported:"இந்த உலாவியில் குரல் அங்கீகாரம் ஆதரிக்கப்படவில்லை — தயவுசெய்து உங்கள் கேள்வியை தட்டச்சு செய்யவும்.",voice_listening:"🎤 கேட்கிறது...",gps_watch_error:"இருப்பிட அனுமதி கிடைக்கவில்லை. ஒரு இடத்தை கைமுறையாக தேர்ந்தெடுக்கவும் அல்லது உலாவி அனுமதிகளை சரிபார்க்கவும்.",geocode_searching:"⏳",geocode_notfound:"கிடைக்கவில்லை — அருகிலுள்ள ஒரு நகரம் அல்லது lat,lon ஜோடியை முயற்சிக்கவும்",lbl_radius:"தேடல் ஆரம் (கிமீ)",lbl_zonecount:"மண்டலங்களின் எண்ணிக்கை",zoneintel_hint_dyn:"{km} கிமீ தேடல் வரம்பிற்குள் உள்ள அனைத்து அருகிலுள்ள மீன்பிடி மண்டலங்களும், சுயாதீனமாக மதிப்பிடப்படுகின்றன.",legend_ring_warn:"மஞ்சள் வளையம் = எல்லை எச்சரிக்கை",legend_ring_high:"ஆரஞ்சு வளையம் = உயர் எச்சரிக்கை",legend_ring_crit:"சிவப்பு வளையம் = மிக முக்கியமான",chat_dash_hint:"இந்த வரைபடம் பற்றி நேரடியாகக் கேளுங்கள் — மீன்பிடி மண்டலங்கள் மற்றும் எல்லை ஆபத்து ஒன்றாக, எ.கா. \"நான் எல்லையிலிருந்து எவ்வளவு தூரத்தில் இருக்கிறேன்?\" அல்லது \"எந்த மண்டலம் பாதுகாப்பானது?\"",legend_wind:"காற்று ஓட்டம் (தோராயம், மண்டல காற்று போன்ற தரவு)",show_wind:"அனிமேஷன் காற்று ஓட்டத்தைக் காட்டு (தோராயம்)",nav_cyclone:"புயல் நுண்ணறிவு",cyclone_title:"புயல் நுண்ணறிவு",cyclone_hint:"முன்மாதிரி — இது நேரடி காற்று + அழுத்தம் + அலை தரவிலிருந்து ஒரு டெமோ சூத்திரம் மற்றும் ஒரு உருவகப்படுத்தப்பட்ட புயல் காட்சி, நேரடி புயல் கண்காணிப்பாளர் அல்ல. இந்திய கடற்கரைகளில் உண்மையான புயல் எச்சரிக்கைகளுக்கு, எப்போதும் IMD (mausam.imd.gov.in) மற்றும் INCOIS (incois.gov.in) ஐ நேரடியாகச் சரிபார்க்கவும்.",cyclone_heuristic_title:"தற்போதைய புயல்-ஆபத்து சூத்திரம்",cyclone_heuristic_sub:"சூத்திர மதிப்பெண் {index}/100 — {tier}. உண்மையான நேரடி காற்று + அழுத்தம் + அலை தரவிலிருந்து, எளிய நுழைவாயில்களுடன் இணைந்து கட்டப்பட்டது — உண்மையான புயல் கண்டறிதல் அமைப்பு அல்ல.",cyclone_pressure:"அழுத்தம்",cyclone_risk_index:"ஆபத்து குறியீடு",cyclone_risk_low:"குறைவு",cyclone_risk_elevated:"உயர்ந்தது",cyclone_risk_watch:"கவனிப்பு",cyclone_risk_high:"அதிகம்",cyclone_demo_title:"உருவகப்படுத்தப்பட்ட டெமோ அமைப்பு: {name}",cyclone_demo_sub:"{cat} · {d} கிமீ தொலைவில் · முன்னோக்கி வேகம் மற்றும் ETA உருவகப்படுத்தப்பட்டவை, உண்மையான கண்காணிக்கப்படும் புயல் அல்ல.",cyclone_category:"வகை",cyclone_forward_speed:"முன்னோக்கி வேகம்",cyclone_eta:"ETA (உருவகப்படுத்தப்பட்டது)",cyclone_regen:"டெமோ காட்சியை மீண்டும் உருவாக்கு",cyclone_checklist_title:"புயல் பாதுகாப்பு சரிபார்ப்பு பட்டியல்",cyclone_checklist_items:["இந்தப் பக்கத்தை ஒரு டெமோவாக மட்டும் கருதுங்கள் — உண்மையான புயல் எச்சரிக்கைகளுக்கு எப்போதும் உத்தியோகபூர்வ IMD/INCOIS புல்லடின்களைச் சரிபார்க்கவும்","அவசர தொடர்புகள், ரேடியோ மற்றும் பேட்டரி உபகரணங்களை சார்ஜ் செய்து தயாராக வைத்திருங்கள்","உங்கள் பகுதிக்கு உண்மையான உத்தியோகபூர்வ எச்சரிக்கை வழங்கப்பட்டால், உடனடியாக கரைக்குத் திரும்புங்கள்","கடுமையான வானிலை வருவதற்கு முன் டெக்கில் தளர்வான உபகரணங்களைப் பாதுகாக்கவும்","உங்கள் அருகிலுள்ள பாதுகாப்பான துறைமுகத்தையும் அதன் தூரத்தையும் தெரிந்து கொள்ளுங்கள்"],cyclone_official_note:"தரவு ஆதாரங்கள்: Open-Meteo இலிருந்து நேரடி காற்று/அழுத்தம்/அலை (இந்த ஆப்பின் மற்ற பகுதிகள் போலவே). பெயரிடப்பட்ட புயல், அதன் வகை, பாதை மற்றும் ETA ஆகியவை டெமோ நோக்கங்களுக்காக முழுமையாக உருவகப்படுத்தப்பட்டவை — அவை உண்மையான வானிலை அமைப்பைக் குறிக்கவில்லை. உண்மையான புயல் எச்சரிக்கைகளுக்கு எப்போதும் IMD மற்றும் INCOIS ஐ நேரடியாகச் சரிபார்க்கவும்.",family_alert_cyclone_demo:"உருவகப்படுத்தப்பட்ட புயல் அமைப்பு {name} உயர்/முக்கியமான டெமோ நிலையில் உள்ளது, மீனவரின் நிலையிலிருந்து {d} கிமீ (டெமோ காட்சி — உண்மையான புயல் அல்ல).",src_cyclone:"உருவகப்படுத்தப்பட்டது / சூத்திரம்",src_cyclone_h:"புயல் நுண்ணறிவு",src_cyclone_desc:"புயல்-ஆபத்து எண் உண்மையான நேரடி காற்று, அழுத்தம் மற்றும் அலை தரவைப் பயன்படுத்துகிறது (இதே Open-Meteo மூலம் மற்ற இடங்களைப் போலவே), ஒரு எளிய சூத்திரமாக இணைக்கப்பட்டுள்ளது — உண்மையான புயல் கண்டறிதல் அல்ல. காட்டப்படும் பெயரிடப்பட்ட புயல் அமைப்பு முழுமையாக உருவகப்படுத்தப்பட்ட டெமோ காட்சி, உண்மையான IMD-கண்காணிக்கப்படும் புயல் அல்ல. உண்மையான புயல் எச்சரிக்கைகளுக்கு எப்போதும் IMD மற்றும் INCOIS ஐ நேரடியாகச் சரிபார்க்கவும்.",freshness_asof:"{time} அன்று",nav_tripplanner:"பயண திட்டமிடல்",trip_title:"பயண திட்டமிடல்",trip_hint:"உங்கள் தேர்ந்தெடுக்கப்பட்ட இடத்திற்கு Open-Meteo இன் உண்மையான மணிநேர முன்னறிவிப்பைப் பயன்படுத்தி முன்கூட்டியே திட்டமிடுங்கள். பாதுகாப்பு மதிப்பீடு உங்கள் சாளரத்தில் மோசமான மணிநேரத்தைப் பயன்படுத்துகிறது, சராசரியை அல்ல. முன்னறிவிப்பு எல்லைக்கு அப்பால் (~15 நாட்கள்) அல்லது முன்னறிவிப்பைப் பெற முடியாவிட்டால், இது தெளிவாக ஒரு உருவகப்படுத்தப்பட்ட மதிப்பீட்டிற்குத் திரும்புகிறது.",lbl_trip_date:"புறப்படும் தேதி",lbl_trip_time:"புறப்படும் நேரம்",lbl_trip_duration:"பயண காலம் (மணிநேரம்)",btn_plan_trip:"பயணத்தைத் திட்டமிடு",trip_pick_datetime:"முதலில் ஒரு புறப்படும் தேதி மற்றும் நேரத்தைத் தேர்ந்தெடுக்கவும்.",trip_advisory_go:"✅ உங்கள் திட்டமிடப்பட்ட சாளரத்திற்கு நிலைமைகள் மீன்பிடிக்கத் தகுந்ததாகத் தெரிகிறது",trip_advisory_caution:"🟡 உங்கள் திட்டமிடப்பட்ட சாளரத்தின் போது நிலைமைகள் மாறக்கூடும் — எச்சரிக்கையுடன் தொடரவும்",trip_advisory_nogo:"🔴 உங்கள் திட்டமிடப்பட்ட சாளரத்தின் போது அதிக ஆபத்துள்ள நிலைமைகள் எதிர்பார்க்கப்படுகின்றன — இந்த பயணத்தை மறுபரிசீலனை செய்யவும்",trip_window_label:"புறப்பாடு {start} → திரும்புதல் {end}",trip_worst_hour_note:"இந்த மதிப்பீடு உங்கள் சாளரத்தில் மோசமான ஒரு மணிநேரத்தைப் பயன்படுத்துகிறது, சராசரியை அல்ல — ஒரு பயணம் அதன் மோசமான தருணத்தைப் போலவே பாதுகாப்பானது. புறப்படுவதற்கு முன் எப்போதும் உத்தியோகபூர்வ IMD கடல்சார் எச்சரிக்கைகளுடன் சரிபார்க்கவும்.",src_forecast_near:"முன்னறிவிப்பு",src_forecast_far:"முன்னறிவிப்பு (நீட்டிக்கப்பட்டது — குறைந்த நம்பகத்தன்மை)",harbor_popup_note:"அறியப்பட்ட மீன்பிடி துறைமுகம் (குறிப்புக்கு மட்டும் — பொது அறிவு, தோராயமான இடம்)",nearest_harbor_line:"⚓ அருகிலுள்ள அறியப்பட்ட மீன்பிடி துறைமுகம்: {name} — {d} கிமீ (குறிப்புக்கு மட்டும், தோராயமானது)",show_harbors:"அறியப்பட்ட மீன்பிடி துறைமுகங்களைக் காட்டு",legend_harbor:"அறியப்பட்ட மீன்பிடி துறைமுகம் (குறிப்பு)",health_intro:"ஒவ்வொரு வெளிப்புற தரவு மூலமும் தற்போது உண்மையிலேயே அணுகக்கூடியதா என்பதற்கான நேரடி சரிபார்ப்பு — ஒரு உரிமைகோரல் அல்ல, ஒவ்வொன்றுக்கும் ஒரு உண்மையான நேரமான கோரிக்கை.",health_check_btn:"இப்போது தரவு மூலங்களைச் சரிபார்க்கவும்",health_backend:"பைதான் பின்தளம்",health_weather:"Open-Meteo (வானிலை)",health_marine:"Open-Meteo (கடல்)",health_geocode:"Nominatim (இட தேடல்)",health_gps:"உலாவி GPS",health_network:"நெட்வொர்க்",health_online:"ஆன்லைனில்",health_offline:"ஆஃப்லைனில்",health_unreachable:"அணுக முடியவில்லை",health_asof:"{time} அன்று சரிபார்க்கப்பட்டது",src_geo_bearing:"உண்மையான புவியியல்",src_geo_bearing_h:"கடல்நோக்கிய வேட்பாளர் மண்டலங்கள்",src_geo_bearing_desc:"வேட்பாளர் மண்டல திசைகள் தேர்ந்தெடுக்கப்பட்ட புள்ளி எந்த இந்திய கடற்கரையில் உள்ளது (வங்காள விரிகுடா அல்லது அரபிக் கடல்) என்பதன் அடிப்படையில் ஒரு யதார்த்தமான கடல்நோக்கிய கூம்புக்கு கட்டுப்படுத்தப்பட்டுள்ளன, சீரற்ற 0-360° திசைக்கு பதிலாக அது எப்போதாவது நிலத்தை நோக்கி திரும்பக்கூடும்.",src_harbors:"குறிப்பு (தோராயம்)",src_harbors_h:"அறியப்பட்ட மீன்பிடி துறைமுகங்கள்",src_harbors_desc:"உண்மையான, பொதுவில் அறியப்பட்ட முக்கிய இந்திய மீன்பிடி துறைமுகங்களின் ஒரு சிறிய தேர்ந்தெடுக்கப்பட்ட பட்டியல், வரைபட குறிகள் மற்றும் ஒரு \"அருகிலுள்ள துறைமுகம்\" உண்மையாகக் காட்டப்படுகிறது. பொது-அறிவு தோராயமான இடங்கள், சர்வே-தர ஆயத்தொலைவுகள் அல்ல, நேரடி ஊட்டமும் அல்ல."});
Object.assign(I18N.te, {brand:"ఓర్కా మెరైన్ ఇంటెలిజెన్స్",ph_location:"ఏదైనా తీర ప్రాంత పేరు లేదా lat,lon నమోదు చేయండి",btn_search:"శోధించు",hint_click:"మీ స్థానాన్ని ఎంచుకోవడానికి మ్యాప్‌లో ఎక్కడైనా క్లిక్ చేయండి, లేదా ఏదైనా స్థల పేరు టైప్ చేసి శోధించు నొక్కండి.",lbl_question:"ప్రశ్న",ph_question:"రేపు ఉదయం చేపలు పట్టడానికి ఏ సమీప నీటివనరు సురక్షితమైనది?",legend_green:"ఆకుపచ్చ = మంచిది",legend_yellow:"పసుపు = మారుతోంది",legend_red:"ఎరుపు = నివారించండి",legend_blue:"నీలం = మత్స్యకారుడు",legend_maritime:"శ్రీలంక సముద్ర సరిహద్దు",legend_state:"రాష్ట్ర సరిహద్దు",legend_boundary:"పర్యవేక్షించే సరిహద్దు (సుమారు)",legend_you:"మీరు",show_borders:"మ్యాప్‌లో రాష్ట్ర/సముద్ర సరిహద్దులను చూపించు",hint_independent:"పరిస్థితులు స్థాన-నిర్దిష్టమైనవి — సమీప జోన్‌లలో వేర్వేరు చేపల మరియు వాతావరణ అనుకూలత ఉండవచ్చు.",st_overall:"మొత్తం ప్రమాదం",st_weather:"వాతావరణం",st_water:"నీరు",st_geofence:"జియోఫెన్స్",st_fishing:"చేపల అనుకూలత",st_border:"సరిహద్దు",hint_status:"ప్రస్తుతం ఎంచుకున్న / సిఫార్సు చేసిన జోన్‌ను మాత్రమే ప్రతిబింబిస్తుంది.",agents_title:"ఏజెంట్ కార్యకలాపం",agents_hint:"బహుళ-ఏజెంట్ తార్కిక వర్క్‌ఫ్లోను నడపడానికి డాష్‌బోర్డ్‌లో ఓర్కా విశ్లేషణ నొక్కండి.",zoneintel_hint:"20 కి.మీ శోధన పరిధిలోని అన్ని సమీప చేపల జోన్‌లు, స్వతంత్రంగా మూల్యాంకనం చేయబడ్డాయి.",fetching_live:"🔄 లైవ్ ఉపగ్రహ/వాతావరణ డేటా కోసం తనిఖీ చేస్తోంది…",compare_hint:"ఓర్కా అసిస్టెంట్ నుండి స్వతంత్రంగా పోల్చడానికి 3 స్థానాల వరకు ఎంచుకోండి.",btn_compare:"ఎంచుకున్న స్థానాలను పోల్చండి",safety_checklist:"బయలుదేరే చెక్‌లిస్ట్",btn_route:"సురక్షితమైన డెమో మార్గాన్ని చూపించు",route_disclaimer:"డెమో మార్గం — అధికారిక నావిగేషన్ కాదు.",alerts_hint:"మీ ఎంచుకున్న స్థానం చుట్టూ ఉన్న ప్రస్తుత జోన్‌ల నుండి రూపొందించబడింది.",sources_hint:"ఈ ప్రోటోటైప్ నిజమైన డేటాను అనుకరణ/డెమో డేటా నుండి స్పష్టంగా వేరు చేస్తుంది.",settings_login:"డెమో లాగిన్",settings_phone:"లాగిన్ ఫోన్ నంబర్",btn_continue:"ఫోన్‌తో కొనసాగించండి",login_note:"ప్రోటోటైప్ లాగిన్ — నిజమైన OTP పంపబడదు.",btn_save:"సెట్టింగ్‌లను సేవ్ చేయండి",settings_tracking:"లొకేషన్ ట్రాకింగ్",settings_live:"లైవ్ ట్రాకింగ్",settings_interval_note:"యాక్టివ్‌గా ఉన్నప్పుడు దాదాపు ప్రతి 1 సెకనుకు నవీకరించబడుతుంది, GPS/బ్రౌజర్ లభ్యతకు లోబడి.",settings_border_alerts:"సరిహద్దు హెచ్చరికలు",settings_border_toggle:"సరిహద్దు హెచ్చరికలు",settings_voice_toggle:"వాయిస్ హెచ్చరికలు",settings_thresholds:"హెచ్చరిక దూరం (కి.మీ)",settings_warning:"హెచ్చరిక",settings_highwarning:"అధిక హెచ్చరిక",settings_critical:"క్రిటికల్",settings_family:"అత్యవసర & కుటుంబ పరిచయాలు",settings_family_note:"అనుకరణ హెచ్చరిక లాగ్ కోసం మాత్రమే ఉపయోగించబడుతుంది — నిజమైన SMS/కాల్ పంపబడదు.",settings_self_phone:"మీ ఫోన్ నంబర్",settings_family1:"కుటుంబ పరిచయం 1",settings_family2:"కుటుంబ పరిచయం 2",settings_country:"దేశం",settings_state:"రాష్ట్రం",emg_title:"క్రిటికల్ మెరైన్ సంఘటన — డెమో",emg_loc:"చివరిగా తెలిసిన స్థానం",emg_note:"ఇది ఒక అనుకరణ. నిజమైన అత్యవసర కాల్ చేయబడదు.",no_location:"దయచేసి మొదట ఒక స్థానాన్ని ఎంచుకోండి లేదా శోధించండి.",finding_title:"ఓర్కా సమీప అన్వేషణ",reco_title:"🏆 ఓర్కా సిఫార్సు",reco_prefix:"అత్యంత బలమైన ఎంపిక — ఇది చేపల అనుకూలతను సురక్షితమైన మొత్తం సముద్ర మరియు సరిహద్దు పరిస్థితులతో సమతుల్యం చేస్తుంది.",reco_border_note:"అధిక చేపల స్కోరు ఉన్న జోన్ ఎక్కువ వాతావరణం/సముద్ర ప్రమాదాన్ని కలిగి ఉంది లేదా పర్యవేక్షించే సరిహద్దుకు దగ్గరగా ఉంది కాబట్టి ఓర్కా దానిని తక్కువ ప్రాధాన్యతనిచ్చింది — పట్టుకోవడం కంటే భద్రతకు ఎక్కువ ప్రాధాన్యత. కొనసాగించే ముందు ప్రస్తుత పరిస్థితులు మరియు వర్తించే పరిమితులను ధృవీకరించండి.",good:"మంచిది",changing:"మారుతోంది",highrisk:"అధిక ప్రమాదం",low:"తక్కువ",medium:"మధ్యస్థం",high:"ఎక్కువ",safe:"సురక్షితం",approaching:"సమీపిస్తోంది",critical:"క్రిటికల్",fish_indicated:"చేపలు సూచించబడ్డాయి",checked:"తనిఖీ చేయబడింది",zone:"జోన్",distance:"దూరం",fish:"చేపలు",weather:"వాతావరణం",waves:"అలలు",wind:"గాలి",sst:"SST",chlorophyll:"క్లోరోఫిల్",ocean_risk:"సముద్ర ప్రమాదం",geofence:"జియోఫెన్స్",overall:"మొత్తం",border_distance:"సరిహద్దు దూరం",border_risk:"సరిహద్దు ప్రమాదం",view_on_map:"మ్యాప్‌లో చూడండి",compare_max:"మీరు 3 జోన్‌ల వరకు మాత్రమే పోల్చవచ్చు.",compare_pick:"పోల్చడానికి కనీసం 2 జోన్‌లను ఎంచుకోండి.",src_live:"లైవ్ మ్యాప్",src_map_desc:"ఇంటరాక్టివ్ మ్యాప్ ప్రదర్శన మరియు టైల్స్ కోసం ఉపయోగించబడుతుంది.",src_geo:"లైవ్ / API",src_geo_h:"స్థల శోధన",src_geo_desc:"ఏదైనా స్థల పేరు OpenStreetMap Nominatim ద్వారా ప్రత్యక్షంగా జియోకోడ్ చేయబడుతుంది — స్థిర పట్టణ జాబితాకు పరిమితం కాదు.",src_liveapi:"లైవ్ / API (ఫాల్‌బ్యాక్: అనుకరణ)",src_proto:"ప్రోటోటైప్",src_dataset:"ఓర్కా చేపల అనుకూలత",src_dataset_desc:"ఉపగ్రహ బ్యాకెండ్ లేదా Open-Meteo రెండూ చేరుకోలేనప్పుడు మాత్రమే ఉపయోగించే ఫాల్‌బ్యాక్/అనుకరణ చేపల-అనుకూలత స్కోరు.",src_sim:"అనుకరణ",src_weather:"వాతావరణం & అలలు",src_weather_desc:"గాలి, సముద్ర ఉపరితల ఉష్ణోగ్రత మరియు అల ఎత్తు అందుబాటులో ఉన్నచోట Open-Meteo నుండి ప్రత్యక్షంగా పొందబడతాయి; అభ్యర్థన విఫలమైతే అనుకరణ డెమో విలువలకు తిరిగి వెళుతుంది.",src_satellite:"లైవ్ / శాటిలైట్ (ఐచ్ఛిక బ్యాకెండ్)",src_satellite_h:"చేపల అనుకూలత — ఉపగ్రహ శ్రేణి",src_satellite_desc:"చేర్చబడిన పైథాన్ బ్యాకెండ్ (backend/main.py) నడుస్తున్నప్పుడు, చేపల-అనుకూలత నిజమైన ఉపగ్రహ సముద్ర ఉపరితల ఉష్ణోగ్రత మరియు క్లోరోఫిల్-a (NOAA CoastWatch ERDDAP) నుండి లెక్కించబడుతుంది — INCOIS అధికారిక PFZ సలహాలు నిర్మించబడిన అదే రెండు సంకేతాలు. బ్యాకెండ్ నడవనప్పుడు, ఇది పైన ఉన్న వాతావరణం-మాత్రమే శ్రేణికి, తర్వాత పూర్తిగా అనుకరణ శ్రేణికి తిరిగి వెళుతుంది — ఏది వర్తించిందో చూడటానికి ప్రతి జోన్ కార్డ్‌లో SATELLITE / LIVE / SIM బ్యాడ్జ్‌ని తనిఖీ చేయండి.",src_treaty:"ఒప్పంద ఆధారిత (సుమారు)",src_boundary:"సరిహద్దు డేటా",src_boundary_desc:"భారత్-శ్రీలంక రేఖ 1974 పాక్ జలసంధి మరియు 1976 మన్నార్ గల్ఫ్ ఒప్పందాల నిజమైన కోఆర్డినేట్ పాయింట్లను ఉపయోగిస్తుంది. రాష్ట్ర/కేంద్రపాలిత ప్రాంతాల సరిహద్దులు నిజమైన GADM-ఆధారిత పాలిగాన్‌లను ఉపయోగిస్తాయి (దిగువ రాష్ట్ర సరిహద్దులు & జలవనరుల మూలాన్ని చూడండి) — పాత తీర-అక్షాంశ అంచనా ఆ డేటా లోడ్ కాకపోతే మాత్రమే వర్తిస్తుంది. రెండూ అధికారిక చార్ట్‌కు ప్రత్యామ్నాయం కాదు — ఎల్లప్పుడూ అధికారులతో ధృవీకరించండి.",src_family:"కుటుంబ హెచ్చరికలు",src_family_desc:"SMS/కాల్ నోటిఫికేషన్‌లు అనుకరణ మాత్రమే. ఈ ప్రోటోటైప్ ద్వారా నిజమైన సందేశం లేదా కాల్ పంపబడదు.",footer:"ఓర్కా మెరైన్ ఇంటెలిజెన్స్ — స్టూడెంట్ ఇన్నోవేషన్ హ్యాకథాన్ 2026 ప్రోటోటైప్. నిజమైన సముద్ర డేటా ఉపయోగించబడదు.",agent_planner:"ఓర్కా ప్లానర్ ఏజెంట్",agent_weather:"వాతావరణ ఏజెంట్",agent_ocean:"సముద్ర ఏజెంట్",agent_fishing:"చేపల ఏజెంట్",agent_geo:"జియో ఏజెంట్",agent_risk:"రిస్క్ ఏజెంట్",agent_border:"సరిహద్దు ఏజెంట్",agent_safety:"భద్రతా ఏజెంట్",agent_reasoner:"ఓర్కా రీజనర్",task_planner:"స్థానం, ప్రశ్న మరియు అభ్యర్థించిన సమయాన్ని అర్థం చేసుకోండి.",result_planner:"చేపలు + భద్రతా ప్రశ్న గుర్తించబడింది.",complete:"పూర్తయింది",checklist_items:["అధికారిక సముద్ర హెచ్చరికలను తనిఖీ చేయండి","కమ్యూనికేషన్ పరికరాలను తీసుకెళ్లండి","ఇంధన స్థాయిని తనిఖీ చేయండి","బ్యాటరీ / పవర్ బ్యాంక్ తనిఖీ చేయండి","నావిగేషన్ పరికరాన్ని తనిఖీ చేయండి","అనుమతించిన చేపల ప్రాంతాలలో ఉండండి"],emg_steps:["ప్రస్తుత స్థానాన్ని క్యాప్చర్ చేయండి","అత్యవసర సందేశాన్ని సిద్ధం చేయండి","కుటుంబ నోటిఫికేషన్ (అనుకరణ)","రెస్క్యూ-ఛానల్ సందేశం (అనుకరణ)"],border_hint:"ప్రోటోటైప్ సరిహద్దు డేటా — అధికారికం కాదు. సరిహద్దు దగ్గర కొనసాగించే ముందు ఎల్లప్పుడూ ప్రస్తుత అధికారిక సముద్ర నిబంధనలను ధృవీకరించండి.",border_click_hint:"ఆ స్థానం సరిహద్దు స్థితిని తనిఖీ చేయడానికి మీరు దిగువ మ్యాప్‌లో ఎక్కడైనా క్లిక్ చేయవచ్చు.",border_status_title:"వివరాలు",family_log_title:"కుటుంబ హెచ్చరిక లాగ్",family_log_hint:"అనుకరణ మాత్రమే — ఈ ప్రోటోటైప్ నుండి నిజమైన SMS లేదా కాల్ ఎప్పుడూ పంపబడదు.",chat_ph:"మీ ప్రశ్నను టైప్ చేయండి... ఉదా. నేను సరిహద్దు నుండి ఎంత దూరంలో ఉన్నాను?",btn_live_off:"లైవ్ ట్రాకింగ్‌ను ప్రారంభించండి",btn_live_on:"లైవ్ ట్రాకింగ్‌ను ఆపండి",btn_demo_move:"డెమో: విధానాన్ని అనుకరించండి",btn_return:"తిరిగి వచ్చే మార్గాన్ని సూచించండి",live_lat:"అక్షాంశం",live_lon:"రేఖాంశం",live_acc:"GPS ఖచ్చితత్వం",live_update:"చివరి నవీకరణ",current_state:"ప్రస్తుతం ఉన్న ప్రాంతం",current_state_line:"📍 ప్రస్తుతం {state} జలాలు/తీరంలో ఉన్నారు.",current_state_lanka:"📍 ప్రస్తుతం శ్రీలంక జలాల్లో ఉన్నారు (పర్యవేక్షించే రేఖను దాటి).",nearest_state:"సమీప రాష్ట్ర సరిహద్దు",other_state_boundary:"మరింత సమీపంలో",nearest_maritime:"సముద్ర సరిహద్దు (శ్రీలంక)",status:"స్థితి",direction:"దిశ",crossed_label:"సాధ్యమైన సరిహద్దు దాటడం",gps_denied:"లొకేషన్ అనుమతి అందుబాటులో లేదు. మాన్యువల్‌గా స్థానాన్ని ఎంచుకోండి.",hero_safe:"✅ సురక్షితం — మీరు సమీప పర్యవేక్షిత సరిహద్దు ({name}) నుండి {d} కి.మీ దూరంలో ఉన్నారు.",hero_approaching:"🟡 సమీపిస్తోంది — {name} నుండి {d} కి.మీ. మీ స్థానంపై దృష్టి పెట్టండి.",hero_high:"🟠 అధిక హెచ్చరిక — {name} నుండి కేవలం {d} కి.మీ. మీ అనుమతించిన చేపల ప్రాంతాన్ని ధృవీకరించండి.",hero_critical:"🔴 క్రిటికల్ — {name} నుండి కేవలం {d} కి.మీ. మీ స్థానాన్ని తనిఖీ చేయకుండా మరింత ముందుకు వెళ్లవద్దు.",hero_crossed:"🚨 సాధ్యమైన సరిహద్దు దాటడం — మీ స్థానం {name} యొక్క మరొక వైపు ఉన్నట్లు కనిపిస్తోంది (~{d} కి.మీ దాటి). ఆగి మీ స్థానం మరియు వర్తించే సముద్ర నిబంధనలను వెంటనే ధృవీకరించండి.",tips_safe:["మీరు పర్యవేక్షించే ప్రాంతంలో సౌకర్యవంతంగా ఉన్నారు — సాధారణ కార్యకలాపాలను కొనసాగించండి.","మీరు సముద్రంలో ఉన్నప్పుడు అప్పుడప్పుడు ఈ పేజీని మళ్లీ తనిఖీ చేయండి.","ఇక్కడ సరిహద్దు రేఖలు సుమారుగా ఉంటాయి — ఎల్లప్పుడూ అధికారిక చార్టులను కూడా నమ్మండి."],tips_approaching:["మీ ప్రస్తుత దిశ మరియు సరిహద్దు నుండి దూరాన్ని గమనించండి.","మీరు పర్యవేక్షించే రేఖ దగ్గర ఉన్నప్పుడు ఈ పేజీని తెరిచి ఉంచండి.","సరిహద్దు వైపు మరింత కొట్టుకుపోకుండా ఉండండి."],tips_high:["ఇప్పుడు సురక్షితమైన నీటి వైపు తిరిగి రావడాన్ని పరిగణించండి.","ఇది ఒక ప్రోటోటైప్ అంచనా — స్థానిక పరిజ్ఞానం మరియు చార్టులతో క్రాస్-చెక్ చేయండి.","సమీప పడవ లేదా మీ కుటుంబ పరిచయానికి మీ స్థానం తెలియజేయండి."],tips_critical:["ఆగి ఈ దిశలో మరింత ముందుకు వెళ్లవద్దు.","వెంటనే సురక్షితమైన నీటి వైపు తిరిగి రండి.","ఇప్పుడు మీ కుటుంబం/కోస్ట్ గార్డ్ కాంటాక్ట్ ఛానల్‌ను ఉపయోగించండి."],tips_crossed:["వెంటనే పడవను ఆపండి.","మీరు వచ్చిన మార్గంలో తిరిగి వెళ్లండి.","ఈ ప్రోటోటైప్ చట్టపరమైన స్థితిని నిర్ధారించలేదు — దీన్ని తీవ్రమైన హెచ్చరికగా పరిగణించి అధికారులతో ధృవీకరించండి."],alert_safe:"మీరు సమీప పర్యవేక్షిత సరిహద్దు ({name}) నుండి {d} కి.మీ దూరంలో ఉన్నారు. తక్షణ ఆందోళన లేదు.",alert_approaching:"మీరు {name} ను సమీపిస్తున్నారు. దూరం: {d} కి.మీ.",alert_high:"⚠️ మీరు {name} యొక్క {d} కి.మీ లోపల ఉన్నారు. మీ అనుమతించిన చేపల ప్రాంతాన్ని ధృవీకరించండి.",alert_critical:"🚨 మీరు {name} కి చాలా దగ్గరగా ({d} కి.మీ) ఉన్నారు. మీ స్థానం మరియు వర్తించే సముద్ర నిబంధనలను ధృవీకరించకుండా మరింత ముందుకు వెళ్లవద్దు.",alert_crossed:"🚨 మీ స్థానం {name} యొక్క మరొక వైపు ఉన్నట్లు కనిపిస్తోంది (~{d} కి.మీ దాటి). ఆగి మీ స్థానం మరియు వర్తించే సముద్ర నిబంధనలను వెంటనే ధృవీకరించండి.",family_alert_border:"మత్స్యకారుడు పర్యవేక్షించే సరిహద్దు దగ్గర {tier} స్థితిని చేరుకున్నారు ({d} కి.మీ).",family_alert_redzone:"మత్స్యకారుడి ప్రత్యక్ష స్థానం ఎరుపు (అధిక ప్రమాదం) చేపల జోన్‌లో/దగ్గర ఉంది.",family_alert_cyclone:"మత్స్యకారుడి ప్రత్యక్ష స్థానం అధిక-ప్రమాద వాతావరణం (తుఫాను రకం) జోన్‌కు దగ్గరగా ఉంది.",family_sms:"📨 కుటుంబ పరిచయాలకు SMS అనుకరించబడింది",family_call:"📞 కుటుంబ పరిచయాలకు కాల్ అనుకరించబడింది",no_contacts:"కుటుంబ పరిచయ నంబర్లు సెట్ చేయబడలేదు — హెచ్చరిక అనుకరణను ప్రారంభించడానికి సెట్టింగ్‌లలో వాటిని జోడించండి.",return_route_msg:"ప్రస్తుత గాలి ఆధారంగా (~{w} కి.మీ/గం) {z} దగ్గర, సూచించిన తిరిగి వచ్చే దిశ {dir} గా {label} వైపు, సుమారు {d} కి.మీ. తిరిగి రాకముందు అధికారిక సముద్ర సలహాలను మళ్లీ ధృవీకరించండి.",chat_welcome:"నమస్కారం, నేను ఓర్కా. ఒక స్థానాన్ని ఎంచుకోండి, సమీప చేపల జోన్‌లు మరియు సరిహద్దు దూరం గురించి నేను మీకు చెప్పగలను. ప్రయత్నించండి: 'నేను సరిహద్దు నుండి ఎంత దూరంలో ఉన్నాను?'",chat_no_location:"నేను విశ్లేషించడానికి ఏదైనా ఉండేలా దయచేసి మొదట మత్స్యకారుడి స్థానాన్ని ఎంచుకోండి (డాష్‌బోర్డ్‌లో).",chat_border_answer:"మీరు {label} నుండి సుమారు {d} కి.మీ దూరంలో ఉన్నారు, స్థితి: {status}.",chat_continue_answer:"పర్యవేక్షించే సరిహద్దు దగ్గర మీ ప్రత్యక్ష స్థానం స్థితి ప్రస్తుతం {status} ({d} కి.మీ). కొనసాగించే ముందు అనుమతించిన చేపల ప్రాంతంలో ఉండాలని మరియు తాజా అధికారిక సముద్ర సలహాలను తనిఖీ చేయాలని సిఫార్సు చేస్తున్నాను.",chat_safer_answer:"చేపల అనుకూలత, వాతావరణం మరియు సరిహద్దు దూరం కలిపి, {zone} ప్రస్తుతం సురక్షితమైన ఎంపికగా కనిపిస్తోంది ({score}/100 మిశ్రమ స్కోరు).",chat_weather_answer:"సమీప సిఫార్సు చేసిన జోన్ {zone} ప్రస్తుతం {weather} వాతావరణాన్ని {wave} మీ అలలు మరియు {wind} కి.మీ/గం గాలితో చూపిస్తోంది.",chat_default:"'నేను సరిహద్దు నుండి ఎంత దూరంలో ఉన్నాను', 'నేను చేపలు పట్టడం కొనసాగించవచ్చా', లేదా 'ఏ జోన్ సురక్షితమైనది' వంటి ప్రశ్నలకు నేను సమాధానం ఇవ్వగలను. వాటిలో ఒకటి ప్రయత్నించండి, లేదా పైన ఉన్న ప్యానెల్‌ను తనిఖీ చేయండి.",voice_unsupported:"ఈ బ్రౌజర్‌లో వాయిస్ గుర్తింపు మద్దతు లేదు — దయచేసి మీ ప్రశ్నను టైప్ చేయండి.",voice_listening:"🎤 వింటోంది...",gps_watch_error:"లొకేషన్ అనుమతి అందుబాటులో లేదు. మాన్యువల్‌గా స్థానాన్ని ఎంచుకోండి లేదా బ్రౌజర్ అనుమతులను తనిఖీ చేయండి.",geocode_searching:"⏳",geocode_notfound:"కనుగొనబడలేదు — సమీప పట్టణం లేదా lat,lon జతను ప్రయత్నించండి",lbl_radius:"శోధన వ్యాసార్థం (కి.మీ)",lbl_zonecount:"జోన్‌ల సంఖ్య",zoneintel_hint_dyn:"{km} కి.మీ శోధన పరిధిలోని అన్ని సమీప చేపల జోన్‌లు, స్వతంత్రంగా మూల్యాంకనం చేయబడ్డాయి.",legend_ring_warn:"పసుపు రింగ్ = సరిహద్దు హెచ్చరిక",legend_ring_high:"నారింజ రింగ్ = అధిక హెచ్చరిక",legend_ring_crit:"ఎరుపు రింగ్ = క్రిటికల్",chat_dash_hint:"ఈ మ్యాప్ గురించి నేరుగా అడగండి — చేపల జోన్‌లు మరియు సరిహద్దు ప్రమాదం కలిసి, ఉదా. \"నేను సరిహద్దు నుండి ఎంత దూరంలో ఉన్నాను?\" లేదా \"ఏ జోన్ సురక్షితమైనది?\"",legend_wind:"గాలి ప్రవాహం (సుమారు, జోన్ గాలి వంటి డేటా)",show_wind:"యానిమేటెడ్ గాలి ప్రవాహాన్ని చూపించు (సుమారు)",nav_cyclone:"తుఫాను ఇంటెలిజెన్స్",cyclone_title:"తుఫాను ఇంటెలిజెన్స్",cyclone_hint:"ప్రోటోటైప్ — ఇది నిజమైన ప్రత్యక్ష గాలి + ఒత్తిడి + అల డేటా నుండి ఒక డెమో సూత్రం మరియు అనుకరణ తుఫాను దృశ్యం, ప్రత్యక్ష తుఫాను ట్రాకర్ కాదు. భారత తీరాలలో నిజమైన తుఫాను హెచ్చరికల కోసం, ఎల్లప్పుడూ IMD (mausam.imd.gov.in) మరియు INCOIS (incois.gov.in) ను నేరుగా తనిఖీ చేయండి.",cyclone_heuristic_title:"ప్రస్తుత తుఫాను-ప్రమాద సూత్రం",cyclone_heuristic_sub:"సూత్రం స్కోరు {index}/100 — {tier}. నిజమైన ప్రత్యక్ష గాలి + ఒత్తిడి + అల డేటా నుండి, సాధారణ థ్రెషోల్డ్‌లతో కలిపి నిర్మించబడింది — నిజమైన తుఫాను గుర్తింపు వ్యవస్థ కాదు.",cyclone_pressure:"ఒత్తిడి",cyclone_risk_index:"ప్రమాద సూచిక",cyclone_risk_low:"తక్కువ",cyclone_risk_elevated:"పెరిగింది",cyclone_risk_watch:"వాచ్",cyclone_risk_high:"ఎక్కువ",cyclone_demo_title:"అనుకరణ డెమో వ్యవస్థ: {name}",cyclone_demo_sub:"{cat} · {d} కి.మీ దూరంలో · ముందుకు వేగం మరియు ETA అనుకరణ, నిజమైన ట్రాక్ చేయబడిన తుఫాను కాదు.",cyclone_category:"వర్గం",cyclone_forward_speed:"ముందుకు వేగం",cyclone_eta:"ETA (అనుకరణ)",cyclone_regen:"డెమో దృశ్యాన్ని పునరుత్పత్తి చేయండి",cyclone_checklist_title:"తుఫాను భద్రతా చెక్‌లిస్ట్",cyclone_checklist_items:["ఈ పేజీని కేవలం డెమోగా పరిగణించండి — నిజమైన తుఫాను హెచ్చరికల కోసం ఎల్లప్పుడూ అధికారిక IMD/INCOIS బులిటిన్‌లను తనిఖీ చేయండి","అత్యవసర పరిచయాలు, రేడియో మరియు బ్యాటరీ పరికరాలను ఛార్జ్ చేసి సిద్ధంగా ఉంచండి","మీ ప్రాంతానికి నిజమైన అధికారిక హెచ్చరిక జారీ చేయబడితే, వెంటనే తీరానికి తిరిగి వెళ్లండి","తీవ్రమైన వాతావరణం రాకముందు డెక్‌పై వదులుగా ఉన్న పరికరాలను భద్రపరచండి","మీ సమీప సురక్షిత హార్బర్ మరియు మీ ప్రస్తుత స్థానం నుండి దాని దూరాన్ని తెలుసుకోండి"],cyclone_official_note:"డేటా మూలాలు: Open-Meteo నుండి ప్రత్యక్ష గాలి/ఒత్తిడి/అల (ఈ యాప్ లోని మిగతా భాగాల మాదిరిగానే). పేరున్న తుఫాను, దాని వర్గం, ట్రాక్ మరియు ETA పూర్తిగా డెమో ప్రయోజనాల కోసం అనుకరించబడ్డాయి — అవి ఏ నిజమైన వాతావరణ వ్యవస్థను సూచించవు. నిజమైన తుఫాను హెచ్చరికల కోసం ఎల్లప్పుడూ IMD మరియు INCOIS ను నేరుగా తనిఖీ చేయండి.",family_alert_cyclone_demo:"అనుకరణ తుఫాను వ్యవస్థ {name} అధిక/క్రిటికల్ డెమో స్థాయిలో ఉంది, మత్స్యకారుడి స్థానం నుండి {d} కి.మీ (డెమో దృశ్యం — నిజమైన తుఫాను కాదు).",src_cyclone:"అనుకరణ / సూత్రం",src_cyclone_h:"తుఫాను ఇంటెలిజెన్స్",src_cyclone_desc:"తుఫాను-ప్రమాద సంఖ్య నిజమైన ప్రత్యక్ష గాలి, ఒత్తిడి మరియు అల డేటాను ఉపయోగిస్తుంది (ఇదే Open-Meteo మూలం ఇతర చోట్ల వలె), ఒక సాధారణ సూత్రంగా మిళితం చేయబడింది — నిజమైన తుఫాను గుర్తింపు కాదు. చూపబడిన పేరున్న తుఫాను వ్యవస్థ పూర్తిగా అనుకరణ డెమో దృశ్యం, నిజమైన IMD-ట్రాక్ చేయబడిన తుఫాను కాదు. నిజమైన తుఫాను హెచ్చరికల కోసం ఎల్లప్పుడూ IMD మరియు INCOIS ను నేరుగా తనిఖీ చేయండి.",freshness_asof:"{time} నాటికి",nav_tripplanner:"ట్రిప్ ప్లానర్",trip_title:"ట్రిప్ ప్లానర్",trip_hint:"మీ ఎంచుకున్న స్థానం కోసం Open-Meteo యొక్క నిజమైన గంట వారీ సూచనను ఉపయోగించి ముందుగా ప్లాన్ చేయండి. భద్రతా అంచనా మీ విండోలో అత్యంత చెడ్డ గంటను ఉపయోగిస్తుంది, సగటును కాదు. సూచన హోరిజోన్ దాటి (~15 రోజులు) లేదా సూచనను పొందలేకపోతే, ఇది స్పష్టంగా అనుకరణ అంచనాకు తిరిగి వెళుతుంది.",lbl_trip_date:"బయలుదేరే తేదీ",lbl_trip_time:"బయలుదేరే సమయం",lbl_trip_duration:"ప్రయాణ వ్యవధి (గంటలు)",btn_plan_trip:"ట్రిప్ ప్లాన్ చేయండి",trip_pick_datetime:"ముందుగా బయలుదేరే తేదీ మరియు సమయాన్ని ఎంచుకోండి.",trip_advisory_go:"✅ మీ ప్రణాళికాబద్ధ విండో కోసం పరిస్థితులు చేపలు పట్టడానికి అనుకూలంగా కనిపిస్తున్నాయి",trip_advisory_caution:"🟡 మీ ప్రణాళికాబద్ధ విండో సమయంలో పరిస్థితులు మారవచ్చు — జాగ్రత్తగా కొనసాగించండి",trip_advisory_nogo:"🔴 మీ ప్రణాళికాబద్ధ విండో సమయంలో అధిక-ప్రమాద పరిస్థితులు ఊహించబడుతున్నాయి — ఈ ప్రయాణాన్ని పునఃపరిశీలించండి",trip_window_label:"బయలుదేరడం {start} → తిరిగి రావడం {end}",trip_worst_hour_note:"ఈ మూల్యాంకనం మీ విండోలో అత్యంత చెడ్డ గంటను ఉపయోగిస్తుంది, సగటును కాదు — ఒక ప్రయాణం దాని అత్యంత చెడ్డ క్షణం అంత సురక్షితం. బయలుదేరే ముందు ఎల్లప్పుడూ అధికారిక IMD సముద్ర హెచ్చరికలతో ధృవీకరించండి.",src_forecast_near:"సూచన",src_forecast_far:"సూచన (పొడిగించబడింది — తక్కువ విశ్వసనీయత)",harbor_popup_note:"తెలిసిన చేపల హార్బర్ (సూచన మాత్రమే — సాధారణ జ్ఞానం, సుమారు స్థానం)",nearest_harbor_line:"⚓ సమీప తెలిసిన చేపల హార్బర్: {name} — {d} కి.మీ (సూచన మాత్రమే, సుమారు)",show_harbors:"తెలిసిన చేపల హార్బర్‌లను చూపించు",legend_harbor:"తెలిసిన చేపల హార్బర్ (సూచన)",health_intro:"ప్రతి బాహ్య డేటా మూలం ప్రస్తుతం నిజంగా చేరుకోగలదా అనేదానికి ప్రత్యక్ష తనిఖీ — ఒక వాదన కాదు, ప్రతిదానికి నిజమైన సమయ అభ్యర్థన.",health_check_btn:"ఇప్పుడు డేటా మూలాలను తనిఖీ చేయండి",health_backend:"పైథాన్ బ్యాకెండ్",health_weather:"Open-Meteo (వాతావరణం)",health_marine:"Open-Meteo (సముద్రం)",health_geocode:"Nominatim (స్థల శోధన)",health_gps:"బ్రౌజర్ GPS",health_network:"నెట్‌వర్క్",health_online:"ఆన్‌లైన్‌లో",health_offline:"ఆఫ్‌లైన్‌లో",health_unreachable:"చేరుకోలేదు",health_asof:"{time} న తనిఖీ చేయబడింది",src_geo_bearing:"నిజమైన భౌగోళికం",src_geo_bearing_h:"సముద్ర దిశ అభ్యర్థి జోన్‌లు",src_geo_bearing_desc:"అభ్యర్థి జోన్ దిశలు ఎంచుకున్న పాయింట్ ఏ భారత తీరంలో ఉందో (బంగాళాఖాతం లేదా అరేబియా సముద్రం) దాని ఆధారంగా వాస్తవిక సముద్ర దిశ శంఖువుకు పరిమితం చేయబడ్డాయి, యాదృచ్ఛిక 0-360° దిశకు బదులుగా అది అప్పుడప్పుడు భూమి వైపు తిరిగి ఉండవచ్చు.",src_harbors:"సూచన (సుమారు)",src_harbors_h:"తెలిసిన చేపల హార్బర్‌లు",src_harbors_desc:"నిజమైన, బహిరంగంగా తెలిసిన ప్రధాన భారతీయ చేపల హార్బర్ల యొక్క చిన్న క్యూరేటెడ్ జాబితా, మ్యాప్ మార్కర్లుగా మరియు \"సమీప హార్బర్\" వాస్తవంగా చూపబడింది. సాధారణ-జ్ఞాన సుమారు స్థానాలు, సర్వే-గ్రేడ్ కోఆర్డినేట్‌లు కావు మరియు ప్రత్యక్ష ఫీడ్ కాదు."});
Object.assign(I18N.kn, {brand:"ಓರ್ಕಾ ಮೆರೈನ್ ಇಂಟೆಲಿಜೆನ್ಸ್",ph_location:"ಯಾವುದೇ ಕರಾವಳಿ ಸ್ಥಳದ ಹೆಸರನ್ನು ಅಥವಾ lat,lon ನಮೂದಿಸಿ",btn_search:"ಹುಡುಕಿ",hint_click:"ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ನಕ್ಷೆಯಲ್ಲಿ ಎಲ್ಲಿಯಾದರೂ ಕ್ಲಿಕ್ ಮಾಡಿ, ಅಥವಾ ಯಾವುದೇ ಸ್ಥಳದ ಹೆಸರನ್ನು ಟೈಪ್ ಮಾಡಿ ಹುಡುಕಿ ಒತ್ತಿ.",lbl_question:"ಪ್ರಶ್ನೆ",ph_question:"ನಾಳೆ ಬೆಳಿಗ್ಗೆ ಮೀನುಗಾರಿಕೆಗೆ ಯಾವ ಹತ್ತಿರದ ಜಲಮೂಲ ಸುರಕ್ಷಿತವಾಗಿದೆ?",legend_green:"ಹಸಿರು = ಒಳ್ಳೆಯದು",legend_yellow:"ಹಳದಿ = ಬದಲಾಗುತ್ತಿದೆ",legend_red:"ಕೆಂಪು = ತಪ್ಪಿಸಿ",legend_blue:"ನೀಲಿ = ಮೀನುಗಾರ",legend_maritime:"ಶ್ರೀಲಂಕಾ ಸಮುದ್ರ ಗಡಿ",legend_state:"ರಾಜ್ಯ ಗಡಿ",legend_boundary:"ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾದ ಗಡಿ (ಅಂದಾಜು)",legend_you:"ನೀವು",show_borders:"ನಕ್ಷೆಯಲ್ಲಿ ರಾಜ್ಯ/ಸಮುದ್ರ ಗಡಿಗಳನ್ನು ತೋರಿಸಿ",hint_independent:"ಪರಿಸ್ಥಿತಿಗಳು ಸ್ಥಳ-ನಿರ್ದಿಷ್ಟ — ಹತ್ತಿರದ ವಲಯಗಳು ವಿಭಿನ್ನ ಮೀನುಗಾರಿಕೆ ಮತ್ತು ಹವಾಮಾನ ಸೂಕ್ತತೆಯನ್ನು ಹೊಂದಿರಬಹುದು.",st_overall:"ಒಟ್ಟಾರೆ ಅಪಾಯ",st_weather:"ಹವಾಮಾನ",st_water:"ನೀರು",st_geofence:"ಜಿಯೋಫೆನ್ಸ್",st_fishing:"ಮೀನುಗಾರಿಕೆ ಸೂಕ್ತತೆ",st_border:"ಗಡಿ",hint_status:"ಪ್ರಸ್ತುತ ಆಯ್ಕೆಮಾಡಿದ / ಶಿಫಾರಸು ಮಾಡಲಾದ ವಲಯವನ್ನು ಮಾತ್ರ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.",agents_title:"ಏಜೆಂಟ್ ಚಟುವಟಿಕೆ",agents_hint:"ಬಹು-ಏಜೆಂಟ್ ತರ್ಕ ಕಾರ್ಯಹರಿವನ್ನು ಚಲಾಯಿಸಲು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ಓರ್ಕಾ ವಿಶ್ಲೇಷಣೆ ಒತ್ತಿ.",zoneintel_hint:"20 ಕಿ.ಮೀ ಹುಡುಕಾಟ ವ್ಯಾಪ್ತಿಯೊಳಗಿನ ಎಲ್ಲಾ ಹತ್ತಿರದ ಮೀನುಗಾರಿಕೆ ವಲಯಗಳು, ಸ್ವತಂತ್ರವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಲಾಗಿದೆ.",fetching_live:"🔄 ಲೈವ್ ಉಪಗ್ರಹ/ಹವಾಮಾನ ಡೇಟಾಗಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ…",compare_hint:"ಓರ್ಕಾ ಸಹಾಯಕದಿಂದ ಸ್ವತಂತ್ರವಾಗಿ ಹೋಲಿಸಲು 3 ಸ್ಥಳಗಳವರೆಗೆ ಆಯ್ಕೆಮಾಡಿ.",btn_compare:"ಆಯ್ಕೆಮಾಡಿದ ಸ್ಥಳಗಳನ್ನು ಹೋಲಿಸಿ",safety_checklist:"ಹೊರಡುವ ಪರಿಶೀಲನಾಪಟ್ಟಿ",btn_route:"ಸುರಕ್ಷಿತ ಡೆಮೊ ಮಾರ್ಗವನ್ನು ತೋರಿಸಿ",route_disclaimer:"ಡೆಮೊ ಮಾರ್ಗ — ಅಧಿಕೃತ ನ್ಯಾವಿಗೇಷನ್ ಅಲ್ಲ.",alerts_hint:"ನಿಮ್ಮ ಆಯ್ಕೆಮಾಡಿದ ಸ್ಥಳದ ಸುತ್ತಲಿನ ಪ್ರಸ್ತುತ ವಲಯಗಳಿಂದ ರಚಿಸಲಾಗಿದೆ.",sources_hint:"ಈ ಮಾದರಿಯು ನೈಜ ಡೇಟಾವನ್ನು ಸಿಮ್ಯುಲೇಟೆಡ್/ಡೆಮೊ ಡೇಟಾದಿಂದ ಸ್ಪಷ್ಟವಾಗಿ ಪ್ರತ್ಯೇಕಿಸುತ್ತದೆ.",settings_login:"ಡೆಮೊ ಲಾಗಿನ್",settings_phone:"ಲಾಗಿನ್ ಫೋನ್ ಸಂಖ್ಯೆ",btn_continue:"ಫೋನ್‌ನೊಂದಿಗೆ ಮುಂದುವರಿಸಿ",login_note:"ಮಾದರಿ ಲಾಗಿನ್ — ನೈಜ OTP ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.",btn_save:"ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಉಳಿಸಿ",settings_tracking:"ಸ್ಥಳ ಟ್ರ್ಯಾಕಿಂಗ್",settings_live:"ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್",settings_interval_note:"ಸಕ್ರಿಯವಾಗಿರುವಾಗ ಪ್ರತಿ 1 ಸೆಕೆಂಡಿಗೆ ಸುಮಾರು ನವೀಕರಿಸುತ್ತದೆ, GPS/ಬ್ರೌಸರ್ ಲಭ್ಯತೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ.",settings_border_alerts:"ಗಡಿ ಎಚ್ಚರಿಕೆಗಳು",settings_border_toggle:"ಗಡಿ ಎಚ್ಚರಿಕೆಗಳು",settings_voice_toggle:"ಧ್ವನಿ ಎಚ್ಚರಿಕೆಗಳು",settings_thresholds:"ಎಚ್ಚರಿಕೆ ಅಂತರ (ಕಿ.ಮೀ)",settings_warning:"ಎಚ್ಚರಿಕೆ",settings_highwarning:"ಹೆಚ್ಚಿನ ಎಚ್ಚರಿಕೆ",settings_critical:"ನಿರ್ಣಾಯಕ",settings_family:"ತುರ್ತು ಮತ್ತು ಕುಟುಂಬ ಸಂಪರ್ಕಗಳು",settings_family_note:"ಸಿಮ್ಯುಲೇಟೆಡ್ ಎಚ್ಚರಿಕೆ ಲಾಗ್‌ಗಾಗಿ ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ — ನೈಜ SMS/ಕರೆ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.",settings_self_phone:"ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆ",settings_family1:"ಕುಟುಂಬ ಸಂಪರ್ಕ 1",settings_family2:"ಕುಟುಂಬ ಸಂಪರ್ಕ 2",settings_country:"ದೇಶ",settings_state:"ರಾಜ್ಯ",emg_title:"ನಿರ್ಣಾಯಕ ಸಮುದ್ರ ಘಟನೆ — ಡೆಮೊ",emg_loc:"ಕೊನೆಯದಾಗಿ ತಿಳಿದಿರುವ ಸ್ಥಳ",emg_note:"ಇದು ಒಂದು ಸಿಮ್ಯುಲೇಶನ್. ನೈಜ ತುರ್ತು ಕರೆ ಮಾಡಲಾಗುವುದಿಲ್ಲ.",no_location:"ದಯವಿಟ್ಟು ಮೊದಲು ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ಹುಡುಕಿ.",finding_title:"ಓರ್ಕಾ ಹತ್ತಿರದ ಶೋಧನೆ",reco_title:"🏆 ಓರ್ಕಾ ಶಿಫಾರಸು",reco_prefix:"ಪ್ರಬಲ ಆಯ್ಕೆ — ಇದು ಮೀನುಗಾರಿಕೆ ಸೂಕ್ತತೆಯನ್ನು ಸುರಕ್ಷಿತ ಒಟ್ಟಾರೆ ಸಮುದ್ರ ಮತ್ತು ಗಡಿ ಪರಿಸ್ಥಿತಿಗಳೊಂದಿಗೆ ಸಮತೋಲನಗೊಳಿಸುತ್ತದೆ.",reco_border_note:"ಹೆಚ್ಚಿನ ಮೀನು ಸ್ಕೋರ್ ಹೊಂದಿರುವ ವಲಯವು ಹೆಚ್ಚು ಹವಾಮಾನ/ಸಮುದ್ರ ಅಪಾಯವನ್ನು ಹೊಂದಿರುವುದರಿಂದ ಅಥವಾ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾದ ಗಡಿಗೆ ಹತ್ತಿರದಲ್ಲಿರುವುದರಿಂದ ಓರ್ಕಾ ಅದನ್ನು ಕಡಿಮೆ ಆದ್ಯತೆ ನೀಡಿತು — ಹಿಡಿಯುವ ಮೊದಲು ಸುರಕ್ಷತೆಗೆ ತೂಕ ನೀಡಲಾಗುತ್ತದೆ. ಮುಂದುವರಿಯುವ ಮೊದಲು ಪ್ರಸ್ತುತ ಪರಿಸ್ಥಿತಿಗಳು ಮತ್ತು ಅನ್ವಯವಾಗುವ ನಿರ್ಬಂಧಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",good:"ಒಳ್ಳೆಯದು",changing:"ಬದಲಾಗುತ್ತಿದೆ",highrisk:"ಹೆಚ್ಚಿನ ಅಪಾಯ",low:"ಕಡಿಮೆ",medium:"ಮಧ್ಯಮ",high:"ಹೆಚ್ಚು",safe:"ಸುರಕ್ಷಿತ",approaching:"ಸಮೀಪಿಸುತ್ತಿದೆ",critical:"ನಿರ್ಣಾಯಕ",fish_indicated:"ಮೀನು ಸೂಚಿಸಲಾಗಿದೆ",checked:"ಪರಿಶೀಲಿಸಲಾಗಿದೆ",zone:"ವಲಯ",distance:"ಅಂತರ",fish:"ಮೀನು",weather:"ಹವಾಮಾನ",waves:"ಅಲೆಗಳು",wind:"ಗಾಳಿ",sst:"SST",chlorophyll:"ಕ್ಲೋರೊಫಿಲ್",ocean_risk:"ಸಮುದ್ರ ಅಪಾಯ",geofence:"ಜಿಯೋಫೆನ್ಸ್",overall:"ಒಟ್ಟಾರೆ",border_distance:"ಗಡಿ ಅಂತರ",border_risk:"ಗಡಿ ಅಪಾಯ",view_on_map:"ನಕ್ಷೆಯಲ್ಲಿ ವೀಕ್ಷಿಸಿ",compare_max:"ನೀವು ಗರಿಷ್ಠ 3 ವಲಯಗಳನ್ನು ಮಾತ್ರ ಹೋಲಿಸಬಹುದು.",compare_pick:"ಹೋಲಿಸಲು ಕನಿಷ್ಠ 2 ವಲಯಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ.",src_live:"ಲೈವ್ ನಕ್ಷೆ",src_map_desc:"ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆ ಪ್ರದರ್ಶನ ಮತ್ತು ಟೈಲ್‌ಗಳಿಗಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.",src_geo:"ಲೈವ್ / API",src_geo_h:"ಸ್ಥಳ ಹುಡುಕಾಟ",src_geo_desc:"ಯಾವುದೇ ಸ್ಥಳದ ಹೆಸರನ್ನು OpenStreetMap Nominatim ಮೂಲಕ ನೇರವಾಗಿ ಜಿಯೋಕೋಡ್ ಮಾಡಲಾಗುತ್ತದೆ — ಸ್ಥಿರ ಪಟ್ಟಣ ಪಟ್ಟಿಗೆ ಸೀಮಿತವಾಗಿಲ್ಲ.",src_liveapi:"ಲೈವ್ / API (ಫಾಲ್‌ಬ್ಯಾಕ್: ಸಿಮ್ಯುಲೇಟೆಡ್)",src_proto:"ಮಾದರಿ",src_dataset:"ಓರ್ಕಾ ಮೀನುಗಾರಿಕೆ ಸೂಕ್ತತೆ",src_dataset_desc:"ಉಪಗ್ರಹ ಬ್ಯಾಕೆಂಡ್ ಅಥವಾ Open-Meteo ಎರಡೂ ತಲುಪಲಾಗದಿದ್ದಾಗ ಮಾತ್ರ ಬಳಸುವ ಫಾಲ್‌ಬ್ಯಾಕ್/ಸಿಮ್ಯುಲೇಟೆಡ್ ಮೀನು-ಸೂಕ್ತತೆ ಸ್ಕೋರ್.",src_sim:"ಸಿಮ್ಯುಲೇಟೆಡ್",src_weather:"ಹವಾಮಾನ ಮತ್ತು ಅಲೆಗಳು",src_weather_desc:"ಗಾಳಿ, ಸಮುದ್ರ ಮೇಲ್ಮೈ ತಾಪಮಾನ ಮತ್ತು ಅಲೆಯ ಎತ್ತರವನ್ನು ಲಭ್ಯವಿರುವಲ್ಲಿ Open-Meteo ನಿಂದ ನೇರವಾಗಿ ಪಡೆಯಲಾಗುತ್ತದೆ; ವಿನಂತಿ ವಿಫಲವಾದರೆ ಸಿಮ್ಯುಲೇಟೆಡ್ ಡೆಮೊ ಮೌಲ್ಯಗಳಿಗೆ ಹಿಂತಿರುಗುತ್ತದೆ.",src_satellite:"ಲೈವ್ / ಉಪಗ್ರಹ (ಐಚ್ಛಿಕ ಬ್ಯಾಕೆಂಡ್)",src_satellite_h:"ಮೀನುಗಾರಿಕೆ ಸೂಕ್ತತೆ — ಉಪಗ್ರಹ ಶ್ರೇಣಿ",src_satellite_desc:"ಸೇರಿಸಲಾದ ಪೈಥಾನ್ ಬ್ಯಾಕೆಂಡ್ (backend/main.py) ಚಾಲನೆಯಲ್ಲಿರುವಾಗ, ಮೀನು-ಸೂಕ್ತತೆಯನ್ನು ನೈಜ ಉಪಗ್ರಹ ಸಮುದ್ರ ಮೇಲ್ಮೈ ತಾಪಮಾನ ಮತ್ತು ಕ್ಲೋರೊಫಿಲ್-a (NOAA CoastWatch ERDDAP) ನಿಂದ ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ — INCOIS ಅಧಿಕೃತ PFZ ಸಲಹೆಗಳನ್ನು ನಿರ್ಮಿಸಿದ ಅದೇ ಎರಡು ಸಂಕೇತಗಳು. ಬ್ಯಾಕೆಂಡ್ ಚಾಲನೆಯಲ್ಲಿಲ್ಲದಿದ್ದಾಗ, ಇದು ಮೇಲಿನ ಹವಾಮಾನ-ಮಾತ್ರ ಶ್ರೇಣಿಗೆ, ನಂತರ ಸಂಪೂರ್ಣ ಸಿಮ್ಯುಲೇಟೆಡ್ ಶ್ರೇಣಿಗೆ ಹಿಂತಿರುಗುತ್ತದೆ — ಯಾವುದು ಅನ್ವಯಿಸಿತು ಎಂದು ನೋಡಲು ಪ್ರತಿ ವಲಯ ಕಾರ್ಡ್‌ನಲ್ಲಿ SATELLITE / LIVE / SIM ಬ್ಯಾಡ್ಜ್ ಪರಿಶೀಲಿಸಿ.",src_treaty:"ಒಪ್ಪಂದ ಆಧಾರಿತ (ಅಂದಾಜು)",src_boundary:"ಗಡಿ ಡೇಟಾ",src_boundary_desc:"ಭಾರತ-ಶ್ರೀಲಂಕಾ ರೇಖೆಯು 1974 ಪಾಕ್ ಜಲಸಂಧಿ ಮತ್ತು 1976 ಮನ್ನಾರ್ ಕೊಲ್ಲಿ ಒಪ್ಪಂದಗಳ ನೈಜ ನಿರ್ದೇಶಾಂಕ ಬಿಂದುಗಳನ್ನು ಬಳಸುತ್ತದೆ. ರಾಜ್ಯ/ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳ ಗಡಿಗಳು ನೈಜ GADM-ಆಧಾರಿತ ಬಹುಭುಜಾಕೃತಿಗಳನ್ನು ಬಳಸುತ್ತವೆ (ಕೆಳಗಿನ ರಾಜ್ಯ ಗಡಿಗಳು ಮತ್ತು ಜಲಮೂಲಗಳ ಮೂಲವನ್ನು ನೋಡಿ) — ಆ ಡೇಟಾ ಲೋಡ್ ಆಗದಿದ್ದರೆ ಮಾತ್ರ ಹಳೆಯ ಕರಾವಳಿ-ಅಕ್ಷಾಂಶ ಅಂದಾಜು ಅನ್ವಯಿಸುತ್ತದೆ. ಎರಡೂ ಅಧಿಕೃತ ಚಾರ್ಟ್‌ಗೆ ಬದಲಿಯಲ್ಲ — ಯಾವಾಗಲೂ ಅಧಿಕಾರಿಗಳೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ.",src_family:"ಕುಟುಂಬ ಎಚ್ಚರಿಕೆಗಳು",src_family_desc:"SMS/ಕರೆ ಅಧಿಸೂಚನೆಗಳು ಸಿಮ್ಯುಲೇಟೆಡ್ ಮಾತ್ರ. ಈ ಮಾದರಿಯಿಂದ ನೈಜ ಸಂದೇಶ ಅಥವಾ ಕರೆ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.",footer:"ಓರ್ಕಾ ಮೆರೈನ್ ಇಂಟೆಲಿಜೆನ್ಸ್ — ವಿದ್ಯಾರ್ಥಿ ಇನ್ನೋವೇಶನ್ ಹ್ಯಾಕಥಾನ್ 2026 ಮಾದರಿ. ನೈಜ ಸಮುದ್ರ ಡೇಟಾ ಬಳಸಲಾಗುವುದಿಲ್ಲ.",agent_planner:"ಓರ್ಕಾ ಯೋಜಕ ಏಜೆಂಟ್",agent_weather:"ಹವಾಮಾನ ಏಜೆಂಟ್",agent_ocean:"ಸಮುದ್ರ ಏಜೆಂಟ್",agent_fishing:"ಮೀನುಗಾರಿಕೆ ಏಜೆಂಟ್",agent_geo:"ಜಿಯೋ ಏಜೆಂಟ್",agent_risk:"ಅಪಾಯ ಏಜೆಂಟ್",agent_border:"ಗಡಿ ಏಜೆಂಟ್",agent_safety:"ಸುರಕ್ಷತಾ ಏಜೆಂಟ್",agent_reasoner:"ಓರ್ಕಾ ರೀಸನರ್",task_planner:"ಸ್ಥಳ, ಪ್ರಶ್ನೆ ಮತ್ತು ವಿನಂತಿಸಿದ ಸಮಯವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",result_planner:"ಮೀನುಗಾರಿಕೆ + ಸುರಕ್ಷತೆ ಪ್ರಶ್ನೆ ಗುರುತಿಸಲಾಗಿದೆ.",complete:"ಪೂರ್ಣಗೊಂಡಿದೆ",checklist_items:["ಅಧಿಕೃತ ಸಮುದ್ರ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ","ಸಂವಹನ ಸಾಧನಗಳನ್ನು ಒಯ್ಯಿರಿ","ಇಂಧನ ಮಟ್ಟವನ್ನು ಪರಿಶೀಲಿಸಿ","ಬ್ಯಾಟರಿ / ಪವರ್ ಬ್ಯಾಂಕ್ ಪರಿಶೀಲಿಸಿ","ನ್ಯಾವಿಗೇಷನ್ ಸಾಧನವನ್ನು ಪರಿಶೀಲಿಸಿ","ಅನುಮತಿಸಲಾದ ಮೀನುಗಾರಿಕೆ ಪ್ರದೇಶಗಳಲ್ಲಿ ಇರಿ"],emg_steps:["ಪ್ರಸ್ತುತ ಸ್ಥಳವನ್ನು ಸೆರೆಹಿಡಿಯಿರಿ","ತುರ್ತು ಸಂದೇಶವನ್ನು ಸಿದ್ಧಪಡಿಸಿ","ಕುಟುಂಬ ಅಧಿಸೂಚನೆ (ಸಿಮ್ಯುಲೇಟೆಡ್)","ರಕ್ಷಣಾ-ಚಾನೆಲ್ ಸಂದೇಶ (ಸಿಮ್ಯುಲೇಟೆಡ್)"],border_hint:"ಮಾದರಿ ಗಡಿ ಡೇಟಾ — ಅಧಿಕೃತವಲ್ಲ. ಗಡಿಯ ಬಳಿ ಮುಂದುವರಿಯುವ ಮೊದಲು ಯಾವಾಗಲೂ ಪ್ರಸ್ತುತ ಅಧಿಕೃತ ಸಮುದ್ರ ನಿಯಮಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",border_click_hint:"ಆ ಸ್ಥಳದ ಗಡಿ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲು ನೀವು ಕೆಳಗಿನ ನಕ್ಷೆಯಲ್ಲಿ ಎಲ್ಲಿಯಾದರೂ ಕ್ಲಿಕ್ ಮಾಡಬಹುದು.",border_status_title:"ವಿವರಗಳು",family_log_title:"ಕುಟುಂಬ ಎಚ್ಚರಿಕೆ ಲಾಗ್",family_log_hint:"ಸಿಮ್ಯುಲೇಟೆಡ್ ಮಾತ್ರ — ಈ ಮಾದರಿಯಿಂದ ನೈಜ SMS ಅಥವಾ ಕರೆ ಎಂದಿಗೂ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.",chat_ph:"ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ... ಉದಾ. ನಾನು ಗಡಿಯಿಂದ ಎಷ್ಟು ದೂರದಲ್ಲಿದ್ದೇನೆ?",btn_live_off:"ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಪ್ರಾರಂಭಿಸಿ",btn_live_on:"ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ನಿಲ್ಲಿಸಿ",btn_demo_move:"ಡೆಮೊ: ಸಮೀಪಿಸುವಿಕೆಯನ್ನು ಅನುಕರಿಸಿ",btn_return:"ಹಿಂತಿರುಗುವ ಮಾರ್ಗವನ್ನು ಸೂಚಿಸಿ",live_lat:"ಅಕ್ಷಾಂಶ",live_lon:"ರೇಖಾಂಶ",live_acc:"GPS ನಿಖರತೆ",live_update:"ಕೊನೆಯ ನವೀಕರಣ",current_state:"ಪ್ರಸ್ತುತ ಇರುವ ಸ್ಥಳ",current_state_line:"📍 ಪ್ರಸ್ತುತ {state} ನೀರು/ಕರಾವಳಿಯಲ್ಲಿದ್ದೀರಿ.",current_state_lanka:"📍 ಪ್ರಸ್ತುತ ಶ್ರೀಲಂಕಾ ನೀರಿನಲ್ಲಿದ್ದೀರಿ (ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾದ ರೇಖೆಯನ್ನು ದಾಟಿ).",nearest_state:"ಹತ್ತಿರದ ರಾಜ್ಯ ಗಡಿ",other_state_boundary:"ಸಹ ಹತ್ತಿರದಲ್ಲಿ",nearest_maritime:"ಸಮುದ್ರ ಗಡಿ (ಶ್ರೀಲಂಕಾ)",status:"ಸ್ಥಿತಿ",direction:"ದಿಕ್ಕು",crossed_label:"ಸಂಭಾವ್ಯ ಗಡಿ ದಾಟುವಿಕೆ",gps_denied:"ಸ್ಥಳ ಅನುಮತಿ ಲಭ್ಯವಿಲ್ಲ. ಸ್ಥಳವನ್ನು ಹಸ್ತಚಾಲಿತವಾಗಿ ಆಯ್ಕೆಮಾಡಿ.",hero_safe:"✅ ಸುರಕ್ಷಿತ — ನೀವು ಹತ್ತಿರದ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾದ ಗಡಿ ({name}) ಇಂದ {d} ಕಿ.ಮೀ ದೂರದಲ್ಲಿದ್ದೀರಿ.",hero_approaching:"🟡 ಸಮೀಪಿಸುತ್ತಿದೆ — {name} ಇಂದ {d} ಕಿ.ಮೀ. ನಿಮ್ಮ ಸ್ಥಾನದ ಮೇಲೆ ಕಣ್ಣಿಡಿ.",hero_high:"🟠 ಹೆಚ್ಚಿನ ಎಚ್ಚರಿಕೆ — {name} ಇಂದ ಕೇವಲ {d} ಕಿ.ಮೀ. ನಿಮ್ಮ ಅನುಮತಿಸಲಾದ ಮೀನುಗಾರಿಕೆ ಪ್ರದೇಶವನ್ನು ಪರಿಶೀಲಿಸಿ.",hero_critical:"🔴 ನಿರ್ಣಾಯಕ — {name} ಇಂದ ಕೇವಲ {d} ಕಿ.ಮೀ. ನಿಮ್ಮ ಸ್ಥಾನವನ್ನು ಪರಿಶೀಲಿಸದೆ ಮುಂದೆ ಹೋಗಬೇಡಿ.",hero_crossed:"🚨 ಸಂಭಾವ್ಯ ಗಡಿ ದಾಟುವಿಕೆ — ನಿಮ್ಮ ಸ್ಥಾನವು {name} ನ ಇನ್ನೊಂದು ಬದಿಯಲ್ಲಿ ಇರುವಂತೆ ಕಂಡುಬರುತ್ತದೆ (~{d} ಕಿ.ಮೀ ದಾಟಿ). ನಿಲ್ಲಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಸ್ಥಾನ ಮತ್ತು ಅನ್ವಯವಾಗುವ ಸಮುದ್ರ ನಿಯಮಗಳನ್ನು ತಕ್ಷಣ ಪರಿಶೀಲಿಸಿ.",tips_safe:["ನೀವು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾದ ಪ್ರದೇಶದೊಳಗೆ ಆರಾಮವಾಗಿದ್ದೀರಿ — ಸಾಮಾನ್ಯ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಮುಂದುವರಿಸಿ.","ನೀವು ಸಮುದ್ರದಲ್ಲಿರುವಾಗ ಈ ಪುಟವನ್ನು ಸಾಂದರ್ಭಿಕವಾಗಿ ಮರುಪರಿಶೀಲಿಸಿ.","ಇಲ್ಲಿನ ಗಡಿ ರೇಖೆಗಳು ಅಂದಾಜು — ಯಾವಾಗಲೂ ಅಧಿಕೃತ ಚಾರ್ಟ್‌ಗಳನ್ನು ಸಹ ನಂಬಿ."],tips_approaching:["ನಿಮ್ಮ ಪ್ರಸ್ತುತ ದಿಕ್ಕು ಮತ್ತು ಗಡಿಯಿಂದ ಅಂತರವನ್ನು ಗಮನಿಸಿ.","ನೀವು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾದ ರೇಖೆಯ ಬಳಿ ಇರುವಾಗ ಈ ಪುಟವನ್ನು ತೆರೆದಿಡಿ.","ಗಡಿಯ ಕಡೆಗೆ ಮತ್ತಷ್ಟು ಸಾಗುವುದನ್ನು ತಪ್ಪಿಸಿ."],tips_high:["ಈಗ ಸುರಕ್ಷಿತ ನೀರಿನ ಕಡೆಗೆ ಹಿಂತಿರುಗುವುದನ್ನು ಪರಿಗಣಿಸಿ.","ಇದು ಒಂದು ಮಾದರಿ ಅಂದಾಜು — ಸ್ಥಳೀಯ ಜ್ಞಾನ ಮತ್ತು ಚಾರ್ಟ್‌ಗಳೊಂದಿಗೆ ಕ್ರಾಸ್-ಚೆಕ್ ಮಾಡಿ.","ಹತ್ತಿರದ ದೋಣಿ ಅಥವಾ ನಿಮ್ಮ ಕುಟುಂಬ ಸಂಪರ್ಕಕ್ಕೆ ನಿಮ್ಮ ಸ್ಥಾನವನ್ನು ತಿಳಿಸಿ."],tips_critical:["ನಿಲ್ಲಿಸಿ ಈ ದಿಕ್ಕಿನಲ್ಲಿ ಮತ್ತಷ್ಟು ಹೋಗಬೇಡಿ.","ತಕ್ಷಣ ಸುರಕ್ಷಿತ ನೀರಿನ ಕಡೆಗೆ ಹಿಂತಿರುಗಿ.","ಈಗ ನಿಮ್ಮ ಕುಟುಂಬ/ಕರಾವಳಿ ಕಾವಲು ಸಂಪರ್ಕ ಚಾನೆಲ್ ಬಳಸಿ."],tips_crossed:["ತಕ್ಷಣ ದೋಣಿಯನ್ನು ನಿಲ್ಲಿಸಿ.","ನೀವು ಬಂದ ದಾರಿಯಲ್ಲಿ ಹಿಂತಿರುಗಿ.","ಈ ಮಾದರಿಯು ಕಾನೂನು ಸ್ಥಿತಿಯನ್ನು ದೃಢೀಕರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ — ಇದನ್ನು ಗಂಭೀರ ಎಚ್ಚರಿಕೆಯಾಗಿ ಪರಿಗಣಿಸಿ ಅಧಿಕಾರಿಗಳೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ."],alert_safe:"ನೀವು ಹತ್ತಿರದ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾದ ಗಡಿ ({name}) ಇಂದ {d} ಕಿ.ಮೀ ದೂರದಲ್ಲಿದ್ದೀರಿ. ತಕ್ಷಣದ ಕಾಳಜಿ ಇಲ್ಲ.",alert_approaching:"ನೀವು {name} ಅನ್ನು ಸಮೀಪಿಸುತ್ತಿದ್ದೀರಿ. ಅಂತರ: {d} ಕಿ.ಮೀ.",alert_high:"⚠️ ನೀವು {name} ನ {d} ಕಿ.ಮೀ ಒಳಗೆ ಇದ್ದೀರಿ. ನಿಮ್ಮ ಅನುಮತಿಸಲಾದ ಮೀನುಗಾರಿಕೆ ಪ್ರದೇಶವನ್ನು ಪರಿಶೀಲಿಸಿ.",alert_critical:"🚨 ನೀವು {name} ಗೆ ಬಹಳ ಹತ್ತಿರದಲ್ಲಿದ್ದೀರಿ ({d} ಕಿ.ಮೀ). ನಿಮ್ಮ ಸ್ಥಾನ ಮತ್ತು ಅನ್ವಯವಾಗುವ ಸಮುದ್ರ ನಿಯಮಗಳನ್ನು ಪರಿಶೀಲಿಸದೆ ಮುಂದೆ ಹೋಗಬೇಡಿ.",alert_crossed:"🚨 ನಿಮ್ಮ ಸ್ಥಾನವು {name} ನ ಇನ್ನೊಂದು ಬದಿಯಲ್ಲಿ ಇರುವಂತೆ ಕಂಡುಬರುತ್ತದೆ (~{d} ಕಿ.ಮೀ ದಾಟಿ). ನಿಲ್ಲಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಸ್ಥಾನ ಮತ್ತು ಅನ್ವಯವಾಗುವ ಸಮುದ್ರ ನಿಯಮಗಳನ್ನು ತಕ್ಷಣ ಪರಿಶೀಲಿಸಿ.",family_alert_border:"ಮೀನುಗಾರರು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾದ ಗಡಿಯ ಬಳಿ {tier} ಸ್ಥಿತಿಯನ್ನು ತಲುಪಿದ್ದಾರೆ ({d} ಕಿ.ಮೀ).",family_alert_redzone:"ಮೀನುಗಾರರ ಲೈವ್ ಸ್ಥಾನವು ಕೆಂಪು (ಹೆಚ್ಚಿನ ಅಪಾಯ) ಮೀನುಗಾರಿಕೆ ವಲಯದೊಳಗೆ/ಹತ್ತಿರದಲ್ಲಿದೆ.",family_alert_cyclone:"ಮೀನುಗಾರರ ಲೈವ್ ಸ್ಥಾನವು ಹೆಚ್ಚಿನ-ಅಪಾಯದ ಹವಾಮಾನ (ಚಂಡಮಾರುತ-ಮಾದರಿ) ವಲಯದ ಬಳಿ ಇದೆ.",family_sms:"📨 ಕುಟುಂಬ ಸಂಪರ್ಕಗಳಿಗೆ SMS ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಲಾಗಿದೆ",family_call:"📞 ಕುಟುಂಬ ಸಂಪರ್ಕಗಳಿಗೆ ಕರೆ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಲಾಗಿದೆ",no_contacts:"ಕುಟುಂಬ ಸಂಪರ್ಕ ಸಂಖ್ಯೆಗಳನ್ನು ಹೊಂದಿಸಲಾಗಿಲ್ಲ — ಎಚ್ಚರಿಕೆ ಸಿಮ್ಯುಲೇಶನ್ ಸಕ್ರಿಯಗೊಳಿಸಲು ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ಅವುಗಳನ್ನು ಸೇರಿಸಿ.",return_route_msg:"ಪ್ರಸ್ತುತ ಗಾಳಿಯ ಆಧಾರದ ಮೇಲೆ (~{w} ಕಿ.ಮೀ/ಗಂ) {z} ಬಳಿ, ಸೂಚಿಸಲಾದ ಹಿಂತಿರುಗುವ ದಿಕ್ಕು {dir} ಆಗಿ {label} ಕಡೆಗೆ, ಸುಮಾರು {d} ಕಿ.ಮೀ. ಹಿಂತಿರುಗುವ ಮೊದಲು ಅಧಿಕೃತ ಸಮುದ್ರ ಸಲಹೆಗಳನ್ನು ಮರುಪರಿಶೀಲಿಸಿ.",chat_welcome:"ನಮಸ್ಕಾರ, ನಾನು ಓರ್ಕಾ. ಒಂದು ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ, ಹತ್ತಿರದ ಮೀನುಗಾರಿಕೆ ವಲಯಗಳು ಮತ್ತು ಗಡಿ ಅಂತರದ ಬಗ್ಗೆ ನಾನು ನಿಮಗೆ ಹೇಳಬಲ್ಲೆ. ಕೇಳಿ ನೋಡಿ: 'ನಾನು ಗಡಿಯಿಂದ ಎಷ್ಟು ದೂರದಲ್ಲಿದ್ದೇನೆ?'",chat_no_location:"ನಾನು ವಿಶ್ಲೇಷಿಸಲು ಏನಾದರೂ ಇರುವಂತೆ ದಯವಿಟ್ಟು ಮೊದಲು ಮೀನುಗಾರರ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ (ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ).",chat_border_answer:"ನೀವು {label} ಇಂದ ಸುಮಾರು {d} ಕಿ.ಮೀ ದೂರದಲ್ಲಿದ್ದೀರಿ, ಸ್ಥಿತಿ: {status}.",chat_continue_answer:"ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾದ ಗಡಿಯ ಬಳಿ ನಿಮ್ಮ ಲೈವ್ ಸ್ಥಾನ ಸ್ಥಿತಿ ಪ್ರಸ್ತುತ {status} ({d} ಕಿ.ಮೀ). ಮುಂದುವರಿಯುವ ಮೊದಲು ಅನುಮತಿಸಲಾದ ಮೀನುಗಾರಿಕೆ ಪ್ರದೇಶದೊಳಗೆ ಉಳಿಯಲು ಮತ್ತು ಇತ್ತೀಚಿನ ಅಧಿಕೃತ ಸಮುದ್ರ ಸಲಹೆಗಳನ್ನು ಪರಿಶೀಲಿಸಲು ನಾನು ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ.",chat_safer_answer:"ಮೀನುಗಾರಿಕೆ ಸೂಕ್ತತೆ, ಹವಾಮಾನ ಮತ್ತು ಗಡಿ ಅಂತರ ಸಂಯೋಜಿಸಿ, {zone} ಪ್ರಸ್ತುತ ಸುರಕ್ಷಿತ ಆಯ್ಕೆಯಂತೆ ಕಾಣುತ್ತದೆ ({score}/100 ಸಂಯೋಜಿತ ಸ್ಕೋರ್).",chat_weather_answer:"ಹತ್ತಿರದ ಶಿಫಾರಸು ಮಾಡಲಾದ ವಲಯ {zone} ಪ್ರಸ್ತುತ {weather} ಹವಾಮಾನವನ್ನು {wave} ಮೀ ಅಲೆಗಳು ಮತ್ತು {wind} ಕಿ.ಮೀ/ಗಂ ಗಾಳಿಯೊಂದಿಗೆ ತೋರಿಸುತ್ತದೆ.",chat_default:"'ನಾನು ಗಡಿಯಿಂದ ಎಷ್ಟು ದೂರದಲ್ಲಿದ್ದೇನೆ', 'ನಾನು ಮೀನುಗಾರಿಕೆ ಮುಂದುವರಿಸಬಹುದೇ', ಅಥವಾ 'ಯಾವ ವಲಯ ಸುರಕ್ಷಿತ' ಎಂಬಂತಹ ಪ್ರಶ್ನೆಗಳಿಗೆ ನಾನು ಉತ್ತರಿಸಬಲ್ಲೆ. ಅವುಗಳಲ್ಲಿ ಒಂದನ್ನು ಪ್ರಯತ್ನಿಸಿ, ಅಥವಾ ಮೇಲಿನ ಪ್ಯಾನಲ್ ಪರಿಶೀಲಿಸಿ.",voice_unsupported:"ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ — ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ.",voice_listening:"🎤 ಆಲಿಸುತ್ತಿದೆ...",gps_watch_error:"ಸ್ಥಳ ಅನುಮತಿ ಲಭ್ಯವಿಲ್ಲ. ಸ್ಥಳವನ್ನು ಹಸ್ತಚಾಲಿತವಾಗಿ ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ಬ್ರೌಸರ್ ಅನುಮತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",geocode_searching:"⏳",geocode_notfound:"ಕಂಡುಬಂದಿಲ್ಲ — ಹತ್ತಿರದ ಪಟ್ಟಣ ಅಥವಾ lat,lon ಜೋಡಿಯನ್ನು ಪ್ರಯತ್ನಿಸಿ",lbl_radius:"ಹುಡುಕಾಟ ತ್ರಿಜ್ಯ (ಕಿ.ಮೀ)",lbl_zonecount:"ವಲಯಗಳ ಸಂಖ್ಯೆ",zoneintel_hint_dyn:"{km} ಕಿ.ಮೀ ಹುಡುಕಾಟ ವ್ಯಾಪ್ತಿಯೊಳಗಿನ ಎಲ್ಲಾ ಹತ್ತಿರದ ಮೀನುಗಾರಿಕೆ ವಲಯಗಳು, ಸ್ವತಂತ್ರವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಲಾಗಿದೆ.",legend_ring_warn:"ಹಳದಿ ಉಂಗುರ = ಗಡಿ ಎಚ್ಚರಿಕೆ",legend_ring_high:"ಕಿತ್ತಳೆ ಉಂಗುರ = ಹೆಚ್ಚಿನ ಎಚ್ಚರಿಕೆ",legend_ring_crit:"ಕೆಂಪು ಉಂಗುರ = ನಿರ್ಣಾಯಕ",chat_dash_hint:"ಈ ನಕ್ಷೆಯ ಬಗ್ಗೆ ನೇರವಾಗಿ ಕೇಳಿ — ಮೀನುಗಾರಿಕೆ ವಲಯಗಳು ಮತ್ತು ಗಡಿ ಅಪಾಯ ಒಟ್ಟಿಗೆ, ಉದಾ. \"ನಾನು ಗಡಿಯಿಂದ ಎಷ್ಟು ದೂರದಲ್ಲಿದ್ದೇನೆ?\" ಅಥವಾ \"ಯಾವ ವಲಯ ಸುರಕ್ಷಿತ?\"",legend_wind:"ಗಾಳಿ ಹರಿವು (ಅಂದಾಜು, ವಲಯ ಗಾಳಿಯಂತಹ ಡೇಟಾ)",show_wind:"ಅನಿಮೇಟೆಡ್ ಗಾಳಿ ಹರಿವನ್ನು ತೋರಿಸಿ (ಅಂದಾಜು)",nav_cyclone:"ಚಂಡಮಾರುತ ಬುದ್ಧಿಮತ್ತೆ",cyclone_title:"ಚಂಡಮಾರುತ ಬುದ್ಧಿಮತ್ತೆ",cyclone_hint:"ಮಾದರಿ — ಇದು ನೈಜ ಲೈವ್ ಗಾಳಿ + ಒತ್ತಡ + ಅಲೆ ಡೇಟಾದಿಂದ ಒಂದು ಡೆಮೊ ಸೂತ್ರ ಮತ್ತು ಸಿಮ್ಯುಲೇಟೆಡ್ ಚಂಡಮಾರುತ ಸನ್ನಿವೇಶ, ಲೈವ್ ಚಂಡಮಾರುತ ಟ್ರ್ಯಾಕರ್ ಅಲ್ಲ. ಭಾರತೀಯ ಕರಾವಳಿಗಳಲ್ಲಿ ನೈಜ ಚಂಡಮಾರುತ ಎಚ್ಚರಿಕೆಗಳಿಗಾಗಿ, ಯಾವಾಗಲೂ IMD (mausam.imd.gov.in) ಮತ್ತು INCOIS (incois.gov.in) ಅನ್ನು ನೇರವಾಗಿ ಪರಿಶೀಲಿಸಿ.",cyclone_heuristic_title:"ಪ್ರಸ್ತುತ ಚಂಡಮಾರುತ-ಅಪಾಯ ಸೂತ್ರ",cyclone_heuristic_sub:"ಸೂತ್ರ ಸ್ಕೋರ್ {index}/100 — {tier}. ನೈಜ ಲೈವ್ ಗಾಳಿ + ಒತ್ತಡ + ಅಲೆ ಡೇಟಾದಿಂದ, ಸರಳ ಮಿತಿಗಳೊಂದಿಗೆ ಸಂಯೋಜಿಸಿ ನಿರ್ಮಿಸಲಾಗಿದೆ — ನೈಜ ಚಂಡಮಾರುತ ಪತ್ತೆ ವ್ಯವಸ್ಥೆ ಅಲ್ಲ.",cyclone_pressure:"ಒತ್ತಡ",cyclone_risk_index:"ಅಪಾಯ ಸೂಚ್ಯಂಕ",cyclone_risk_low:"ಕಡಿಮೆ",cyclone_risk_elevated:"ಏರಿಕೆಯಾಗಿದೆ",cyclone_risk_watch:"ವಾಚ್",cyclone_risk_high:"ಹೆಚ್ಚು",cyclone_demo_title:"ಸಿಮ್ಯುಲೇಟೆಡ್ ಡೆಮೊ ವ್ಯವಸ್ಥೆ: {name}",cyclone_demo_sub:"{cat} · {d} ಕಿ.ಮೀ ದೂರದಲ್ಲಿ · ಮುಂದಿನ ವೇಗ ಮತ್ತು ETA ಸಿಮ್ಯುಲೇಟೆಡ್, ನೈಜ ಟ್ರ್ಯಾಕ್ ಮಾಡಲಾದ ಚಂಡಮಾರುತ ಅಲ್ಲ.",cyclone_category:"ವರ್ಗ",cyclone_forward_speed:"ಮುಂದಿನ ವೇಗ",cyclone_eta:"ETA (ಸಿಮ್ಯುಲೇಟೆಡ್)",cyclone_regen:"ಡೆಮೊ ಸನ್ನಿವೇಶವನ್ನು ಪುನರುತ್ಪಾದಿಸಿ",cyclone_checklist_title:"ಚಂಡಮಾರುತ ಸುರಕ್ಷತಾ ಪರಿಶೀಲನಾಪಟ್ಟಿ",cyclone_checklist_items:["ಈ ಪುಟವನ್ನು ಕೇವಲ ಡೆಮೊ ಎಂದು ಪರಿಗಣಿಸಿ — ನೈಜ ಚಂಡಮಾರುತ ಎಚ್ಚರಿಕೆಗಳಿಗಾಗಿ ಯಾವಾಗಲೂ ಅಧಿಕೃತ IMD/INCOIS ಬುಲೆಟಿನ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ","ತುರ್ತು ಸಂಪರ್ಕಗಳು, ರೇಡಿಯೋ ಮತ್ತು ಬ್ಯಾಟರಿ ಸಾಧನಗಳನ್ನು ಚಾರ್ಜ್ ಮಾಡಿ ಸಿದ್ಧವಾಗಿರಿಸಿ","ನಿಮ್ಮ ಪ್ರದೇಶಕ್ಕೆ ನೈಜ ಅಧಿಕೃತ ಎಚ್ಚರಿಕೆ ನೀಡಿದರೆ, ತಕ್ಷಣ ದಡಕ್ಕೆ ಹಿಂತಿರುಗಿ","ಕಠಿಣ ಹವಾಮಾನ ಬರುವ ಮೊದಲು ಡೆಕ್‌ನಲ್ಲಿ ಸಡಿಲವಾದ ಸಾಧನಗಳನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಿ","ನಿಮ್ಮ ಹತ್ತಿರದ ಸುರಕ್ಷಿತ ಬಂದರು ಮತ್ತು ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸ್ಥಳದಿಂದ ಅದರ ಅಂತರವನ್ನು ತಿಳಿಯಿರಿ"],cyclone_official_note:"ಡೇಟಾ ಮೂಲಗಳು: Open-Meteo ನಿಂದ ಲೈವ್ ಗಾಳಿ/ಒತ್ತಡ/ಅಲೆ (ಈ ಅಪ್ಲಿಕೇಶನ್‌ನ ಉಳಿದ ಭಾಗದಂತೆಯೇ). ಹೆಸರಿಸಲಾದ ಚಂಡಮಾರುತ, ಅದರ ವರ್ಗ, ಟ್ರ್ಯಾಕ್ ಮತ್ತು ETA ಡೆಮೊ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಸಂಪೂರ್ಣವಾಗಿ ಸಿಮ್ಯುಲೇಟೆಡ್ — ಅವು ಯಾವುದೇ ನೈಜ ಹವಾಮಾನ ವ್ಯವಸ್ಥೆಯನ್ನು ಪ್ರತಿನಿಧಿಸುವುದಿಲ್ಲ. ನೈಜ ಚಂಡಮಾರುತ ಎಚ್ಚರಿಕೆಗಳಿಗಾಗಿ ಯಾವಾಗಲೂ IMD ಮತ್ತು INCOIS ಅನ್ನು ನೇರವಾಗಿ ಪರಿಶೀಲಿಸಿ.",family_alert_cyclone_demo:"ಸಿಮ್ಯುಲೇಟೆಡ್ ಚಂಡಮಾರುತ ವ್ಯವಸ್ಥೆ {name} ಹೆಚ್ಚಿನ/ನಿರ್ಣಾಯಕ ಡೆಮೊ ಹಂತದಲ್ಲಿದೆ, ಮೀನುಗಾರರ ಸ್ಥಾನದಿಂದ {d} ಕಿ.ಮೀ (ಡೆಮೊ ಸನ್ನಿವೇಶ — ನೈಜ ಚಂಡಮಾರುತ ಅಲ್ಲ).",src_cyclone:"ಸಿಮ್ಯುಲೇಟೆಡ್ / ಸೂತ್ರ",src_cyclone_h:"ಚಂಡಮಾರುತ ಬುದ್ಧಿಮತ್ತೆ",src_cyclone_desc:"ಚಂಡಮಾರುತ-ಅಪಾಯ ಸಂಖ್ಯೆಯು ನೈಜ ಲೈವ್ ಗಾಳಿ, ಒತ್ತಡ ಮತ್ತು ಅಲೆ ಡೇಟಾವನ್ನು ಬಳಸುತ್ತದೆ (ಇದೇ Open-Meteo ಮೂಲ ಇತರೆಡೆ ಇರುವಂತೆ), ಸರಳ ಸೂತ್ರವಾಗಿ ಸಂಯೋಜಿಸಲಾಗಿದೆ — ನೈಜ ಚಂಡಮಾರುತ ಪತ್ತೆ ಅಲ್ಲ. ತೋರಿಸಲಾದ ಹೆಸರಿಸಲಾದ ಚಂಡಮಾರುತ ವ್ಯವಸ್ಥೆಯು ಸಂಪೂರ್ಣವಾಗಿ ಸಿಮ್ಯುಲೇಟೆಡ್ ಡೆಮೊ ಸನ್ನಿವೇಶ, ನೈಜ IMD-ಟ್ರ್ಯಾಕ್ ಮಾಡಲಾದ ಚಂಡಮಾರುತ ಅಲ್ಲ. ನೈಜ ಚಂಡಮಾರುತ ಎಚ್ಚರಿಕೆಗಳಿಗಾಗಿ ಯಾವಾಗಲೂ IMD ಮತ್ತು INCOIS ಅನ್ನು ನೇರವಾಗಿ ಪರಿಶೀಲಿಸಿ.",freshness_asof:"{time} ರಂತೆ",nav_tripplanner:"ಟ್ರಿಪ್ ಪ್ಲಾನರ್",trip_title:"ಟ್ರಿಪ್ ಪ್ಲಾನರ್",trip_hint:"ನಿಮ್ಮ ಆಯ್ಕೆಮಾಡಿದ ಸ್ಥಳಕ್ಕಾಗಿ Open-Meteo ನ ನೈಜ ಗಂಟೆಗೊಮ್ಮೆ ಮುನ್ಸೂಚನೆಯನ್ನು ಬಳಸಿ ಮುಂಚಿತವಾಗಿ ಯೋಜಿಸಿ. ಸುರಕ್ಷತಾ ಮೌಲ್ಯಮಾಪನವು ನಿಮ್ಮ ವಿಂಡೋದಲ್ಲಿನ ಅತ್ಯಂತ ಕೆಟ್ಟ ಗಂಟೆಯನ್ನು ಬಳಸುತ್ತದೆ, ಸರಾಸರಿಯನ್ನಲ್ಲ. ಮುನ್ಸೂಚನೆ ಹಾರಿಜಾನ್ ಮೀರಿ (~15 ದಿನಗಳು) ಅಥವಾ ಮುನ್ಸೂಚನೆ ಪಡೆಯಲಾಗದಿದ್ದರೆ, ಇದು ಸ್ಪಷ್ಟವಾಗಿ ಸಿಮ್ಯುಲೇಟೆಡ್ ಅಂದಾಜಿಗೆ ಹಿಂತಿರುಗುತ್ತದೆ.",lbl_trip_date:"ಹೊರಡುವ ದಿನಾಂಕ",lbl_trip_time:"ಹೊರಡುವ ಸಮಯ",lbl_trip_duration:"ಪ್ರಯಾಣದ ಅವಧಿ (ಗಂಟೆಗಳು)",btn_plan_trip:"ಟ್ರಿಪ್ ಯೋಜಿಸಿ",trip_pick_datetime:"ಮೊದಲು ಹೊರಡುವ ದಿನಾಂಕ ಮತ್ತು ಸಮಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",trip_advisory_go:"✅ ನಿಮ್ಮ ಯೋಜಿತ ವಿಂಡೋಗೆ ಪರಿಸ್ಥಿತಿಗಳು ಮೀನುಗಾರಿಕೆಗೆ ಸೂಕ್ತವಾಗಿ ಕಾಣುತ್ತವೆ",trip_advisory_caution:"🟡 ನಿಮ್ಮ ಯೋಜಿತ ವಿಂಡೋ ಸಮಯದಲ್ಲಿ ಪರಿಸ್ಥಿತಿಗಳು ಬದಲಾಗಬಹುದು — ಎಚ್ಚರಿಕೆಯಿಂದ ಮುಂದುವರಿಸಿ",trip_advisory_nogo:"🔴 ನಿಮ್ಮ ಯೋಜಿತ ವಿಂಡೋ ಸಮಯದಲ್ಲಿ ಹೆಚ್ಚಿನ-ಅಪಾಯದ ಪರಿಸ್ಥಿತಿಗಳು ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ — ಈ ಪ್ರವಾಸವನ್ನು ಮರುಪರಿಶೀಲಿಸಿ",trip_window_label:"ಹೊರಡುವಿಕೆ {start} → ಹಿಂತಿರುಗುವಿಕೆ {end}",trip_worst_hour_note:"ಈ ಮೌಲ್ಯಮಾಪನವು ನಿಮ್ಮ ವಿಂಡೋದಲ್ಲಿನ ಅತ್ಯಂತ ಕೆಟ್ಟ ಒಂದೇ ಗಂಟೆಯನ್ನು ಬಳಸುತ್ತದೆ, ಸರಾಸರಿಯನ್ನಲ್ಲ — ಒಂದು ಪ್ರವಾಸವು ಅದರ ಅತ್ಯಂತ ಕೆಟ್ಟ ಕ್ಷಣದಷ್ಟೇ ಸುರಕ್ಷಿತವಾಗಿದೆ. ಹೊರಡುವ ಮೊದಲು ಯಾವಾಗಲೂ ಅಧಿಕೃತ IMD ಸಮುದ್ರ ಎಚ್ಚರಿಕೆಗಳೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ.",src_forecast_near:"ಮುನ್ಸೂಚನೆ",src_forecast_far:"ಮುನ್ಸೂಚನೆ (ವಿಸ್ತರಿಸಲಾಗಿದೆ — ಕಡಿಮೆ ವಿಶ್ವಾಸಾರ್ಹತೆ)",harbor_popup_note:"ತಿಳಿದಿರುವ ಮೀನುಗಾರಿಕೆ ಬಂದರು (ಉಲ್ಲೇಖಕ್ಕೆ ಮಾತ್ರ — ಸಾಮಾನ್ಯ ಜ್ಞಾನ, ಅಂದಾಜು ಸ್ಥಳ)",nearest_harbor_line:"⚓ ಹತ್ತಿರದ ತಿಳಿದಿರುವ ಮೀನುಗಾರಿಕೆ ಬಂದರು: {name} — {d} ಕಿ.ಮೀ (ಉಲ್ಲೇಖಕ್ಕೆ ಮಾತ್ರ, ಅಂದಾಜು)",show_harbors:"ತಿಳಿದಿರುವ ಮೀನುಗಾರಿಕೆ ಬಂದರುಗಳನ್ನು ತೋರಿಸಿ",legend_harbor:"ತಿಳಿದಿರುವ ಮೀನುಗಾರಿಕೆ ಬಂದರು (ಉಲ್ಲೇಖ)",health_intro:"ಪ್ರತಿಯೊಂದು ಬಾಹ್ಯ ಡೇಟಾ ಮೂಲವು ಪ್ರಸ್ತುತ ನಿಜವಾಗಿಯೂ ತಲುಪಬಹುದೇ ಎಂಬುದರ ಲೈವ್ ಪರಿಶೀಲನೆ — ಒಂದು ಹಕ್ಕು ಅಲ್ಲ, ಪ್ರತಿಯೊಂದಕ್ಕೂ ನೈಜ ಸಮಯಬದ್ಧ ವಿನಂತಿ.",health_check_btn:"ಈಗ ಡೇಟಾ ಮೂಲಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",health_backend:"ಪೈಥಾನ್ ಬ್ಯಾಕೆಂಡ್",health_weather:"Open-Meteo (ಹವಾಮಾನ)",health_marine:"Open-Meteo (ಸಮುದ್ರ)",health_geocode:"Nominatim (ಸ್ಥಳ ಹುಡುಕಾಟ)",health_gps:"ಬ್ರೌಸರ್ GPS",health_network:"ನೆಟ್‌ವರ್ಕ್",health_online:"ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ",health_offline:"ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ",health_unreachable:"ತಲುಪಲಾಗುತ್ತಿಲ್ಲ",health_asof:"{time} ರಂದು ಪರಿಶೀಲಿಸಲಾಗಿದೆ",src_geo_bearing:"ನೈಜ ಭೌಗೋಳಿಕತೆ",src_geo_bearing_h:"ಸಮುದ್ರಾಭಿಮುಖ ಅಭ್ಯರ್ಥಿ ವಲಯಗಳು",src_geo_bearing_desc:"ಆಯ್ಕೆಮಾಡಿದ ಬಿಂದು ಯಾವ ಭಾರತೀಯ ಕರಾವಳಿಯಲ್ಲಿದೆ (ಬಂಗಾಳ ಕೊಲ್ಲಿ ಅಥವಾ ಅರಬ್ಬಿ ಸಮುದ್ರ) ಎಂಬುದರ ಆಧಾರದ ಮೇಲೆ ಅಭ್ಯರ್ಥಿ ವಲಯ ದಿಕ್ಕುಗಳನ್ನು ವಾಸ್ತವಿಕ ಸಮುದ್ರಾಭಿಮುಖ ಕೋನ್‌ಗೆ ನಿರ್ಬಂಧಿಸಲಾಗಿದೆ, ಯಾದೃಚ್ಛಿಕ 0-360° ದಿಕ್ಕಿನ ಬದಲು ಅದು ಸಾಂದರ್ಭಿಕವಾಗಿ ಭೂಮಿಯ ಕಡೆಗೆ ಹಿಂತಿರುಗಬಹುದು.",src_harbors:"ಉಲ್ಲೇಖ (ಅಂದಾಜು)",src_harbors_h:"ತಿಳಿದಿರುವ ಮೀನುಗಾರಿಕೆ ಬಂದರುಗಳು",src_harbors_desc:"ನೈಜ, ಸಾರ್ವಜನಿಕವಾಗಿ ತಿಳಿದಿರುವ ಪ್ರಮುಖ ಭಾರತೀಯ ಮೀನುಗಾರಿಕೆ ಬಂದರುಗಳ ಒಂದು ಸಣ್ಣ ಕ್ಯುರೇಟೆಡ್ ಪಟ್ಟಿ, ನಕ್ಷೆ ಗುರುತುಗಳಾಗಿ ಮತ್ತು \"ಹತ್ತಿರದ ಬಂದರು\" ಸತ್ಯವಾಗಿ ತೋರಿಸಲಾಗಿದೆ. ಸಾಮಾನ್ಯ-ಜ್ಞಾನ ಅಂದಾಜು ಸ್ಥಾನಗಳು, ಸಮೀಕ್ಷೆ-ದರ್ಜೆಯ ನಿರ್ದೇಶಾಂಕಗಳಲ್ಲ ಮತ್ತು ಲೈವ್ ಫೀಡ್ ಅಲ್ಲ."});
Object.assign(I18N.ml, {brand:"ഓർക്ക മറൈൻ ഇന്റലിജൻസ്",ph_location:"ഏതെങ്കിലും തീരദേശ സ്ഥലനാമം അല്ലെങ്കിൽ lat,lon നൽകുക",btn_search:"തിരയുക",hint_click:"നിങ്ങളുടെ സ്ഥാനം തിരഞ്ഞെടുക്കാൻ മാപ്പിൽ എവിടെയും ക്ലിക്ക് ചെയ്യുക, അല്ലെങ്കിൽ ഒരു സ്ഥലനാമം ടൈപ്പ് ചെയ്ത് തിരയുക അമർത്തുക.",lbl_question:"ചോദ്യം",ph_question:"നാളെ രാവിലെ മീൻപിടിക്കാൻ ഏത് സമീപ ജലാശയമാണ് സുരക്ഷിതം?",legend_green:"പച്ച = നല്ലത്",legend_yellow:"മഞ്ഞ = മാറിക്കൊണ്ടിരിക്കുന്നു",legend_red:"ചുവപ്പ് = ഒഴിവാക്കുക",legend_blue:"നീല = മത്സ്യത്തൊഴിലാളി",legend_maritime:"ശ്രീലങ്ക സമുദ്ര അതിർത്തി",legend_state:"സംസ്ഥാന അതിർത്തി",legend_boundary:"നിരീക്ഷിക്കുന്ന അതിർത്തി (ഏകദേശം)",legend_you:"നിങ്ങൾ",show_borders:"മാപ്പിൽ സംസ്ഥാന/സമുദ്ര അതിർത്തികൾ കാണിക്കുക",hint_independent:"സാഹചര്യങ്ങൾ സ്ഥലാധിഷ്ഠിതമാണ് — സമീപ സോണുകൾക്ക് വ്യത്യസ്ത മത്സ്യബന്ധന, കാലാവസ്ഥാ അനുയോജ്യത ഉണ്ടാകാം.",st_overall:"മൊത്തം അപകടസാധ്യത",st_weather:"കാലാവസ്ഥ",st_water:"ജലം",st_geofence:"ജിയോഫെൻസ്",st_fishing:"മത്സ്യബന്ധന അനുയോജ്യത",st_border:"അതിർത്തി",hint_status:"നിലവിൽ തിരഞ്ഞെടുത്ത / ശുപാർശ ചെയ്ത സോൺ മാത്രം പ്രതിഫലിപ്പിക്കുന്നു.",agents_title:"ഏജന്റ് പ്രവർത്തനം",agents_hint:"മൾട്ടി-ഏജന്റ് റീസണിംഗ് വർക്ക്ഫ്ലോ പ്രവർത്തിപ്പിക്കാൻ ഡാഷ്ബോർഡിൽ ഓർക്ക വിശകലനം അമർത്തുക.",zoneintel_hint:"20 കി.മീ തിരയൽ പരിധിക്കുള്ളിലെ എല്ലാ സമീപ മത്സ്യബന്ധന സോണുകളും, സ്വതന്ത്രമായി വിലയിരുത്തി.",fetching_live:"🔄 തത്സമയ ഉപഗ്രഹ/കാലാവസ്ഥാ ഡാറ്റയ്ക്കായി പരിശോധിക്കുന്നു…",compare_hint:"ഓർക്ക അസിസ്റ്റന്റിൽ നിന്ന് സ്വതന്ത്രമായി താരതമ്യം ചെയ്യാൻ 3 സ്ഥലങ്ങൾ വരെ തിരഞ്ഞെടുക്കുക.",btn_compare:"തിരഞ്ഞെടുത്ത സ്ഥലങ്ങൾ താരതമ്യം ചെയ്യുക",safety_checklist:"പുറപ്പെടൽ ചെക്ക്‌ലിസ്റ്റ്",btn_route:"സുരക്ഷിതമായ ഡെമോ റൂട്ട് കാണിക്കുക",route_disclaimer:"ഡെമോ റൂട്ട് — ഔദ്യോഗിക നാവിഗേഷൻ അല്ല.",alerts_hint:"നിങ്ങളുടെ തിരഞ്ഞെടുത്ത സ്ഥലത്തിന് ചുറ്റുമുള്ള നിലവിലെ സോണുകളിൽ നിന്ന് സൃഷ്ടിച്ചത്.",sources_hint:"ഈ പ്രോട്ടോടൈപ്പ് യഥാർത്ഥ ഡാറ്റയെ സിമുലേറ്റഡ്/ഡെമോ ഡാറ്റയിൽ നിന്ന് വ്യക്തമായി വേർതിരിക്കുന്നു.",settings_login:"ഡെമോ ലോഗിൻ",settings_phone:"ലോഗിൻ ഫോൺ നമ്പർ",btn_continue:"ഫോൺ ഉപയോഗിച്ച് തുടരുക",login_note:"പ്രോട്ടോടൈപ്പ് ലോഗിൻ — യഥാർത്ഥ OTP അയക്കില്ല.",btn_save:"ക്രമീകരണങ്ങൾ സേവ് ചെയ്യുക",settings_tracking:"ലൊക്കേഷൻ ട്രാക്കിംഗ്",settings_live:"ലൈവ് ട്രാക്കിംഗ്",settings_interval_note:"സജീവമായിരിക്കുമ്പോൾ ഏകദേശം ഓരോ 1 സെക്കൻഡിലും അപ്ഡേറ്റ് ചെയ്യുന്നു, GPS/ബ്രൗസർ ലഭ്യതയ്ക്ക് വിധേയമായി.",settings_border_alerts:"അതിർത്തി അലേർട്ടുകൾ",settings_border_toggle:"അതിർത്തി അലേർട്ടുകൾ",settings_voice_toggle:"ശബ്ദ അലേർട്ടുകൾ",settings_thresholds:"മുന്നറിയിപ്പ് ദൂരം (കി.മീ)",settings_warning:"മുന്നറിയിപ്പ്",settings_highwarning:"ഉയർന്ന മുന്നറിയിപ്പ്",settings_critical:"ഗുരുതരം",settings_family:"അടിയന്തിര & കുടുംബ കോൺടാക്റ്റുകൾ",settings_family_note:"സിമുലേറ്റഡ് അലേർട്ട് ലോഗിന് മാത്രം ഉപയോഗിക്കുന്നു — യഥാർത്ഥ SMS/കോൾ അയക്കില്ല.",settings_self_phone:"നിങ്ങളുടെ ഫോൺ നമ്പർ",settings_family1:"കുടുംബ കോൺടാക്റ്റ് 1",settings_family2:"കുടുംബ കോൺടാക്റ്റ് 2",settings_country:"രാജ്യം",settings_state:"സംസ്ഥാനം",emg_title:"ഗുരുതര മറൈൻ സംഭവം — ഡെമോ",emg_loc:"അവസാനം അറിയപ്പെട്ട സ്ഥാനം",emg_note:"ഇത് ഒരു സിമുലേഷനാണ്. യഥാർത്ഥ അടിയന്തിര കോൾ ചെയ്യില്ല.",no_location:"ദയവായി ആദ്യം ഒരു സ്ഥലം തിരഞ്ഞെടുക്കുകയോ തിരയുകയോ ചെയ്യുക.",finding_title:"ഓർക്ക സമീപ കണ്ടെത്തൽ",reco_title:"🏆 ഓർക്ക ശുപാർശ",reco_prefix:"ഏറ്റവും ശക്തമായ തിരഞ്ഞെടുപ്പ് — ഇത് മത്സ്യബന്ധന അനുയോജ്യതയെ സുരക്ഷിതമായ മൊത്തം സമുദ്ര, അതിർത്തി സാഹചര്യങ്ങളുമായി സന്തുലിതമാക്കുന്നു.",reco_border_note:"ഉയർന്ന മത്സ്യ സ്കോർ ഉള്ള സോണിന് കൂടുതൽ കാലാവസ്ഥാ/സമുദ്ര അപകടസാധ്യതയുള്ളതിനാലോ നിരീക്ഷിക്കുന്ന അതിർത്തിയോട് അടുത്തായതിനാലോ ഓർക്ക അതിന് മുൻഗണന കുറച്ചു — പിടിക്കുന്നതിന് മുമ്പ് സുരക്ഷയ്ക്ക് പ്രാധാന്യം നൽകുന്നു. തുടരുന്നതിന് മുമ്പ് നിലവിലെ സാഹചര്യങ്ങളും ബാധകമായ നിയന്ത്രണങ്ങളും പരിശോധിക്കുക.",good:"നല്ലത്",changing:"മാറുന്നു",highrisk:"ഉയർന്ന അപകടസാധ്യത",low:"കുറവ്",medium:"ഇടത്തരം",high:"ഉയർന്നത്",safe:"സുരക്ഷിതം",approaching:"അടുക്കുന്നു",critical:"ഗുരുതരം",fish_indicated:"മത്സ്യം സൂചിപ്പിച്ചു",checked:"പരിശോധിച്ചു",zone:"സോൺ",distance:"ദൂരം",fish:"മത്സ്യം",weather:"കാലാവസ്ഥ",waves:"തിരമാലകൾ",wind:"കാറ്റ്",sst:"SST",chlorophyll:"ക്ലോറോഫിൽ",ocean_risk:"സമുദ്ര അപകടസാധ്യത",geofence:"ജിയോഫെൻസ്",overall:"മൊത്തം",border_distance:"അതിർത്തി ദൂരം",border_risk:"അതിർത്തി അപകടസാധ്യത",view_on_map:"മാപ്പിൽ കാണുക",compare_max:"നിങ്ങൾക്ക് 3 സോണുകൾ വരെ മാത്രമേ താരതമ്യം ചെയ്യാൻ കഴിയൂ.",compare_pick:"താരതമ്യം ചെയ്യാൻ കുറഞ്ഞത് 2 സോണുകൾ തിരഞ്ഞെടുക്കുക.",src_live:"തത്സമയ മാപ്പ്",src_map_desc:"സംവേദനാത്മക മാപ്പ് പ്രദർശനത്തിനും ടൈലുകൾക്കും ഉപയോഗിക്കുന്നു.",src_geo:"തത്സമയം / API",src_geo_h:"സ്ഥല തിരയൽ",src_geo_desc:"ഏതൊരു സ്ഥലനാമവും OpenStreetMap Nominatim വഴി തത്സമയം ജിയോകോഡ് ചെയ്യുന്നു — ഒരു നിശ്ചിത നഗര പട്ടികയിൽ പരിമിതമല്ല.",src_liveapi:"തത്സമയം / API (ഫാൾബാക്ക്: സിമുലേറ്റഡ്)",src_proto:"പ്രോട്ടോടൈപ്പ്",src_dataset:"ഓർക്ക മത്സ്യബന്ധന അനുയോജ്യത",src_dataset_desc:"ഉപഗ്രഹ ബാക്കെൻഡോ Open-Meteo-യോ എത്തിച്ചേരാനാകാത്തപ്പോൾ മാത്രം ഉപയോഗിക്കുന്ന ഫാൾബാക്ക്/സിമുലേറ്റഡ് മത്സ്യ-അനുയോജ്യത സ്കോർ.",src_sim:"സിമുലേറ്റഡ്",src_weather:"കാലാവസ്ഥയും തിരമാലകളും",src_weather_desc:"കാറ്റ്, സമുദ്രോപരിതല താപനില, തിരമാല ഉയരം എന്നിവ ലഭ്യമായിടത്ത് Open-Meteo-യിൽ നിന്ന് തത്സമയം ലഭിക്കുന്നു; അഭ്യർത്ഥന പരാജയപ്പെട്ടാൽ സിമുലേറ്റഡ് ഡെമോ മൂല്യങ്ങളിലേക്ക് മടങ്ങുന്നു.",src_satellite:"തത്സമയം / സാറ്റലൈറ്റ് (ഓപ്ഷണൽ ബാക്കെൻഡ്)",src_satellite_h:"മത്സ്യബന്ധന അനുയോജ്യത — സാറ്റലൈറ്റ് ടയർ",src_satellite_desc:"ഉൾപ്പെടുത്തിയ പൈത്തൺ ബാക്കെൻഡ് (backend/main.py) പ്രവർത്തിക്കുമ്പോൾ, മത്സ്യ-അനുയോജ്യത യഥാർത്ഥ സാറ്റലൈറ്റ് സമുദ്രോപരിതല താപനിലയിൽ നിന്നും ക്ലോറോഫിൽ-a (NOAA CoastWatch ERDDAP) യിൽ നിന്നും കണക്കാക്കുന്നു — INCOIS-ന്റെ ഔദ്യോഗിക PFZ ഉപദേശങ്ങൾ നിർമ്മിച്ചിരിക്കുന്ന അതേ രണ്ട് സൂചകങ്ങൾ. ബാക്കെൻഡ് പ്രവർത്തിക്കാത്തപ്പോൾ, ഇത് മുകളിലുള്ള കാലാവസ്ഥ-മാത്രം ടയറിലേക്കും പിന്നീട് പൂർണ്ണമായും സിമുലേറ്റഡ് ടയറിലേക്കും മടങ്ങുന്നു — ഏതാണ് ബാധകമായതെന്ന് കാണാൻ ഓരോ സോൺ കാർഡിലെയും SATELLITE / LIVE / SIM ബാഡ്ജ് പരിശോധിക്കുക.",src_treaty:"ഉടമ്പടി അടിസ്ഥാനത്തിലുള്ളത് (ഏകദേശം)",src_boundary:"അതിർത്തി ഡാറ്റ",src_boundary_desc:"ഇന്ത്യ-ശ്രീലങ്ക രേഖ 1974 പാക്ക് കടലിടുക്ക്, 1976 മന്നാർ ഉൾക്കടൽ ഉടമ്പടികളുടെ യഥാർത്ഥ കോർഡിനേറ്റ് പോയിന്റുകൾ ഉപയോഗിക്കുന്നു. സംസ്ഥാന/കേന്ദ്രഭരണ പ്രദേശ അതിരുകൾ യഥാർത്ഥ GADM-അധിഷ്ഠിത ബഹുഭുജങ്ങൾ ഉപയോഗിക്കുന്നു (താഴെയുള്ള സംസ്ഥാന അതിരുകളും ജലാശയങ്ങളും ഉറവിടം കാണുക) — ആ ഡാറ്റ ലോഡ് ചെയ്യാൻ പരാജയപ്പെട്ടാൽ മാത്രമേ പഴയ തീരദേശ-അക്ഷാംശ കണക്കാക്കൽ ബാധകമാകൂ. രണ്ടും ഔദ്യോഗിക ചാർട്ടിന് പകരമല്ല — എപ്പോഴും അധികാരികളുമായി പരിശോധിക്കുക.",src_family:"കുടുംബ അലേർട്ടുകൾ",src_family_desc:"SMS/കോൾ അറിയിപ്പുകൾ സിമുലേറ്റഡ് മാത്രമാണ്. ഈ പ്രോട്ടോടൈപ്പ് യഥാർത്ഥ സന്ദേശമോ കോളോ അയക്കുന്നില്ല.",footer:"ഓർക്ക മറൈൻ ഇന്റലിജൻസ് — സ്റ്റുഡന്റ് ഇന്നൊവേഷൻ ഹാക്കത്തോൺ 2026 പ്രോട്ടോടൈപ്പ്. യഥാർത്ഥ സമുദ്ര ഡാറ്റ ഉപയോഗിക്കുന്നില്ല.",agent_planner:"ഓർക്ക പ്ലാനർ ഏജന്റ്",agent_weather:"കാലാവസ്ഥാ ഏജന്റ്",agent_ocean:"സമുദ്ര ഏജന്റ്",agent_fishing:"മത്സ്യബന്ധന ഏജന്റ്",agent_geo:"ജിയോ ഏജന്റ്",agent_risk:"റിസ്ക് ഏജന്റ്",agent_border:"അതിർത്തി ഏജന്റ്",agent_safety:"സുരക്ഷാ ഏജന്റ്",agent_reasoner:"ഓർക്ക റീസണർ",task_planner:"സ്ഥലം, ചോദ്യം, അഭ്യർത്ഥിച്ച സമയം എന്നിവ മനസ്സിലാക്കുക.",result_planner:"മത്സ്യബന്ധനം + സുരക്ഷാ ചോദ്യം തിരിച്ചറിഞ്ഞു.",complete:"പൂർത്തിയായി",checklist_items:["ഔദ്യോഗിക സമുദ്ര മുന്നറിയിപ്പുകൾ പരിശോധിക്കുക","ആശയവിനിമയ ഉപകരണങ്ങൾ കൊണ്ടുപോകുക","ഇന്ധന നില പരിശോധിക്കുക","ബാറ്ററി / പവർ ബാങ്ക് പരിശോധിക്കുക","നാവിഗേഷൻ ഉപകരണം പരിശോധിക്കുക","അനുവദനീയമായ മത്സ്യബന്ധന മേഖലകളിൽ തുടരുക"],emg_steps:["നിലവിലെ സ്ഥാനം പകർത്തുക","അടിയന്തിര സന്ദേശം തയ്യാറാക്കുക","കുടുംബ അറിയിപ്പ് (സിമുലേറ്റഡ്)","രക്ഷാ-ചാനൽ സന്ദേശം (സിമുലേറ്റഡ്)"],border_hint:"പ്രോട്ടോടൈപ്പ് അതിർത്തി ഡാറ്റ — ഔദ്യോഗികമല്ല. അതിർത്തിക്ക് സമീപം തുടരുന്നതിന് മുമ്പ് എപ്പോഴും നിലവിലെ ഔദ്യോഗിക സമുദ്ര നിയന്ത്രണങ്ങൾ പരിശോധിക്കുക.",border_click_hint:"ആ സ്ഥലത്തിന്റെ അതിർത്തി നില പരിശോധിക്കാൻ നിങ്ങൾക്ക് താഴെയുള്ള മാപ്പിൽ എവിടെയും ക്ലിക്ക് ചെയ്യാം.",border_status_title:"വിശദാംശങ്ങൾ",family_log_title:"കുടുംബ അലേർട്ട് ലോഗ്",family_log_hint:"സിമുലേറ്റഡ് മാത്രം — ഈ പ്രോട്ടോടൈപ്പിൽ നിന്ന് യഥാർത്ഥ SMS ഓ കോളോ ഒരിക്കലും അയക്കില്ല.",chat_ph:"നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക... ഉദാ. ഞാൻ അതിർത്തിയിൽ നിന്ന് എത്ര ദൂരെയാണ്?",btn_live_off:"ലൈവ് ട്രാക്കിംഗ് ആരംഭിക്കുക",btn_live_on:"ലൈവ് ട്രാക്കിംഗ് നിർത്തുക",btn_demo_move:"ഡെമോ: സമീപനം അനുകരിക്കുക",btn_return:"തിരിച്ചുള്ള റൂട്ട് നിർദ്ദേശിക്കുക",live_lat:"അക്ഷാംശം",live_lon:"രേഖാംശം",live_acc:"GPS കൃത്യത",live_update:"അവസാന അപ്ഡേറ്റ്",current_state:"നിലവിൽ ഉള്ള സ്ഥലം",current_state_line:"📍 നിലവിൽ {state} ജലം/തീരത്ത് ആണ്.",current_state_lanka:"📍 നിലവിൽ ശ്രീലങ്കൻ ജലത്തിലാണ് (നിരീക്ഷിക്കുന്ന രേഖ കടന്ന്).",nearest_state:"സമീപ സംസ്ഥാന അതിർത്തി",other_state_boundary:"കൂടാതെ സമീപം",nearest_maritime:"സമുദ്ര അതിർത്തി (ശ്രീലങ്ക)",status:"നില",direction:"ദിശ",crossed_label:"സാധ്യമായ അതിർത്തി ലംഘനം",gps_denied:"ലൊക്കേഷൻ അനുമതി ലഭ്യമല്ല. ഒരു സ്ഥലം സ്വമേധയാ തിരഞ്ഞെടുക്കുക.",hero_safe:"✅ സുരക്ഷിതം — നിങ്ങൾ ഏറ്റവും അടുത്ത നിരീക്ഷിക്കുന്ന അതിർത്തിയിൽ ({name}) നിന്ന് {d} കി.മീ അകലെയാണ്.",hero_approaching:"🟡 അടുക്കുന്നു — {name} ൽ നിന്ന് {d} കി.മീ. നിങ്ങളുടെ സ്ഥാനം ശ്രദ്ധിക്കുക.",hero_high:"🟠 ഉയർന്ന മുന്നറിയിപ്പ് — {name} ൽ നിന്ന് വെറും {d} കി.മീ. നിങ്ങളുടെ അനുവദനീയ മത്സ്യബന്ധന മേഖല പരിശോധിക്കുക.",hero_critical:"🔴 ഗുരുതരം — {name} ൽ നിന്ന് വെറും {d} കി.മീ. നിങ്ങളുടെ സ്ഥാനം പരിശോധിക്കാതെ കൂടുതൽ മുന്നോട്ട് പോകരുത്.",hero_crossed:"🚨 സാധ്യമായ അതിർത്തി ലംഘനം — നിങ്ങളുടെ സ്ഥാനം {name} ന്റെ മറുവശത്താണെന്ന് തോന്നുന്നു (~{d} കി.മീ കടന്ന്). നിർത്തി നിങ്ങളുടെ സ്ഥാനവും ബാധകമായ സമുദ്ര നിയന്ത്രണങ്ങളും ഉടൻ പരിശോധിക്കുക.",tips_safe:["നിങ്ങൾ നിരീക്ഷിക്കുന്ന പ്രദേശത്തിനുള്ളിൽ സുഖമായി ഇരിക്കുന്നു — സാധാരണ പ്രവർത്തനങ്ങൾ തുടരുക.","നിങ്ങൾ കടലിൽ ആയിരിക്കുമ്പോൾ ഇടയ്ക്കിടെ ഈ പേജ് വീണ്ടും പരിശോധിക്കുക.","ഇവിടെയുള്ള അതിർത്തി രേഖകൾ ഏകദേശമാണ് — എപ്പോഴും ഔദ്യോഗിക ചാർട്ടുകളും വിശ്വസിക്കുക."],tips_approaching:["നിങ്ങളുടെ നിലവിലെ ദിശയും അതിർത്തിയിൽ നിന്നുള്ള ദൂരവും ശ്രദ്ധിക്കുക.","നിരീക്ഷിക്കുന്ന രേഖയ്ക്ക് സമീപം ആയിരിക്കുമ്പോൾ ഈ പേജ് തുറന്നിടുക.","അതിർത്തിയിലേക്ക് കൂടുതൽ നീങ്ങുന്നത് ഒഴിവാക്കുക."],tips_high:["ഇപ്പോൾ സുരക്ഷിതമായ ജലത്തിലേക്ക് തിരിച്ചുപോകുന്നത് പരിഗണിക്കുക.","ഇത് ഒരു പ്രോട്ടോടൈപ്പ് കണക്കാക്കൽ ആണ് — പ്രാദേശിക അറിവും ചാർട്ടുകളും ഉപയോഗിച്ച് ക്രോസ്-ചെക്ക് ചെയ്യുക.","സമീപത്തെ ബോട്ടിനെയോ നിങ്ങളുടെ കുടുംബ കോൺടാക്റ്റിനെയോ നിങ്ങളുടെ സ്ഥാനം അറിയിക്കുക."],tips_critical:["നിർത്തി ഈ ദിശയിൽ കൂടുതൽ പോകരുത്.","ഉടൻ സുരക്ഷിതമായ ജലത്തിലേക്ക് തിരിച്ചുപോകുക.","ഇപ്പോൾ നിങ്ങളുടെ കുടുംബം/കോസ്റ്റ് ഗാർഡ് കോൺടാക്റ്റ് ചാനൽ ഉപയോഗിക്കുക."],tips_crossed:["ഉടൻ ബോട്ട് നിർത്തുക.","നിങ്ങൾ വന്ന വഴിയിലൂടെ തിരിച്ചുപോകുക.","ഈ പ്രോട്ടോടൈപ്പിന് നിയമപരമായ നില സ്ഥിരീകരിക്കാൻ കഴിയില്ല — ഇത് ഗുരുതരമായ മുന്നറിയിപ്പായി കണക്കാക്കി അധികാരികളുമായി പരിശോധിക്കുക."],alert_safe:"നിങ്ങൾ ഏറ്റവും അടുത്ത നിരീക്ഷിക്കുന്ന അതിർത്തിയിൽ ({name}) നിന്ന് {d} കി.മീ അകലെയാണ്. ഉടനടി ആശങ്കയില്ല.",alert_approaching:"നിങ്ങൾ {name} നോട് അടുക്കുന്നു. ദൂരം: {d} കി.മീ.",alert_high:"⚠️ നിങ്ങൾ {name} ന്റെ {d} കി.മീ ക്കുള്ളിലാണ്. നിങ്ങളുടെ അനുവദനീയ മത്സ്യബന്ധന മേഖല പരിശോധിക്കുക.",alert_critical:"🚨 നിങ്ങൾ {name} ന് വളരെ അടുത്താണ് ({d} കി.മീ). നിങ്ങളുടെ സ്ഥാനവും ബാധകമായ സമുദ്ര നിയന്ത്രണങ്ങളും പരിശോധിക്കാതെ കൂടുതൽ മുന്നോട്ട് പോകരുത്.",alert_crossed:"🚨 നിങ്ങളുടെ സ്ഥാനം {name} ന്റെ മറുവശത്താണെന്ന് തോന്നുന്നു (~{d} കി.മീ കടന്ന്). നിർത്തി നിങ്ങളുടെ സ്ഥാനവും ബാധകമായ സമുദ്ര നിയന്ത്രണങ്ങളും ഉടൻ പരിശോധിക്കുക.",family_alert_border:"മത്സ്യത്തൊഴിലാളി ഒരു നിരീക്ഷിക്കുന്ന അതിർത്തിക്ക് സമീപം {tier} നില എത്തി ({d} കി.മീ).",family_alert_redzone:"മത്സ്യത്തൊഴിലാളിയുടെ തത്സമയ സ്ഥാനം ചുവപ്പ് (ഉയർന്ന അപകടസാധ്യത) മത്സ്യബന്ധന സോണിനുള്ളിൽ/സമീപത്താണ്.",family_alert_cyclone:"മത്സ്യത്തൊഴിലാളിയുടെ തത്സമയ സ്ഥാനം ഉയർന്ന അപകടസാധ്യതയുള്ള കാലാവസ്ഥാ (ചുഴലിക്കാറ്റ്-തരം) മേഖലയ്ക്ക് സമീപമാണ്.",family_sms:"📨 കുടുംബ കോൺടാക്റ്റുകൾക്ക് SMS സിമുലേറ്റ് ചെയ്തു",family_call:"📞 കുടുംബ കോൺടാക്റ്റുകൾക്ക് കോൾ സിമുലേറ്റ് ചെയ്തു",no_contacts:"കുടുംബ കോൺടാക്റ്റ് നമ്പറുകൾ സജ്ജീകരിച്ചിട്ടില്ല — അലേർട്ട് സിമുലേഷൻ പ്രവർത്തനക്ഷമമാക്കാൻ ക്രമീകരണങ്ങളിൽ അവ ചേർക്കുക.",return_route_msg:"നിലവിലെ കാറ്റിന്റെ അടിസ്ഥാനത്തിൽ (~{w} കി.മീ/മണിക്കൂർ) {z} സമീപം, നിർദ്ദേശിക്കുന്ന തിരിച്ചുള്ള ദിശ {dir} ആയി {label} ലേക്ക്, ഏകദേശം {d} കി.മീ. തിരിച്ചുപോകുന്നതിന് മുമ്പ് ഔദ്യോഗിക സമുദ്ര ഉപദേശങ്ങൾ വീണ്ടും പരിശോധിക്കുക.",chat_welcome:"നമസ്കാരം, ഞാൻ ഓർക്ക ആണ്. ഒരു സ്ഥലം തിരഞ്ഞെടുക്കുക, സമീപ മത്സ്യബന്ധന സോണുകളെക്കുറിച്ചും അതിർത്തി ദൂരത്തെക്കുറിച്ചും എനിക്ക് നിങ്ങളോട് പറയാൻ കഴിയും. ചോദിച്ചു നോക്കൂ: 'ഞാൻ അതിർത്തിയിൽ നിന്ന് എത്ര ദൂരെയാണ്?'",chat_no_location:"എനിക്ക് വിശകലനം ചെയ്യാൻ എന്തെങ്കിലും ഉണ്ടാകാൻ ദയവായി ആദ്യം മത്സ്യത്തൊഴിലാളിയുടെ സ്ഥലം തിരഞ്ഞെടുക്കുക (ഡാഷ്ബോർഡിൽ).",chat_border_answer:"നിങ്ങൾ {label} ൽ നിന്ന് ഏകദേശം {d} കി.മീ അകലെയാണ്, നില: {status}.",chat_continue_answer:"നിരീക്ഷിക്കുന്ന അതിർത്തിക്ക് സമീപം നിങ്ങളുടെ തത്സമയ സ്ഥാന നില നിലവിൽ {status} ആണ് ({d} കി.മീ). തുടരുന്നതിന് മുമ്പ് അനുവദനീയ മത്സ്യബന്ധന മേഖലയ്ക്കുള്ളിൽ തുടരാനും ഏറ്റവും പുതിയ ഔദ്യോഗിക സമുദ്ര ഉപദേശങ്ങൾ പരിശോധിക്കാനും ഞാൻ ശുപാർശ ചെയ്യുന്നു.",chat_safer_answer:"മത്സ്യബന്ധന അനുയോജ്യത, കാലാവസ്ഥ, അതിർത്തി ദൂരം എന്നിവ സംയോജിപ്പിച്ച്, {zone} നിലവിൽ സുരക്ഷിതമായ തിരഞ്ഞെടുപ്പായി കാണപ്പെടുന്നു ({score}/100 സംയോജിത സ്കോർ).",chat_weather_answer:"ഏറ്റവും അടുത്ത ശുപാർശ ചെയ്ത സോൺ {zone} നിലവിൽ {weather} കാലാവസ്ഥ {wave} മീ തിരമാലകളും {wind} കി.മീ/മണിക്കൂർ കാറ്റും കാണിക്കുന്നു.",chat_default:"'ഞാൻ അതിർത്തിയിൽ നിന്ന് എത്ര ദൂരെയാണ്', 'എനിക്ക് മീൻപിടിത്തം തുടരാമോ', അല്ലെങ്കിൽ 'ഏത് സോൺ സുരക്ഷിതമാണ്' തുടങ്ങിയ ചോദ്യങ്ങൾക്ക് എനിക്ക് ഉത്തരം നൽകാൻ കഴിയും. അവയിലൊന്ന് പരീക്ഷിക്കുക, അല്ലെങ്കിൽ മുകളിലുള്ള പാനൽ പരിശോധിക്കുക.",voice_unsupported:"ഈ ബ്രൗസറിൽ വോയ്സ് തിരിച്ചറിയൽ പിന്തുണയ്ക്കുന്നില്ല — ദയവായി നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക.",voice_listening:"🎤 കേൾക്കുന്നു...",gps_watch_error:"ലൊക്കേഷൻ അനുമതി ലഭ്യമല്ല. ഒരു സ്ഥലം സ്വമേധയാ തിരഞ്ഞെടുക്കുക അല്ലെങ്കിൽ ബ്രൗസർ അനുമതികൾ പരിശോധിക്കുക.",geocode_searching:"⏳",geocode_notfound:"കണ്ടെത്തിയില്ല — സമീപ പട്ടണം അല്ലെങ്കിൽ lat,lon ജോടി പരീക്ഷിക്കുക",lbl_radius:"തിരയൽ ആരം (കി.മീ)",lbl_zonecount:"സോണുകളുടെ എണ്ണം",zoneintel_hint_dyn:"{km} കി.മീ തിരയൽ പരിധിക്കുള്ളിലെ എല്ലാ സമീപ മത്സ്യബന്ധന സോണുകളും, സ്വതന്ത്രമായി വിലയിരുത്തി.",legend_ring_warn:"മഞ്ഞ വളയം = അതിർത്തി മുന്നറിയിപ്പ്",legend_ring_high:"ഓറഞ്ച് വളയം = ഉയർന്ന മുന്നറിയിപ്പ്",legend_ring_crit:"ചുവപ്പ് വളയം = ഗുരുതരം",chat_dash_hint:"ഈ മാപ്പിനെക്കുറിച്ച് നേരിട്ട് ചോദിക്കുക — മത്സ്യബന്ധന സോണുകളും അതിർത്തി അപകടസാധ്യതയും ഒരുമിച്ച്, ഉദാ. \"ഞാൻ അതിർത്തിയിൽ നിന്ന് എത്ര ദൂരെയാണ്?\" അല്ലെങ്കിൽ \"ഏത് സോൺ സുരക്ഷിതമാണ്?\"",legend_wind:"കാറ്റ് ഒഴുക്ക് (ഏകദേശം, സോൺ കാറ്റ് പോലുള്ള ഡാറ്റ)",show_wind:"ആനിമേറ്റഡ് കാറ്റ് ഒഴുക്ക് കാണിക്കുക (ഏകദേശം)",nav_cyclone:"ചുഴലിക്കാറ്റ് ഇന്റലിജൻസ്",cyclone_title:"ചുഴലിക്കാറ്റ് ഇന്റലിജൻസ്",cyclone_hint:"പ്രോട്ടോടൈപ്പ് — ഇത് യഥാർത്ഥ തത്സമയ കാറ്റ് + മർദ്ദം + തിരമാല ഡാറ്റയിൽ നിന്നുള്ള ഒരു ഡെമോ ഫോർമുല, ഒരു സിമുലേറ്റഡ് കൊടുങ്കാറ്റ് സാഹചര്യം എന്നിവയാണ്, തത്സമയ ചുഴലിക്കാറ്റ് ട്രാക്കർ അല്ല. ഇന്ത്യൻ തീരങ്ങളിലെ യഥാർത്ഥ ചുഴലിക്കാറ്റ് മുന്നറിയിപ്പുകൾക്ക്, എപ്പോഴും IMD (mausam.imd.gov.in), INCOIS (incois.gov.in) എന്നിവ നേരിട്ട് പരിശോധിക്കുക.",cyclone_heuristic_title:"നിലവിലെ ചുഴലിക്കാറ്റ്-അപകടസാധ്യതാ ഫോർമുല",cyclone_heuristic_sub:"ഫോർമുല സ്കോർ {index}/100 — {tier}. യഥാർത്ഥ തത്സമയ കാറ്റ് + മർദ്ദം + തിരമാല ഡാറ്റയിൽ നിന്ന്, ലളിതമായ പരിധികളുമായി സംയോജിപ്പിച്ച് നിർമ്മിച്ചത് — യഥാർത്ഥ ചുഴലിക്കാറ്റ് കണ്ടെത്തൽ സംവിധാനമല്ല.",cyclone_pressure:"മർദ്ദം",cyclone_risk_index:"അപകടസാധ്യതാ സൂചിക",cyclone_risk_low:"കുറവ്",cyclone_risk_elevated:"ഉയർന്നത്",cyclone_risk_watch:"വാച്ച്",cyclone_risk_high:"ഉയർന്നത്",cyclone_demo_title:"സിമുലേറ്റഡ് ഡെമോ സിസ്റ്റം: {name}",cyclone_demo_sub:"{cat} · {d} കി.മീ അകലെ · മുന്നോട്ടുള്ള വേഗതയും ETA യും സിമുലേറ്റഡ്, യഥാർത്ഥ ട്രാക്ക് ചെയ്ത കൊടുങ്കാറ്റല്ല.",cyclone_category:"വിഭാഗം",cyclone_forward_speed:"മുന്നോട്ടുള്ള വേഗത",cyclone_eta:"ETA (സിമുലേറ്റഡ്)",cyclone_regen:"ഡെമോ സാഹചര്യം വീണ്ടും സൃഷ്ടിക്കുക",cyclone_checklist_title:"ചുഴലിക്കാറ്റ് സുരക്ഷാ ചെക്ക്‌ലിസ്റ്റ്",cyclone_checklist_items:["ഈ പേജ് ഒരു ഡെമോ ആയി മാത്രം കണക്കാക്കുക — യഥാർത്ഥ ചുഴലിക്കാറ്റ് മുന്നറിയിപ്പുകൾക്ക് എപ്പോഴും ഔദ്യോഗിക IMD/INCOIS ബുള്ളറ്റിനുകൾ പരിശോധിക്കുക","അടിയന്തിര കോൺടാക്റ്റുകൾ, റേഡിയോ, ബാറ്ററി ഉപകരണങ്ങൾ ചാർജ് ചെയ്ത് തയ്യാറാക്കി വയ്ക്കുക","നിങ്ങളുടെ പ്രദേശത്തിന് യഥാർത്ഥ ഔദ്യോഗിക മുന്നറിയിപ്പ് നൽകിയാൽ, ഉടൻ തീരത്തേക്ക് മടങ്ങുക","കടുത്ത കാലാവസ്ഥ എത്തുന്നതിന് മുമ്പ് ഡെക്കിലെ അയഞ്ഞ ഉപകരണങ്ങൾ സുരക്ഷിതമാക്കുക","നിങ്ങളുടെ ഏറ്റവും അടുത്ത സുരക്ഷിത തുറമുഖവും നിലവിലെ സ്ഥാനത്തുനിന്നുള്ള അതിന്റെ ദൂരവും അറിയുക"],cyclone_official_note:"ഡാറ്റ സ്രോതസ്സുകൾ: Open-Meteo-യിൽ നിന്നുള്ള തത്സമയ കാറ്റ്/മർദ്ദം/തിരമാല (ഈ ആപ്പിന്റെ മറ്റ് ഭാഗങ്ങൾ പോലെ). പേരുള്ള കൊടുങ്കാറ്റ്, അതിന്റെ വിഭാഗം, ട്രാക്ക്, ETA എന്നിവ ഡെമോ ആവശ്യങ്ങൾക്കായി പൂർണ്ണമായും സിമുലേറ്റഡ് ആണ് — അവ ഒരു യഥാർത്ഥ കാലാവസ്ഥാ സംവിധാനത്തെയും പ്രതിനിധീകരിക്കുന്നില്ല. യഥാർത്ഥ ചുഴലിക്കാറ്റ് മുന്നറിയിപ്പുകൾക്ക് എപ്പോഴും IMD, INCOIS എന്നിവ നേരിട്ട് പരിശോധിക്കുക.",family_alert_cyclone_demo:"സിമുലേറ്റഡ് ചുഴലിക്കാറ്റ് സിസ്റ്റം {name} ഉയർന്ന/ഗുരുതര ഡെമോ ടയറിലാണ്, മത്സ്യത്തൊഴിലാളിയുടെ സ്ഥാനത്തുനിന്ന് {d} കി.മീ (ഡെമോ സാഹചര്യം — യഥാർത്ഥ കൊടുങ്കാറ്റല്ല).",src_cyclone:"സിമുലേറ്റഡ് / ഫോർമുല",src_cyclone_h:"ചുഴലിക്കാറ്റ് ഇന്റലിജൻസ്",src_cyclone_desc:"ചുഴലിക്കാറ്റ്-അപകടസാധ്യതാ സംഖ്യ യഥാർത്ഥ തത്സമയ കാറ്റ്, മർദ്ദം, തിരമാല ഡാറ്റ ഉപയോഗിക്കുന്നു (ഈ ആപ്പിന്റെ മറ്റ് ഭാഗങ്ങൾ പോലെ അതേ Open-Meteo സ്രോതസ്സ്), ഒരു ലളിതമായ ഫോർമുലയായി സംയോജിപ്പിച്ചിരിക്കുന്നു — യഥാർത്ഥ ചുഴലിക്കാറ്റ് കണ്ടെത്തലല്ല. കാണിച്ചിരിക്കുന്ന പേരുള്ള കൊടുങ്കാറ്റ് സംവിധാനം പൂർണ്ണമായും സിമുലേറ്റഡ് ഡെമോ സാഹചര്യമാണ്, യഥാർത്ഥ IMD-ട്രാക്ക് ചെയ്ത ചുഴലിക്കാറ്റല്ല. യഥാർത്ഥ ചുഴലിക്കാറ്റ് മുന്നറിയിപ്പുകൾക്ക് എപ്പോഴും IMD, INCOIS എന്നിവ നേരിട്ട് പരിശോധിക്കുക.",freshness_asof:"{time} പ്രകാരം",nav_tripplanner:"ട്രിപ്പ് പ്ലാനർ",trip_title:"ട്രിപ്പ് പ്ലാനർ",trip_hint:"നിങ്ങളുടെ തിരഞ്ഞെടുത്ത സ്ഥലത്തിനായി Open-Meteo-യുടെ യഥാർത്ഥ മണിക്കൂർ പ്രവചനം ഉപയോഗിച്ച് മുൻകൂട്ടി പദ്ധതിയിടുക. സുരക്ഷാ വിലയിരുത്തൽ നിങ്ങളുടെ വിൻഡോയിലെ ഏറ്റവും മോശം മണിക്കൂർ ഉപയോഗിക്കുന്നു, ശരാശരിയല്ല. പ്രവചന പരിധിക്കപ്പുറം (~15 ദിവസം) അല്ലെങ്കിൽ പ്രവചനം ലഭിക്കാനായില്ലെങ്കിൽ, ഇത് വ്യക്തമായി സിമുലേറ്റഡ് കണക്കാക്കലിലേക്ക് മടങ്ങുന്നു.",lbl_trip_date:"പുറപ്പെടൽ തീയതി",lbl_trip_time:"പുറപ്പെടൽ സമയം",lbl_trip_duration:"യാത്രാ ദൈർഘ്യം (മണിക്കൂർ)",btn_plan_trip:"ട്രിപ്പ് പ്ലാൻ ചെയ്യുക",trip_pick_datetime:"ആദ്യം ഒരു പുറപ്പെടൽ തീയതിയും സമയവും തിരഞ്ഞെടുക്കുക.",trip_advisory_go:"✅ നിങ്ങളുടെ ആസൂത്രിത വിൻഡോയ്ക്ക് സാഹചര്യങ്ങൾ മീൻപിടിക്കാൻ അനുയോജ്യമായി കാണപ്പെടുന്നു",trip_advisory_caution:"🟡 നിങ്ങളുടെ ആസൂത്രിത വിൻഡോയിൽ സാഹചര്യങ്ങൾ മാറാം — ജാഗ്രതയോടെ തുടരുക",trip_advisory_nogo:"🔴 നിങ്ങളുടെ ആസൂത്രിത വിൻഡോയിൽ ഉയർന്ന അപകടസാധ്യതയുള്ള സാഹചര്യങ്ങൾ പ്രതീക്ഷിക്കുന്നു — ഈ യാത്ര പുനഃപരിശോധിക്കുക",trip_window_label:"പുറപ്പെടൽ {start} → തിരിച്ചുവരവ് {end}",trip_worst_hour_note:"ഈ വിലയിരുത്തൽ നിങ്ങളുടെ വിൻഡോയിലെ ഏറ്റവും മോശം ഒരു മണിക്കൂർ ഉപയോഗിക്കുന്നു, ശരാശരിയല്ല — ഒരു യാത്ര അതിന്റെ ഏറ്റവും മോശം നിമിഷത്തോളം മാത്രമേ സുരക്ഷിതമാകൂ. പുറപ്പെടുന്നതിന് മുമ്പ് എപ്പോഴും ഔദ്യോഗിക IMD സമുദ്ര മുന്നറിയിപ്പുകൾ ഉപയോഗിച്ച് പരിശോധിക്കുക.",src_forecast_near:"പ്രവചനം",src_forecast_far:"പ്രവചനം (വിപുലീകരിച്ചത് — കുറഞ്ഞ വിശ്വാസ്യത)",harbor_popup_note:"അറിയപ്പെടുന്ന മത്സ്യബന്ധന തുറമുഖം (റഫറൻസിന് മാത്രം — പൊതു അറിവ്, ഏകദേശ സ്ഥാനം)",nearest_harbor_line:"⚓ ഏറ്റവും അടുത്ത അറിയപ്പെടുന്ന മത്സ്യബന്ധന തുറമുഖം: {name} — {d} കി.മീ (റഫറൻസിന് മാത്രം, ഏകദേശം)",show_harbors:"അറിയപ്പെടുന്ന മത്സ്യബന്ധന തുറമുഖങ്ങൾ കാണിക്കുക",legend_harbor:"അറിയപ്പെടുന്ന മത്സ്യബന്ധന തുറമുഖം (റഫറൻസ്)",health_intro:"ഓരോ ബാഹ്യ ഡാറ്റ സ്രോതസ്സും നിലവിൽ യഥാർത്ഥത്തിൽ എത്തിച്ചേരാനാകുമോ എന്നതിന്റെ തത്സമയ പരിശോധന — ഒരു അവകാശവാദമല്ല, ഓരോന്നിനും ഒരു യഥാർത്ഥ സമയബന്ധിത അഭ്യർത്ഥന.",health_check_btn:"ഇപ്പോൾ ഡാറ്റ സ്രോതസ്സുകൾ പരിശോധിക്കുക",health_backend:"പൈത്തൺ ബാക്കെൻഡ്",health_weather:"Open-Meteo (കാലാവസ്ഥ)",health_marine:"Open-Meteo (സമുദ്രം)",health_geocode:"Nominatim (സ്ഥല തിരയൽ)",health_gps:"ബ്രൗസർ GPS",health_network:"നെറ്റ്‌വർക്ക്",health_online:"ഓൺലൈനിൽ",health_offline:"ഓഫ്‌ലൈനിൽ",health_unreachable:"എത്തിച്ചേരാനാകുന്നില്ല",health_asof:"{time} ന് പരിശോധിച്ചു",src_geo_bearing:"യഥാർത്ഥ ഭൂമിശാസ്ത്രം",src_geo_bearing_h:"കടൽമുഖ സ്ഥാനാർത്ഥി സോണുകൾ",src_geo_bearing_desc:"തിരഞ്ഞെടുത്ത പോയിന്റ് ഏത് ഇന്ത്യൻ തീരത്താണ് (ബംഗാൾ ഉൾക്കടൽ അല്ലെങ്കിൽ അറബിക്കടൽ) എന്നതിനെ അടിസ്ഥാനമാക്കി സ്ഥാനാർത്ഥി സോൺ ദിശകൾ യാഥാർത്ഥ്യമായ കടൽമുഖ കോണിലേക്ക് പരിമിതപ്പെടുത്തിയിരിക്കുന്നു, ക്രമരഹിതമായ 0-360° ദിശയ്ക്ക് പകരം അത് ഇടയ്ക്കിടെ കരയിലേക്ക് തിരിയാം.",src_harbors:"റഫറൻസ് (ഏകദേശം)",src_harbors_h:"അറിയപ്പെടുന്ന മത്സ്യബന്ധന തുറമുഖങ്ങൾ",src_harbors_desc:"യഥാർത്ഥവും പൊതുവായി അറിയപ്പെടുന്നതുമായ പ്രധാന ഇന്ത്യൻ മത്സ്യബന്ധന തുറമുഖങ്ങളുടെ ഒരു ചെറിയ ക്യൂറേറ്റഡ് പട്ടിക, മാപ്പ് മാർക്കറുകളായും ഒരു \"സമീപ തുറമുഖം\" വസ്തുതയായും കാണിച്ചിരിക്കുന്നു. പൊതു-അറിവ് ഏകദേശ സ്ഥാനങ്ങൾ, സർവേ-ഗ്രേഡ് കോർഡിനേറ്റുകൾ അല്ല, തത്സമയ ഫീഡും അല്ല."});
Object.assign(I18N.hi, {brand:"ओर्का मरीन इंटेलिजेंस",ph_location:"कोई भी तटीय स्थान का नाम, या lat,lon दर्ज करें",btn_search:"खोजें",hint_click:"अपना स्थान चुनने के लिए मानचित्र पर कहीं भी क्लिक करें, या कोई भी स्थान नाम टाइप करके खोजें दबाएं।",lbl_question:"प्रश्न",ph_question:"कल सुबह मछली पकड़ने के लिए कौन सा नज़दीकी जल निकाय सबसे सुरक्षित है?",legend_green:"हरा = अच्छा",legend_yellow:"पीला = बदल रहा है",legend_red:"लाल = बचें",legend_blue:"नीला = मछुआरा",legend_maritime:"श्रीलंका समुद्री सीमा",legend_state:"राज्य सीमा",legend_boundary:"निगरानी की गई सीमा (लगभग)",legend_you:"आप",show_borders:"मानचित्र पर राज्य/समुद्री सीमाएं दिखाएं",hint_independent:"स्थितियां स्थान-विशिष्ट हैं — आस-पास के ज़ोन में मछली पकड़ने और मौसम की उपयुक्तता अलग-अलग हो सकती है।",st_overall:"कुल जोखिम",st_weather:"मौसम",st_water:"पानी",st_geofence:"जियोफेंस",st_fishing:"मछली पकड़ने की उपयुक्तता",st_border:"सीमा",hint_status:"केवल वर्तमान में चयनित / अनुशंसित ज़ोन को दर्शाता है।",agents_title:"एजेंट गतिविधि",agents_hint:"मल्टी-एजेंट रीज़निंग वर्कफ़्लो चलाने के लिए डैशबोर्ड पर ओर्का विश्लेषण दबाएं।",zoneintel_hint:"20 किमी खोज सीमा के भीतर सभी नज़दीकी मछली पकड़ने के ज़ोन, स्वतंत्र रूप से मूल्यांकित।",fetching_live:"🔄 लाइव सैटेलाइट/मौसम डेटा की जांच हो रही है…",compare_hint:"ओर्का असिस्टेंट से स्वतंत्र रूप से तुलना करने के लिए 3 स्थानों तक चुनें।",btn_compare:"चयनित स्थानों की तुलना करें",safety_checklist:"प्रस्थान चेकलिस्ट",btn_route:"सुरक्षित डेमो मार्ग दिखाएं",route_disclaimer:"डेमो मार्ग — आधिकारिक नेविगेशन नहीं है।",alerts_hint:"आपके चयनित स्थान के आसपास के वर्तमान ज़ोन से उत्पन्न।",sources_hint:"यह प्रोटोटाइप वास्तविक डेटा को सिम्युलेटेड/डेमो डेटा से स्पष्ट रूप से अलग करता है।",settings_login:"डेमो लॉगिन",settings_phone:"लॉगिन फ़ोन नंबर",btn_continue:"फ़ोन के साथ जारी रखें",login_note:"प्रोटोटाइप लॉगिन — कोई वास्तविक OTP नहीं भेजा जाता।",btn_save:"सेटिंग्स सहेजें",settings_tracking:"स्थान ट्रैकिंग",settings_live:"लाइव ट्रैकिंग",settings_interval_note:"सक्रिय रहने पर लगभग हर 1 सेकंड में अपडेट होता है, GPS/ब्राउज़र उपलब्धता के अधीन।",settings_border_alerts:"सीमा अलर्ट",settings_border_toggle:"सीमा अलर्ट",settings_voice_toggle:"आवाज़ अलर्ट",settings_thresholds:"चेतावनी दूरी (किमी)",settings_warning:"चेतावनी",settings_highwarning:"उच्च चेतावनी",settings_critical:"गंभीर",settings_family:"आपातकालीन और परिवार संपर्क",settings_family_note:"केवल सिम्युलेटेड अलर्ट लॉग के लिए उपयोग किया जाता है — कोई वास्तविक SMS/कॉल नहीं भेजा जाता।",settings_self_phone:"आपका फ़ोन नंबर",settings_family1:"परिवार संपर्क 1",settings_family2:"परिवार संपर्क 2",settings_country:"देश",settings_state:"राज्य",emg_title:"गंभीर समुद्री घटना — डेमो",emg_loc:"अंतिम ज्ञात स्थान",emg_note:"यह एक सिमुलेशन है। कोई वास्तविक आपातकालीन कॉल नहीं की जाती।",no_location:"कृपया पहले कोई स्थान चुनें या खोजें।",finding_title:"ओर्का निकटवर्ती खोज",reco_title:"🏆 ओर्का सिफारिश",reco_prefix:"सबसे मजबूत विकल्प है — यह मछली पकड़ने की उपयुक्तता को सबसे सुरक्षित समुद्री और सीमा स्थितियों के साथ संतुलित करता है।",reco_border_note:"ओर्का ने अधिक मछली स्कोर वाले ज़ोन को कम प्राथमिकता दी क्योंकि उसमें अधिक मौसम/समुद्री जोखिम है या वह निगरानी वाली सीमा के करीब है — सुरक्षा को पकड़ से पहले तौला जाता है। आगे बढ़ने से पहले वर्तमान स्थितियों और लागू प्रतिबंधों को सत्यापित करें।",good:"अच्छा",changing:"बदल रहा है",highrisk:"उच्च जोखिम",low:"कम",medium:"मध्यम",high:"उच्च",safe:"सुरक्षित",approaching:"निकट आ रहा है",critical:"गंभीर",fish_indicated:"मछली संकेतित",checked:"जांचा गया",zone:"ज़ोन",distance:"दूरी",fish:"मछली",weather:"मौसम",waves:"लहरें",wind:"हवा",sst:"SST",chlorophyll:"क्लोरोफिल",ocean_risk:"महासागर जोखिम",geofence:"जियोफेंस",overall:"कुल",border_distance:"सीमा दूरी",border_risk:"सीमा जोखिम",view_on_map:"मानचित्र पर देखें",compare_max:"आप केवल 3 ज़ोन तक तुलना कर सकते हैं।",compare_pick:"तुलना के लिए कम से कम 2 ज़ोन चुनें।",src_live:"लाइव मानचित्र",src_map_desc:"इंटरैक्टिव मानचित्र प्रदर्शन और टाइलों के लिए उपयोग किया जाता है।",src_geo:"लाइव / API",src_geo_h:"स्थान खोज",src_geo_desc:"किसी भी स्थान के नाम को OpenStreetMap Nominatim के माध्यम से लाइव जियोकोड किया जाता है — यह किसी निश्चित शहर सूची तक सीमित नहीं है।",src_liveapi:"लाइव / API (फ़ॉलबैक: सिम्युलेटेड)",src_proto:"प्रोटोटाइप",src_dataset:"ओर्का मछली पकड़ने की उपयुक्तता",src_dataset_desc:"केवल तब उपयोग किया जाने वाला फ़ॉलबैक/सिम्युलेटेड मछली-उपयुक्तता स्कोर जब सैटेलाइट बैकएंड और Open-Meteo दोनों तक नहीं पहुंचा जा सकता।",src_sim:"सिम्युलेटेड",src_weather:"मौसम और लहरें",src_weather_desc:"हवा, समुद्र सतह तापमान और लहर की ऊंचाई जहां उपलब्ध हो वहां Open-Meteo से लाइव प्राप्त की जाती है; अनुरोध विफल होने पर सिम्युलेटेड डेमो मूल्यों पर वापस चला जाता है।",src_satellite:"लाइव / सैटेलाइट (वैकल्पिक बैकएंड)",src_satellite_h:"मछली पकड़ने की उपयुक्तता — सैटेलाइट टियर",src_satellite_desc:"शामिल पायथन बैकएंड (backend/main.py) चलने पर, मछली-उपयुक्तता वास्तविक सैटेलाइट समुद्र सतह तापमान और क्लोरोफिल-a (NOAA CoastWatch ERDDAP) से गणना की जाती है — वही दो संकेत जिन पर INCOIS की आधिकारिक PFZ सलाह आधारित है। बैकएंड न चलने पर, यह ऊपर दिए गए केवल-मौसम टियर पर, फिर पूरी तरह सिम्युलेटेड टियर पर वापस चला जाता है — कौन सा लागू हुआ यह देखने के लिए हर ज़ोन कार्ड पर SATELLITE / LIVE / SIM बैज जांचें।",src_treaty:"संधि-आधारित (लगभग)",src_boundary:"सीमा डेटा",src_boundary_desc:"भारत-श्रीलंका रेखा 1974 पाक जलडमरूमध्य और 1976 मन्नार की खाड़ी समझौतों के वास्तविक निर्देशांक बिंदुओं का उपयोग करती है। राज्य/केंद्र शासित प्रदेश सीमाएं वास्तविक GADM-आधारित बहुभुजों का उपयोग करती हैं (नीचे राज्य सीमाएं और जल निकाय स्रोत देखें) — पुराना तटीय-अक्षांश सन्निकटन केवल तभी लागू होता है जब वह डेटा लोड न हो। दोनों में से कोई भी आधिकारिक चार्ट का विकल्प नहीं है — हमेशा अधिकारियों से सत्यापित करें।",src_family:"परिवार अलर्ट",src_family_desc:"SMS/कॉल सूचनाएं केवल सिम्युलेटेड हैं। इस प्रोटोटाइप द्वारा कोई वास्तविक संदेश या कॉल नहीं भेजा जाता।",footer:"ओर्का मरीन इंटेलिजेंस — स्टूडेंट इनोवेशन हैकाथॉन 2026 प्रोटोटाइप। कोई वास्तविक समुद्री डेटा उपयोग नहीं किया जाता।",agent_planner:"ओर्का प्लानर एजेंट",agent_weather:"मौसम एजेंट",agent_ocean:"महासागर एजेंट",agent_fishing:"मछली पकड़ने वाला एजेंट",agent_geo:"जियो एजेंट",agent_risk:"जोखिम एजेंट",agent_border:"सीमा एजेंट",agent_safety:"सुरक्षा एजेंट",agent_reasoner:"ओर्का रीज़नर",task_planner:"स्थान, प्रश्न और अनुरोधित समय को समझें।",result_planner:"मछली पकड़ना + सुरक्षा प्रश्न पहचाना गया।",complete:"पूर्ण",checklist_items:["आधिकारिक समुद्री चेतावनियां जांचें","संचार उपकरण साथ रखें","ईंधन स्तर जांचें","बैटरी / पावर बैंक जांचें","नेविगेशन उपकरण जांचें","अनुमत मछली पकड़ने के क्षेत्रों के भीतर रहें"],emg_steps:["वर्तमान स्थान कैप्चर करें","आपातकालीन संदेश तैयार करें","परिवार सूचना (सिम्युलेटेड)","बचाव-चैनल संदेश (सिम्युलेटेड)"],border_hint:"प्रोटोटाइप सीमा डेटा — आधिकारिक नहीं है। सीमा के पास आगे बढ़ने से पहले हमेशा वर्तमान आधिकारिक समुद्री नियमों को सत्यापित करें।",border_click_hint:"आप उस स्थान की सीमा स्थिति जांचने के लिए नीचे दिए गए मानचित्र पर कहीं भी क्लिक कर सकते हैं।",border_status_title:"विवरण",family_log_title:"परिवार अलर्ट लॉग",family_log_hint:"केवल सिम्युलेटेड — इस प्रोटोटाइप से कभी भी कोई वास्तविक SMS या कॉल नहीं भेजा जाता।",chat_ph:"अपना प्रश्न टाइप करें... जैसे मैं सीमा से कितनी दूर हूं?",btn_live_off:"लाइव ट्रैकिंग शुरू करें",btn_live_on:"लाइव ट्रैकिंग रोकें",btn_demo_move:"डेमो: दृष्टिकोण का अनुकरण करें",btn_return:"वापसी मार्ग सुझाएं",live_lat:"अक्षांश",live_lon:"देशांतर",live_acc:"GPS सटीकता",live_update:"अंतिम अद्यतन",current_state:"वर्तमान में स्थित",current_state_line:"📍 वर्तमान में {state} जल/तट में हैं।",current_state_lanka:"📍 वर्तमान में श्रीलंकाई जल में हैं (निगरानी रेखा के पार)।",nearest_state:"निकटतम राज्य सीमा",other_state_boundary:"साथ ही निकट",nearest_maritime:"समुद्री सीमा (श्रीलंका)",status:"स्थिति",direction:"दिशा",crossed_label:"संभावित सीमा उल्लंघन",gps_denied:"स्थान अनुमति उपलब्ध नहीं है। मैन्युअल रूप से एक स्थान चुनें।",hero_safe:"✅ सुरक्षित — आप निकटतम निगरानी वाली सीमा ({name}) से {d} किमी दूर हैं।",hero_approaching:"🟡 निकट आ रहा है — {name} से {d} किमी। अपनी स्थिति पर नज़र रखें।",hero_high:"🟠 उच्च चेतावनी — {name} से केवल {d} किमी। अपने अनुमत मछली पकड़ने के क्षेत्र को सत्यापित करें।",hero_critical:"🔴 गंभीर — {name} से केवल {d} किमी। अपनी स्थिति जांचे बिना आगे न बढ़ें।",hero_crossed:"🚨 संभावित सीमा उल्लंघन — आपकी स्थिति {name} के दूसरी तरफ दिखाई दे रही है (~{d} किमी पार)। रुकें और तुरंत अपनी स्थिति और लागू समुद्री नियमों को सत्यापित करें।",tips_safe:["आप निगरानी वाले क्षेत्र के भीतर सुरक्षित रूप से हैं — सामान्य गतिविधियां जारी रखें।","समुद्र में रहते हुए इस पेज को कभी-कभी दोबारा जांचें।","यहां की सीमा रेखाएं अनुमानित हैं — हमेशा आधिकारिक चार्ट पर भी भरोसा करें।"],tips_approaching:["अपनी वर्तमान दिशा और सीमा से दूरी नोट करें।","निगरानी रेखा के पास रहते समय इस पेज को खुला रखें।","सीमा की ओर और अधिक बहने से बचें।"],tips_high:["अब सुरक्षित पानी की ओर वापस मुड़ने पर विचार करें।","यह एक प्रोटोटाइप अनुमान है — स्थानीय ज्ञान और चार्ट से क्रॉस-चेक करें।","पास की नाव या अपने परिवार के संपर्क को अपनी स्थिति बताएं।"],tips_critical:["रुकें और इस दिशा में आगे न बढ़ें।","तुरंत सुरक्षित पानी की ओर वापस मुड़ें।","अभी अपने परिवार/तटरक्षक संपर्क चैनल का उपयोग करें।"],tips_crossed:["तुरंत नाव रोकें।","जिस रास्ते से आए हैं उसी रास्ते वापस जाएं।","यह प्रोटोटाइप कानूनी स्थिति की पुष्टि नहीं कर सकता — इसे एक गंभीर चेतावनी मानें और अधिकारियों से सत्यापित करें।"],alert_safe:"आप निकटतम निगरानी वाली सीमा ({name}) से {d} किमी दूर हैं। कोई तत्काल चिंता नहीं।",alert_approaching:"आप {name} के निकट आ रहे हैं। दूरी: {d} किमी।",alert_high:"⚠️ आप {name} के {d} किमी के भीतर हैं। अपने अनुमत मछली पकड़ने के क्षेत्र को सत्यापित करें।",alert_critical:"🚨 आप {name} के बहुत करीब ({d} किमी) हैं। अपनी स्थिति और लागू समुद्री नियमों को सत्यापित किए बिना आगे न बढ़ें।",alert_crossed:"🚨 आपकी स्थिति {name} के दूसरी तरफ दिखाई दे रही है (~{d} किमी पार)। रुकें और तुरंत अपनी स्थिति और लागू समुद्री नियमों को सत्यापित करें।",family_alert_border:"मछुआरा एक निगरानी वाली सीमा के पास {tier} स्थिति पर पहुंच गया ({d} किमी)।",family_alert_redzone:"मछुआरे की लाइव स्थिति एक लाल (उच्च जोखिम) मछली पकड़ने वाले ज़ोन के अंदर/निकट है।",family_alert_cyclone:"मछुआरे की लाइव स्थिति एक उच्च-जोखिम मौसम (चक्रवात-प्रकार) क्षेत्र के निकट है।",family_sms:"📨 परिवार संपर्कों को SMS सिम्युलेट किया गया",family_call:"📞 परिवार संपर्कों को कॉल सिम्युलेट किया गया",no_contacts:"कोई परिवार संपर्क नंबर सेट नहीं है — अलर्ट सिमुलेशन सक्षम करने के लिए सेटिंग्स में उन्हें जोड़ें।",return_route_msg:"वर्तमान हवा (~{w} किमी/घं) के आधार पर {z} के पास, सुझाई गई वापसी दिशा {dir} है {label} की ओर, लगभग {d} किमी। वापस लौटने से पहले आधिकारिक समुद्री सलाह पुनः सत्यापित करें।",chat_welcome:"नमस्ते, मैं ओर्का हूं। एक स्थान चुनें और मैं आपको नज़दीकी मछली पकड़ने के ज़ोन और सीमा दूरी के बारे में बता सकता हूं। पूछ कर देखें: 'मैं सीमा से कितनी दूर हूं?'",chat_no_location:"कृपया पहले एक मछुआरे का स्थान चुनें (डैशबोर्ड पर) ताकि मेरे पास विश्लेषण करने के लिए कुछ हो।",chat_border_answer:"आप {label} से लगभग {d} किमी दूर हैं, स्थिति: {status}।",chat_continue_answer:"निगरानी वाली सीमा के पास आपकी लाइव स्थिति वर्तमान में {status} है ({d} किमी)। मैं आगे बढ़ने से पहले अनुमत मछली पकड़ने के क्षेत्र के भीतर रहने और नवीनतम आधिकारिक समुद्री सलाह जांचने की सलाह देता हूं।",chat_safer_answer:"मछली पकड़ने की उपयुक्तता, मौसम और सीमा दूरी को मिलाकर, {zone} फिलहाल सुरक्षित विकल्प लगता है ({score}/100 संयुक्त स्कोर)।",chat_weather_answer:"निकटतम अनुशंसित ज़ोन {zone} फिलहाल {weather} मौसम {wave} मी लहरों और {wind} किमी/घं हवा के साथ दिखा रहा है।",chat_default:"मैं 'मैं सीमा से कितनी दूर हूं', 'क्या मैं मछली पकड़ना जारी रख सकता हूं', या 'कौन सा ज़ोन सुरक्षित है' जैसे सवालों के जवाब दे सकता हूं। इनमें से कोई एक आज़माएं, या ऊपर दिया गया पैनल देखें।",voice_unsupported:"इस ब्राउज़र में वॉइस पहचान समर्थित नहीं है — कृपया अपना प्रश्न टाइप करें।",voice_listening:"🎤 सुन रहा है...",gps_watch_error:"स्थान अनुमति उपलब्ध नहीं है। मैन्युअल रूप से स्थान चुनें या ब्राउज़र अनुमतियां जांचें।",geocode_searching:"⏳",geocode_notfound:"नहीं मिला — कोई नज़दीकी शहर या lat,lon जोड़ी आज़माएं",lbl_radius:"खोज त्रिज्या (किमी)",lbl_zonecount:"ज़ोन की संख्या",zoneintel_hint_dyn:"{km} किमी खोज सीमा के भीतर सभी नज़दीकी मछली पकड़ने के ज़ोन, स्वतंत्र रूप से मूल्यांकित।",legend_ring_warn:"पीली रिंग = सीमा चेतावनी",legend_ring_high:"नारंगी रिंग = उच्च चेतावनी",legend_ring_crit:"लाल रिंग = गंभीर",chat_dash_hint:"इस मानचित्र के बारे में सीधे पूछें — मछली पकड़ने के ज़ोन और सीमा जोखिम एक साथ, जैसे \"मैं सीमा से कितनी दूर हूं?\" या \"कौन सा ज़ोन सुरक्षित है?\"",legend_wind:"हवा प्रवाह (लगभग, ज़ोन हवा जैसा डेटा)",show_wind:"एनिमेटेड हवा प्रवाह दिखाएं (लगभग)",nav_cyclone:"चक्रवात इंटेलिजेंस",cyclone_title:"चक्रवात इंटेलिजेंस",cyclone_hint:"प्रोटोटाइप — यह वास्तविक लाइव हवा + दबाव + लहर डेटा से बना एक डेमो सूत्र और एक सिम्युलेटेड तूफान परिदृश्य है, लाइव चक्रवात ट्रैकर नहीं। भारतीय तटों पर वास्तविक चक्रवात चेतावनियों के लिए, हमेशा सीधे IMD (mausam.imd.gov.in) और INCOIS (incois.gov.in) देखें।",cyclone_heuristic_title:"वर्तमान चक्रवात-जोखिम सूत्र",cyclone_heuristic_sub:"सूत्र स्कोर {index}/100 — {tier}। वास्तविक लाइव हवा + दबाव + लहर डेटा से, सरल सीमाओं के साथ मिलाकर बनाया गया — कोई वास्तविक चक्रवात पहचान प्रणाली नहीं।",cyclone_pressure:"दबाव",cyclone_risk_index:"जोखिम सूचकांक",cyclone_risk_low:"कम",cyclone_risk_elevated:"बढ़ा हुआ",cyclone_risk_watch:"निगरानी",cyclone_risk_high:"उच्च",cyclone_demo_title:"सिम्युलेटेड डेमो सिस्टम: {name}",cyclone_demo_sub:"{cat} · {d} किमी दूर · आगे की गति और ETA सिम्युलेटेड हैं, कोई वास्तविक ट्रैक किया गया तूफान नहीं।",cyclone_category:"श्रेणी",cyclone_forward_speed:"आगे की गति",cyclone_eta:"ETA (सिम्युलेटेड)",cyclone_regen:"डेमो परिदृश्य फिर से बनाएं",cyclone_checklist_title:"चक्रवात सुरक्षा चेकलिस्ट",cyclone_checklist_items:["इस पेज को केवल एक डेमो मानें — वास्तविक चक्रवात चेतावनियों के लिए हमेशा आधिकारिक IMD/INCOIS बुलेटिन देखें","आपातकालीन संपर्क, रेडियो और बैटरी उपकरण चार्ज करके तैयार रखें","यदि आपके क्षेत्र के लिए वास्तविक आधिकारिक चेतावनी जारी की जाती है, तो तुरंत किनारे पर लौटें","खराब मौसम आने से पहले डेक पर ढीले उपकरणों को सुरक्षित करें","अपने निकटतम सुरक्षित बंदरगाह और अपनी वर्तमान स्थिति से उसकी दूरी जानें"],cyclone_official_note:"डेटा स्रोत: Open-Meteo से लाइव हवा/दबाव/लहर (इस ऐप के बाकी हिस्सों की तरह)। नामित तूफान, उसकी श्रेणी, ट्रैक और ETA पूरी तरह डेमो उद्देश्यों के लिए सिम्युलेटेड हैं — वे किसी वास्तविक मौसम प्रणाली का प्रतिनिधित्व नहीं करते। वास्तविक चक्रवात चेतावनियों के लिए हमेशा सीधे IMD और INCOIS देखें।",family_alert_cyclone_demo:"सिम्युलेटेड चक्रवात प्रणाली {name} उच्च/गंभीर डेमो स्तर पर है, मछुआरे की स्थिति से {d} किमी (डेमो परिदृश्य — कोई वास्तविक तूफान नहीं)।",src_cyclone:"सिम्युलेटेड / सूत्र",src_cyclone_h:"चक्रवात इंटेलिजेंस",src_cyclone_desc:"तूफान-जोखिम संख्या वास्तविक लाइव हवा, दबाव और लहर डेटा का उपयोग करती है (इस ऐप के बाकी हिस्सों की तरह वही Open-Meteo स्रोत), एक साधारण सूत्र में संयोजित — कोई वास्तविक चक्रवात पहचान नहीं। दिखाया गया नामित तूफान प्रणाली पूरी तरह सिम्युलेटेड डेमो परिदृश्य है, कोई वास्तविक IMD-ट्रैक किया गया चक्रवात नहीं। वास्तविक चक्रवात चेतावनियों के लिए हमेशा सीधे IMD और INCOIS देखें।",freshness_asof:"{time} तक",nav_tripplanner:"ट्रिप प्लानर",trip_title:"ट्रिप प्लानर",trip_hint:"अपने चयनित स्थान के लिए Open-Meteo के वास्तविक प्रति-घंटा पूर्वानुमान का उपयोग करके पहले से योजना बनाएं। सुरक्षा मूल्यांकन आपकी विंडो के सबसे खराब घंटे का उपयोग करता है, औसत का नहीं। पूर्वानुमान क्षितिज (~15 दिन) से आगे, या पूर्वानुमान प्राप्त न होने पर, यह स्पष्ट रूप से एक सिम्युलेटेड अनुमान पर वापस चला जाता है।",lbl_trip_date:"प्रस्थान तिथि",lbl_trip_time:"प्रस्थान समय",lbl_trip_duration:"यात्रा अवधि (घंटे)",btn_plan_trip:"ट्रिप की योजना बनाएं",trip_pick_datetime:"पहले प्रस्थान की तारीख और समय चुनें।",trip_advisory_go:"✅ आपकी नियोजित विंडो के लिए स्थितियां मछली पकड़ने योग्य लगती हैं",trip_advisory_caution:"🟡 आपकी नियोजित विंडो के दौरान स्थितियां बदल सकती हैं — सावधानी से आगे बढ़ें",trip_advisory_nogo:"🔴 आपकी नियोजित विंडो के दौरान उच्च-जोखिम स्थितियां अपेक्षित हैं — इस यात्रा पर पुनर्विचार करें",trip_window_label:"प्रस्थान {start} → वापसी {end}",trip_worst_hour_note:"यह मूल्यांकन आपकी विंडो के सबसे खराब घंटे का उपयोग करता है, औसत का नहीं — एक यात्रा उतनी ही सुरक्षित है जितना उसका सबसे खराब क्षण। प्रस्थान से पहले हमेशा आधिकारिक IMD समुद्री चेतावनियों से सत्यापित करें।",src_forecast_near:"पूर्वानुमान",src_forecast_far:"पूर्वानुमान (विस्तारित — कम विश्वसनीयता)",harbor_popup_note:"ज्ञात मछली पकड़ने का बंदरगाह (केवल संदर्भ — सामान्य ज्ञान, अनुमानित स्थान)",nearest_harbor_line:"⚓ निकटतम ज्ञात मछली पकड़ने का बंदरगाह: {name} — {d} किमी (केवल संदर्भ, अनुमानित)",show_harbors:"ज्ञात मछली पकड़ने के बंदरगाह दिखाएं",legend_harbor:"ज्ञात मछली पकड़ने का बंदरगाह (संदर्भ)",health_intro:"प्रत्येक बाहरी डेटा स्रोत वर्तमान में वास्तव में सुलभ है या नहीं इसकी लाइव जांच — एक दावा नहीं, प्रत्येक के लिए एक वास्तविक समयबद्ध अनुरोध।",health_check_btn:"अभी डेटा स्रोत जांचें",health_backend:"पायथन बैकएंड",health_weather:"Open-Meteo (मौसम)",health_marine:"Open-Meteo (समुद्री)",health_geocode:"Nominatim (स्थान खोज)",health_gps:"ब्राउज़र GPS",health_network:"नेटवर्क",health_online:"ऑनलाइन",health_offline:"ऑफ़लाइन",health_unreachable:"पहुंच योग्य नहीं",health_asof:"{time} पर जांचा गया",src_geo_bearing:"वास्तविक भूगोल",src_geo_bearing_h:"समुद्राभिमुख उम्मीदवार ज़ोन",src_geo_bearing_desc:"उम्मीदवार ज़ोन दिशाएं अब यह चयनित बिंदु किस भारतीय तट पर है (बंगाल की खाड़ी या अरब सागर) इसके आधार पर एक यथार्थवादी समुद्राभिमुख शंकु तक सीमित हैं, बेतरतीब 0-360° दिशा के बजाय जो कभी-कभी भूमि की ओर वापस इशारा कर सकती थी।",src_harbors:"संदर्भ (लगभग)",src_harbors_h:"ज्ञात मछली पकड़ने के बंदरगाह",src_harbors_desc:"वास्तविक, सार्वजनिक रूप से ज्ञात प्रमुख भारतीय मछली पकड़ने के बंदरगाहों की एक छोटी क्यूरेटेड सूची, मानचित्र मार्करों और एक \"निकटतम बंदरगाह\" तथ्य के रूप में दिखाई गई। सामान्य-ज्ञान अनुमानित स्थान, सर्वेक्षण-ग्रेड निर्देशांक नहीं और लाइव फ़ीड नहीं।"});
/* Part 6 additions: real state boundaries, water bodies, saltwater/freshwater
   classifier and radius auto-expansion — new UI strings, translated into all
   five languages so the "full translation" coverage does not regress. */
Object.assign(I18N.en, {legend_lake:"Lake / reservoir (freshwater)",legend_river:"River (freshwater)",legend_expand:"Yellow dashed = search auto-expanded",show_water:"Show lakes and rivers (freshwater reference)",settings_state_hint:"Selecting a state highlights its full boundary on the Dashboard map.",water_freshwater_lake:"Freshwater — inside {name}",water_freshwater_river:"Freshwater — on the {name}",water_unknown:"On land — no lake/river reference data at this exact point",water_saltwater:"Saltwater — open sea",water_unavailable:"Water type: reference data unavailable",radius_expanded_note:"No strong zones within {req} km — search widened to {used} km (zone count kept at {count}).",src_geodata:"Real, public GADM-derived India state/UT boundaries and Natural Earth lakes & rivers, simplified and clipped to India — community/public-domain geographic datasets, not official survey charts.",src_geodata_h:"State boundaries & water bodies"});
Object.assign(I18N.ta, {legend_lake:"ஏரி / நீர்த்தேக்கம் (நன்னீர்)",legend_river:"ஆறு (நன்னீர்)",legend_expand:"மஞ்சள் புள்ளிக்கோடு = தேடல் தானாக விரிவாக்கப்பட்டது",show_water:"ஏரிகள் மற்றும் ஆறுகளைக் காட்டு (நன்னீர் குறிப்பு)",settings_state_hint:"ஒரு மாநிலத்தைத் தேர்ந்தெடுப்பது டாஷ்போர்டு வரைபடத்தில் அதன் முழு எல்லையையும் தனிப்படுத்திக் காட்டும்.",water_freshwater_lake:"நன்னீர் — {name} க்குள்",water_freshwater_river:"நன்னீர் — {name} இல்",water_unknown:"நிலப்பரப்பில் — இந்தத் துல்லியமான புள்ளியில் ஏரி/ஆறு தரவு இல்லை",water_saltwater:"உவர் நீர் — திறந்த கடல்",water_unavailable:"நீர் வகை: குறிப்புத் தரவு கிடைக்கவில்லை",radius_expanded_note:"{req} கிமீக்குள் வலுவான மண்டலங்கள் இல்லை — தேடல் {used} கிமீ ஆக விரிவாக்கப்பட்டது (மண்டல எண்ணிக்கை {count} ஆக நிலையாக வைக்கப்பட்டது).",src_geodata:"உண்மையான, பொது GADM-அடிப்படையிலான இந்திய மாநில/யூனியன் பிரதேச எல்லைகள் மற்றும் Natural Earth ஏரிகள் & ஆறுகள், எளிமையாக்கப்பட்டு இந்தியாவிற்குள் மட்டுப்படுத்தப்பட்டவை — சமூக/பொது-களப் புவியியல் தரவுத்தொகுப்புகள், அதிகாரப்பூர்வ கணக்கெடுப்பு விவரப்படங்கள் அல்ல.",src_geodata_h:"மாநில எல்லைகள் & நீர்நிலைகள்"});
Object.assign(I18N.te, {legend_lake:"సరస్సు / జలాశయం (మంచినీరు)",legend_river:"నది (మంచినీరు)",legend_expand:"పసుపు డాష్ లైన్ = శోధన స్వయంచాలకంగా విస్తరించబడింది",show_water:"సరస్సులు మరియు నదులను చూపించు (మంచినీటి సూచన)",settings_state_hint:"ఒక రాష్ట్రాన్ని ఎంచుకుంటే డాష్‌బోర్డ్ మ్యాప్‌లో దాని పూర్తి సరిహద్దు హైలైట్ అవుతుంది.",water_freshwater_lake:"మంచినీరు — {name} లోపల",water_freshwater_river:"మంచినీరు — {name} పై",water_unknown:"భూమిపై — ఈ ఖచ్చితమైన బిందువు వద్ద సరస్సు/నది సూచన డేటా లేదు",water_saltwater:"ఉప్పు నీరు — బహిరంగ సముద్రం",water_unavailable:"నీటి రకం: సూచన డేటా అందుబాటులో లేదు",radius_expanded_note:"{req} కి.మీ లోపల బలమైన జోన్‌లు లేవు — శోధన {used} కి.మీకి విస్తరించబడింది (జోన్ల సంఖ్య {count} వద్ద స్థిరంగా ఉంచబడింది).",src_geodata:"నిజమైన, పబ్లిక్ GADM-ఆధారిత భారత రాష్ట్ర/కేంద్రపాలిత ప్రాంతాల సరిహద్దులు మరియు Natural Earth సరస్సులు & నదులు, సరళీకరించి భారతదేశానికి పరిమితం చేయబడ్డాయి — కమ్యూనిటీ/పబ్లిక్-డొమైన్ భౌగోళిక డేటాసెట్‌లు, అధికారిక సర్వే చార్టులు కావు.",src_geodata_h:"రాష్ట్ర సరిహద్దులు & జలవనరులు"});
Object.assign(I18N.kn, {legend_lake:"ಸರೋವರ / ಜಲಾಶಯ (ಸಿಹಿನೀರು)",legend_river:"ನದಿ (ಸಿಹಿನೀರು)",legend_expand:"ಹಳದಿ ಡ್ಯಾಶ್ ರೇಖೆ = ಹುಡುಕಾಟ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ವಿಸ್ತರಿಸಲಾಗಿದೆ",show_water:"ಸರೋವರಗಳು ಮತ್ತು ನದಿಗಳನ್ನು ತೋರಿಸಿ (ಸಿಹಿನೀರಿನ ಉಲ್ಲೇಖ)",settings_state_hint:"ಒಂದು ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದರಿಂದ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ನಕ್ಷೆಯಲ್ಲಿ ಅದರ ಸಂಪೂರ್ಣ ಗಡಿಯನ್ನು ಹೈಲೈಟ್ ಮಾಡುತ್ತದೆ.",water_freshwater_lake:"ಸಿಹಿನೀರು — {name} ಒಳಗೆ",water_freshwater_river:"ಸಿಹಿನೀರು — {name} ಮೇಲೆ",water_unknown:"ಭೂಮಿಯ ಮೇಲೆ — ಈ ನಿಖರವಾದ ಬಿಂದುವಿನಲ್ಲಿ ಸರೋವರ/ನದಿ ಉಲ್ಲೇಖ ಡೇಟಾ ಇಲ್ಲ",water_saltwater:"ಉಪ್ಪುನೀರು — ತೆರೆದ ಸಮುದ್ರ",water_unavailable:"ನೀರಿನ ಪ್ರಕಾರ: ಉಲ್ಲೇಖ ಡೇಟಾ ಲಭ್ಯವಿಲ್ಲ",radius_expanded_note:"{req} ಕಿ.ಮೀ ಒಳಗೆ ಬಲವಾದ ವಲಯಗಳಿಲ್ಲ — ಹುಡುಕಾಟವನ್ನು {used} ಕಿ.ಮೀಗೆ ವಿಸ್ತರಿಸಲಾಗಿದೆ (ವಲಯಗಳ ಸಂಖ್ಯೆ {count} ಗೆ ಸ್ಥಿರವಾಗಿ ಇರಿಸಲಾಗಿದೆ).",src_geodata:"ನೈಜ, ಸಾರ್ವಜನಿಕ GADM-ಆಧಾರಿತ ಭಾರತದ ರಾಜ್ಯ/ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳ ಗಡಿಗಳು ಮತ್ತು Natural Earth ಸರೋವರಗಳು ಮತ್ತು ನದಿಗಳು, ಸರಳೀಕರಿಸಿ ಭಾರತಕ್ಕೆ ಸೀಮಿತಗೊಳಿಸಲಾಗಿದೆ — ಸಮುದಾಯ/ಸಾರ್ವಜನಿಕ-ಡೊಮೇನ್ ಭೌಗೋಳಿಕ ಡೇಟಾಸೆಟ್‌ಗಳು, ಅಧಿಕೃತ ಸಮೀಕ್ಷೆ ನಕ್ಷೆಗಳಲ್ಲ.",src_geodata_h:"ರಾಜ್ಯ ಗಡಿಗಳು ಮತ್ತು ಜಲಮೂಲಗಳು"});
Object.assign(I18N.ml, {legend_lake:"തടാകം / ജലസംഭരണി (ശുദ്ധജലം)",legend_river:"നദി (ശുദ്ധജലം)",legend_expand:"മഞ്ഞ ഡാഷ് വര = തിരയൽ സ്വയമേവ വിപുലീകരിച്ചു",show_water:"തടാകങ്ങളും നദികളും കാണിക്കുക (ശുദ്ധജല റഫറൻസ്)",settings_state_hint:"ഒരു സംസ്ഥാനം തിരഞ്ഞെടുക്കുന്നത് ഡാഷ്ബോർഡ് മാപ്പിൽ അതിന്റെ മുഴുവൻ അതിർത്തിയും ഹൈലൈറ്റ് ചെയ്യും.",water_freshwater_lake:"ശുദ്ധജലം — {name} ന് അകത്ത്",water_freshwater_river:"ശുദ്ധജലം — {name} യിൽ",water_unknown:"കരയിൽ — ഈ കൃത്യമായ പോയിന്റിൽ തടാകം/നദി റഫറൻസ് ഡാറ്റ ഇല്ല",water_saltwater:"ഉപ്പുവെള്ളം — തുറന്ന കടൽ",water_unavailable:"ജല തരം: റഫറൻസ് ഡാറ്റ ലഭ്യമല്ല",radius_expanded_note:"{req} കി.മീ. ഉള്ളിൽ ശക്തമായ സോണുകൾ ഇല്ല — തിരയൽ {used} കി.മീ. ആയി വിപുലീകരിച്ചു (സോൺ എണ്ണം {count} ആയി നിലനിർത്തി).",src_geodata:"യഥാർത്ഥ, പൊതു GADM-അധിഷ്ഠിത ഇന്ത്യൻ സംസ്ഥാന/കേന്ദ്രഭരണ പ്രദേശ അതിരുകളും Natural Earth തടാകങ്ങളും നദികളും, ലളിതമാക്കി ഇന്ത്യയിലേക്ക് പരിമിതപ്പെടുത്തി — കമ്മ്യൂണിറ്റി/പൊതു-ഡൊമെയ്ൻ ഭൂമിശാസ്ത്ര ഡാറ്റാസെറ്റുകൾ, ഔദ്യോഗിക സർവേ ചാർട്ടുകളല്ല.",src_geodata_h:"സംസ്ഥാന അതിരുകളും ജലാശയങ്ങളും"});
Object.assign(I18N.hi, {legend_lake:"झील / जलाशय (मीठा पानी)",legend_river:"नदी (मीठा पानी)",legend_expand:"पीली डैश रेखा = खोज स्वतः विस्तारित",show_water:"झीलें और नदियां दिखाएं (मीठे पानी का संदर्भ)",settings_state_hint:"कोई राज्य चुनने पर डैशबोर्ड मानचित्र पर उसकी पूरी सीमा हाइलाइट होती है।",water_freshwater_lake:"मीठा पानी — {name} के अंदर",water_freshwater_river:"मीठा पानी — {name} पर",water_unknown:"भूमि पर — इस सटीक बिंदु पर कोई झील/नदी संदर्भ डेटा नहीं",water_saltwater:"खारा पानी — खुला समुद्र",water_unavailable:"जल प्रकार: संदर्भ डेटा उपलब्ध नहीं",radius_expanded_note:"{req} किमी के भीतर कोई मजबूत ज़ोन नहीं — खोज को {used} किमी तक बढ़ाया गया (ज़ोन संख्या {count} पर स्थिर रखी गई)।",src_geodata:"वास्तविक, सार्वजनिक GADM-व्युत्पन्न भारत राज्य/केंद्र शासित प्रदेश सीमाएं और Natural Earth झीलें व नदियां, सरल की गई और भारत तक सीमित — सामुदायिक/सार्वजनिक-डोमेन भौगोलिक डेटासेट, आधिकारिक सर्वेक्षण चार्ट नहीं।",src_geodata_h:"राज्य सीमाएं और जल निकाय"});
/* Species reference lookup (Part 6, item 3) strings, all five languages. */
Object.assign(I18N.en, {nav_species:"Species Intelligence",species_title:"Species Intelligence",species_hint:"Historical/regional presence by state and coast, based on general fisheries records — not exact live GPS sightings. Select a species and check it against your currently selected location.",species_select_label:"Species",btn_species_search:"Check This Location",species_no_location:"Select a location on the Dashboard map first.",species_found:"✅ {name} ({sci}) is documented near {state} — regional/seasonal reference, not a live sighting.",species_not_found:"❌ Not there — {name} ({sci}) is not recorded in this dataset for {state}."});
Object.assign(I18N.ta, {nav_species:"இனங்கள் நுண்ணறிவு",species_title:"இனங்கள் நுண்ணறிவு",species_hint:"மாநிலம் மற்றும் கடற்கரையின் அடிப்படையில் வரலாற்று/பிராந்திய இருப்பு, பொது மீன்பிடி பதிவுகளின் அடிப்படையில் — துல்லியமான நேரடி GPS பார்வை அல்ல. ஒரு இனத்தைத் தேர்ந்தெடுத்து அதை உங்கள் தற்போது தேர்ந்தெடுக்கப்பட்ட இடத்திற்கு எதிராக சரிபார்க்கவும்.",species_select_label:"இனம்",btn_species_search:"இந்த இடத்தைச் சரிபார்க்கவும்",species_no_location:"முதலில் டாஷ்போர்டு வரைபடத்தில் ஒரு இடத்தைத் தேர்ந்தெடுக்கவும்.",species_found:"✅ {name} ({sci}) {state} அருகில் பதிவு செய்யப்பட்டுள்ளது — பிராந்திய/பருவகால குறிப்பு, நேரடி பார்வை அல்ல.",species_not_found:"❌ இங்கு இல்லை — {name} ({sci}) இந்த தரவுத்தொகுப்பில் {state}க்கு பதிவு செய்யப்படவில்லை."});
Object.assign(I18N.te, {nav_species:"జాతుల ఇంటెలిజెన్స్",species_title:"జాతుల ఇంటెలిజెన్స్",species_hint:"రాష్ట్రం మరియు తీరం ఆధారంగా చారిత్రక/ప్రాంతీయ ఉనికి, సాధారణ మత్స్య రికార్డుల ఆధారంగా — ఖచ్చితమైన లైవ్ GPS దృశ్యం కాదు. ఒక జాతిని ఎంచుకుని దానిని మీ ప్రస్తుత ఎంచుకున్న స్థానానికి వ్యతిరేకంగా తనిఖీ చేయండి.",species_select_label:"జాతి",btn_species_search:"ఈ స్థానాన్ని తనిఖీ చేయండి",species_no_location:"ముందుగా డాష్‌బోర్డ్ మ్యాప్‌లో ఒక స్థానాన్ని ఎంచుకోండి.",species_found:"✅ {name} ({sci}) {state} సమీపంలో నమోదు చేయబడింది — ప్రాంతీయ/కాలానుగుణ సూచన, లైవ్ దృశ్యం కాదు.",species_not_found:"❌ ఇక్కడ లేదు — {name} ({sci}) ఈ డేటాసెట్‌లో {state} కోసం నమోదు కాలేదు."});
Object.assign(I18N.kn, {nav_species:"ಪ್ರಭೇದ ಇಂಟೆಲಿಜೆನ್ಸ್",species_title:"ಪ್ರಭೇದ ಇಂಟೆಲಿಜೆನ್ಸ್",species_hint:"ರಾಜ್ಯ ಮತ್ತು ಕರಾವಳಿಯ ಪ್ರಕಾರ ಐತಿಹಾಸಿಕ/ಪ್ರಾದೇಶಿಕ ಇರುವಿಕೆ, ಸಾಮಾನ್ಯ ಮೀನುಗಾರಿಕೆ ದಾಖಲೆಗಳ ಆಧಾರದ ಮೇಲೆ — ನಿಖರವಾದ ಲೈವ್ GPS ದೃಶ್ಯವಲ್ಲ. ಒಂದು ಪ್ರಭೇದವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ಅದನ್ನು ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಆಯ್ಕೆಮಾಡಿದ ಸ್ಥಳದ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿ.",species_select_label:"ಪ್ರಭೇದ",btn_species_search:"ಈ ಸ್ಥಳವನ್ನು ಪರಿಶೀಲಿಸಿ",species_no_location:"ಮೊದಲು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ನಕ್ಷೆಯಲ್ಲಿ ಒಂದು ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",species_found:"✅ {name} ({sci}) {state} ಬಳಿ ದಾಖಲಾಗಿದೆ — ಪ್ರಾದೇಶಿಕ/ಋತುಮಾನ ಉಲ್ಲೇಖ, ಲೈವ್ ದೃಶ್ಯವಲ್ಲ.",species_not_found:"❌ ಇಲ್ಲಿ ಇಲ್ಲ — {name} ({sci}) ಈ ಡೇಟಾಸೆಟ್‌ನಲ್ಲಿ {state} ಗಾಗಿ ದಾಖಲಾಗಿಲ್ಲ."});
Object.assign(I18N.ml, {nav_species:"സ്പീഷീസ് ഇന്റലിജൻസ്",species_title:"സ്പീഷീസ് ഇന്റലിജൻസ്",species_hint:"സംസ്ഥാനവും തീരവും അനുസരിച്ചുള്ള ചരിത്രപരമായ/പ്രാദേശിക സാന്നിധ്യം, പൊതു മത്സ്യബന്ധന രേഖകളെ അടിസ്ഥാനമാക്കി — കൃത്യമായ തത്സമയ GPS കാഴ്ചയല്ല. ഒരു സ്പീഷീസ് തിരഞ്ഞെടുത്ത് അത് നിങ്ങളുടെ നിലവിൽ തിരഞ്ഞെടുത്ത സ്ഥലത്തിനെതിരെ പരിശോധിക്കുക.",species_select_label:"സ്പീഷീസ്",btn_species_search:"ഈ സ്ഥലം പരിശോധിക്കുക",species_no_location:"ആദ്യം ഡാഷ്ബോർഡ് മാപ്പിൽ ഒരു സ്ഥലം തിരഞ്ഞെടുക്കുക.",species_found:"✅ {name} ({sci}) {state} ന് സമീപം രേഖപ്പെടുത്തിയിട്ടുണ്ട് — പ്രാദേശിക/സീസണൽ റഫറൻസ്, തത്സമയ കാഴ്ചയല്ല.",species_not_found:"❌ ഇവിടെ ഇല്ല — {name} ({sci}) ഈ ഡാറ്റാസെറ്റിൽ {state} ന് രേഖപ്പെടുത്തിയിട്ടില്ല."});
Object.assign(I18N.hi, {nav_species:"प्रजाति इंटेलिजेंस",species_title:"प्रजाति इंटेलिजेंस",species_hint:"राज्य और तट के अनुसार ऐतिहासिक/क्षेत्रीय उपस्थिति, सामान्य मत्स्य पालन रिकॉर्ड पर आधारित — सटीक लाइव GPS दृश्य नहीं। एक प्रजाति चुनें और उसे अपने वर्तमान चयनित स्थान के विरुद्ध जांचें।",species_select_label:"प्रजाति",btn_species_search:"इस स्थान की जांच करें",species_no_location:"पहले डैशबोर्ड मानचित्र पर एक स्थान चुनें।",species_found:"✅ {name} ({sci}) {state} के पास दर्ज है — क्षेत्रीय/मौसमी संदर्भ, लाइव दृश्य नहीं।",species_not_found:"❌ यहां नहीं — {name} ({sci}) इस डेटासेट में {state} के लिए दर्ज नहीं है।"});
/* De-hackathon-ify user-facing wording: remove demo/prototype/SIH framing, keep safety disclosures honest. */
Object.assign(I18N.en, {"btn_route": "Show Safer Route", "route_disclaimer": "Suggested route only — not official navigation.", "sources_hint": "This page clearly shows which data below is live and which is an estimate.", "src_liveapi": "LIVE / API (fallback: estimated)", "src_proto": "ESTIMATED", "src_dataset_desc": "Fallback fish-suitability score used only when neither the satellite backend nor Open-Meteo are reachable.", "src_sim": "ESTIMATED", "src_weather_desc": "Wind, sea-surface temperature and wave height are fetched live from Open-Meteo where available; falls back to an estimated value if the request fails.", "src_satellite_desc": "When the included Python backend (backend/main.py) is running, fish-suitability is computed from REAL satellite Sea-Surface Temperature and Chlorophyll-a (NOAA CoastWatch ERDDAP) — the same two signals INCOIS's official PFZ advisories are built on. Without the backend running, this falls back to the Weather-only tier above, then to the fully estimated tier — check the SATELLITE / LIVE badge on each zone card to see which applied.", "src_treaty": "TREATY-BASED", "src_realdataset": "REAL DATASET (simplified)", "src_family_desc": "SMS/call notifications are logged only — no real message or call is sent by this app yet.", "footer": "ORCA Marine Intelligence — real-time marine safety assistant for fishermen.", "settings_login": "Login", "login_note": "No OTP is sent yet — phone verification is not yet connected.", "settings_family_note": "Used only for the alert log — no real SMS/call is sent yet.", "emg_title": "Critical Marine Incident", "emg_note": "No emergency call is placed automatically — contact local Coast Guard or emergency services directly.", "emg_steps": ["Capture current location", "Prepare emergency message", "Notify family contacts", "Log rescue-channel message"], "border_hint": "Boundary data for reference — not authoritative. Always verify current official maritime regulations before proceeding near a border.", "family_log_hint": "Alert log only — no real SMS or call is sent from this app yet.", "btn_demo_move": "Simulate Approach", "tips_safe": ["You're comfortably inside the monitored area — continue normal operations.", "Recheck this page occasionally while you're out at sea.", "Boundary lines here are for guidance — always cross-check official charts too."], "tips_high": ["Consider turning back toward safer water now.", "This is an estimate — cross-check with local knowledge and charts.", "Let a nearby boat or your family contact know your position."], "tips_crossed": ["Stop the boat immediately.", "Turn back the way you came.", "This app cannot confirm legal status — treat this as a serious warning and verify with authorities."], "family_sms": "📨 SMS logged for family contacts", "family_call": "📞 Call logged for family contacts", "no_contacts": "No family contact numbers set — add them in Settings to enable alert logging.", "show_wind": "Show animated wind flow", "cyclone_hint": "A heuristic risk estimate from live wind, pressure and wave data — not a live cyclone tracker. For official cyclone warnings on Indian coasts, always check IMD (mausam.imd.gov.in) and INCOIS (incois.gov.in) directly.", "cyclone_no_risk": "🟢 No cyclone risk indicated for the next 2 days at this location.", "src_cyclone": "HEURISTIC", "src_cyclone_desc": "The storm-risk number uses real live wind, pressure and wave data (same Open-Meteo source as elsewhere), combined into a simple heuristic — not real cyclone detection or tracking. Always check IMD and INCOIS directly for official cyclone warnings.", "trip_hint": "Plan ahead using Open-Meteo's real hourly forecast for your selected location. Safety assessment uses the worst hour in your window, not the average. Beyond the forecast horizon (~15 days) or if the forecast can't be fetched, this clearly falls back to an estimate.", "harbor_popup_note": "Known fishing harbor (general knowledge reference — position may not be exact)", "nearest_harbor_line": "⚓ Nearest known fishing harbor: {name} — {d} km (reference only)", "src_harbors": "REFERENCE", "src_harbors_desc": "A small curated list of real, publicly known major Indian fishing harbors, shown as map markers and a \"nearest harbor\" fact. General-knowledge positions, not survey-grade coordinates and not a live feed."});
Object.assign(I18N.ta, {"btn_route": "பாதுகாப்பான பாதையைக் காட்டு", "route_disclaimer": "பரிந்துரைக்கப்பட்ட பாதை மட்டுமே — உத்தியோகபூர்வ வழிசெலுத்தல் அல்ல.", "sources_hint": "கீழே உள்ள எந்த தரவு நேரடி மற்றும் எது மதிப்பீடு என்பதை இந்தப் பக்கம் தெளிவாகக் காட்டுகிறது.", "src_liveapi": "நேரடி / API (பின்மாற்று: மதிப்பிடப்பட்டது)", "src_proto": "மதிப்பிடப்பட்டது", "src_dataset_desc": "செயற்கைக்கோள் பின்தளம் அல்லது Open-Meteo இரண்டையும் அணுக முடியாதபோது மட்டுமே பயன்படுத்தப்படும் பின்மாற்று மீன்பிடி-தகுதி மதிப்பெண்.", "src_sim": "மதிப்பிடப்பட்டது", "src_weather_desc": "காற்று, கடல் மேற்பரப்பு வெப்பநிலை மற்றும் அலை உயரம் கிடைக்கும் இடங்களில் Open-Meteo இலிருந்து நேரடியாகப் பெறப்படுகின்றன; கோரிக்கை தோல்வியடைந்தால் ஒரு மதிப்பிடப்பட்ட மதிப்பிற்குத் திரும்பும்.", "src_satellite_desc": "இணைக்கப்பட்ட பைதான் பின்தளம் (backend/main.py) இயங்கும் போது, மீன்பிடி-தகுதி உண்மையான செயற்கைக்கோள் கடல் மேற்பரப்பு வெப்பநிலை மற்றும் குளோரோஃபில்-a (NOAA CoastWatch ERDDAP) இலிருந்து கணக்கிடப்படுகிறது — INCOIS இன் அதிகாரப்பூர்வ PFZ ஆலோசனைகள் அடிப்படையாகக் கொண்ட அதே இரண்டு சமிக்ஞைகள். பின்தளம் இயங்கவில்லை என்றால், இது மேலே உள்ள வானிலை-மட்டும் அடுக்கிற்கு, பின்னர் முழுமையாக மதிப்பிடப்பட்ட அடுக்கிற்குத் திரும்பும் — எது பொருந்தியது என்பதை அறிய ஒவ்வொரு மண்டல அட்டையிலும் SATELLITE / LIVE பேட்ஜைச் சரிபார்க்கவும்.", "src_treaty": "ஒப்பந்த-அடிப்படையிலான", "src_realdataset": "உண்மையான தரவுத்தொகுப்பு (எளிமையாக்கப்பட்டது)", "src_family_desc": "SMS/அழைப்பு அறிவிப்புகள் பதிவு செய்யப்படுகின்றன மட்டுமே — இந்த ஆப்பால் இப்போது உண்மையான செய்தி அல்லது அழைப்பு அனுப்பப்படவில்லை.", "footer": "ஓர்கா மெரின் இன்டெலிஜென்ஸ் — மீனவர்களுக்கான நேரடி கடல் பாதுகாப்பு உதவியாளர்.", "settings_login": "உள்நுழைவு", "login_note": "இப்போது OTP அனுப்பப்படவில்லை — தொலைபேசி சரிபார்ப்பு இன்னும் இணைக்கப்படவில்லை.", "settings_family_note": "அலர்ட் பதிவுக்கு மட்டுமே பயன்படுத்தப்படுகிறது — இப்போது உண்மையான SMS/அழைப்பு அனுப்பப்படவில்லை.", "emg_title": "கடுமையான கடல் சம்பவம்", "emg_note": "எந்த அவசரகால அழைப்பும் தானாக வைக்கப்படவில்லை — உள்ளூர் கடலோர காவல்படை அல்லது அவசர சேவைகளை நேரடியாகத் தொடர்பு கொள்ளவும்.", "emg_steps": ["தற்போதைய இருப்பிடத்தைப் பிடிக்கவும்", "அவசர செய்தியைத் தயாரிக்கவும்", "குடும்ப தொடர்புகளுக்குத் தெரிவிக்கவும்", "மீட்பு-சேனல் செய்தியைப் பதிவு செய்யவும்"], "border_hint": "குறிப்புக்கான எல்லைத் தரவு — அதிகாரப்பூர்வமானது அல்ல. எல்லைக்கு அருகில் செல்வதற்கு முன் எப்போதும் தற்போதைய அதிகாரப்பூர்வ கடல்சார் விதிமுறைகளைச் சரிபார்க்கவும்.", "family_log_hint": "அலர்ட் பதிவு மட்டுமே — இந்த ஆப்பிலிருந்து இப்போது உண்மையான SMS அல்லது அழைப்பு அனுப்பப்படவில்லை.", "btn_demo_move": "நெருக்கத்தை உருவகப்படுத்து", "tips_safe": ["நீங்கள் கண்காணிக்கப்படும் பகுதிக்குள் பாதுகாப்பாக இருக்கிறீர்கள் — சாதாரண செயல்பாடுகளைத் தொடரவும்.", "கடலில் இருக்கும்போது இந்தப் பக்கத்தை அவ்வப்போது மீண்டும் சரிபார்க்கவும்.", "இங்குள்ள எல்லைக் கோடுகள் வழிகாட்டுதலுக்கானவை — எப்போதும் அதிகாரப்பூர்வ விளக்கப்படங்களையும் நம்பவும்."], "tips_high": ["இப்போது பாதுகாப்பான நீரை நோக்கித் திரும்புவதைக் கருத்தில் கொள்ளுங்கள்.", "இது ஒரு மதிப்பீடு — உள்ளூர் அறிவு மற்றும் விளக்கப்படங்களுடன் குறுக்கு-சரிபார்க்கவும்.", "அருகிலுள்ள படகு அல்லது உங்கள் குடும்ப தொடர்புக்கு உங்கள் நிலையைத் தெரிவிக்கவும்."], "tips_crossed": ["படகை உடனடியாக நிறுத்தவும்.", "நீங்கள் வந்த வழியே திரும்பிச் செல்லவும்.", "இந்த ஆப் சட்ட நிலையை உறுதிப்படுத்த முடியாது — இதை ஒரு தீவிர எச்சரிக்கையாகக் கருதி அதிகாரிகளுடன் சரிபார்க்கவும்."], "family_sms": "📨 குடும்ப தொடர்புகளுக்கு SMS பதிவு செய்யப்பட்டது", "family_call": "📞 குடும்ப தொடர்புகளுக்கு அழைப்பு பதிவு செய்யப்பட்டது", "no_contacts": "குடும்ப தொடர்பு எண்கள் எதுவும் அமைக்கப்படவில்லை — அலர்ட் பதிவை இயக்க அமைப்புகளில் அவற்றைச் சேர்க்கவும்.", "show_wind": "அனிமேஷன் காற்று ஓட்டத்தைக் காட்டு", "cyclone_hint": "நேரடி காற்று, அழுத்தம் மற்றும் அலை தரவிலிருந்து ஒரு மதிப்பிடப்பட்ட ஆபத்து மதிப்பீடு — நேரடி புயல் கண்காணிப்பு அல்ல. இந்திய கடற்கரைகளில் அதிகாரப்பூர்வ புயல் எச்சரிக்கைகளுக்கு, எப்போதும் நேரடியாக IMD (mausam.imd.gov.in) மற்றும் INCOIS (incois.gov.in) ஐப் பார்க்கவும்.", "cyclone_no_risk": "🟢 இந்த இடத்தில் அடுத்த 2 நாட்களுக்கு புயல் ஆபத்து எதுவும் இல்லை.", "src_cyclone": "மதிப்பிடப்பட்ட சூத்திரம்", "src_cyclone_desc": "புயல்-ஆபத்து எண் உண்மையான நேரடி காற்று, அழுத்தம் மற்றும் அலை தரவைப் பயன்படுத்துகிறது (இந்த ஆப்பின் மற்ற பகுதிகளைப் போலவே அதே Open-Meteo மூலம்), ஒரு எளிய சூத்திரமாக இணைக்கப்பட்டுள்ளது — உண்மையான புயல் கண்டறிதல் அல்லது கண்காணிப்பு அல்ல. அதிகாரப்பூர்வ புயல் எச்சரிக்கைகளுக்கு எப்போதும் நேரடியாக IMD மற்றும் INCOIS ஐப் பார்க்கவும்.", "trip_hint": "உங்கள் தேர்ந்தெடுக்கப்பட்ட இடத்திற்கான Open-Meteo இன் உண்மையான மணிநேர முன்னறிவிப்பைப் பயன்படுத்தி முன்கூட்டியே திட்டமிடுங்கள். பாதுகாப்பு மதிப்பீடு உங்கள் சாளரத்தின் மிக மோசமான மணிநேரத்தைப் பயன்படுத்துகிறது, சராசரியை அல்ல. முன்னறிவிப்பு எல்லைக்கு (~15 நாட்கள்) அப்பால், அல்லது முன்னறிவிப்பைப் பெற முடியாவிட்டால், இது தெளிவாக ஒரு மதிப்பீட்டிற்குத் திரும்பும்.", "harbor_popup_note": "அறியப்பட்ட மீன்பிடி துறைமுகம் (பொது அறிவு குறிப்பு — நிலை துல்லியமாக இல்லாமல் இருக்கலாம்)", "nearest_harbor_line": "⚓ அருகிலுள்ள அறியப்பட்ட மீன்பிடி துறைமுகம்: {name} — {d} கிமீ (குறிப்புக்கு மட்டும்)", "src_harbors": "குறிப்பு", "src_harbors_desc": "உண்மையான, பொதுவில் அறியப்பட்ட முக்கிய இந்திய மீன்பிடி துறைமுகங்களின் சிறிய தேர்ந்தெடுக்கப்பட்ட பட்டியல், வரைபட மார்க்கர்களாகவும் \"அருகிலுள்ள துறைமுகம்\" உண்மையாகவும் காட்டப்படுகிறது. பொது-அறிவு நிலைகள், சர்வே-தர ஆயத்தொலைவுகள் அல்ல, நேரடி ஊட்டமும் அல்ல."});
Object.assign(I18N.te, {"btn_route": "సురక్షిత మార్గాన్ని చూపించు", "route_disclaimer": "సూచించిన మార్గం మాత్రమే — అధికారిక నావిగేషన్ కాదు.", "sources_hint": "దిగువ ఏ డేటా లైవ్ మరియు ఏది అంచనా అని ఈ పేజీ స్పష్టంగా చూపిస్తుంది.", "src_liveapi": "లైవ్ / API (ఫాల్‌బ్యాక్: అంచనా వేయబడింది)", "src_proto": "అంచనా వేయబడింది", "src_dataset_desc": "శాటిలైట్ బ్యాకెండ్ లేదా Open-Meteo రెండూ చేరుకోలేనప్పుడు మాత్రమే ఉపయోగించే ఫాల్‌బ్యాక్ చేప-అనుకూలత స్కోరు.", "src_sim": "అంచనా వేయబడింది", "src_weather_desc": "గాలి, సముద్ర ఉపరితల ఉష్ణోగ్రత మరియు అల ఎత్తు అందుబాటులో ఉన్న చోట Open-Meteo నుండి ప్రత్యక్షంగా పొందబడతాయి; అభ్యర్థన విఫలమైతే అంచనా వేసిన విలువకు తిరిగి వెళుతుంది.", "src_satellite_desc": "చేర్చబడిన పైథాన్ బ్యాకెండ్ (backend/main.py) నడుస్తున్నప్పుడు, చేప-అనుకూలత నిజమైన శాటిలైట్ సముద్ర ఉపరితల ఉష్ణోగ్రత మరియు క్లోరోఫిల్-a (NOAA CoastWatch ERDDAP) నుండి లెక్కించబడుతుంది — INCOIS అధికారిక PFZ సలహాలు ఆధారపడిన అదే రెండు సంకేతాలు. బ్యాకెండ్ నడవకపోతే, ఇది పైన ఉన్న వాతావరణం-మాత్రమే స్థాయికి, తర్వాత పూర్తిగా అంచనా వేసిన స్థాయికి తిరిగి వెళుతుంది — ఏది వర్తించిందో చూడటానికి ప్రతి జోన్ కార్డులో SATELLITE / LIVE బ్యాడ్జ్‌ని తనిఖీ చేయండి.", "src_treaty": "ఒప్పంద-ఆధారిత", "src_realdataset": "నిజమైన డేటాసెట్ (సరళీకృతం)", "src_family_desc": "SMS/కాల్ నోటిఫికేషన్‌లు లాగ్ చేయబడతాయి మాత్రమే — ఈ యాప్ ద్వారా ఇప్పుడు నిజమైన సందేశం లేదా కాల్ పంపబడదు.", "footer": "ఓర్కా మెరైన్ ఇంటెలిజెన్స్ — మత్స్యకారుల కోసం రియల్-టైమ్ సముద్ర భద్రతా సహాయకుడు.", "settings_login": "లాగిన్", "login_note": "ఇప్పుడు OTP పంపబడదు — ఫోన్ ధృవీకరణ ఇంకా కనెక్ట్ కాలేదు.", "settings_family_note": "అలర్ట్ లాగ్ కోసం మాత్రమే ఉపయోగించబడుతుంది — ఇప్పుడు నిజమైన SMS/కాల్ పంపబడదు.", "emg_title": "తీవ్రమైన సముద్ర ఘటన", "emg_note": "ఏ అత్యవసర కాల్ స్వయంచాలకంగా చేయబడదు — స్థానిక కోస్ట్ గార్డ్ లేదా అత్యవసర సేవలను నేరుగా సంప్రదించండి.", "emg_steps": ["ప్రస్తుత స్థానాన్ని క్యాప్చర్ చేయండి", "అత్యవసర సందేశాన్ని సిద్ధం చేయండి", "కుటుంబ పరిచయాలకు తెలియజేయండి", "రెస్క్యూ-ఛానల్ సందేశాన్ని లాగ్ చేయండి"], "border_hint": "సూచన కోసం సరిహద్దు డేటా — అధికారికం కాదు. సరిహద్దుకు సమీపంలో వెళ్లే ముందు ఎల్లప్పుడూ ప్రస్తుత అధికారిక సముద్ర నిబంధనలను ధృవీకరించండి.", "family_log_hint": "అలర్ట్ లాగ్ మాత్రమే — ఈ యాప్ నుండి ఇప్పుడు నిజమైన SMS లేదా కాల్ పంపబడదు.", "btn_demo_move": "విధానాన్ని అనుకరించండి", "tips_safe": ["మీరు పర్యవేక్షించబడే ప్రాంతంలో సురక్షితంగా ఉన్నారు — సాధారణ కార్యకలాపాలను కొనసాగించండి.", "మీరు సముద్రంలో ఉన్నప్పుడు ఈ పేజీని అప్పుడప్పుడు మళ్లీ తనిఖీ చేయండి.", "ఇక్కడ సరిహద్దు రేఖలు మార్గదర్శకత్వం కోసం — ఎల్లప్పుడూ అధికారిక చార్టులను కూడా నమ్మండి."], "tips_high": ["ఇప్పుడు సురక్షితమైన నీటి వైపు తిరిగి వెళ్లడాన్ని పరిగణించండి.", "ఇది ఒక అంచనా — స్థానిక జ్ఞానం మరియు చార్టులతో క్రాస్-చెక్ చేయండి.", "సమీప పడవ లేదా మీ కుటుంబ పరిచయానికి మీ స్థానాన్ని తెలియజేయండి."], "tips_crossed": ["వెంటనే పడవను ఆపండి.", "మీరు వచ్చిన మార్గంలోనే తిరిగి వెళ్లండి.", "ఈ యాప్ చట్టపరమైన స్థితిని నిర్ధారించలేదు — దీన్ని తీవ్రమైన హెచ్చరికగా పరిగణించి అధికారులతో ధృవీకరించండి."], "family_sms": "📨 కుటుంబ పరిచయాలకు SMS లాగ్ చేయబడింది", "family_call": "📞 కుటుంబ పరిచయాలకు కాల్ లాగ్ చేయబడింది", "no_contacts": "కుటుంబ పరిచయ నంబర్లు ఏవీ సెట్ చేయలేదు — అలర్ట్ లాగింగ్‌ను ప్రారంభించడానికి సెట్టింగ్‌లలో వాటిని జోడించండి.", "show_wind": "యానిమేటెడ్ గాలి ప్రవాహాన్ని చూపించు", "cyclone_hint": "ప్రత్యక్ష గాలి, పీడనం మరియు అల డేటా నుండి అంచనా వేసిన ప్రమాద స్కోరు — ప్రత్యక్ష తుఫాను ట్రాకర్ కాదు. భారత తీరాలలో అధికారిక తుఫాను హెచ్చరికల కోసం, ఎల్లప్పుడూ నేరుగా IMD (mausam.imd.gov.in) మరియు INCOIS (incois.gov.in) చూడండి.", "cyclone_no_risk": "🟢 ఈ ప్రాంతంలో రాబోయే 2 రోజులకు తుఫాను ప్రమాదం ఏదీ సూచించబడలేదు.", "src_cyclone": "అంచనా సూత్రం", "src_cyclone_desc": "తుఫాను-ప్రమాద సంఖ్య నిజమైన ప్రత్యక్ష గాలి, పీడనం మరియు అల డేటాను ఉపయోగిస్తుంది (ఈ యాప్‌లోని మిగతా భాగాల మాదిరిగానే అదే Open-Meteo మూలం), ఒక సాధారణ సూత్రంలో మిళితం చేయబడింది — నిజమైన తుఫాను గుర్తింపు లేదా ట్రాకింగ్ కాదు. అధికారిక తుఫాను హెచ్చరికల కోసం ఎల్లప్పుడూ నేరుగా IMD మరియు INCOIS చూడండి.", "trip_hint": "మీ ఎంచుకున్న స్థానం కోసం Open-Meteo యొక్క నిజమైన గంటవారీ సూచనను ఉపయోగించి ముందుగా ప్లాన్ చేయండి. భద్రతా అంచనా మీ విండోలో అత్యంత చెడ్డ గంటను ఉపయోగిస్తుంది, సగటును కాదు. సూచన హోరిజోన్ (~15 రోజులు) దాటి, లేదా సూచనను పొందలేకపోతే, ఇది స్పష్టంగా ఒక అంచనాకు తిరిగి వెళుతుంది.", "harbor_popup_note": "తెలిసిన మత్స్య నౌకాశ్రయం (సాధారణ జ్ఞాన సూచన — స్థానం ఖచ్చితమైనది కాకపోవచ్చు)", "nearest_harbor_line": "⚓ సమీప తెలిసిన మత్స్య నౌకాశ్రయం: {name} — {d} కి.మీ (సూచన మాత్రమే)", "src_harbors": "సూచన", "src_harbors_desc": "నిజమైన, బహిరంగంగా తెలిసిన ప్రధాన భారతీయ మత్స్య నౌకాశ్రయాల చిన్న క్యూరేటెడ్ జాబితా, మ్యాప్ మార్కర్‌లుగా మరియు \"సమీప నౌకాశ్రయం\" వాస్తవంగా చూపబడింది. సాధారణ-జ్ఞాన స్థానాలు, సర్వే-గ్రేడ్ కోఆర్డినేట్‌లు కావు మరియు ప్రత్యక్ష ఫీడ్ కాదు."});
Object.assign(I18N.kn, {"btn_route": "ಸುರಕ್ಷಿತ ಮಾರ್ಗವನ್ನು ತೋರಿಸಿ", "route_disclaimer": "ಸೂಚಿಸಲಾದ ಮಾರ್ಗ ಮಾತ್ರ — ಅಧಿಕೃತ ನ್ಯಾವಿಗೇಷನ್ ಅಲ್ಲ.", "sources_hint": "ಕೆಳಗಿನ ಯಾವ ಡೇಟಾ ಲೈವ್ ಮತ್ತು ಯಾವುದು ಅಂದಾಜು ಎಂಬುದನ್ನು ಈ ಪುಟ ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸುತ್ತದೆ.", "src_liveapi": "ಲೈವ್ / API (ಫಾಲ್‌ಬ್ಯಾಕ್: ಅಂದಾಜಿಸಲಾಗಿದೆ)", "src_proto": "ಅಂದಾಜಿಸಲಾಗಿದೆ", "src_dataset_desc": "ಉಪಗ್ರಹ ಬ್ಯಾಕೆಂಡ್ ಅಥವಾ Open-Meteo ಎರಡನ್ನೂ ತಲುಪಲಾಗದಿದ್ದಾಗ ಮಾತ್ರ ಬಳಸಲಾಗುವ ಫಾಲ್‌ಬ್ಯಾಕ್ ಮೀನು-ಸೂಕ್ತತೆ ಸ್ಕೋರ್.", "src_sim": "ಅಂದಾಜಿಸಲಾಗಿದೆ", "src_weather_desc": "ಗಾಳಿ, ಸಮುದ್ರ ಮೇಲ್ಮೈ ತಾಪಮಾನ ಮತ್ತು ಅಲೆಯ ಎತ್ತರ ಲಭ್ಯವಿರುವಲ್ಲಿ Open-Meteo ನಿಂದ ನೇರವಾಗಿ ಪಡೆಯಲಾಗುತ್ತದೆ; ವಿನಂತಿ ವಿಫಲವಾದರೆ ಅಂದಾಜು ಮೌಲ್ಯಕ್ಕೆ ಹಿಂತಿರುಗುತ್ತದೆ.", "src_satellite_desc": "ಸೇರಿಸಲಾದ ಪೈಥಾನ್ ಬ್ಯಾಕೆಂಡ್ (backend/main.py) ಚಾಲನೆಯಲ್ಲಿರುವಾಗ, ಮೀನು-ಸೂಕ್ತತೆಯನ್ನು ನೈಜ ಉಪಗ್ರಹ ಸಮುದ್ರ ಮೇಲ್ಮೈ ತಾಪಮಾನ ಮತ್ತು ಕ್ಲೋರೊಫಿಲ್-a (NOAA CoastWatch ERDDAP) ನಿಂದ ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ — INCOIS ನ ಅಧಿಕೃತ PFZ ಸಲಹೆಗಳು ಆಧಾರಿತವಾಗಿರುವ ಅದೇ ಎರಡು ಸಂಕೇತಗಳು. ಬ್ಯಾಕೆಂಡ್ ಚಾಲನೆಯಲ್ಲಿಲ್ಲದಿದ್ದರೆ, ಇದು ಮೇಲಿನ ಹವಾಮಾನ-ಮಾತ್ರ ಹಂತಕ್ಕೆ, ನಂತರ ಸಂಪೂರ್ಣವಾಗಿ ಅಂದಾಜಿಸಲಾದ ಹಂತಕ್ಕೆ ಹಿಂತಿರುಗುತ್ತದೆ — ಯಾವುದು ಅನ್ವಯಿಸಿತು ಎಂದು ನೋಡಲು ಪ್ರತಿ ವಲಯ ಕಾರ್ಡ್‌ನಲ್ಲಿ SATELLITE / LIVE ಬ್ಯಾಡ್ಜ್ ಪರಿಶೀಲಿಸಿ.", "src_treaty": "ಒಪ್ಪಂದ-ಆಧಾರಿತ", "src_realdataset": "ನೈಜ ಡೇಟಾಸೆಟ್ (ಸರಳೀಕೃತ)", "src_family_desc": "SMS/ಕರೆ ಅಧಿಸೂಚನೆಗಳನ್ನು ದಾಖಲಿಸಲಾಗುತ್ತದೆ ಮಾತ್ರ — ಈ ಆ್ಯಪ್‌ನಿಂದ ಈಗ ನೈಜ ಸಂದೇಶ ಅಥವಾ ಕರೆ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.", "footer": "ಓರ್ಕಾ ಮೆರೈನ್ ಇಂಟೆಲಿಜೆನ್ಸ್ — ಮೀನುಗಾರರಿಗಾಗಿ ರಿಯಲ್-ಟೈಮ್ ಸಮುದ್ರ ಸುರಕ್ಷತಾ ಸಹಾಯಕ.", "settings_login": "ಲಾಗಿನ್", "login_note": "ಈಗ OTP ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ — ಫೋನ್ ಪರಿಶೀಲನೆ ಇನ್ನೂ ಸಂಪರ್ಕಗೊಂಡಿಲ್ಲ.", "settings_family_note": "ಅಲರ್ಟ್ ಲಾಗ್‌ಗಾಗಿ ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ — ಈಗ ನೈಜ SMS/ಕರೆ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.", "emg_title": "ಗಂಭೀರ ಸಮುದ್ರ ಘಟನೆ", "emg_note": "ಯಾವುದೇ ತುರ್ತು ಕರೆಯನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮಾಡಲಾಗುವುದಿಲ್ಲ — ಸ್ಥಳೀಯ ಕೋಸ್ಟ್ ಗಾರ್ಡ್ ಅಥವಾ ತುರ್ತು ಸೇವೆಗಳನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.", "emg_steps": ["ಪ್ರಸ್ತುತ ಸ್ಥಳವನ್ನು ಸೆರೆಹಿಡಿಯಿರಿ", "ತುರ್ತು ಸಂದೇಶವನ್ನು ಸಿದ್ಧಪಡಿಸಿ", "ಕುಟುಂಬ ಸಂಪರ್ಕಗಳಿಗೆ ತಿಳಿಸಿ", "ರಕ್ಷಣಾ-ಚಾನೆಲ್ ಸಂದೇಶವನ್ನು ದಾಖಲಿಸಿ"], "border_hint": "ಉಲ್ಲೇಖಕ್ಕಾಗಿ ಗಡಿ ಡೇಟಾ — ಅಧಿಕೃತವಲ್ಲ. ಗಡಿಯ ಬಳಿ ಮುಂದುವರಿಯುವ ಮೊದಲು ಯಾವಾಗಲೂ ಪ್ರಸ್ತುತ ಅಧಿಕೃತ ಕಡಲ ನಿಯಮಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.", "family_log_hint": "ಅಲರ್ಟ್ ಲಾಗ್ ಮಾತ್ರ — ಈ ಆ್ಯಪ್‌ನಿಂದ ಈಗ ನೈಜ SMS ಅಥವಾ ಕರೆ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.", "btn_demo_move": "ಸಮೀಪಿಸುವಿಕೆಯನ್ನು ಅನುಕರಿಸಿ", "tips_safe": ["ನೀವು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾದ ಪ್ರದೇಶದೊಳಗೆ ಸುರಕ್ಷಿತವಾಗಿದ್ದೀರಿ — ಸಾಮಾನ್ಯ ಚಟುವಟಿಕೆಗಳನ್ನು ಮುಂದುವರಿಸಿ.", "ನೀವು ಸಮುದ್ರದಲ್ಲಿರುವಾಗ ಈ ಪುಟವನ್ನು ಸಾಂದರ್ಭಿಕವಾಗಿ ಮರುಪರಿಶೀಲಿಸಿ.", "ಇಲ್ಲಿನ ಗಡಿ ರೇಖೆಗಳು ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ — ಯಾವಾಗಲೂ ಅಧಿಕೃತ ನಕ್ಷೆಗಳನ್ನೂ ನಂಬಿ."], "tips_high": ["ಈಗ ಸುರಕ್ಷಿತ ನೀರಿನ ಕಡೆಗೆ ಹಿಂತಿರುಗುವುದನ್ನು ಪರಿಗಣಿಸಿ.", "ಇದು ಒಂದು ಅಂದಾಜು — ಸ್ಥಳೀಯ ಜ್ಞಾನ ಮತ್ತು ನಕ್ಷೆಗಳೊಂದಿಗೆ ಕ್ರಾಸ್-ಚೆಕ್ ಮಾಡಿ.", "ಹತ್ತಿರದ ದೋಣಿ ಅಥವಾ ನಿಮ್ಮ ಕುಟುಂಬ ಸಂಪರ್ಕಕ್ಕೆ ನಿಮ್ಮ ಸ್ಥಾನವನ್ನು ತಿಳಿಸಿ."], "tips_crossed": ["ದೋಣಿಯನ್ನು ತಕ್ಷಣ ನಿಲ್ಲಿಸಿ.", "ನೀವು ಬಂದ ದಾರಿಯಲ್ಲೇ ಹಿಂತಿರುಗಿ.", "ಈ ಆ್ಯಪ್ ಕಾನೂನು ಸ್ಥಿತಿಯನ್ನು ದೃಢೀಕರಿಸಲಾಗುವುದಿಲ್ಲ — ಇದನ್ನು ಗಂಭೀರ ಎಚ್ಚರಿಕೆ ಎಂದು ಪರಿಗಣಿಸಿ ಅಧಿಕಾರಿಗಳೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ."], "family_sms": "📨 ಕುಟುಂಬ ಸಂಪರ್ಕಗಳಿಗೆ SMS ದಾಖಲಿಸಲಾಗಿದೆ", "family_call": "📞 ಕುಟುಂಬ ಸಂಪರ್ಕಗಳಿಗೆ ಕರೆ ದಾಖಲಿಸಲಾಗಿದೆ", "no_contacts": "ಯಾವುದೇ ಕುಟುಂಬ ಸಂಪರ್ಕ ಸಂಖ್ಯೆಗಳನ್ನು ಹೊಂದಿಸಲಾಗಿಲ್ಲ — ಅಲರ್ಟ್ ಲಾಗಿಂಗ್ ಸಕ್ರಿಯಗೊಳಿಸಲು ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ಅವುಗಳನ್ನು ಸೇರಿಸಿ.", "show_wind": "ಅನಿಮೇಟೆಡ್ ಗಾಳಿ ಹರಿವನ್ನು ತೋರಿಸಿ", "cyclone_hint": "ನೇರ ಗಾಳಿ, ಒತ್ತಡ ಮತ್ತು ಅಲೆಯ ಡೇಟಾದಿಂದ ಅಂದಾಜಿಸಲಾದ ಅಪಾಯದ ಸ್ಕೋರ್ — ನೇರ ಚಂಡಮಾರುತ ಟ್ರ್ಯಾಕರ್ ಅಲ್ಲ. ಭಾರತೀಯ ಕರಾವಳಿಗಳಲ್ಲಿ ಅಧಿಕೃತ ಚಂಡಮಾರುತ ಎಚ್ಚರಿಕೆಗಳಿಗಾಗಿ, ಯಾವಾಗಲೂ ನೇರವಾಗಿ IMD (mausam.imd.gov.in) ಮತ್ತು INCOIS (incois.gov.in) ಪರಿಶೀಲಿಸಿ.", "cyclone_no_risk": "🟢 ಈ ಸ್ಥಳದಲ್ಲಿ ಮುಂದಿನ 2 ದಿನಗಳಿಗೆ ಯಾವುದೇ ಚಂಡಮಾರುತದ ಅಪಾಯ ಸೂಚಿಸಲಾಗಿಲ್ಲ.", "src_cyclone": "ಅಂದಾಜು ಸೂತ್ರ", "src_cyclone_desc": "ಚಂಡಮಾರುತ-ಅಪಾಯ ಸಂಖ್ಯೆಯು ನೈಜ ನೇರ ಗಾಳಿ, ಒತ್ತಡ ಮತ್ತು ಅಲೆಯ ಡೇಟಾವನ್ನು ಬಳಸುತ್ತದೆ (ಈ ಆ್ಯಪ್‌ನ ಇತರ ಭಾಗಗಳಂತೆಯೇ ಅದೇ Open-Meteo ಮೂಲ), ಒಂದು ಸರಳ ಸೂತ್ರದಲ್ಲಿ ಸಂಯೋಜಿಸಲಾಗಿದೆ — ನೈಜ ಚಂಡಮಾರುತ ಪತ್ತೆ ಅಥವಾ ಟ್ರ್ಯಾಕಿಂಗ್ ಅಲ್ಲ. ಅಧಿಕೃತ ಚಂಡಮಾರುತ ಎಚ್ಚರಿಕೆಗಳಿಗಾಗಿ ಯಾವಾಗಲೂ ನೇರವಾಗಿ IMD ಮತ್ತು INCOIS ಪರಿಶೀಲಿಸಿ.", "trip_hint": "ನಿಮ್ಮ ಆಯ್ಕೆಮಾಡಿದ ಸ್ಥಳಕ್ಕಾಗಿ Open-Meteo ನ ನೈಜ ಗಂಟೆಗೊಮ್ಮೆಯ ಮುನ್ಸೂಚನೆಯನ್ನು ಬಳಸಿ ಮುಂಚಿತವಾಗಿ ಯೋಜಿಸಿ. ಸುರಕ್ಷತಾ ಮೌಲ್ಯಮಾಪನವು ನಿಮ್ಮ ವಿಂಡೋದ ಅತ್ಯಂತ ಕೆಟ್ಟ ಗಂಟೆಯನ್ನು ಬಳಸುತ್ತದೆ, ಸರಾಸರಿಯನ್ನಲ್ಲ. ಮುನ್ಸೂಚನೆ ಹಾರಿಜಾನ್ (~15 ದಿನಗಳು) ಮೀರಿ, ಅಥವಾ ಮುನ್ಸೂಚನೆ ಪಡೆಯಲಾಗದಿದ್ದರೆ, ಇದು ಸ್ಪಷ್ಟವಾಗಿ ಅಂದಾಜಿಗೆ ಹಿಂತಿರುಗುತ್ತದೆ.", "harbor_popup_note": "ತಿಳಿದಿರುವ ಮೀನುಗಾರಿಕೆ ಬಂದರು (ಸಾಮಾನ್ಯ ಜ್ಞಾನ ಉಲ್ಲೇಖ — ಸ್ಥಾನ ನಿಖರವಾಗಿಲ್ಲದಿರಬಹುದು)", "nearest_harbor_line": "⚓ ಹತ್ತಿರದ ತಿಳಿದಿರುವ ಮೀನುಗಾರಿಕೆ ಬಂದರು: {name} — {d} ಕಿ.ಮೀ (ಉಲ್ಲೇಖ ಮಾತ್ರ)", "src_harbors": "ಉಲ್ಲೇಖ", "src_harbors_desc": "ನೈಜ, ಸಾರ್ವಜನಿಕವಾಗಿ ತಿಳಿದಿರುವ ಪ್ರಮುಖ ಭಾರತೀಯ ಮೀನುಗಾರಿಕೆ ಬಂದರುಗಳ ಸಣ್ಣ ಕ್ಯುರೇಟೆಡ್ ಪಟ್ಟಿ, ನಕ್ಷೆ ಮಾರ್ಕರ್‌ಗಳಾಗಿ ಮತ್ತು \"ಹತ್ತಿರದ ಬಂದರು\" ಸತ್ಯವಾಗಿ ತೋರಿಸಲಾಗಿದೆ. ಸಾಮಾನ್ಯ-ಜ್ಞಾನ ಸ್ಥಾನಗಳು, ಸಮೀಕ್ಷೆ-ದರ್ಜೆಯ ನಿರ್ದೇಶಾಂಕಗಳಲ್ಲ ಮತ್ತು ನೇರ ಫೀಡ್ ಅಲ್ಲ."});
Object.assign(I18N.ml, {"btn_route": "സുരക്ഷിത റൂട്ട് കാണിക്കുക", "route_disclaimer": "നിർദ്ദേശിച്ച റൂട്ട് മാത്രം — ഔദ്യോഗിക നാവിഗേഷൻ അല്ല.", "sources_hint": "താഴെയുള്ള ഏത് ഡാറ്റയാണ് തത്സമയവും ഏതാണ് ഒരു എസ്റ്റിമേറ്റും എന്ന് ഈ പേജ് വ്യക്തമായി കാണിക്കുന്നു.", "src_liveapi": "തത്സമയം / API (ഫോൾബാക്ക്: കണക്കാക്കിയത്)", "src_proto": "കണക്കാക്കിയത്", "src_dataset_desc": "സാറ്റലൈറ്റ് ബാക്കെൻഡോ Open-Meteo യോ എത്തിച്ചേരാൻ കഴിയാത്തപ്പോൾ മാത്രം ഉപയോഗിക്കുന്ന ഫോൾബാക്ക് മത്സ്യ-അനുയോജ്യത സ്കോർ.", "src_sim": "കണക്കാക്കിയത്", "src_weather_desc": "കാറ്റ്, കടൽ ഉപരിതല താപനില, തിരമാല ഉയരം എന്നിവ ലഭ്യമായിടത്ത് Open-Meteo യിൽ നിന്ന് തത്സമയം ലഭിക്കുന്നു; അഭ്യർത്ഥന പരാജയപ്പെട്ടാൽ ഒരു കണക്കാക്കിയ മൂല്യത്തിലേക്ക് മടങ്ങുന്നു.", "src_satellite_desc": "ഉൾപ്പെടുത്തിയ പൈത്തൺ ബാക്കെൻഡ് (backend/main.py) പ്രവർത്തിക്കുമ്പോൾ, മത്സ്യ-അനുയോജ്യത യഥാർത്ഥ സാറ്റലൈറ്റ് കടൽ ഉപരിതല താപനിലയിൽ നിന്നും ക്ലോറോഫിൽ-a (NOAA CoastWatch ERDDAP) യിൽ നിന്നും കണക്കാക്കുന്നു — INCOIS ന്റെ ഔദ്യോഗിക PFZ ഉപദേശങ്ങൾ അടിസ്ഥാനമാക്കിയ അതേ രണ്ട് സൂചകങ്ങൾ. ബാക്കെൻഡ് പ്രവർത്തിക്കുന്നില്ലെങ്കിൽ, ഇത് മുകളിലുള്ള കാലാവസ്ഥ-മാത്രം നിലയിലേക്കും പിന്നീട് പൂർണ്ണമായും കണക്കാക്കിയ നിലയിലേക്കും മടങ്ങുന്നു — ഏതാണ് ബാധകമായതെന്ന് കാണാൻ ഓരോ സോൺ കാർഡിലും SATELLITE / LIVE ബാഡ്ജ് പരിശോധിക്കുക.", "src_treaty": "ഉടമ്പടി-അധിഷ്ഠിതം", "src_realdataset": "യഥാർത്ഥ ഡാറ്റാസെറ്റ് (ലളിതമാക്കിയത്)", "src_family_desc": "SMS/കോൾ അറിയിപ്പുകൾ ലോഗ് ചെയ്യുക മാത്രം — ഈ ആപ്പ് ഇപ്പോൾ യഥാർത്ഥ സന്ദേശമോ കോളോ അയക്കുന്നില്ല.", "footer": "ഓർക്ക മറൈൻ ഇന്റലിജൻസ് — മത്സ്യത്തൊഴിലാളികൾക്കായുള്ള തത്സമയ കടൽ സുരക്ഷാ സഹായി.", "settings_login": "ലോഗിൻ", "login_note": "ഇപ്പോൾ OTP അയക്കുന്നില്ല — ഫോൺ പരിശോധന ഇതുവരെ ബന്ധിപ്പിച്ചിട്ടില്ല.", "settings_family_note": "അലേർട്ട് ലോഗിനായി മാത്രം ഉപയോഗിക്കുന്നു — ഇപ്പോൾ യഥാർത്ഥ SMS/കോൾ അയക്കുന്നില്ല.", "emg_title": "ഗുരുതരമായ കടൽ സംഭവം", "emg_note": "അടിയന്തര കോൾ യാന്ത്രികമായി ചെയ്യുന്നില്ല — പ്രാദേശിക കോസ്റ്റ് ഗാർഡ് അല്ലെങ്കിൽ അടിയന്തര സേവനങ്ങളെ നേരിട്ട് ബന്ധപ്പെടുക.", "emg_steps": ["നിലവിലെ സ്ഥാനം പകർത്തുക", "അടിയന്തര സന്ദേശം തയ്യാറാക്കുക", "കുടുംബ ബന്ധങ്ങളെ അറിയിക്കുക", "രക്ഷാ-ചാനൽ സന്ദേശം ലോഗ് ചെയ്യുക"], "border_hint": "റഫറൻസിനുള്ള അതിർത്തി ഡാറ്റ — ഔദ്യോഗികമല്ല. അതിർത്തിക്ക് സമീപം തുടരുന്നതിന് മുമ്പ് എപ്പോഴും നിലവിലെ ഔദ്യോഗിക സമുദ്ര നിയന്ത്രണങ്ങൾ പരിശോധിക്കുക.", "family_log_hint": "അലേർട്ട് ലോഗ് മാത്രം — ഈ ആപ്പിൽ നിന്ന് ഇപ്പോൾ യഥാർത്ഥ SMS അല്ലെങ്കിൽ കോൾ അയക്കുന്നില്ല.", "btn_demo_move": "സമീപനം അനുകരിക്കുക", "tips_safe": ["നിങ്ങൾ നിരീക്ഷിക്കുന്ന പ്രദേശത്തിനുള്ളിൽ സുരക്ഷിതരാണ് — സാധാരണ പ്രവർത്തനങ്ങൾ തുടരുക.", "കടലിലായിരിക്കുമ്പോൾ ഇടയ്ക്കിടെ ഈ പേജ് വീണ്ടും പരിശോധിക്കുക.", "ഇവിടെയുള്ള അതിർത്തി രേഖകൾ മാർഗ്ഗനിർദ്ദേശത്തിനുള്ളതാണ് — എപ്പോഴും ഔദ്യോഗിക ചാർട്ടുകളും വിശ്വസിക്കുക."], "tips_high": ["ഇപ്പോൾ സുരക്ഷിതമായ വെള്ളത്തിലേക്ക് തിരിച്ചുപോകുന്നത് പരിഗണിക്കുക.", "ഇത് ഒരു എസ്റ്റിമേറ്റ് ആണ് — പ്രാദേശിക അറിവും ചാർട്ടുകളും ഉപയോഗിച്ച് ക്രോസ്-ചെക്ക് ചെയ്യുക.", "സമീപത്തുള്ള ബോട്ടിനെയോ നിങ്ങളുടെ കുടുംബ ബന്ധത്തെയോ നിങ്ങളുടെ സ്ഥാനം അറിയിക്കുക."], "tips_crossed": ["ബോട്ട് ഉടൻ നിർത്തുക.", "നിങ്ങൾ വന്ന വഴിയിലൂടെ തിരിച്ചുപോകുക.", "ഈ ആപ്പിന് നിയമപരമായ നില സ്ഥിരീകരിക്കാൻ കഴിയില്ല — ഇത് ഗുരുതരമായ മുന്നറിയിപ്പായി കണക്കാക്കി അധികാരികളുമായി പരിശോധിക്കുക."], "family_sms": "📨 കുടുംബ ബന്ധങ്ങൾക്ക് SMS ലോഗ് ചെയ്തു", "family_call": "📞 കുടുംബ ബന്ധങ്ങൾക്ക് കോൾ ലോഗ് ചെയ്തു", "no_contacts": "കുടുംബ ബന്ധ നമ്പറുകളൊന്നും സജ്ജീകരിച്ചിട്ടില്ല — അലേർട്ട് ലോഗിംഗ് പ്രവർത്തനക്ഷമമാക്കാൻ ക്രമീകരണങ്ങളിൽ അവ ചേർക്കുക.", "show_wind": "ആനിമേറ്റഡ് കാറ്റ് ഒഴുക്ക് കാണിക്കുക", "cyclone_hint": "തത്സമയ കാറ്റ്, മർദ്ദം, തിരമാല ഡാറ്റയിൽ നിന്നുള്ള ഒരു കണക്കാക്കിയ അപകടസാധ്യതാ സ്കോർ — തത്സമയ ചുഴലിക്കാറ്റ് ട്രാക്കർ അല്ല. ഇന്ത്യൻ തീരങ്ങളിലെ ഔദ്യോഗിക ചുഴലിക്കാറ്റ് മുന്നറിയിപ്പുകൾക്ക്, എപ്പോഴും നേരിട്ട് IMD (mausam.imd.gov.in), INCOIS (incois.gov.in) എന്നിവ പരിശോധിക്കുക.", "cyclone_no_risk": "🟢 ഈ സ്ഥലത്ത് അടുത്ത 2 ദിവസത്തേക്ക് ചുഴലിക്കാറ്റ് അപകടസാധ്യതയൊന്നും സൂചിപ്പിക്കുന്നില്ല.", "src_cyclone": "കണക്കാക്കിയ സൂത്രവാക്യം", "src_cyclone_desc": "കൊടുങ്കാറ്റ്-അപകടസാധ്യതാ സംഖ്യ യഥാർത്ഥ തത്സമയ കാറ്റ്, മർദ്ദം, തിരമാല ഡാറ്റ ഉപയോഗിക്കുന്നു (ഈ ആപ്പിന്റെ മറ്റ് ഭാഗങ്ങളിലേതുപോലെ അതേ Open-Meteo ഉറവിടം), ഒരു ലളിതമായ സൂത്രവാക്യത്തിൽ സംയോജിപ്പിച്ചിരിക്കുന്നു — യഥാർത്ഥ ചുഴലിക്കാറ്റ് കണ്ടെത്തലോ ട്രാക്കിംഗോ അല്ല. ഔദ്യോഗിക ചുഴലിക്കാറ്റ് മുന്നറിയിപ്പുകൾക്ക് എപ്പോഴും നേരിട്ട് IMD, INCOIS എന്നിവ പരിശോധിക്കുക.", "trip_hint": "നിങ്ങളുടെ തിരഞ്ഞെടുത്ത സ്ഥലത്തിനായി Open-Meteo യുടെ യഥാർത്ഥ മണിക്കൂർ പ്രവചനം ഉപയോഗിച്ച് മുൻകൂട്ടി പദ്ധതിയിടുക. സുരക്ഷാ വിലയിരുത്തൽ നിങ്ങളുടെ വിൻഡോയിലെ ഏറ്റവും മോശം മണിക്കൂർ ഉപയോഗിക്കുന്നു, ശരാശരിയല്ല. പ്രവചന പരിധി (~15 ദിവസം) കഴിഞ്ഞാൽ, അല്ലെങ്കിൽ പ്രവചനം ലഭിക്കാൻ കഴിയുന്നില്ലെങ്കിൽ, ഇത് വ്യക്തമായി ഒരു എസ്റ്റിമേറ്റിലേക്ക് മടങ്ങുന്നു.", "harbor_popup_note": "അറിയപ്പെടുന്ന മത്സ്യബന്ധന തുറമുഖം (പൊതു അറിവ് റഫറൻസ് — സ്ഥാനം കൃത്യമായിരിക്കണമെന്നില്ല)", "nearest_harbor_line": "⚓ ഏറ്റവും അടുത്തുള്ള അറിയപ്പെടുന്ന മത്സ്യബന്ധന തുറമുഖം: {name} — {d} കി.മീ (റഫറൻസ് മാത്രം)", "src_harbors": "റഫറൻസ്", "src_harbors_desc": "യഥാർത്ഥ, പൊതുവായി അറിയപ്പെടുന്ന പ്രധാന ഇന്ത്യൻ മത്സ്യബന്ധന തുറമുഖങ്ങളുടെ ഒരു ചെറിയ ക്യൂറേറ്റഡ് ലിസ്റ്റ്, മാപ്പ് മാർക്കറുകളായും \"ഏറ്റവും അടുത്ത തുറമുഖം\" വസ്തുതയായും കാണിക്കുന്നു. പൊതു-അറിവ് സ്ഥാനങ്ങൾ, സർവേ-ഗ്രേഡ് കോർഡിനേറ്റുകളല്ല, തത്സമയ ഫീഡും അല്ല."});
Object.assign(I18N.hi, {"btn_route": "सुरक्षित मार्ग दिखाएं", "route_disclaimer": "सुझाया गया मार्ग — आधिकारिक नेविगेशन नहीं है।", "sources_hint": "यह पेज स्पष्ट रूप से दिखाता है कि नीचे कौन सा डेटा लाइव है और कौन सा अनुमानित है।", "src_liveapi": "लाइव / API (फ़ॉलबैक: अनुमानित)", "src_proto": "अनुमानित", "src_dataset_desc": "फ़ॉलबैक मछली-उपयुक्तता स्कोर केवल तब उपयोग किया जाता है जब न तो सैटेलाइट बैकएंड और न ही Open-Meteo तक पहुंचा जा सके।", "src_sim": "अनुमानित", "src_weather_desc": "हवा, समुद्र सतह तापमान और लहर की ऊंचाई जहां उपलब्ध हो वहां Open-Meteo से लाइव प्राप्त की जाती है; अनुरोध विफल होने पर एक अनुमानित मान पर वापस चला जाता है।", "src_satellite_desc": "शामिल पायथन बैकएंड (backend/main.py) चलने पर, मछली-उपयुक्तता वास्तविक सैटेलाइट समुद्र सतह तापमान और क्लोरोफिल-a (NOAA CoastWatch ERDDAP) से गणना की जाती है — वही दो संकेत जिन पर INCOIS की आधिकारिक PFZ सलाह आधारित है। बैकएंड न चलने पर, यह ऊपर दिए गए केवल-मौसम टियर पर, फिर पूरी तरह अनुमानित टियर पर वापस चला जाता है — कौन सा लागू हुआ यह देखने के लिए हर ज़ोन कार्ड पर SATELLITE / LIVE बैज जांचें।", "src_treaty": "संधि-आधारित", "src_realdataset": "वास्तविक डेटासेट (सरलीकृत)", "src_family_desc": "SMS/कॉल सूचनाएं केवल लॉग की जाती हैं — इस ऐप द्वारा अभी कोई वास्तविक संदेश या कॉल नहीं भेजा जाता।", "footer": "ओर्का मरीन इंटेलिजेंस — मछुआरों के लिए रीयल-टाइम समुद्री सुरक्षा सहायक।", "settings_login": "लॉगिन", "login_note": "अभी कोई OTP नहीं भेजा जाता — फ़ोन सत्यापन अभी कनेक्ट नहीं है।", "settings_family_note": "केवल अलर्ट लॉग के लिए उपयोग किया जाता है — अभी कोई वास्तविक SMS/कॉल नहीं भेजा जाता।", "emg_title": "गंभीर समुद्री घटना", "emg_note": "कोई आपातकालीन कॉल स्वतः नहीं की जाती — सीधे स्थानीय तटरक्षक या आपातकालीन सेवाओं से संपर्क करें।", "emg_steps": ["वर्तमान स्थान कैप्चर करें", "आपातकालीन संदेश तैयार करें", "परिवार संपर्कों को सूचित करें", "बचाव-चैनल संदेश लॉग करें"], "border_hint": "संदर्भ के लिए सीमा डेटा — आधिकारिक नहीं है। सीमा के पास आगे बढ़ने से पहले हमेशा वर्तमान आधिकारिक समुद्री नियमों को सत्यापित करें।", "family_log_hint": "केवल अलर्ट लॉग — इस ऐप से अभी कोई वास्तविक SMS या कॉल नहीं भेजा जाता।", "btn_demo_move": "दृष्टिकोण का अनुकरण करें", "tips_safe": ["आप निगरानी वाले क्षेत्र के भीतर सुरक्षित रूप से हैं — सामान्य गतिविधियां जारी रखें।", "समुद्र में रहते हुए इस पेज को कभी-कभी दोबारा जांचें।", "यहां की सीमा रेखाएं मार्गदर्शन के लिए हैं — हमेशा आधिकारिक चार्ट पर भी भरोसा करें।"], "tips_high": ["अब सुरक्षित पानी की ओर वापस मुड़ने पर विचार करें।", "यह एक अनुमान है — स्थानीय ज्ञान और चार्ट से क्रॉस-चेक करें।", "पास की नाव या अपने परिवार के संपर्क को अपनी स्थिति बताएं।"], "tips_crossed": ["रुकें और नाव तुरंत रोकें।", "जिस रास्ते से आए हैं उसी रास्ते वापस जाएं।", "यह ऐप कानूनी स्थिति की पुष्टि नहीं कर सकता — इसे एक गंभीर चेतावनी मानें और अधिकारियों से सत्यापित करें।"], "family_sms": "📨 परिवार संपर्कों के लिए SMS लॉग किया गया", "family_call": "📞 परिवार संपर्कों के लिए कॉल लॉग की गई", "no_contacts": "कोई परिवार संपर्क नंबर सेट नहीं है — अलर्ट लॉगिंग सक्षम करने के लिए सेटिंग्स में उन्हें जोड़ें।", "show_wind": "एनिमेटेड हवा प्रवाह दिखाएं", "cyclone_hint": "लाइव हवा, दबाव और लहर डेटा से एक अनुमानित जोखिम स्कोर — लाइव चक्रवात ट्रैकर नहीं। भारतीय तटों पर आधिकारिक चक्रवात चेतावनियों के लिए, हमेशा सीधे IMD (mausam.imd.gov.in) और INCOIS (incois.gov.in) देखें।", "cyclone_no_risk": "🟢 इस स्थान पर अगले 2 दिनों के लिए कोई चक्रवात जोखिम संकेतित नहीं है।", "src_cyclone": "अनुमानित सूत्र", "src_cyclone_desc": "तूफान-जोखिम संख्या वास्तविक लाइव हवा, दबाव और लहर डेटा का उपयोग करती है (इस ऐप के बाकी हिस्सों की तरह वही Open-Meteo स्रोत), एक साधारण सूत्र में संयोजित — कोई वास्तविक चक्रवात पहचान या ट्रैकिंग नहीं। आधिकारिक चक्रवात चेतावनियों के लिए हमेशा सीधे IMD और INCOIS देखें।", "trip_hint": "अपने चयनित स्थान के लिए Open-Meteo के वास्तविक प्रति-घंटा पूर्वानुमान का उपयोग करके पहले से योजना बनाएं। सुरक्षा मूल्यांकन आपकी विंडो के सबसे खराब घंटे का उपयोग करता है, औसत का नहीं। पूर्वानुमान क्षितिज (~15 दिन) से आगे, या पूर्वानुमान प्राप्त न होने पर, यह स्पष्ट रूप से एक अनुमान पर वापस चला जाता है।", "harbor_popup_note": "ज्ञात मछली पकड़ने का बंदरगाह (सामान्य ज्ञान संदर्भ — स्थिति सटीक नहीं हो सकती)", "nearest_harbor_line": "⚓ निकटतम ज्ञात मछली पकड़ने का बंदरगाह: {name} — {d} किमी (केवल संदर्भ)", "src_harbors": "संदर्भ", "src_harbors_desc": "वास्तविक, सार्वजनिक रूप से ज्ञात प्रमुख भारतीय मछली पकड़ने के बंदरगाहों की एक छोटी क्यूरेटेड सूची, मानचित्र मार्करों और एक \"निकटतम बंदरगाह\" तथ्य के रूप में दिखाई गई। सामान्य-ज्ञान स्थिति, सर्वेक्षण-ग्रेड निर्देशांक नहीं और लाइव फ़ीड नहीं।"});
Object.assign(I18N.en, {"cyclone_checklist_items": ["Always check official IMD (mausam.imd.gov.in) and INCOIS (incois.gov.in) bulletins for real cyclone warnings", "Keep emergency contacts, radio and battery equipment charged and ready", "If an official warning is issued for your area, return to shore immediately", "Secure loose equipment on deck before rough weather arrives", "Know your nearest safe harbor and its distance from your current position"], "cyclone_official_note": "Data source: live wind, pressure and wave readings from Open-Meteo (same as the rest of this app), combined into a simple risk heuristic — not a real cyclone detection or tracking system. For official cyclone warnings on Indian coasts, always check IMD (mausam.imd.gov.in) and INCOIS (incois.gov.in) directly."});
Object.assign(I18N.hi, {"cyclone_checklist_items": ["वास्तविक चक्रवात चेतावनियों के लिए हमेशा आधिकारिक IMD (mausam.imd.gov.in) और INCOIS (incois.gov.in) बुलेटिन देखें", "आपातकालीन संपर्क, रेडियो और बैटरी उपकरण चार्ज और तैयार रखें", "यदि आपके क्षेत्र के लिए आधिकारिक चेतावनी जारी की जाती है, तो तुरंत किनारे पर लौटें", "खराब मौसम आने से पहले डेक पर ढीले उपकरण सुरक्षित करें", "अपने निकटतम सुरक्षित बंदरगाह और अपनी वर्तमान स्थिति से उसकी दूरी जानें"], "cyclone_official_note": "डेटा स्रोत: Open-Meteo से लाइव हवा, दबाव और लहर रीडिंग (इस ऐप के बाकी हिस्सों की तरह), एक सरल जोखिम अनुमान में संयोजित — यह कोई वास्तविक चक्रवात पहचान या ट्रैकिंग सिस्टम नहीं है। भारतीय तटों पर आधिकारिक चक्रवात चेतावनियों के लिए, हमेशा सीधे IMD (mausam.imd.gov.in) और INCOIS (incois.gov.in) देखें।"});
Object.assign(I18N.ta, {"cyclone_checklist_items": ["உண்மையான புயல் எச்சரிக்கைகளுக்கு எப்போதும் அதிகாரப்பூர்வ IMD (mausam.imd.gov.in) மற்றும் INCOIS (incois.gov.in) அறிக்கைகளைச் சரிபார்க்கவும்", "அவசரகால தொடர்புகள், ரேடியோ மற்றும் பேட்டரி உபகரணங்களை சார்ஜ் செய்து தயாராக வைத்திருங்கள்", "உங்கள் பகுதிக்கு அதிகாரப்பூர்வ எச்சரிக்கை வெளியிடப்பட்டால், உடனடியாக கரைக்குத் திரும்பவும்", "கடுமையான வானிலை வருவதற்கு முன் டெக்கில் உள்ள தளர்வான உபகரணங்களை பாதுகாக்கவும்", "உங்கள் அருகிலுள்ள பாதுகாப்பான துறைமுகத்தையும் உங்கள் தற்போதைய இருப்பிடத்திலிருந்து அதன் தூரத்தையும் அறிந்திருங்கள்"], "cyclone_official_note": "தரவு மூலம்: Open-Meteo இலிருந்து நேரடி காற்று, அழுத்தம் மற்றும் அலை அளவீடுகள் (இந்த ஆப்பின் மற்ற பகுதிகளைப் போலவே), ஒரு எளிய ஆபத்து மதிப்பீட்டில் இணைக்கப்பட்டுள்ளது — இது உண்மையான புயல் கண்டறிதல் அல்லது கண்காணிப்பு அமைப்பு அல்ல. இந்திய கடற்கரைகளில் அதிகாரப்பூர்வ புயல் எச்சரிக்கைகளுக்கு, எப்போதும் நேரடியாக IMD (mausam.imd.gov.in) மற்றும் INCOIS (incois.gov.in) ஐப் பார்க்கவும்."});
Object.assign(I18N.te, {"cyclone_checklist_items": ["నిజమైన తుఫాను హెచ్చరికల కోసం ఎల్లప్పుడూ అధికారిక IMD (mausam.imd.gov.in) మరియు INCOIS (incois.gov.in) బులెటిన్‌లను తనిఖీ చేయండి", "అత్యవసర సంప్రదింపులు, రేడియో మరియు బ్యాటరీ పరికరాలను ఛార్జ్ చేసి సిద్ధంగా ఉంచుకోండి", "మీ ప్రాంతానికి అధికారిక హెచ్చరిక జారీ చేయబడితే, వెంటనే ఒడ్డుకు తిరిగి వెళ్లండి", "తీవ్ర వాతావరణం రాకముందే డెక్‌పై వదులుగా ఉన్న పరికరాలను భద్రపరచండి", "మీకు సమీపంలోని సురక్షిత రేవు మరియు మీ ప్రస్తుత స్థానం నుండి దాని దూరాన్ని తెలుసుకోండి"], "cyclone_official_note": "డేటా మూలం: Open-Meteo నుండి ప్రత్యక్ష గాలి, పీడనం మరియు అల ఎత్తు రీడింగులు (ఈ యాప్‌లోని మిగతా భాగాల మాదిరిగానే), ఒక సాధారణ ప్రమాద అంచనాలో మిళితం చేయబడ్డాయి — ఇది నిజమైన తుఫాను గుర్తింపు లేదా ట్రాకింగ్ వ్యవస్థ కాదు. భారత తీరాలలో అధికారిక తుఫాను హెచ్చరికల కోసం, ఎల్లప్పుడూ నేరుగా IMD (mausam.imd.gov.in), INCOIS (incois.gov.in) చూడండి."});
Object.assign(I18N.kn, {"cyclone_checklist_items": ["ನಿಜವಾದ ಚಂಡಮಾರುತ ಎಚ್ಚರಿಕೆಗಳಿಗಾಗಿ ಯಾವಾಗಲೂ ಅಧಿಕೃತ IMD (mausam.imd.gov.in) ಮತ್ತು INCOIS (incois.gov.in) ಬುಲೆಟಿನ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ", "ತುರ್ತು ಸಂಪರ್ಕಗಳು, ರೇಡಿಯೋ ಮತ್ತು ಬ್ಯಾಟರಿ ಸಾಧನಗಳನ್ನು ಚಾರ್ಜ್ ಮಾಡಿ ಸಿದ್ಧವಾಗಿಡಿ", "ನಿಮ್ಮ ಪ್ರದೇಶಕ್ಕೆ ಅಧಿಕೃತ ಎಚ್ಚರಿಕೆ ನೀಡಿದರೆ, ತಕ್ಷಣ ದಡಕ್ಕೆ ಹಿಂತಿರುಗಿ", "ಕೆಟ್ಟ ಹವಾಮಾನ ಬರುವ ಮೊದಲು ಡೆಕ್‌ನಲ್ಲಿರುವ ಸಡಿಲ ಸಾಧನಗಳನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಿ", "ನಿಮ್ಮ ಹತ್ತಿರದ ಸುರಕ್ಷಿತ ಬಂದರು ಮತ್ತು ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸ್ಥಳದಿಂದ ಅದರ ದೂರವನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ"], "cyclone_official_note": "ಡೇಟಾ ಮೂಲ: Open-Meteo ನಿಂದ ನೇರ ಗಾಳಿ, ಒತ್ತಡ ಮತ್ತು ಅಲೆಯ ಮಾಪನಗಳು (ಈ ಆ್ಯಪ್‌ನ ಇತರ ಭಾಗಗಳಂತೆಯೇ), ಸರಳ ಅಪಾಯದ ಅಂದಾಜಿನಲ್ಲಿ ಸಂಯೋಜಿಸಲಾಗಿದೆ — ಇದು ನಿಜವಾದ ಚಂಡಮಾರುತ ಪತ್ತೆ ಅಥವಾ ಟ್ರ್ಯಾಕಿಂಗ್ ವ್ಯವಸ್ಥೆ ಅಲ್ಲ. ಭಾರತೀಯ ಕರಾವಳಿಗಳಲ್ಲಿ ಅಧಿಕೃತ ಚಂಡಮಾರುತ ಎಚ್ಚರಿಕೆಗಳಿಗಾಗಿ, ಯಾವಾಗಲೂ ನೇರವಾಗಿ IMD (mausam.imd.gov.in), INCOIS (incois.gov.in) ಪರಿಶೀಲಿಸಿ."});
Object.assign(I18N.ml, {"cyclone_checklist_items": ["യഥാർത്ഥ ചുഴലിക്കാറ്റ് മുന്നറിയിപ്പുകൾക്കായി എപ്പോഴും ഔദ്യോഗിക IMD (mausam.imd.gov.in), INCOIS (incois.gov.in) ബുള്ളറ്റിനുകൾ പരിശോധിക്കുക", "അടിയന്തര ബന്ധങ്ങൾ, റേഡിയോ, ബാറ്ററി ഉപകരണങ്ങൾ ചാർജ്ജ് ചെയ്ത് തയ്യാറാക്കി വയ്ക്കുക", "നിങ്ങളുടെ പ്രദേശത്തിന് ഔദ്യോഗിക മുന്നറിയിപ്പ് നൽകിയാൽ, ഉടൻ കരയിലേക്ക് മടങ്ങുക", "മോശം കാലാവസ്ഥ എത്തുന്നതിന് മുമ്പ് ഡെക്കിലെ അയഞ്ഞ ഉപകരണങ്ങൾ സുരക്ഷിതമാക്കുക", "നിങ്ങളുടെ ഏറ്റവും അടുത്തുള്ള സുരക്ഷിത തുറമുഖവും നിലവിലെ സ്ഥാനത്തുനിന്ന് അതിന്റെ ദൂരവും അറിഞ്ഞിരിക്കുക"], "cyclone_official_note": "ഡാറ്റ ഉറവിടം: Open-Meteo യിൽ നിന്നുള്ള തത്സമയ കാറ്റ്, മർദ്ദം, തിരമാല അളവുകൾ (ഈ ആപ്പിന്റെ മറ്റ് ഭാഗങ്ങളെപ്പോലെ), ഒരു ലളിതമായ അപകടസാധ്യതാ കണക്കുകൂട്ടലിൽ സംയോജിപ്പിച്ചിരിക്കുന്നു — ഇത് യഥാർത്ഥ ചുഴലിക്കാറ്റ് കണ്ടെത്തലോ ട്രാക്കിംഗോ അല്ല. ഇന്ത്യൻ തീരങ്ങളിലെ ഔദ്യോഗിക ചുഴലിക്കാറ്റ് മുന്നറിയിപ്പുകൾക്ക്, എപ്പോഴും നേരിട്ട് IMD (mausam.imd.gov.in), INCOIS (incois.gov.in) പരിശോധിക്കുക."});
Object.assign(I18N.en, {"family_alert_cyclone_risk": "⚠️ Elevated cyclone-risk heuristic ({index}/100) for your current position — check official IMD/INCOIS bulletins and consider your options."});
Object.assign(I18N.hi, {"family_alert_cyclone_risk": "⚠️ आपकी वर्तमान स्थिति के लिए उच्च चक्रवात-जोखिम अनुमान ({index}/100) — आधिकारिक IMD/INCOIS बुलेटिन देखें और अपने विकल्पों पर विचार करें।"});
Object.assign(I18N.ta, {"family_alert_cyclone_risk": "⚠️ உங்கள் தற்போதைய இருப்பிடத்திற்கான உயர்ந்த புயல்-ஆபத்து மதிப்பீடு ({index}/100) — அதிகாரப்பூர்வ IMD/INCOIS அறிக்கைகளைச் சரிபார்த்து உங்கள் விருப்பங்களைக் கவனியுங்கள்."});
Object.assign(I18N.te, {"family_alert_cyclone_risk": "⚠️ మీ ప్రస్తుత స్థానానికి అధిక తుఫాను-ప్రమాద అంచనా ({index}/100) — అధికారిక IMD/INCOIS బులెటిన్‌లను తనిఖీ చేసి మీ ఎంపికలను పరిగణించండి."});
Object.assign(I18N.kn, {"family_alert_cyclone_risk": "⚠️ ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸ್ಥಳಕ್ಕೆ ಹೆಚ್ಚಿನ ಚಂಡಮಾರುತ-ಅಪಾಯ ಅಂದಾಜು ({index}/100) — ಅಧಿಕೃತ IMD/INCOIS ಬುಲೆಟಿನ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಆಯ್ಕೆಗಳನ್ನು ಪರಿಗಣಿಸಿ."});
Object.assign(I18N.ml, {"family_alert_cyclone_risk": "⚠️ നിങ്ങളുടെ നിലവിലെ സ്ഥാനത്തിന് ഉയർന്ന ചുഴലിക്കാറ്റ്-അപകടസാധ്യതാ കണക്ക് ({index}/100) — ഔദ്യോഗിക IMD/INCOIS ബുള്ളറ്റിനുകൾ പരിശോധിച്ച് നിങ്ങളുടെ ഓപ്ഷനുകൾ പരിഗണിക്കുക."});
Object.assign(I18N.en, {"compare_add": "Compare"});
Object.assign(I18N.hi, {"compare_add": "तुलना करें"});
Object.assign(I18N.ta, {"compare_add": "ஒப்பிடு"});
Object.assign(I18N.te, {"compare_add": "పోల్చండి"});
Object.assign(I18N.kn, {"compare_add": "ಹೋಲಿಸಿ"});
Object.assign(I18N.ml, {"compare_add": "താരതമ്യം ചെയ്യുക"});
Object.assign(I18N.en, {"settings_your_name": "Your name", "ph_your_name": "e.g. Ravi Kumar", "settings_family1_name": "Family contact 1 — name", "settings_family2_name": "Family contact 2 — name", "ph_contact_name": "e.g. Father", "settings_family1": "Family contact 1 — phone", "settings_family2": "Family contact 2 — phone", "settings_family_note": "Saved on this device only — no real SMS/call is sent yet.", "family_calling": "Calling {name}", "family_contact": "Family contact", "chat_name_prefix": "{name}, "});
Object.assign(I18N.hi, {"settings_your_name": "आपका नाम", "ph_your_name": "जैसे रवि कुमार", "settings_family1_name": "पारिवारिक संपर्क 1 — नाम", "settings_family2_name": "पारिवारिक संपर्क 2 — नाम", "ph_contact_name": "जैसे पिताजी", "settings_family1": "पारिवारिक संपर्क 1 — फ़ोन", "settings_family2": "पारिवारिक संपर्क 2 — फ़ोन", "settings_family_note": "केवल इस डिवाइस पर सहेजा गया — अभी तक कोई वास्तविक SMS/कॉल नहीं भेजा जाता।", "family_calling": "{name} को कॉल किया जा रहा है", "family_contact": "पारिवारिक संपर्क", "chat_name_prefix": "{name}, "});
Object.assign(I18N.ta, {"settings_your_name": "உங்கள் பெயர்", "ph_your_name": "எ.கா. ரவி குமார்", "settings_family1_name": "குடும்ப தொடர்பு 1 — பெயர்", "settings_family2_name": "குடும்ப தொடர்பு 2 — பெயர்", "ph_contact_name": "எ.கா. அப்பா", "settings_family1": "குடும்ப தொடர்பு 1 — தொலைபேசி", "settings_family2": "குடும்ப தொடர்பு 2 — தொலைபேசி", "settings_family_note": "இந்த சாதனத்தில் மட்டும் சேமிக்கப்பட்டுள்ளது — இன்னும் உண்மையான SMS/அழைப்பு அனுப்பப்படவில்லை.", "family_calling": "{name} க்கு அழைக்கிறது", "family_contact": "குடும்ப தொடர்பு", "chat_name_prefix": "{name}, "});
Object.assign(I18N.te, {"settings_your_name": "మీ పేరు", "ph_your_name": "ఉదా. రవి కుమార్", "settings_family1_name": "కుటుంబ సంప్రదింపు 1 — పేరు", "settings_family2_name": "కుటుంబ సంప్రదింపు 2 — పేరు", "ph_contact_name": "ఉదా. నాన్న", "settings_family1": "కుటుంబ సంప్రదింపు 1 — ఫోన్", "settings_family2": "కుటుంబ సంప్రదింపు 2 — ఫోన్", "settings_family_note": "ఈ పరికరంలో మాత్రమే సేవ్ చేయబడింది — ఇంకా నిజమైన SMS/కాల్ పంపబడదు.", "family_calling": "{name} కి కాల్ చేస్తోంది", "family_contact": "కుటుంబ సంప్రదింపు", "chat_name_prefix": "{name}, "});
Object.assign(I18N.kn, {"settings_your_name": "ನಿಮ್ಮ ಹೆಸರು", "ph_your_name": "ಉದಾ. ರವಿ ಕುಮಾರ್", "settings_family1_name": "ಕುಟುಂಬ ಸಂಪರ್ಕ 1 — ಹೆಸರು", "settings_family2_name": "ಕುಟುಂಬ ಸಂಪರ್ಕ 2 — ಹೆಸರು", "ph_contact_name": "ಉದಾ. ತಂದೆ", "settings_family1": "ಕುಟುಂಬ ಸಂಪರ್ಕ 1 — ಫೋನ್", "settings_family2": "ಕುಟುಂಬ ಸಂಪರ್ಕ 2 — ಫೋನ್", "settings_family_note": "ಈ ಸಾಧನದಲ್ಲಿ ಮಾತ್ರ ಉಳಿಸಲಾಗಿದೆ — ಇನ್ನೂ ನಿಜವಾದ SMS/ಕರೆ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.", "family_calling": "{name} ಗೆ ಕರೆ ಮಾಡಲಾಗುತ್ತಿದೆ", "family_contact": "ಕುಟುಂಬ ಸಂಪರ್ಕ", "chat_name_prefix": "{name}, "});
Object.assign(I18N.ml, {"settings_your_name": "നിങ്ങളുടെ പേര്", "ph_your_name": "ഉദാ. രവി കുമാർ", "settings_family1_name": "കുടുംബ ബന്ധം 1 — പേര്", "settings_family2_name": "കുടുംബ ബന്ധം 2 — പേര്", "ph_contact_name": "ഉദാ. അച്ഛൻ", "settings_family1": "കുടുംബ ബന്ധം 1 — ഫോൺ", "settings_family2": "കുടുംബ ബന്ധം 2 — ഫോൺ", "settings_family_note": "ഈ ഉപകരണത്തിൽ മാത്രം സേവ് ചെയ്തിരിക്കുന്നു — ഇതുവരെ യഥാർത്ഥ SMS/കോൾ അയക്കുന്നില്ല.", "family_calling": "{name} യെ വിളിക്കുന്നു", "family_contact": "കുടുംബ ബന്ധം", "chat_name_prefix": "{name}, "});
Object.assign(I18N.en, {"emg_reason": "Simulate Emergency pressed", "emg_calling_title": "Notifying:"});
Object.assign(I18N.hi, {"emg_reason": "आपातकालीन सिमुलेशन दबाया गया", "emg_calling_title": "सूचित किया जा रहा है:"});
Object.assign(I18N.ta, {"emg_reason": "அவசரகால சிமுலேஷன் அழுத்தப்பட்டது", "emg_calling_title": "தெரிவிக்கப்படுகிறது:"});
Object.assign(I18N.te, {"emg_reason": "అత్యవసర సిమ్యులేషన్ నొక్కబడింది", "emg_calling_title": "తెలియజేయబడుతోంది:"});
Object.assign(I18N.kn, {"emg_reason": "ತುರ್ತು ಸಿಮ್ಯುಲೇಶನ್ ಒತ್ತಲಾಗಿದೆ", "emg_calling_title": "ತಿಳಿಸಲಾಗುತ್ತಿದೆ:"});
Object.assign(I18N.ml, {"emg_reason": "എമർജൻസി സിമുലേഷൻ അമർത്തി", "emg_calling_title": "അറിയിക്കുന്നു:"});
Object.assign(I18N.en, {"hint_pin_mode": "Tap \"Add Pin\" then tap the map to mark multiple spots for comparison.", "btn_pin_mode": "Add Pin", "btn_pin_mode_on": "Tap Map to Pin", "pincompare_title": "Pinned Map Locations", "pincompare_hint": "On the Dashboard, tap \"Add Pin\" and mark several spots on the map — they'll stack up here so you can search, pick, and compare them.", "ph_pin_search": "Search pinned locations...", "btn_compare_pins": "Compare Pinned Locations", "pin_empty": "No pinned locations yet. Go to the Dashboard and tap \"Add Pin\".", "pin_limit": "You can pin up to 8 locations at a time.", "out_of_range": "This point is far out at sea, well beyond typical coastal fishing range — pick a spot closer to shore for zone data."});
Object.assign(I18N.hi, {"hint_pin_mode": "\"पिन जोड़ें\" दबाएं फिर तुलना के लिए नक्शे पर कई जगहें चिह्नित करें।", "btn_pin_mode": "पिन जोड़ें", "btn_pin_mode_on": "नक्शे पर टैप करें", "pincompare_title": "पिन की गई नक्शा जगहें", "pincompare_hint": "डैशबोर्ड पर \"पिन जोड़ें\" दबाएं और नक्शे पर कई जगहें चिह्नित करें — वे यहां जमा होंगी ताकि आप खोज, चयन और तुलना कर सकें।", "ph_pin_search": "पिन की गई जगहें खोजें...", "btn_compare_pins": "पिन की गई जगहों की तुलना करें", "pin_empty": "अभी तक कोई जगह पिन नहीं की गई। डैशबोर्ड पर जाएं और \"पिन जोड़ें\" दबाएं।", "pin_limit": "आप एक बार में 8 जगहों तक पिन कर सकते हैं।", "out_of_range": "यह जगह समुद्र में बहुत दूर है, सामान्य तटीय मछली पकड़ने की सीमा से बाहर — कृपया तट के नज़दीक कोई जगह चुनें।"});
Object.assign(I18N.ta, {"hint_pin_mode": "\"பின் சேர்\" அழுத்தி, ஒப்பிட பல இடங்களை வரைபடத்தில் குறிக்கவும்.", "btn_pin_mode": "பின் சேர்", "btn_pin_mode_on": "வரைபடத்தில் தட்டவும்", "pincompare_title": "பின் செய்யப்பட்ட இடங்கள்", "pincompare_hint": "டாஷ்போர்டில் \"பின் சேர்\" அழுத்தி வரைபடத்தில் பல இடங்களைக் குறிக்கவும் — அவை இங்கே சேரும், நீங்கள் தேடலாம், தேர்ந்தெடுக்கலாம், ஒப்பிடலாம்.", "ph_pin_search": "பின் செய்யப்பட்ட இடங்களைத் தேடு...", "btn_compare_pins": "பின் செய்யப்பட்ட இடங்களை ஒப்பிடு", "pin_empty": "இன்னும் எந்த இடமும் பின் செய்யப்படவில்லை. டாஷ்போர்டுக்குச் சென்று \"பின் சேர்\" அழுத்தவும்.", "pin_limit": "ஒரு முறையில் 8 இடங்கள் வரை பின் செய்யலாம்.", "out_of_range": "இந்த இடம் கடலில் மிகவும் தொலைவில் உள்ளது, வழக்கமான கடலோர மீன்பிடி எல்லைக்கு அப்பால் — கரைக்கு அருகில் ஒரு இடத்தைத் தேர்ந்தெடுக்கவும்."});
Object.assign(I18N.te, {"hint_pin_mode": "\"పిన్ జోడించు\" నొక్కి, పోల్చడానికి మ్యాప్‌లో అనేక ప్రదేశాలను గుర్తించండి.", "btn_pin_mode": "పిన్ జోడించు", "btn_pin_mode_on": "మ్యాప్‌పై నొక్కండి", "pincompare_title": "పిన్ చేసిన మ్యాప్ ప్రదేశాలు", "pincompare_hint": "డాష్‌బోర్డ్‌లో \"పిన్ జోడించు\" నొక్కి మ్యాప్‌లో అనేక ప్రదేశాలను గుర్తించండి — అవి ఇక్కడ చేరతాయి, మీరు వెతకవచ్చు, ఎంచుకోవచ్చు, పోల్చవచ్చు.", "ph_pin_search": "పిన్ చేసిన ప్రదేశాలను వెతకండి...", "btn_compare_pins": "పిన్ చేసిన ప్రదేశాలను పోల్చండి", "pin_empty": "ఇంకా ఏ ప్రదేశం పిన్ చేయలేదు. డాష్‌బోర్డ్‌కు వెళ్లి \"పిన్ జోడించు\" నొక్కండి.", "pin_limit": "మీరు ఒకేసారి 8 ప్రదేశాల వరకు పిన్ చేయవచ్చు.", "out_of_range": "ఈ ప్రదేశం సముద్రంలో చాలా దూరంగా ఉంది, సాధారణ తీర మత్స్య పరిధికి మించి — దయచేసి తీరానికి దగ్గరగా ఉన్న ప్రదేశాన్ని ఎంచుకోండి."});
Object.assign(I18N.kn, {"hint_pin_mode": "\"ಪಿನ್ ಸೇರಿಸಿ\" ಒತ್ತಿ, ಹೋಲಿಸಲು ನಕ್ಷೆಯಲ್ಲಿ ಹಲವಾರು ಸ್ಥಳಗಳನ್ನು ಗುರುತಿಸಿ.", "btn_pin_mode": "ಪಿನ್ ಸೇರಿಸಿ", "btn_pin_mode_on": "ನಕ್ಷೆಯಲ್ಲಿ ಟ್ಯಾಪ್ ಮಾಡಿ", "pincompare_title": "ಪಿನ್ ಮಾಡಿದ ನಕ್ಷೆ ಸ್ಥಳಗಳು", "pincompare_hint": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ \"ಪಿನ್ ಸೇರಿಸಿ\" ಒತ್ತಿ ನಕ್ಷೆಯಲ್ಲಿ ಹಲವಾರು ಸ್ಥಳಗಳನ್ನು ಗುರುತಿಸಿ — ಅವು ಇಲ್ಲಿ ಸಂಗ್ರಹವಾಗುತ್ತವೆ, ನೀವು ಹುಡುಕಬಹುದು, ಆಯ್ಕೆಮಾಡಬಹುದು, ಹೋಲಿಸಬಹುದು.", "ph_pin_search": "ಪಿನ್ ಮಾಡಿದ ಸ್ಥಳಗಳನ್ನು ಹುಡುಕಿ...", "btn_compare_pins": "ಪಿನ್ ಮಾಡಿದ ಸ್ಥಳಗಳನ್ನು ಹೋಲಿಸಿ", "pin_empty": "ಇನ್ನೂ ಯಾವುದೇ ಸ್ಥಳ ಪಿನ್ ಮಾಡಿಲ್ಲ. ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹೋಗಿ \"ಪಿನ್ ಸೇರಿಸಿ\" ಒತ್ತಿ.", "pin_limit": "ನೀವು ಒಂದು ಬಾರಿಗೆ 8 ಸ್ಥಳಗಳವರೆಗೆ ಪಿನ್ ಮಾಡಬಹುದು.", "out_of_range": "ಈ ಸ್ಥಳ ಸಮುದ್ರದಲ್ಲಿ ಬಹಳ ದೂರದಲ್ಲಿದೆ, ಸಾಮಾನ್ಯ ಕರಾವಳಿ ಮೀನುಗಾರಿಕೆ ವ್ಯಾಪ್ತಿಯನ್ನು ಮೀರಿ — ದಯವಿಟ್ಟು ದಡಕ್ಕೆ ಹತ್ತಿರವಿರುವ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ."});
Object.assign(I18N.ml, {"hint_pin_mode": "\"പിൻ ചേർക്കുക\" അമർത്തി താരതമ്യം ചെയ്യാൻ മാപ്പിൽ പല സ്ഥലങ്ങൾ അടയാളപ്പെടുത്തുക.", "btn_pin_mode": "പിൻ ചേർക്കുക", "btn_pin_mode_on": "മാപ്പിൽ ടാപ്പ് ചെയ്യുക", "pincompare_title": "പിൻ ചെയ്ത മാപ്പ് സ്ഥലങ്ങൾ", "pincompare_hint": "ഡാഷ്‌ബോർഡിൽ \"പിൻ ചേർക്കുക\" അമർത്തി മാപ്പിൽ പല സ്ഥലങ്ങൾ അടയാളപ്പെടുത്തുക — അവ ഇവിടെ ശേഖരിക്കപ്പെടും, നിങ്ങൾക്ക് തിരയാനും തിരഞ്ഞെടുക്കാനും താരതമ്യം ചെയ്യാനും കഴിയും.", "ph_pin_search": "പിൻ ചെയ്ത സ്ഥലങ്ങൾ തിരയുക...", "btn_compare_pins": "പിൻ ചെയ്ത സ്ഥലങ്ങൾ താരതമ്യം ചെയ്യുക", "pin_empty": "ഇതുവരെ സ്ഥലങ്ങളൊന്നും പിൻ ചെയ്തിട്ടില്ല. ഡാഷ്‌ബോർഡിലേക്ക് പോയി \"പിൻ ചേർക്കുക\" അമർത്തുക.", "pin_limit": "ഒരു സമയം 8 സ്ഥലങ്ങൾ വരെ പിൻ ചെയ്യാം.", "out_of_range": "ഈ സ്ഥലം കടലിൽ വളരെ അകലെയാണ്, സാധാരണ തീരദേശ മത്സ്യബന്ധന പരിധിക്ക് അപ്പുറം — തീരത്തിനടുത്തുള്ള ഒരു സ്ഥലം തിരഞ്ഞെടുക്കുക."});
Object.assign(I18N.en, {"settings_community": "Nearby Fishermen", "settings_share_location": "Share My Location", "settings_share_location_hint": "When on, your name, phone number and current position become visible to other fishermen connected to the same ORCA server, so they can find and call you. Requires your name and phone number above.", "chk_show_fishermen": "Show Other Fishermen", "fishermen_share_needs_phone": "Add your name and phone number above before turning this on.", "fishermen_none_nearby": "No other fishermen sharing their location nearby right now.", "fishermen_unreachable": "Can't reach the ORCA server — nearby fishermen can't be shown right now.", "fishermen_need_location": "Pick a location first to see nearby fishermen.", "fishermen_found": "{count} nearby fisherman(s) sharing their location.", "fishermen_popup_lastseen": "Last seen {min} min ago", "fishermen_popup_distance": "{d} km away", "fishermen_popup_call": "📞 Call"});
Object.assign(I18N.hi, {"settings_community": "आस-पास के मछुआरे", "settings_share_location": "मेरी स्थिति साझा करें", "settings_share_location_hint": "चालू होने पर, आपका नाम, फ़ोन नंबर और वर्तमान स्थिति उसी ORCA सर्वर से जुड़े अन्य मछुआरों को दिखेगी, ताकि वे आपको ढूंढ और कॉल कर सकें। इसके लिए ऊपर आपका नाम और फ़ोन नंबर आवश्यक है।", "chk_show_fishermen": "अन्य मछुआरे दिखाएं", "fishermen_share_needs_phone": "इसे चालू करने से पहले ऊपर अपना नाम और फ़ोन नंबर जोड़ें।", "fishermen_none_nearby": "अभी आस-पास कोई मछुआरा अपनी स्थिति साझा नहीं कर रहा है।", "fishermen_unreachable": "ORCA सर्वर तक नहीं पहुंच पा रहे — अभी आस-पास के मछुआरे नहीं दिखाए जा सकते।", "fishermen_need_location": "आस-पास के मछुआरे देखने के लिए पहले एक स्थान चुनें।", "fishermen_found": "{count} आस-पास के मछुआरे अपनी स्थिति साझा कर रहे हैं।", "fishermen_popup_lastseen": "{min} मिनट पहले देखा गया", "fishermen_popup_distance": "{d} किमी दूर", "fishermen_popup_call": "📞 कॉल करें"});
Object.assign(I18N.ta, {"settings_community": "அருகிலுள்ள மீனவர்கள்", "settings_share_location": "எனது இருப்பிடத்தைப் பகிரவும்", "settings_share_location_hint": "இதை இயக்கும்போது, உங்கள் பெயர், தொலைபேசி எண் மற்றும் தற்போதைய இருப்பிடம் அதே ORCA சேவையகத்துடன் இணைந்த மற்ற மீனவர்களுக்குத் தெரியும், அதனால் அவர்கள் உங்களைக் கண்டுபிடித்து அழைக்க முடியும். மேலே உங்கள் பெயர் மற்றும் தொலைபேசி எண் தேவை.", "chk_show_fishermen": "மற்ற மீனவர்களைக் காட்டு", "fishermen_share_needs_phone": "இதை இயக்கும் முன் மேலே உங்கள் பெயர் மற்றும் தொலைபேசி எண்ணைச் சேர்க்கவும்.", "fishermen_none_nearby": "இப்போது அருகில் எந்த மீனவரும் தங்கள் இருப்பிடத்தைப் பகிரவில்லை.", "fishermen_unreachable": "ORCA சேவையகத்தை அணுக முடியவில்லை — இப்போது அருகிலுள்ள மீனவர்களைக் காட்ட முடியாது.", "fishermen_need_location": "அருகிலுள்ள மீனவர்களைப் பார்க்க முதலில் ஒரு இடத்தைத் தேர்ந்தெடுக்கவும்.", "fishermen_found": "{count} அருகிலுள்ள மீனவர்கள் தங்கள் இருப்பிடத்தைப் பகிர்கின்றனர்.", "fishermen_popup_lastseen": "{min} நிமிடங்களுக்கு முன் காணப்பட்டது", "fishermen_popup_distance": "{d} கிமீ தொலைவில்", "fishermen_popup_call": "📞 அழை"});
Object.assign(I18N.te, {"settings_community": "సమీప మత్స్యకారులు", "settings_share_location": "నా స్థానాన్ని పంచుకోండి", "settings_share_location_hint": "దీన్ని ఆన్ చేసినప్పుడు, మీ పేరు, ఫోన్ నంబర్ మరియు ప్రస్తుత స్థానం అదే ORCA సర్వర్‌కు కనెక్ట్ అయిన ఇతర మత్స్యకారులకు కనిపిస్తుంది, తద్వారా వారు మిమ్మల్ని కనుగొని కాల్ చేయగలరు. దీనికి పైన మీ పేరు మరియు ఫోన్ నంబర్ అవసరం.", "chk_show_fishermen": "ఇతర మత్స్యకారులను చూపించు", "fishermen_share_needs_phone": "దీన్ని ఆన్ చేయడానికి ముందు పైన మీ పేరు మరియు ఫోన్ నంబర్‌ను జోడించండి.", "fishermen_none_nearby": "ప్రస్తుతం సమీపంలో ఏ మత్స్యకారుడు తమ స్థానాన్ని పంచుకోవడం లేదు.", "fishermen_unreachable": "ORCA సర్వర్‌ను చేరుకోలేకపోయాము — ప్రస్తుతం సమీప మత్స్యకారులను చూపించలేము.", "fishermen_need_location": "సమీప మత్స్యకారులను చూడటానికి ముందు ఒక స్థానాన్ని ఎంచుకోండి.", "fishermen_found": "{count} సమీప మత్స్యకారులు తమ స్థానాన్ని పంచుకుంటున్నారు.", "fishermen_popup_lastseen": "{min} నిమిషాల క్రితం చూడబడింది", "fishermen_popup_distance": "{d} కిమీ దూరంలో", "fishermen_popup_call": "📞 కాల్ చేయండి"});
Object.assign(I18N.kn, {"settings_community": "ಹತ್ತಿರದ ಮೀನುಗಾರರು", "settings_share_location": "ನನ್ನ ಸ್ಥಳವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ", "settings_share_location_hint": "ಇದನ್ನು ಆನ್ ಮಾಡಿದಾಗ, ನಿಮ್ಮ ಹೆಸರು, ಫೋನ್ ಸಂಖ್ಯೆ ಮತ್ತು ಪ್ರಸ್ತುತ ಸ್ಥಾನವು ಅದೇ ORCA ಸರ್ವರ್‌ಗೆ ಸಂಪರ್ಕಗೊಂಡ ಇತರ ಮೀನುಗಾರರಿಗೆ ಗೋಚರಿಸುತ್ತದೆ, ಇದರಿಂದ ಅವರು ನಿಮ್ಮನ್ನು ಹುಡುಕಿ ಕರೆ ಮಾಡಬಹುದು. ಇದಕ್ಕೆ ಮೇಲೆ ನಿಮ್ಮ ಹೆಸರು ಮತ್ತು ಫೋನ್ ಸಂಖ್ಯೆ ಅಗತ್ಯವಿದೆ.", "chk_show_fishermen": "ಇತರ ಮೀನುಗಾರರನ್ನು ತೋರಿಸಿ", "fishermen_share_needs_phone": "ಇದನ್ನು ಆನ್ ಮಾಡುವ ಮೊದಲು ಮೇಲೆ ನಿಮ್ಮ ಹೆಸರು ಮತ್ತು ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ಸೇರಿಸಿ.", "fishermen_none_nearby": "ಈಗ ಹತ್ತಿರದಲ್ಲಿ ಯಾವುದೇ ಮೀನುಗಾರ ತಮ್ಮ ಸ್ಥಳವನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತಿಲ್ಲ.", "fishermen_unreachable": "ORCA ಸರ್ವರ್ ಅನ್ನು ತಲುಪಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ — ಈಗ ಹತ್ತಿರದ ಮೀನುಗಾರರನ್ನು ತೋರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.", "fishermen_need_location": "ಹತ್ತಿರದ ಮೀನುಗಾರರನ್ನು ನೋಡಲು ಮೊದಲು ಒಂದು ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ.", "fishermen_found": "{count} ಹತ್ತಿರದ ಮೀನುಗಾರರು ತಮ್ಮ ಸ್ಥಳವನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತಿದ್ದಾರೆ.", "fishermen_popup_lastseen": "{min} ನಿಮಿಷಗಳ ಹಿಂದೆ ಕಾಣಿಸಿಕೊಂಡರು", "fishermen_popup_distance": "{d} ಕಿಮೀ ದೂರದಲ್ಲಿ", "fishermen_popup_call": "📞 ಕರೆ ಮಾಡಿ"});
Object.assign(I18N.ml, {"settings_community": "സമീപത്തുള്ള മത്സ്യത്തൊഴിലാളികൾ", "settings_share_location": "എന്റെ സ്ഥാനം പങ്കിടുക", "settings_share_location_hint": "ഇത് ഓണാക്കുമ്പോൾ, നിങ്ങളുടെ പേര്, ഫോൺ നമ്പർ, നിലവിലെ സ്ഥാനം എന്നിവ അതേ ORCA സെർവറുമായി ബന്ധിപ്പിച്ചിട്ടുള്ള മറ്റ് മത്സ്യത്തൊഴിലാളികൾക്ക് ദൃശ്യമാകും, അതിനാൽ അവർക്ക് നിങ്ങളെ കണ്ടെത്തി വിളിക്കാൻ കഴിയും. ഇതിന് മുകളിൽ നിങ്ങളുടെ പേരും ഫോൺ നമ്പറും ആവശ്യമാണ്.", "chk_show_fishermen": "മറ്റ് മത്സ്യത്തൊഴിലാളികളെ കാണിക്കുക", "fishermen_share_needs_phone": "ഇത് ഓണാക്കുന്നതിന് മുമ്പ് മുകളിൽ നിങ്ങളുടെ പേരും ഫോൺ നമ്പറും ചേർക്കുക.", "fishermen_none_nearby": "ഇപ്പോൾ സമീപത്ത് ആരും തങ്ങളുടെ സ്ഥാനം പങ്കിടുന്നില്ല.", "fishermen_unreachable": "ORCA സെർവറിലേക്ക് എത്തിച്ചേരാൻ കഴിയുന്നില്ല — ഇപ്പോൾ സമീപത്തുള്ള മത്സ്യത്തൊഴിലാളികളെ കാണിക്കാൻ കഴിയില്ല.", "fishermen_need_location": "സമീപത്തുള്ള മത്സ്യത്തൊഴിലാളികളെ കാണാൻ ആദ്യം ഒരു സ്ഥലം തിരഞ്ഞെടുക്കുക.", "fishermen_found": "{count} സമീപത്തുള്ള മത്സ്യത്തൊഴിലാളികൾ അവരുടെ സ്ഥാനം പങ്കിടുന്നു.", "fishermen_popup_lastseen": "{min} മിനിറ്റ് മുമ്പ് കണ്ടു", "fishermen_popup_distance": "{d} കി.മീ അകലെ", "fishermen_popup_call": "📞 വിളിക്കുക"});
Object.assign(I18N.en, {"llm_panel_title": "AI Multi-Agent Panel", "llm_panel_hint": "A separate AI reviews the same real numbers above and gives its own opinion — independent of the rule-based recommendation.", "llm_loading": "🔄 Asking the AI agent panel…", "llm_not_configured": "AI panel unavailable — no Groq API key is set up on this backend yet. The recommendation above is still based on real measured data.", "llm_unavailable": "AI panel could not be reached (backend offline, no internet, or the request timed out). The recommendation above is still based on real measured data.", "llm_summary_title": "Chief Coordinator summary"});
Object.assign(I18N.hi, {"llm_panel_title": "एआई मल्टी-एजेंट पैनल", "llm_panel_hint": "एक अलग एआई ऊपर दिए गए वास्तविक आंकड़ों की समीक्षा करता है और अपनी राय देता है — यह नियम-आधारित सिफारिश से स्वतंत्र है।", "llm_loading": "🔄 एआई एजेंट पैनल से पूछा जा रहा है…", "llm_not_configured": "एआई पैनल उपलब्ध नहीं है — इस बैकएंड पर अभी तक कोई Groq API कुंजी सेट नहीं है। ऊपर दी गई सिफारिश अभी भी वास्तविक मापे गए डेटा पर आधारित है।", "llm_unavailable": "एआई पैनल तक नहीं पहुंचा जा सका (बैकएंड ऑफ़लाइन है, इंटरनेट नहीं है, या अनुरोध का समय समाप्त हो गया)। ऊपर दी गई सिफारिश अभी भी वास्तविक मापे गए डेटा पर आधारित है।", "llm_summary_title": "मुख्य समन्वयक का सारांश"});
Object.assign(I18N.ta, {"llm_panel_title": "AI பல-முகவர் குழு", "llm_panel_hint": "மேலே உள்ள அதே உண்மையான தரவை ஒரு தனி AI மறுஆய்வு செய்து தன் சொந்த கருத்தை தருகிறது — இது விதி-அடிப்படையிலான பரிந்துரையிலிருந்து சுயாதீனமானது.", "llm_loading": "🔄 AI முகவர் குழுவிடம் கேட்கப்படுகிறது…", "llm_not_configured": "AI குழு கிடைக்கவில்லை — இந்த பின்தளத்தில் இன்னும் Groq API விசை அமைக்கப்படவில்லை. மேலே உள்ள பரிந்துரை இன்னும் உண்மையான அளவிடப்பட்ட தரவை அடிப்படையாகக் கொண்டது.", "llm_unavailable": "AI குழுவை அணுக முடியவில்லை (பின்தளம் ஆஃப்லைனில் உள்ளது, இணையம் இல்லை, அல்லது கோரிக்கை நேரம் முடிந்தது). மேலே உள்ள பரிந்துரை இன்னும் உண்மையான அளவிடப்பட்ட தரவை அடிப்படையாகக் கொண்டது.", "llm_summary_title": "தலைமை ஒருங்கிணைப்பாளர் சுருக்கம்"});
Object.assign(I18N.te, {"llm_panel_title": "AI బహుళ-ఏజెంట్ ప్యానెల్", "llm_panel_hint": "పైన ఉన్న అదే నిజమైన డేటాను ఒక ప్రత్యేక AI సమీక్షించి తన సొంత అభిప్రాయాన్ని ఇస్తుంది — ఇది నియమ-ఆధారిత సిఫారసుకు స్వతంత్రమైనది.", "llm_loading": "🔄 AI ఏజెంట్ ప్యానెల్‌ను అడుగుతోంది…", "llm_not_configured": "AI ప్యానెల్ అందుబాటులో లేదు — ఈ బ్యాకెండ్‌లో ఇంకా Groq API కీ సెట్ చేయలేదు. పైన ఉన్న సిఫారసు ఇప్పటికీ నిజమైన కొలిచిన డేటాపై ఆధారపడి ఉంది.", "llm_unavailable": "AI ప్యానెల్‌ను చేరుకోలేకపోయాము (బ్యాకెండ్ ఆఫ్‌లైన్‌లో ఉంది, ఇంటర్నెట్ లేదు, లేదా అభ్యర్థన సమయం ముగిసింది). పైన ఉన్న సిఫారసు ఇప్పటికీ నిజమైన కొలిచిన డేటాపై ఆధారపడి ఉంది.", "llm_summary_title": "చీఫ్ కోఆర్డినేటర్ సారాంశం"});
Object.assign(I18N.kn, {"llm_panel_title": "AI ಬಹು-ಏಜೆಂಟ್ ಪ್ಯಾನೆಲ್", "llm_panel_hint": "ಮೇಲಿನ ಅದೇ ನೈಜ ಡೇಟಾವನ್ನು ಪ್ರತ್ಯೇಕ AI ಪರಿಶೀಲಿಸಿ ತನ್ನದೇ ಅಭಿಪ್ರಾಯ ನೀಡುತ್ತದೆ — ಇದು ನಿಯಮ-ಆಧಾರಿತ ಶಿಫಾರಸಿನಿಂದ ಸ್ವತಂತ್ರವಾಗಿದೆ.", "llm_loading": "🔄 AI ಏಜೆಂಟ್ ಪ್ಯಾನೆಲ್‌ಗೆ ಕೇಳಲಾಗುತ್ತಿದೆ…", "llm_not_configured": "AI ಪ್ಯಾನೆಲ್ ಲಭ್ಯವಿಲ್ಲ — ಈ ಬ್ಯಾಕೆಂಡ್‌ನಲ್ಲಿ ಇನ್ನೂ Groq API ಕೀ ಹೊಂದಿಸಿಲ್ಲ. ಮೇಲಿನ ಶಿಫಾರಸು ಇನ್ನೂ ನೈಜ ಅಳತೆ ಮಾಡಿದ ಡೇಟಾವನ್ನು ಆಧರಿಸಿದೆ.", "llm_unavailable": "AI ಪ್ಯಾನೆಲ್ ಅನ್ನು ತಲುಪಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ (ಬ್ಯಾಕೆಂಡ್ ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿದೆ, ಇಂಟರ್ನೆಟ್ ಇಲ್ಲ, ಅಥವಾ ವಿನಂತಿಯ ಸಮಯ ಮೀರಿದೆ). ಮೇಲಿನ ಶಿಫಾರಸು ಇನ್ನೂ ನೈಜ ಅಳತೆ ಮಾಡಿದ ಡೇಟಾವನ್ನು ಆಧರಿಸಿದೆ.", "llm_summary_title": "ಮುಖ್ಯ ಸಂಯೋಜಕರ ಸಾರಾಂಶ"});
Object.assign(I18N.ml, {"llm_panel_title": "AI മൾട്ടി-ഏജന്റ് പാനൽ", "llm_panel_hint": "മുകളിലുള്ള അതേ യഥാർത്ഥ ഡാറ്റ ഒരു പ്രത്യേക AI അവലോകനം ചെയ്ത് സ്വന്തം അഭിപ്രായം നൽകുന്നു — ഇത് നിയമാധിഷ്ഠിത ശുപാർശയിൽ നിന്ന് സ്വതന്ത്രമാണ്.", "llm_loading": "🔄 AI ഏജന്റ് പാനലിനോട് ചോദിക്കുന്നു…", "llm_not_configured": "AI പാനൽ ലഭ്യമല്ല — ഈ ബാക്കെൻഡിൽ ഇതുവരെ Groq API കീ സജ്ജീകരിച്ചിട്ടില്ല. മുകളിലുള്ള ശുപാർശ ഇപ്പോഴും യഥാർത്ഥ അളന്ന ഡാറ്റയെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്.", "llm_unavailable": "AI പാനലിനെ ബന്ധപ്പെടാൻ കഴിഞ്ഞില്ല (ബാക്കെൻഡ് ഓഫ്‌ലൈനിലാണ്, ഇന്റർനെറ്റ് ഇല്ല, അല്ലെങ്കിൽ അഭ്യർത്ഥന സമയം കഴിഞ്ഞു). മുകളിലുള്ള ശുപാർശ ഇപ്പോഴും യഥാർത്ഥ അളന്ന ഡാറ്റയെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്.", "llm_summary_title": "ചീഫ് കോർഡിനേറ്റർ സംഗ്രഹം"});

// Part 9: honest "search widened all the way and still nothing strong"
// message, and the auto-drawn distance-to-recommended-zone tooltip label.
Object.assign(I18N.en, {"no_strong_zone_found": "No strong fishing zone found even after expanding the search to {used} km. Try a different location or check back later.", "recommended_zone_distance": "Recommended Zone {letter} — {d} km away"});
Object.assign(I18N.hi, {"no_strong_zone_found": "खोज को {used} किमी तक बढ़ाने के बाद भी कोई मजबूत मछली पकड़ने का क्षेत्र नहीं मिला। कोई अन्य स्थान आज़माएं या बाद में फिर से देखें।", "recommended_zone_distance": "अनुशंसित ज़ोन {letter} — {d} किमी दूर"});
Object.assign(I18N.ta, {"no_strong_zone_found": "தேடலை {used} கிமீ வரை விரிவாக்கிய பிறகும் வலுவான மீன்பிடி மண்டலம் எதுவும் கிடைக்கவில்லை. வேறு இடத்தை முயற்சிக்கவும் அல்லது பின்னர் மீண்டும் சரிபார்க்கவும்.", "recommended_zone_distance": "பரிந்துரைக்கப்பட்ட மண்டலம் {letter} — {d} கிமீ தொலைவில்"});
Object.assign(I18N.te, {"no_strong_zone_found": "శోధనను {used} కి.మీ వరకు విస్తరించిన తర్వాత కూడా బలమైన చేపల వేట మండలం కనుగొనబడలేదు. వేరే ప్రదేశాన్ని ప్రయత్నించండి లేదా తర్వాత మళ్లీ తనిఖీ చేయండి.", "recommended_zone_distance": "సిఫారసు చేసిన మండలం {letter} — {d} కి.మీ దూరంలో"});
Object.assign(I18N.kn, {"no_strong_zone_found": "ಹುಡುಕಾಟವನ್ನು {used} ಕಿ.ಮೀ ವರೆಗೆ ವಿಸ್ತರಿಸಿದ ನಂತರವೂ ಯಾವುದೇ ಬಲವಾದ ಮೀನುಗಾರಿಕೆ ವಲಯ ಕಂಡುಬಂದಿಲ್ಲ. ಬೇರೆ ಸ್ಥಳವನ್ನು ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ ನಂತರ ಮತ್ತೆ ಪರಿಶೀಲಿಸಿ.", "recommended_zone_distance": "ಶಿಫಾರಸು ಮಾಡಿದ ವಲಯ {letter} — {d} ಕಿ.ಮೀ ದೂರದಲ್ಲಿ"});
Object.assign(I18N.ml, {"no_strong_zone_found": "തിരയൽ {used} കി.മീ. ആയി വിപുലീകരിച്ചിട്ടും ശക്തമായ മത്സ്യബന്ധന മേഖല കണ്ടെത്തിയില്ല. മറ്റൊരു സ്ഥലം പരീക്ഷിക്കുക അല്ലെങ്കിൽ പിന്നീട് വീണ്ടും പരിശോധിക്കുക.", "recommended_zone_distance": "ശുപാർശ ചെയ്ത മേഖല {letter} — {d} കി.മീ. അകലെ"});

// A recognized but landlocked state/UT name typed into location search gets
// this specific, honest reason instead of the generic "not found" message.
Object.assign(I18N.en, {"state_landlocked": "has no coastline — ORCA only covers coastal fishing locations. Try a coastal state, town, or named coast instead."});
Object.assign(I18N.hi, {"state_landlocked": "की कोई तटरेखा नहीं है — ORCA केवल तटीय मछली पकड़ने के स्थानों को कवर करता है। कृपया कोई तटीय राज्य, शहर या समुद्र तट का नाम आज़माएं।"});
Object.assign(I18N.ta, {"state_landlocked": "க்கு கடற்கரை இல்லை — ORCA கடலோர மீன்பிடி இடங்களை மட்டுமே கவரேஜ் செய்கிறது. பதிலாக ஒரு கடலோர மாநிலம், நகரம் அல்லது கடற்கரையின் பெயரை முயற்சிக்கவும்."});
Object.assign(I18N.te, {"state_landlocked": "కు తీరప్రాంతం లేదు — ORCA తీర ప్రాంత చేపల వేట స్థలాలను మాత్రమే కవర్ చేస్తుంది. బదులుగా తీర రాష్ట్రం, పట్టణం లేదా తీరం పేరును ప్రయత్నించండి."});
Object.assign(I18N.kn, {"state_landlocked": "ಗೆ ಕರಾವಳಿ ಇಲ್ಲ — ORCA ಕರಾವಳಿ ಮೀನುಗಾರಿಕೆ ಸ್ಥಳಗಳನ್ನು ಮಾತ್ರ ಒಳಗೊಂಡಿದೆ. ಬದಲಿಗೆ ಕರಾವಳಿ ರಾಜ್ಯ, ಪಟ್ಟಣ ಅಥವಾ ಕರಾವಳಿಯ ಹೆಸರನ್ನು ಪ್ರಯತ್ನಿಸಿ."});
Object.assign(I18N.ml, {"state_landlocked": "ന് തീരപ്രദേശമില്ല — ORCA തീരദേശ മത്സ്യബന്ധന സ്ഥലങ്ങൾ മാത്രമേ ഉൾക്കൊള്ളുന്നുള്ളൂ. പകരം ഒരു തീരദേശ സംസ്ഥാനം, പട്ടണം അല്ലെങ്കിൽ തീരത്തിന്റെ പേര് പരീക്ഷിക്കുക."});

// Shown when zone generation finds real land in every direction it tries
// (a bug fix this round — this case used to fail completely silently).
// Almost always means the picked point is an inland lake/reservoir/river,
// since ORCA's ocean fishing analysis doesn't yet cover freshwater.
Object.assign(I18N.en, {"zero_zones_inland": "No zones could be placed near this location — it looks like an inland freshwater spot (a lake, reservoir, or river) rather than open sea. ORCA's ocean fishing analysis doesn't cover freshwater locations yet."});
Object.assign(I18N.hi, {"zero_zones_inland": "इस स्थान के पास कोई ज़ोन नहीं बनाया जा सका — यह खुले समुद्र के बजाय एक अंतर्देशीय मीठे पानी की जगह (झील, जलाशय या नदी) लगती है। ORCA का समुद्री मछली पकड़ने का विश्लेषण अभी मीठे पानी के स्थानों को कवर नहीं करता।"});
Object.assign(I18N.ta, {"zero_zones_inland": "இந்த இடத்திற்கு அருகில் எந்த மண்டலமும் அமைக்க முடியவில்லை — இது திறந்த கடலை விட உள்நாட்டு நன்னீர் இடமாக (ஏரி, நீர்த்தேக்கம் அல்லது ஆறு) தெரிகிறது. ORCA இன் கடல் மீன்பிடி பகுப்பாய்வு இன்னும் நன்னீர் இடங்களை உள்ளடக்கவில்லை."});
Object.assign(I18N.te, {"zero_zones_inland": "ఈ ప్రదేశానికి సమీపంలో ఎలాంటి మండలాలు ఏర్పాటు చేయబడలేదు — ఇది బహిరంగ సముద్రం కాకుండా లోతట్టు మంచినీటి ప్రదేశంగా (సరస్సు, జలాశయం లేదా నది) కనిపిస్తోంది. ORCA యొక్క సముద్ర చేపల వేట విశ్లేషణ ఇంకా మంచినీటి ప్రదేశాలను కవర్ చేయదు."});
Object.assign(I18N.kn, {"zero_zones_inland": "ಈ ಸ್ಥಳದ ಬಳಿ ಯಾವುದೇ ವಲಯಗಳನ್ನು ಇರಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ — ಇದು ತೆರೆದ ಸಮುದ್ರಕ್ಕಿಂತ ಒಳನಾಡಿನ ಸಿಹಿನೀರಿನ ಸ್ಥಳವಾಗಿ (ಸರೋವರ, ಜಲಾಶಯ ಅಥವಾ ನದಿ) ಕಾಣುತ್ತದೆ. ORCA ದ ಸಮುದ್ರ ಮೀನುಗಾರಿಕೆ ವಿಶ್ಲೇಷಣೆ ಇನ್ನೂ ಸಿಹಿನೀರಿನ ಸ್ಥಳಗಳನ್ನು ಒಳಗೊಂಡಿಲ್ಲ."});
Object.assign(I18N.ml, {"zero_zones_inland": "ഈ സ്ഥലത്തിന് സമീപം ഒരു മേഖലയും സ്ഥാപിക്കാൻ കഴിഞ്ഞില്ല — ഇത് തുറന്ന കടലിനേക്കാൾ ഉൾനാടൻ ശുദ്ധജല സ്ഥലമായി (തടാകം, ജലാശയം അല്ലെങ്കിൽ നദി) കാണപ്പെടുന്നു. ORCA യുടെ സമുദ്ര മത്സ്യബന്ധന വിശകലനം ഇതുവരെ ശുദ്ധജല സ്ഥലങ്ങൾ ഉൾക്കൊള്ളുന്നില്ല."});

// Part 10: freshwater (lake/reservoir/river) zone display keys. air_temp/rain
// are REAL Open-Meteo values (not_applicable/freshwater_badge/freshwater_note
// are static UI text) — see fetchRealWeather()/generateFreshwaterZones().
// freshwater_note also carries the honest species caption: ORCA has no
// species-detection model for freshwater, so this names the commonly
// farmed/stocked species in Tamil Nadu TNFDC reservoirs as reference
// information only, never a per-zone measurement.
Object.assign(I18N.en, {"air_temp": "Air Temp", "rain": "Rainfall", "not_applicable": "Not applicable", "freshwater_badge": "Freshwater location", "freshwater_note": "Freshwater reservoir — fishing score is a simulated estimate, not satellite-measured. Commonly stocked species here: Rohu, Catla, Mrigal, Common Carp."});
Object.assign(I18N.hi, {"air_temp": "हवा का तापमान", "rain": "वर्षा", "not_applicable": "लागू नहीं", "freshwater_badge": "मीठे पानी का स्थान", "freshwater_note": "मीठे पानी का जलाशय — मछली पकड़ने का स्कोर एक अनुमानित अनुमान है, उपग्रह से मापा नहीं गया। यहाँ आमतौर पर पाली जाने वाली प्रजातियाँ: रोहू, कतला, मृगल, कॉमन कार्प।"});
Object.assign(I18N.ta, {"air_temp": "காற்று வெப்பநிலை", "rain": "மழைப்பொழிவு", "not_applicable": "பொருந்தாது", "freshwater_badge": "நன்னீர் இடம்", "freshwater_note": "நன்னீர் நீர்த்தேக்கம் — மீன்பிடி மதிப்பெண் ஒரு உருவகப்படுத்தப்பட்ட மதிப்பீடு, செயற்கைக்கோள் மூலம் அளக்கப்படவில்லை. இங்கு பொதுவாக வளர்க்கப்படும் இனங்கள்: ரோகு, காட்லா, மிருகல், காமன் கார்ப்."});
Object.assign(I18N.te, {"air_temp": "గాలి ఉష్ణోగ్రత", "rain": "వర్షపాతం", "not_applicable": "వర్తించదు", "freshwater_badge": "మంచినీటి ప్రదేశం", "freshwater_note": "మంచినీటి జలాశయం — చేపల వేట స్కోరు అనుకరణ అంచనా, ఉపగ్రహం ద్వారా కొలవబడలేదు. ఇక్కడ సాధారణంగా పెంచే జాతులు: రోహు, కట్లా, మృగల్, కామన్ కార్ప్."});
Object.assign(I18N.kn, {"air_temp": "ಗಾಳಿಯ ಉಷ್ಣತೆ", "rain": "ಮಳೆ", "not_applicable": "ಅನ್ವಯಿಸುವುದಿಲ್ಲ", "freshwater_badge": "ಸಿಹಿನೀರಿನ ಸ್ಥಳ", "freshwater_note": "ಸಿಹಿನೀರಿನ ಜಲಾಶಯ — ಮೀನುಗಾರಿಕೆ ಸ್ಕೋರ್ ಒಂದು ಸಿಮ್ಯುಲೇಟೆಡ್ ಅಂದಾಜು, ಉಪಗ್ರಹದಿಂದ ಅಳೆಯಲಾಗಿಲ್ಲ. ಇಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಸಾಕುವ ಜಾತಿಗಳು: ರೋಹು, ಕಟ್ಲಾ, ಮೃಗಲ್, ಕಾಮನ್ ಕಾರ್ಪ್."});
Object.assign(I18N.ml, {"air_temp": "വായു താപനില", "rain": "മഴ", "not_applicable": "ബാധകമല്ല", "freshwater_badge": "ശുദ്ധജല സ്ഥലം", "freshwater_note": "ശുദ്ധജല ജലാശയം — മത്സ്യബന്ധന സ്കോർ ഒരു അനുകരണ എസ്റ്റിമേറ്റ് ആണ്, ഉപഗ്രഹം വഴി അളന്നതല്ല. ഇവിടെ സാധാരണയായി വളർത്തുന്ന ഇനങ്ങൾ: രോഹു, കട്‌ല, മൃഗാൽ, കോമൺ കാർപ്പ്."});

// Part 11: topbar quick-toggle tooltips (voice alerts on/off, light/dark theme).
Object.assign(I18N.en, {"voice_on_title": "Voice alerts: ON (tap to mute)", "voice_off_title": "Voice alerts: OFF (tap to unmute)", "theme_light_title": "Switch to dark theme", "theme_dark_title": "Switch to light theme", "settings_theme": "Appearance", "theme_dark_opt": "Dark", "theme_light_opt": "Light"});
Object.assign(I18N.hi, {"voice_on_title": "आवाज़ अलर्ट: चालू (म्यूट करने के लिए टैप करें)", "voice_off_title": "आवाज़ अलर्ट: बंद (अनम्यूट करने के लिए टैप करें)", "theme_light_title": "डार्क थीम पर स्विच करें", "theme_dark_title": "लाइट थीम पर स्विच करें", "settings_theme": "रूप", "theme_dark_opt": "डार्क", "theme_light_opt": "लाइट"});
Object.assign(I18N.ta, {"voice_on_title": "குரல் எச்சரிக்கைகள்: இயக்கத்தில் (முடக்க தட்டவும்)", "voice_off_title": "குரல் எச்சரிக்கைகள்: முடக்கப்பட்டது (இயக்க தட்டவும்)", "theme_light_title": "இருண்ட தீம்-க்கு மாறவும்", "theme_dark_title": "வெளிர் தீம்-க்கு மாறவும்", "settings_theme": "தோற்றம்", "theme_dark_opt": "இருண்ட", "theme_light_opt": "வெளிர்"});
Object.assign(I18N.te, {"voice_on_title": "వాయిస్ అలర్ట్‌లు: ఆన్ (మ్యూట్ చేయడానికి నొక్కండి)", "voice_off_title": "వాయిస్ అలర్ట్‌లు: ఆఫ్ (అన్‌మ్యూట్ చేయడానికి నొక్కండి)", "theme_light_title": "డార్క్ థీమ్‌కు మారండి", "theme_dark_title": "లైట్ థీమ్‌కు మారండి", "settings_theme": "రూపం", "theme_dark_opt": "డార్క్", "theme_light_opt": "లైట్"});
Object.assign(I18N.kn, {"voice_on_title": "ಧ್ವನಿ ಎಚ್ಚರಿಕೆಗಳು: ಆನ್ (ಮ್ಯೂಟ್ ಮಾಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ)", "voice_off_title": "ಧ್ವನಿ ಎಚ್ಚರಿಕೆಗಳು: ಆಫ್ (ಅನ್‌ಮ್ಯೂಟ್ ಮಾಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ)", "theme_light_title": "ಡಾರ್ಕ್ ಥೀಮ್‌ಗೆ ಬದಲಿಸಿ", "theme_dark_title": "ಲೈಟ್ ಥೀಮ್‌ಗೆ ಬದಲಿಸಿ", "settings_theme": "ಗೋಚರತೆ", "theme_dark_opt": "ಡಾರ್ಕ್", "theme_light_opt": "ಲೈಟ್"});
Object.assign(I18N.ml, {"voice_on_title": "ശബ്ദ അലേർട്ടുകൾ: ഓൺ (മ്യൂട്ട് ചെയ്യാൻ ടാപ്പ് ചെയ്യുക)", "voice_off_title": "ശബ്ദ അലേർട്ടുകൾ: ഓഫ് (അൺമ്യൂട്ട് ചെയ്യാൻ ടാപ്പ് ചെയ്യുക)", "theme_light_title": "ഡാർക്ക് തീമിലേക്ക് മാറുക", "theme_dark_title": "ലൈറ്റ് തീമിലേക്ക് മാറുക", "settings_theme": "രൂപഭാവം", "theme_dark_opt": "ഡാർക്ക്", "theme_light_opt": "ലൈറ്റ്"});

// Part 11: 5-stage Agent Activity panel (grouped from the 9 existing
// rule-based steps — display only) + honest per-stage trust pills.
Object.assign(I18N.en, {"agent_stage_weather_wind": "Weather & Wind", "agent_stage_wave_ocean": "Wave & Ocean", "agent_stage_fishing": "Fishing Potential", "agent_stage_border_safety": "Border & Safety", "agent_stage_coordinator": "Chief Coordinator", "status_checking": "CHECKING…", "status_verified": "VERIFIED", "status_rejected": "REJECTED CANDIDATE", "status_uncertain": "UNCERTAIN (SIM)", "ai_opinion_badge": "🤖 AI OPINION"});
Object.assign(I18N.hi, {"agent_stage_weather_wind": "मौसम व हवा", "agent_stage_wave_ocean": "लहर व समुद्र", "agent_stage_fishing": "मछली पकड़ने की संभावना", "agent_stage_border_safety": "सीमा व सुरक्षा", "agent_stage_coordinator": "मुख्य समन्वयक", "status_checking": "जाँच हो रही है…", "status_verified": "सत्यापित", "status_rejected": "अस्वीकृत उम्मीदवार", "status_uncertain": "अनिश्चित (सिम्युलेटेड)", "ai_opinion_badge": "🤖 AI राय"});
Object.assign(I18N.ta, {"agent_stage_weather_wind": "வானிலை & காற்று", "agent_stage_wave_ocean": "அலை & கடல்", "agent_stage_fishing": "மீன்பிடி வாய்ப்பு", "agent_stage_border_safety": "எல்லை & பாதுகாப்பு", "agent_stage_coordinator": "தலைமை ஒருங்கிணைப்பாளர்", "status_checking": "சரிபார்க்கிறது…", "status_verified": "சரிபார்க்கப்பட்டது", "status_rejected": "நிராகரிக்கப்பட்ட வேட்பாளர்", "status_uncertain": "நிச்சயமற்றது (சிமுலேஷன்)", "ai_opinion_badge": "🤖 AI கருத்து"});
Object.assign(I18N.te, {"agent_stage_weather_wind": "వాతావరణం & గాలి", "agent_stage_wave_ocean": "అలలు & సముద్రం", "agent_stage_fishing": "చేపల వేట సామర్థ్యం", "agent_stage_border_safety": "సరిహద్దు & భద్రత", "agent_stage_coordinator": "చీఫ్ కోఆర్డినేటర్", "status_checking": "తనిఖీ చేస్తోంది…", "status_verified": "ధృవీకరించబడింది", "status_rejected": "తిరస్కరించిన అభ్యర్థి", "status_uncertain": "అనిశ్చితం (సిమ్యులేటెడ్)", "ai_opinion_badge": "🤖 AI అభిప్రాయం"});
Object.assign(I18N.kn, {"agent_stage_weather_wind": "ಹವಾಮಾನ & ಗಾಳಿ", "agent_stage_wave_ocean": "ಅಲೆ & ಸಮುದ್ರ", "agent_stage_fishing": "ಮೀನುಗಾರಿಕೆ ಸಾಮರ್ಥ್ಯ", "agent_stage_border_safety": "ಗಡಿ & ಸುರಕ್ಷತೆ", "agent_stage_coordinator": "ಮುಖ್ಯ ಸಂಯೋಜಕ", "status_checking": "ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ…", "status_verified": "ಪರಿಶೀಲಿಸಲಾಗಿದೆ", "status_rejected": "ತಿರಸ್ಕರಿಸಿದ ಅಭ್ಯರ್ಥಿ", "status_uncertain": "ಅನಿಶ್ಚಿತ (ಸಿಮ್ಯುಲೇಟೆಡ್)", "ai_opinion_badge": "🤖 AI ಅಭಿಪ್ರಾಯ"});
Object.assign(I18N.ml, {"agent_stage_weather_wind": "കാലാവസ്ഥ & കാറ്റ്", "agent_stage_wave_ocean": "തിരമാല & സമുദ്രം", "agent_stage_fishing": "മത്സ്യബന്ധന സാധ്യത", "agent_stage_border_safety": "അതിർത്തി & സുരക്ഷ", "agent_stage_coordinator": "ചീഫ് കോർഡിനേറ്റർ", "status_checking": "പരിശോധിക്കുന്നു…", "status_verified": "സ്ഥിരീകരിച്ചു", "status_rejected": "നിരസിച്ച സ്ഥാനാർത്ഥി", "status_uncertain": "അനിശ്ചിതം (സിമുലേറ്റഡ്)", "ai_opinion_badge": "🤖 AI അഭിപ്രായം"});

let currentLang = localStorage.getItem('orcaLanguage') || 'en';
function t(key, vars){
  let s = (I18N[currentLang] && I18N[currentLang][key]!==undefined) ? I18N[currentLang][key] : (I18N.en[key]!==undefined?I18N.en[key]:key);
  if(vars && typeof s==='string'){ Object.keys(vars).forEach(k=>{ s = s.replace('{'+k+'}', vars[k]); }); }
  return s;
}
function applyI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    const val = (I18N[currentLang] && I18N[currentLang][k]!==undefined) ? I18N[currentLang][k] : I18N.en[k];
    if(val!==undefined && typeof val==='string') el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
  document.getElementById('langSelect').value = currentLang;
  document.getElementById('liveToggleLabel').textContent = settings.liveTracking ? t('btn_live_on') : t('btn_live_off');
  updateVoiceToggleBtn();
  updateThemeToggleBtn();
  renderChecklist();
  updateRangeHints();
  if(currentZones.length){ renderZoneGrid(); renderCompareSelect(); renderAlerts(); }
  if(selectedLatLon) renderBorderStatus();
  renderPinnedList();
  renderPinStack(document.getElementById('pinSearchInput') ? document.getElementById('pinSearchInput').value : '');
}
function updateRangeHints(){
  const km = (settings && settings.searchRadiusKm) || 20;
  const txt = t('zoneintel_hint_dyn', {km});
  ['zoneRangeHintDash'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = txt;
  });
}

/* ============== TOWNS (quick picks — full search uses live geocoding) ============== */
const TOWNS = {
  "Sullurpeta":[13.7000,80.0050], "Pulicat":[13.4167,80.3167], "Kavarapettai":[13.3667,79.9500],
  "Chennai":[13.0827,80.2707], "Rameswaram":[9.2876,79.3129], "Pamban":[9.2833,79.2167],
  "Nagapattinam":[10.7672,79.8449], "Thoothukudi":[8.7642,78.1348], "Puducherry":[11.9416,79.8083],
  "Visakhapatnam":[17.6868,83.2185], "Kochi":[9.9312,76.2673], "Mangalore":[12.9141,74.8560],
  "Goa (Panaji)":[15.4909,73.8278], "Mumbai":[19.0760,72.8777], "Kavaratti":[10.5669,72.6420],
  "Mannar (Sri Lanka)":[8.9810,79.9044], "Jaffna (Sri Lanka)":[9.6615,80.0255]
};
/* A fisherman is at least as likely to type a well-known NAMED STRETCH of
   coast ("Coromandel Coast", "Malabar Coast") as a single town — but these
   are broad geographic names, not point locations, and OSM/Nominatim often
   has no clean single-point match for them (the search that reported this
   gap was for exactly "Coromandel Coast"). Rather than depend on an outside
   geocoder for well-known names like this, a small curated list anchors
   each one to a real, named town genuinely on that coast — honestly labeled
   as "near <town>" when selected, never presented as the coast's exact
   center or extent. [lat, lon, "near <anchor town>"]. */
const COASTAL_REGIONS = {
  "Coromandel Coast": [13.0827, 80.2707, "near Chennai"],
  "Malabar Coast": [9.9312, 76.2673, "near Kochi"],
  "Konkan Coast": [16.9902, 73.3120, "near Ratnagiri"],
  "Kachchh Coast": [22.8333, 69.3500, "near Mandvi"],
  "Kutch Coast": [22.8333, 69.3500, "near Mandvi"],
  "Saurashtra Coast": [20.9159, 70.3629, "near Veraval"],
  "Sundarbans Coast": [21.6500, 88.0500, "near Sagar Island"],
  "Palk Bay": [9.2876, 79.3129, "near Rameswaram"],
  "Palk Strait": [9.2876, 79.3129, "near Rameswaram"],
  "Gulf of Mannar": [8.7642, 78.1348, "near Thoothukudi"],
  "Gulf of Kutch": [22.4707, 70.0577, "near Jamnagar"],
  "Andhra Coast": [17.6868, 83.2185, "near Visakhapatnam"],
  "Goa Coast": [15.4909, 73.8278, "near Panaji"],
  "Karnataka Coast": [12.9141, 74.8560, "near Mangalore"],
  "Konkan-Goa Coast": [15.4909, 73.8278, "near Panaji"]
};
/* Typing an Indian STATE (or union territory) name, not just a town or a
   named coast, should also work — e.g. "Tamil Nadu" or "Gujarat". For a
   state with a real coastline, this anchors to a real coastal town in that
   state (same honesty rule as COASTAL_REGIONS: labeled "near <town>", never
   claimed as the state's exact center). For a genuinely landlocked state —
   Rajasthan, Punjab, Delhi, etc. — there is no honest coastal point to
   invent, so the search instead gives a clear, specific reason ("X has no
   coastline") rather than the same generic "not found" as a typo. */
const MARITIME_STATE_ANCHORS = {
  "Gujarat": [20.9159, 70.3629, "near Veraval"],
  "Maharashtra": [19.0760, 72.8777, "near Mumbai"],
  "Goa": [15.4909, 73.8278, "near Panaji"],
  "Karnataka": [12.9141, 74.8560, "near Mangalore"],
  "Kerala": [9.9312, 76.2673, "near Kochi"],
  "Tamil Nadu": [13.0827, 80.2707, "near Chennai"],
  "Andhra Pradesh": [17.6868, 83.2185, "near Visakhapatnam"],
  "Odisha": [20.3168, 86.6117, "near Paradip"],
  "West Bengal": [21.6270, 87.5023, "near Digha"],
  "Puducherry": [11.9416, 79.8083, "near Puducherry town"],
  "Lakshadweep": [10.5669, 72.6420, "near Kavaratti"],
  "Andaman and Nicobar Islands": [11.6234, 92.7265, "near Port Blair"],
  "Daman and Diu": [20.3974, 72.8328, "near Daman"],
  "Dadra and Nagar Haveli and Daman and Diu": [20.3974, 72.8328, "near Daman"]
};
// Landlocked states/UTs (no coastline) — recognized only so a clear, honest
// reason can be given instead of a generic "not found" for these.
const LANDLOCKED_STATES = [
  "Jammu and Kashmir", "Ladakh", "Himachal Pradesh", "Punjab", "Uttarakhand",
  "Haryana", "Delhi", "Rajasthan", "Uttar Pradesh", "Bihar", "Sikkim",
  "Arunachal Pradesh", "Nagaland", "Manipur", "Mizoram", "Tripura",
  "Meghalaya", "Assam", "Madhya Pradesh", "Chhattisgarh", "Jharkhand",
  "Telangana", "Chandigarh"
];
/* A fisherman searching a real INLAND freshwater reservoir (Bhavanisagar,
   Mettur/Stanley, etc.) hit the same "not found" wall as a named coast —
   these are genuine, documented Tamil Nadu Fisheries Development
   Corporation reservoir fisheries, just not indexed the same way a town is.
   Coordinates below were verified one by one against Wikipedia/official
   Tamil Nadu Water Resources Department sources, never guessed — a couple
   of the smaller Dharmapuri-district reservoirs the user asked about
   (Thoppaiyar, Chinnar, Nagavathi, Thumbalahalli, Vaniyar, Kesaraguli, and
   the Uppar/Tiruppur dam) are deliberately left OUT of this list because no
   confirmed coordinate could be found for them — inventing one would be
   exactly the fabrication this project avoids. Selecting any of these
   correctly finds the location, but — see zero_zones_inland below — ORCA's
   zone-generation engine is built for ocean/coastal fishing (satellite SST,
   wave height, seaward geometry) and does not yet produce fishing zones
   for freshwater lakes/reservoirs; that is a separate, not-yet-built
   feature, not a location-lookup bug. */
const INLAND_WATER_BODIES = {
  "Mettur": [11.7880, 77.8008, "Stanley Reservoir"],
  "Stanley Reservoir": [11.900, 77.833, "Mettur Dam"],
  "Bhavanisagar Reservoir": [11.4708, 77.1139, "Bhavani, Erode district"],
  "Sathanur Reservoir": [12.1334, 78.9468, "Tiruvannamalai district"],
  "Aliyar Reservoir": [10.4739, 76.9728, "Coimbatore district"],
  "Amaravathy Reservoir": [10.4107, 77.2600, "Tiruppur district"],
  "Thirumoorthy Reservoir": [10.4850, 77.1540, "Udumalpet, Tiruppur district"],
  "Palar-Porandalar Reservoir": [10.3750, 77.4817, "Palani, Dindigul district"],
  "Kolavai Reservoir": [12.7080, 79.9890, "Chengalpattu district"],
  "Ooty": [11.4064, 76.6932, "Nilgiris (freshwater trout areas)"]
};
function fillTownList(){
  const names = Object.keys(TOWNS).concat(Object.keys(COASTAL_REGIONS)).concat(Object.keys(MARITIME_STATE_ANCHORS)).concat(Object.keys(INLAND_WATER_BODIES));
  document.getElementById('townList').innerHTML = names.map(x=>`<option value="${x}">`).join('');
}
/* Case/whitespace/"the"-tolerant lookup shared by all the curated lists
   above — so "coromandel coast", "Coromandel  Coast", or "the Coromandel
   Coast" all still resolve, not just an exact-case exact-string match. */
function normalizePlaceName(s){
  return s.toLowerCase().replace(/^the\s+/,'').replace(/\s+/g,' ').trim();
}
function lookupCuratedPlace(val){
  const norm = normalizePlaceName(val);
  const townKey = Object.keys(TOWNS).find(k=>normalizePlaceName(k)===norm);
  if(townKey) return {lat:TOWNS[townKey][0], lon:TOWNS[townKey][1], label:townKey};
  const regionKey = Object.keys(COASTAL_REGIONS).find(k=>normalizePlaceName(k)===norm);
  if(regionKey){
    const [lat,lon,note] = COASTAL_REGIONS[regionKey];
    return {lat, lon, label:`${regionKey} (${note})`};
  }
  const stateKey = Object.keys(MARITIME_STATE_ANCHORS).find(k=>normalizePlaceName(k)===norm);
  if(stateKey){
    const [lat,lon,note] = MARITIME_STATE_ANCHORS[stateKey];
    return {lat, lon, label:`${stateKey} (${note})`};
  }
  const inlandKey = Object.keys(INLAND_WATER_BODIES).find(k=>normalizePlaceName(k)===norm);
  if(inlandKey){
    const [lat,lon,note] = INLAND_WATER_BODIES[inlandKey];
    // Part 10: flagged so doSearch() can route this to the freshwater zone
    // engine even when the curated anchor point (often the dam/town, not
    // literally inside the mapped reservoir polygon) doesn't itself
    // classify as 'lake'/'river' via classifyWaterType().
    return {lat, lon, label:`${inlandKey} (${note})`, freshwater:true, curatedKey:inlandKey};
  }
  return null;
}
// Returns the matched state name if `val` is a recognized LANDLOCKED Indian
// state/UT, else null. Kept separate from lookupCuratedPlace() since this
// case needs a different response (an honest reason, not a location).
function lookupLandlockedState(val){
  const norm = normalizePlaceName(val);
  return LANDLOCKED_STATES.find(s=>normalizePlaceName(s)===norm) || null;
}

/* ============== MATH HELPERS ============== */
function hashStr(s){ let h=0; for(let i=0;i<s.length;i++){h=Math.imul(31,h)+s.charCodeAt(i)|0;} return h; }
function mulberry32(seed){ return function(){ seed |= 0; seed = seed + 0x6D2B79F5 | 0;
  let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function haversine(lat1,lon1,lat2,lon2){
  const R=6371, dLat=(lat2-lat1)*Math.PI/180, dLon=(lon2-lon1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}
function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
function destinationPoint(lat,lon,bearingDeg,distKm){
  const R=6371, brng=bearingDeg*Math.PI/180, lat1=lat*Math.PI/180, lon1=lon*Math.PI/180;
  const lat2 = Math.asin(Math.sin(lat1)*Math.cos(distKm/R)+Math.cos(lat1)*Math.sin(distKm/R)*Math.cos(brng));
  const lon2 = lon1 + Math.atan2(Math.sin(brng)*Math.sin(distKm/R)*Math.cos(lat1), Math.cos(distKm/R)-Math.sin(lat1)*Math.sin(lat2));
  return [lat2*180/Math.PI, lon2*180/Math.PI];
}
function bearingBetween(lat1,lon1,lat2,lon2){
  const φ1=lat1*Math.PI/180, φ2=lat2*Math.PI/180, Δλ=(lon2-lon1)*Math.PI/180;
  const y=Math.sin(Δλ)*Math.cos(φ2);
  const x=Math.cos(φ1)*Math.sin(φ2)-Math.sin(φ1)*Math.cos(φ2)*Math.cos(Δλ);
  return (Math.atan2(y,x)*180/Math.PI+360)%360;
}
function bearingLabel(deg){ const dirs=['N','NE','E','SE','S','SW','W','NW']; return dirs[Math.round(deg/45)%8]; }

/* ============== REAL BOUNDARY DATA ==============
   India–Sri Lanka maritime boundary: real coordinate points from the
   1974 Palk Strait agreement and 1976 Gulf of Mannar agreement (public treaty text),
   ordered north (Palk Strait) to south (toward the Maldives tri-point). Approximate rendering. */
const IMBL = [
  {lat:10.0833, lon:80.0500}, {lat:9.9500, lon:79.5833}, {lat:9.6692, lon:79.3767},
  {lat:9.3633, lon:79.5117}, {lat:9.2167, lon:79.5333}, {lat:9.1000, lon:79.5333},
  {lat:9.0000, lon:79.5217}, {lat:8.8967, lon:79.4883}, {lat:8.6667, lon:79.3033},
  {lat:8.6200, lon:79.2167}, {lat:8.5200, lon:79.0783}, {lat:8.3700, lon:78.9233},
  {lat:8.2033, lon:78.8950}, {lat:7.5883, lon:78.7617}, {lat:7.3500, lon:78.6467},
  {lat:6.5133, lon:78.2033}, {lat:5.8983, lon:77.8450}, {lat:5.0000, lon:77.1767}
];
function boundaryLonAtLat(lat){
  const pts = IMBL;
  if(lat >= pts[0].lat) return pts[0].lon;
  if(lat <= pts[pts.length-1].lat) return pts[pts.length-1].lon;
  for(let i=0;i<pts.length-1;i++){
    const a=pts[i], b=pts[i+1];
    if(lat<=a.lat && lat>=b.lat){
      const frac = (a.lat-lat)/((a.lat-b.lat)||1e-9);
      return a.lon + (b.lon-a.lon)*frac;
    }
  }
  return pts[pts.length-1].lon;
}
function maritimeBoundaryCheck(lat,lon){
  const inRange = lat <= 10.6 && lat >= 4.5;
  const bLon = boundaryLonAtLat(clamp(lat,5.0,10.0833));
  const distance = haversine(lat,lon,lat,bLon);
  const crossed = inRange && lon > bLon;
  return {distance, crossed, point:[lat,bLon], inRange, name:"India–Sri Lanka Maritime Boundary"};
}
/* Rough coastal-latitude approximation for state boundaries (east coast / west coast) */
const EAST_COAST_BORDERS = [
  {lat:8.083, name:"Tamil Nadu → Kerala"}, {lat:13.65, name:"Tamil Nadu → Andhra Pradesh"},
  {lat:18.78, name:"Andhra Pradesh → Odisha"}, {lat:21.60, name:"Odisha → West Bengal"}
];
const WEST_COAST_BORDERS = [
  {lat:8.083, name:"Tamil Nadu → Kerala"}, {lat:12.75, name:"Kerala → Karnataka"},
  {lat:14.90, name:"Karnataka → Goa"}, {lat:15.80, name:"Goa → Maharashtra"}, {lat:20.40, name:"Maharashtra → Gujarat"}
];
function allStateBoundaries_approx(lat,lon){
  const list = lon >= 78.0 ? EAST_COAST_BORDERS : WEST_COAST_BORDERS;
  return list.map(b=>({name:b.name, lat:b.lat, lon:lon, distance:haversine(lat,lon,b.lat,lon)})).sort((a,b)=>a.distance-b.distance);
}
function allStateBoundaries(lat,lon){
  const real = realStateBoundaryDistances(lat,lon);
  if(real && real.length){
    return real.slice(0,4).map(r=>({name:r.name, lat:lat, lon:lon, distance:r.distance}));
  }
  return allStateBoundaries_approx(lat,lon);
}
/* Which state a point currently falls in — dynamic, recomputed from lat/lon every time (not fixed to any single boundary). */
const EAST_STATE_SEGMENTS = [
  {upto:8.083, name:"Kerala"}, {upto:13.65, name:"Tamil Nadu"}, {upto:18.78, name:"Andhra Pradesh"},
  {upto:21.60, name:"Odisha"}, {upto:90, name:"West Bengal"}
];
const WEST_STATE_SEGMENTS = [
  {upto:8.083, name:"Kerala"}, {upto:12.75, name:"Kerala"}, {upto:14.90, name:"Karnataka"},
  {upto:15.80, name:"Goa"}, {upto:20.40, name:"Maharashtra"}, {upto:90, name:"Gujarat"}
];
function currentStateName_approx(lat,lon){
  const list = lon >= 78.0 ? EAST_STATE_SEGMENTS : WEST_STATE_SEGMENTS;
  for(const seg of list){ if(lat < seg.upto) return seg.name; }
  return list[list.length-1].name;
}
function currentStateName(lat,lon){
  const real = findRealStateForPoint(lat,lon);
  if(real) return real.properties.name;
  return currentStateName_approx(lat,lon);
}
const TIER_RANK = {safe:0, approaching:1, high:2, critical:3};
function tierFor(distanceKm){
  if(distanceKm < settings.criticalKm) return 'critical';
  if(distanceKm < settings.highKm) return 'high';
  if(distanceKm < settings.warningKm) return 'approaching';
  return 'safe';
}
function borderPenalty(tier){ return tier==='critical'?40:tier==='high'?20:tier==='approaching'?8:0; }
function computeBorderSummary(lat,lon){
  const states = allStateBoundaries(lat,lon);
  const marine = maritimeBoundaryCheck(lat,lon);
  const stateTier = tierFor(states[0].distance);
  const marineTier = marine.crossed ? 'critical' : tierFor(marine.distance);
  const worseIsState = TIER_RANK[stateTier] >= TIER_RANK[marineTier];
  const worst = worseIsState
    ? {type:'state', name:states[0].name, distance:states[0].distance, tier:stateTier, crossed:false}
    : {type:'maritime', name:marine.name, distance:marine.distance, tier:marineTier, crossed:marine.crossed};
  const bLat = worst.type==='state' ? states[0].lat : marine.point[0];
  const bLon = worst.type==='state' ? states[0].lon : marine.point[1];
  const inLanka = marine.inRange && marine.crossed;
  const currentState = inLanka ? null : currentStateName(lat,lon);
  return {state:states[0], otherState:states[1]||states[0], marine, stateTier, marineTier, worst, currentState,
    bearing:bearingBetween(lat,lon,bLat,bLon)};
}

/* ============== REAL GEOGRAPHY: STATE POLYGONS + WATER BODIES (Part 6) ==============
   Uses the real, publicly-sourced boundaries in geodata.js (GADM-derived India
   state/UT polygons; Natural Earth lakes & rivers clipped to India) whenever
   that file has loaded. Every function below degrades gracefully — if
   geodata.js is missing for any reason, HAS_GEODATA is false and the older
   latitude-band approximation above (still present, renamed *_approx) is used
   instead, so nothing breaks. Community/public-domain datasets, not official
   survey charts — see the Data Sources page. */
const HAS_GEODATA = (typeof INDIA_STATES_GEOJSON !== 'undefined' && typeof INDIA_WATER_BODIES_GEOJSON !== 'undefined');
/* The Settings dropdown's state names differ slightly from the downloaded
   dataset's official/older names — map both ways so lookups never silently
   miss a real state the user actually selected. */
const STATE_NAME_ALIASES = {
  "Odisha":"Orissa", "Orissa":"Odisha",
  "Andaman & Nicobar":"Andaman and Nicobar Islands", "Andaman and Nicobar":"Andaman and Nicobar Islands",
  "Puducherry":"Pondicherry", "Pondicherry":"Puducherry"
};
function findStateFeatureByName(uiName){
  if(!HAS_GEODATA || !uiName) return null;
  const norm = s => (s||'').toLowerCase().trim();
  let f = INDIA_STATES_GEOJSON.features.find(x => norm(x.properties.name) === norm(uiName));
  if(f) return f;
  const alias = STATE_NAME_ALIASES[uiName];
  if(alias) f = INDIA_STATES_GEOJSON.features.find(x => norm(x.properties.name) === norm(alias));
  return f || null;
}
// Ray-casting point-in-polygon over GeoJSON rings ([ [lon,lat], ... ]).
function pointInRing(lat, lon, ring){
  let inside = false;
  for(let i=0, j=ring.length-1; i<ring.length; j=i++){
    const xi=ring[i][0], yi=ring[i][1], xj=ring[j][0], yj=ring[j][1];
    const hit = ((yi>lat)!==(yj>lat)) && (lon < (xj-xi)*(lat-yi)/((yj-yi)||1e-12) + xi);
    if(hit) inside = !inside;
  }
  return inside;
}
function pointInPolygonCoords(lat, lon, polyCoords){
  if(!polyCoords || !polyCoords.length) return false;
  if(!pointInRing(lat, lon, polyCoords[0])) return false;
  for(let i=1;i<polyCoords.length;i++){ if(pointInRing(lat, lon, polyCoords[i])) return false; }
  return true;
}
function pointInFeature(lat, lon, feature){
  const g = feature && feature.geometry;
  if(!g) return false;
  if(g.type === 'Polygon') return pointInPolygonCoords(lat, lon, g.coordinates);
  if(g.type === 'MultiPolygon') return g.coordinates.some(poly => pointInPolygonCoords(lat, lon, poly));
  return false;
}
// Planar (equirectangular) point-to-segment / point-to-line distance in km —
// accurate enough at India's scale for "how far to this border/river" checks.
function distPointToSegmentKm(lat, lon, lat1, lon1, lat2, lon2){
  const kx = 111.32 * Math.cos((lat*Math.PI)/180), ky = 110.57;
  const x = lon*kx, y = lat*ky, x1 = lon1*kx, y1 = lat1*ky, x2 = lon2*kx, y2 = lat2*ky;
  const dx = x2-x1, dy = y2-y1, len2 = dx*dx+dy*dy;
  let tt = len2 ? ((x-x1)*dx+(y-y1)*dy)/len2 : 0;
  tt = Math.max(0, Math.min(1, tt));
  const px = x1+tt*dx, py = y1+tt*dy;
  return Math.hypot(x-px, y-py);
}
function distPointToLine(lat, lon, line){
  let best = Infinity;
  for(let i=0;i<line.length-1;i++){
    const d = distPointToSegmentKm(lat, lon, line[i][1], line[i][0], line[i+1][1], line[i+1][0]);
    if(d<best) best=d;
  }
  return best;
}
function distPointToFeatureBoundary(lat, lon, feature){
  const g = feature && feature.geometry;
  if(!g) return Infinity;
  const polys = g.type==='Polygon' ? [g.coordinates] : (g.type==='MultiPolygon' ? g.coordinates : []);
  let best = Infinity;
  polys.forEach(poly => poly.forEach(ring => { const d = distPointToLine(lat, lon, ring); if(d<best) best=d; }));
  return best;
}
/* Real state/UT polygon a point falls inside (or null if it's out at sea /
   off every polygon — the caller then falls back to the coastal approximation). */
function findRealStateForPoint(lat, lon){
  if(!HAS_GEODATA) return null;
  for(const f of INDIA_STATES_GEOJSON.features){ if(pointInFeature(lat, lon, f)) return f; }
  return null;
}
function realStateBoundaryDistances(lat, lon){
  if(!HAS_GEODATA) return null;
  return INDIA_STATES_GEOJSON.features
    .map(f => ({name:f.properties.name, distance:distPointToFeatureBoundary(lat, lon, f)}))
    .sort((a,b)=>a.distance-b.distance);
}
/* Saltwater vs. freshwater classification — checks the real named lakes
   (polygons) and rivers (lines) in geodata.js first, then falls back to a
   land/sea test using the real state polygons. Never invents a location:
   returns type:'unavailable' if geodata.js didn't load, and type:'land' (no
   fabricated name) if the point is ashore but not on any mapped lake/river. */
function classifyWaterType(lat, lon){
  if(!HAS_GEODATA) return {type:'unavailable'};
  const lakeHit = INDIA_WATER_BODIES_GEOJSON.features.find(f => f.properties.kind==='lake' && pointInFeature(lat, lon, f));
  if(lakeHit) return {type:'lake', name:lakeHit.properties.name};
  let nearestRiver=null, nearestD=Infinity;
  INDIA_WATER_BODIES_GEOJSON.features.forEach(f=>{
    if(f.properties.kind!=='river') return;
    const g=f.geometry; if(!g) return;
    const lines = g.type==='LineString' ? [g.coordinates] : (g.type==='MultiLineString' ? g.coordinates : []);
    lines.forEach(line=>{ const d=distPointToLine(lat, lon, line); if(d<nearestD){ nearestD=d; nearestRiver=f.properties.name; } });
  });
  if(nearestRiver && nearestD <= 3) return {type:'river', name:nearestRiver, distanceKm:+nearestD.toFixed(1)};
  return findRealStateForPoint(lat, lon) ? {type:'land'} : {type:'sea'};
}
/* Part 10 helpers: locate a mapped lake polygon by name, and get its
   lon/lat bounding box, so freshwater zones can be scattered across a
   reservoir's REAL shape instead of a guessed radius wherever a fisherman
   happened to click or search. */
function findLakeFeatureByName(name){
  if(!HAS_GEODATA || !name) return null;
  const norm = s => (s||'').toLowerCase().trim();
  return INDIA_WATER_BODIES_GEOJSON.features.find(f => f.properties.kind==='lake' && norm(f.properties.name)===norm(name)) || null;
}
function featureBBox(feature){
  const g = feature && feature.geometry;
  if(!g) return null;
  const polys = g.type==='Polygon' ? [g.coordinates] : (g.type==='MultiPolygon' ? g.coordinates : []);
  let minLon=Infinity, maxLon=-Infinity, minLat=Infinity, maxLat=-Infinity;
  polys.forEach(poly => poly.forEach(ring => ring.forEach(([lon,lat]) => {
    if(lon<minLon) minLon=lon; if(lon>maxLon) maxLon=lon;
    if(lat<minLat) minLat=lat; if(lat>maxLat) maxLat=lat;
  })));
  return isFinite(minLon) ? {minLon,maxLon,minLat,maxLat} : null;
}
// A curated INLAND_WATER_BODIES search key (e.g. "Mettur", whose real-world
// anchor is the dam/town) mapped to the matching real lake polygon name in
// geodata.js, when one is actually mapped there. Left unmapped for every
// other curated reservoir (Bhavanisagar, Sathanur, Aliyar, Amaravathy,
// Thirumoorthy, Palar-Porandalar, Kolavai) — geodata.js has no polygon for
// them, so generateFreshwaterZones() honestly falls back to a small-radius
// scatter for those rather than inventing a shape.
const INLAND_WATER_BODY_POLYGON_NAMES = {
  "Mettur": "Stanley Reservoir",
  "Stanley Reservoir": "Stanley Reservoir"
};
/* ============== SPECIES REFERENCE LOOKUP (Part 6, item 3) ==============
   Looks up whether a species (from the curated INDIA_SPECIES list in
   geodata.js) is documented in the state/coast nearest the given point. This
   is REGIONAL/SEASONAL reference data, not a live per-point GPS sighting —
   honestly labeled as such in the UI (species_result_note). If the species
   isn't listed for that state, the answer is an honest "not recorded here",
   never a fabricated location. */
const HAS_SPECIES = typeof INDIA_SPECIES !== 'undefined';
function speciesPresentInState(species, stateName){
  if(!stateName) return false;
  const norm = s => (s||'').toLowerCase().trim();
  const target = norm(stateName);
  const altTarget = norm(STATE_NAME_ALIASES[stateName] || '');
  return species.states.some(s => { const n = norm(s); return n===target || (altTarget && n===altTarget); });
}
function lookupSpeciesAtLocation(speciesId, lat, lon){
  if(!HAS_SPECIES) return null;
  const species = INDIA_SPECIES.find(s=>s.id===speciesId);
  if(!species) return null;
  const stateName = currentStateName(lat, lon);
  const present = speciesPresentInState(species, stateName);
  return {species, stateName, present};
}
function waterTypeLabel(info){
  if(!info) return '';
  if(info.type==='lake') return t('water_freshwater_lake', {name:info.name});
  if(info.type==='river') return t('water_freshwater_river', {name:info.name});
  if(info.type==='land') return t('water_unknown');
  if(info.type==='sea') return t('water_saltwater');
  return t('water_unavailable');
}
function populateSpeciesSelect(){
  const sel = document.getElementById('speciesSelect');
  if(!sel || !HAS_SPECIES || sel.options.length) return;
  INDIA_SPECIES.forEach(s=>{
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.name} (${s.sci})`;
    sel.appendChild(opt);
  });
}
function renderSpeciesResult(){
  const box = document.getElementById('speciesResultBox');
  if(!box) return;
  if(!selectedLatLon){ box.innerHTML = `<div class="hint">${t('species_no_location')}</div>`; return; }
  const sel = document.getElementById('speciesSelect');
  if(!sel || !sel.value){ box.innerHTML=''; return; }
  const result = lookupSpeciesAtLocation(sel.value, selectedLatLon.lat, selectedLatLon.lon);
  if(!result){ box.innerHTML=''; return; }
  const msg = result.present
    ? t('species_found', {name:result.species.name, sci:result.species.sci, state:result.stateName})
    : t('species_not_found', {name:result.species.name, sci:result.species.sci, state:result.stateName});
  box.innerHTML = `<div class="finding ${result.present?'':'red'}"><h4>${result.present?'✅':'❌'} ${result.species.name}</h4><div class="sub">${msg}</div></div>`;
}

/* ============== LIVE WEATHER / WAVE (Open-Meteo, free & CORS-enabled) ============== */
async function fetchRealWeather(lat,lon){
  try{
    // temperature_2m and precipitation added for freshwater/inland zones
    // (Part 10) — this standard forecast endpoint covers ANY land point,
    // unlike the ocean-only marine API below, so it's real data there too.
    // Ocean callers simply don't read the extra fields; no behavior change.
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(4)}&longitude=${lon.toFixed(4)}&current=wind_speed_10m,wind_direction_10m,temperature_2m,precipitation&timezone=auto`);
    if(!res.ok) return null;
    const d = await res.json();
    if(d && d.current && typeof d.current.wind_speed_10m === 'number'){
      const out = {wind: d.current.wind_speed_10m};
      if(typeof d.current.wind_direction_10m === 'number') out.windDir = d.current.wind_direction_10m;
      if(typeof d.current.temperature_2m === 'number') out.airTemp = d.current.temperature_2m;
      if(typeof d.current.precipitation === 'number') out.rain = d.current.precipitation;
      return out;
    }
  }catch(e){}
  return null;
}
async function fetchRealMarine(lat,lon){
  try{
    const res = await fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${lat.toFixed(4)}&longitude=${lon.toFixed(4)}&current=wave_height,sea_surface_temperature&timezone=auto`);
    if(!res.ok) return null;
    const d = await res.json();
    if(d && d.current){
      const out = {};
      if(typeof d.current.wave_height === 'number') out.wave = d.current.wave_height;
      if(typeof d.current.sea_surface_temperature === 'number') out.sst = d.current.sea_surface_temperature;
      if(Object.keys(out).length) return out;
    }
  }catch(e){}
  return null;
}
async function geocodeSearch(query){
  // A named coastal stretch ("Coromandel Coast") or other regional/informal
  // name is often tagged in OSM as a linear coastline or natural feature
  // rather than an indexed place, so it can come back empty from the first,
  // narrowly-scoped query. Retry once, wider, before giving up — still a
  // single real result from Nominatim itself, never an invented one.
  async function tryQuery(url){
    try{
      const res = await fetch(url);
      if(!res.ok) return null;
      const data = await res.json();
      if(data && data.length) return data[0];
    }catch(e){}
    return null;
  }
  let hit = await tryQuery(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1&countrycodes=in,lk`);
  if(!hit){
    // Widen: drop the country filter and ask for a few candidates in case
    // the first (best) one was outside in/lk but still a legitimate,
    // recognizable coastal place the fisherman meant.
    hit = await tryQuery(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`);
  }
  if(hit) return {lat:parseFloat(hit.lat), lon:parseFloat(hit.lon), label:(hit.display_name||query).split(',')[0]};
  return null;
}

/* ============== KNOWN FISHING HARBORS (Part 5) ==============
   A small curated list of real, publicly known major fishing harbors along
   the Indian coastline — general-knowledge reference points, NOT
   survey-grade positions and NOT a live feed. Shown so the fisherman has at
   least one genuinely real, verifiable landmark on the map alongside the
   heuristic/simulated candidate zones — a different kind of information,
   and clearly labeled as such (see the Data Sources page). */
const FISHING_HARBORS = [
  {name:"Kasimedu Fishing Harbour", state:"Tamil Nadu", lat:13.1167, lon:80.2967},
  {name:"Cuddalore Fishing Harbour", state:"Tamil Nadu", lat:11.7480, lon:79.7714},
  {name:"Nagapattinam Fishing Harbour", state:"Tamil Nadu", lat:10.7672, lon:79.8449},
  {name:"Thoothukudi Fishing Harbour", state:"Tamil Nadu", lat:8.7642, lon:78.1348},
  {name:"Vizhinjam Fishing Harbour", state:"Kerala", lat:8.3778, lon:76.9950},
  {name:"Neendakara Fishing Harbour", state:"Kerala", lat:8.9450, lon:76.5330},
  {name:"Munambam Fishing Harbour", state:"Kerala", lat:10.1667, lon:76.1667},
  {name:"Beypore Fishing Harbour", state:"Kerala", lat:11.1710, lon:75.8080},
  {name:"Mangalore Fishing Harbour", state:"Karnataka", lat:12.8500, lon:74.8300},
  {name:"Malpe Fishing Harbour", state:"Karnataka", lat:13.3500, lon:74.7050},
  {name:"Karwar Fishing Harbour", state:"Karnataka", lat:14.8000, lon:74.1300},
  {name:"Sassoon Dock", state:"Maharashtra", lat:18.9067, lon:72.8258},
  {name:"Veraval Fishing Harbour", state:"Gujarat", lat:20.9159, lon:70.3629},
  {name:"Porbandar Fishing Harbour", state:"Gujarat", lat:21.6417, lon:69.6293},
  {name:"Visakhapatnam Fishing Harbour", state:"Andhra Pradesh", lat:17.6883, lon:83.2879},
  {name:"Kakinada Fishing Harbour", state:"Andhra Pradesh", lat:16.9891, lon:82.2475},
  {name:"Paradip Fishing Harbour", state:"Odisha", lat:20.3168, lon:86.6117}
];
function nearestFishingHarbor(lat, lon){
  let best=null, bestD=Infinity;
  FISHING_HARBORS.forEach(h=>{ const d = haversine(lat,lon,h.lat,h.lon); if(d<bestD){ bestD=d; best=h; } });
  return best ? {...best, distanceKm:+bestD.toFixed(1)} : null;
}
function drawHarborMarkers(){
  if(!harborMarkersLayer) return;
  harborMarkersLayer.clearLayers();
  const chk = document.getElementById('chkShowHarbors');
  if(chk && !chk.checked) return;
  FISHING_HARBORS.forEach(h=>{
    const icon = L.divIcon({className:'harbor-icon', html:'⚓', iconSize:[18,18]});
    L.marker([h.lat,h.lon], {icon}).addTo(harborMarkersLayer)
      .bindPopup(`<b>⚓ ${h.name}</b><br>${h.state}<br><span style="color:#8ba0c2;font-size:11px;">${t('harbor_popup_note')}</span>`);
  });
}

/* ============== ZONE GENERATION ============== */
/* Part 5: real geographic constraint instead of a uniformly random 0-360°
   bearing. India's east coast (Bay of Bengal) runs roughly north-south with
   open sea to the east; the west coast (Arabian Sea) has open sea to the
   west. Candidate zones are now generated within a realistic "seaward cone"
   for whichever coast the fisherman is on, so they land over plausible open
   water instead of occasionally pointing back toward the coastline — the
   same real coastline split (lon >= 78.0) already used elsewhere in this
   file for state boundaries. */
function seawardBearingRange(lon){
  return (lon >= 78.0) ? {center:100, spread:70} : {center:260, spread:70};
}
/* Dynamic zone lettering (A..Z, then AA, AB, ...) so the zone count is no
   longer hardcoded to 5 — the fisherman can ask for as many as they want. */
function zoneLetter(i){
  let n = i, s = '';
  do { s = String.fromCharCode(65 + (n % 26)) + s; n = Math.floor(n/26) - 1; } while(n >= 0);
  return s;
}

/* Shared by every zone source (simulated / Open-Meteo-enhanced / backend+satellite):
   computes border distance+tier+label+combined score from the real treaty/state
   boundary math that already lives in this file, and mutates+returns the zone. */
function attachBorderData(z){
  const stateB = allStateBoundaries(z.lat,z.lon)[0];
  const marB = maritimeBoundaryCheck(z.lat,z.lon);
  const stTier = tierFor(stateB.distance);
  const marTier = marB.crossed ? 'critical' : tierFor(marB.distance);
  const nearer = (TIER_RANK[stTier] >= TIER_RANK[marTier]) ? {name:stateB.name, distance:stateB.distance, tier:stTier} : {name:marB.name, distance:marB.distance, tier:marTier};
  z.borderDistance = +nearer.distance.toFixed(1);
  z.borderTier = nearer.tier;
  z.borderLabel = nearer.name;
  z.combined = Math.round(z.overall - borderPenalty(z.borderTier));
  return z;
}

/* Part 4: safety overrides fishing score. Every "best zone" pick in this
   app (ORCA ANALYZE, Compare, chat, return-route) now runs through this
   comparator instead of a plain highest-combined-score reduce: a safer
   color tier always wins first, then a safer border tier, and only ties
   within the same safety tier are broken by the raw combined score. A
   zone can no longer out-rank a safer one purely by having a better catch
   number — a fisherman's safety comes first. */
const COLOR_RANK = {green:0, yellow:1, red:2};
function saferBetter(a, b){
  const ca = COLOR_RANK[a.color] ?? 2, cb = COLOR_RANK[b.color] ?? 2;
  if(ca !== cb) return ca < cb ? a : b;
  const ba = TIER_RANK[a.borderTier] ?? 3, bb = TIER_RANK[b.borderTier] ?? 3;
  if(ba !== bb) return ba < bb ? a : b;
  return b.combined > a.combined ? b : a;
}

/* Tier 3 (worst case, always available): fully simulated, deterministic per
   location, used the instant a location is picked (so the UI never sits
   empty) and as the final fallback if neither the backend nor Open-Meteo
   are reachable. */
/* Part 9: never plot a candidate on real mapped land. The seaward bearing
   cone above already keeps candidates pointed at open water in the common
   case, but a bay, inlet or peninsula can still put a raw angle+distance
   candidate ashore. Before accepting a candidate, check it against the same
   real state polygons already used everywhere else in this file for border
   distance (findRealStateForPoint) — if it's on land, retry with a
   different angle/distance from the same deterministic seed (so results
   stay reproducible) instead of ever showing a fishing zone on dry land. */
const LAND_REJECT_MAX_RETRIES = 12;
// A river delta or mangrove archipelago (e.g. the Sundarbans) can pack land
// densely enough that every angle inside the narrow seaward cone above still
// lands on some island or bank within LAND_REJECT_MAX_RETRIES tries. Rather
// than ever accept an on-land point, fall back to a wider full-circle sweep
// (still deterministic, same seed family) before giving up.
const LAND_REJECT_FALLBACK_RETRIES = 40;
function generateZones(lat,lon,radiusKm,count){
  radiusKm = radiusKm || (settings && settings.searchRadiusKm) || 20;
  count = count || (settings && settings.zoneCount) || 5;
  const baseSeed = Math.abs(hashStr(lat.toFixed(3)+","+lon.toFixed(3)));
  const minDist = Math.max(0.5, radiusKm*0.15);
  const span = Math.max(radiusKm - minDist, 0.1);
  const {center:bearCenter, spread:bearSpread} = seawardBearingRange(lon);
  const zones = [];
  for(let i=0;i<count;i++){
    let rand, zLat, zLon;
    for(let attempt=0; attempt<=LAND_REJECT_MAX_RETRIES; attempt++){
      rand = mulberry32(baseSeed + i*7919 + attempt*104729);
      const angle = ((bearCenter + (rand()*2-1)*bearSpread) % 360 + 360) % 360;
      const dist = minDist + rand()*span;
      [zLat,zLon] = destinationPoint(lat,lon,angle,dist);
      if(!HAS_GEODATA || !findRealStateForPoint(zLat,zLon)) break; // open water (or can't check) — accept
      // else: candidate landed on real mapped land — loop and retry a different angle/distance
    }
    if(HAS_GEODATA && findRealStateForPoint(zLat,zLon)){
      // Seaward cone exhausted without finding open water (dense delta/
      // archipelago terrain) — widen to a full 360° sweep before accepting
      // anything, so a land point is still never shown as a fishing zone.
      for(let attempt=0; attempt<LAND_REJECT_FALLBACK_RETRIES; attempt++){
        rand = mulberry32(baseSeed + i*104729 + attempt*7919 + 999983);
        const angle = rand()*360;
        const dist = minDist + rand()*span;
        [zLat,zLon] = destinationPoint(lat,lon,angle,dist);
        if(!findRealStateForPoint(zLat,zLon)) break;
      }
    }
    // Absolute guarantee: a pathologically land-locked search point (dense
    // river-delta terrain where even a full-circle sweep can't find open
    // water within the radius) skips this candidate entirely rather than
    // ever showing a fabricated zone on dry land. The fisherman may then
    // see fewer than the zone count they asked for at such a point — the
    // honest outcome, never a silently-invented one.
    if(HAS_GEODATA && findRealStateForPoint(zLat,zLon)) continue;
    const fish = Math.round(35 + rand()*63);
    const wind = Math.round(8 + rand()*32);
    const windDir = Math.round(rand()*360); // simulated heading (wind blowing FROM this bearing), only used for the wind-flow animation
    const wave = +(0.4 + rand()*2.3).toFixed(1);
    const sst = +(26 + rand()*4.5).toFixed(1);
    const windRisk = clamp((wind-8)/32*100,0,100);
    const waveRisk = clamp((wave-0.4)/2.3*100,0,100);
    const riskIndex = windRisk*0.5 + waveRisk*0.5;
    const weatherKey = riskIndex<35?'good':riskIndex<65?'changing':'highrisk';
    const oceanKey = riskIndex<35?'low':riskIndex<65?'medium':'high';
    const geoRoll = rand();
    const geoKey = geoRoll<0.8?'low':(geoRoll<0.94?'medium':'high');
    const geoScore = geoKey==='low'?100:geoKey==='medium'?55:15;
    const overall = Math.round(fish*0.45 + (100-riskIndex)*0.35 + geoScore*0.20);
    let color = 'red';
    if(overall>=75 && oceanKey!=='high') color='green';
    else if(overall>=50) color='yellow';
    const z = {
      id:'zone'+i, letter:zoneLetter(i), lat:zLat, lon:zLon,
      distance:+haversine(lat,lon,zLat,zLon).toFixed(1),
      fish, wind, windDir, wave, sst, weatherKey, oceanKey, geoKey, overall, color, dataTier:'sim', fetchedAt: Date.now()
    };
    zones.push(attachBorderData(z));
  }
  zones.sort((a,b)=>a.distance-b.distance);
  // Re-letter sequentially in case a candidate was skipped above (the land-
  // reject guarantee), so labels stay contiguous (A, B, C…) with no gaps.
  zones.forEach((z,i)=>{ z.id = 'zone'+i; z.letter = zoneLetter(i); });
  return zones;
}

/* Radius auto-expansion (Part 6): generateZones() above always synthesizes
   `count` candidate zones, so there's no literal "zero fishing centers"
   state to detect — the honest equivalent is a QUALITY trigger. If nothing
   within the fisherman's requested radius scores well (best overall score
   below the same 50-point cutoff the app already uses for its own
   green/yellow/red coloring), the search radius is stepped up a ladder
   (requested, x1.5, x2, x2.5 — matching the literal 20→30→40→50 km example)
   while the ZONE COUNT stays exactly what the fisherman chose. The map then
   shows a second yellow dashed circle for the radius actually used,
   alongside the original cyan circle for the radius requested. */
function bestZoneScore(zones){ return zones.reduce((m,z)=>Math.max(m, z.overall||0), 0); }
const RADIUS_EXPAND_LADDER = [1, 1.5, 2, 2.5];
const RADIUS_QUALITY_THRESHOLD = 50;
// Part 7: how far out to sea a point can be and still get zone data. Beyond
// this, a click is deep open ocean rather than a real coastal fishing
// ground, and generateZones() would otherwise happily fabricate plausible-
// looking zones anywhere on Earth — so instead selectLocation() stops and
// says the point is out of range (see OFFSHORE_LIMIT_KM usage below).
const OFFSHORE_LIMIT_KM = 150;
function generateZonesWithAutoExpand(lat, lon, requestedRadiusKm, count){
  let usedRadius = requestedRadiusKm;
  let zones = generateZones(lat, lon, requestedRadiusKm, count);
  if(bestZoneScore(zones) < RADIUS_QUALITY_THRESHOLD){
    for(let i=1;i<RADIUS_EXPAND_LADDER.length;i++){
      const tryRadius = Math.min(100, +(requestedRadiusKm * RADIUS_EXPAND_LADDER[i]).toFixed(1));
      if(tryRadius <= usedRadius) continue;
      const tryZones = generateZones(lat, lon, tryRadius, count);
      if(bestZoneScore(tryZones) > bestZoneScore(zones)){ zones = tryZones; usedRadius = tryRadius; }
      if(bestZoneScore(zones) >= RADIUS_QUALITY_THRESHOLD) break;
    }
  }
  return {zones, usedRadius};
}

/* ============== FRESHWATER ZONE GENERATION (Part 10) ==============
   ORCA's ocean pipeline above (satellite SST/chlorophyll, wave height,
   seaward-cone geometry, maritime-border framing) has nothing honest to say
   about a lake or reservoir. This is a SEPARATE, smaller engine for real
   inland freshwater fisheries (Tamil Nadu TNFDC reservoirs and similar):
   its own zone placement, its own scoring from real wind + air temp +
   rainfall (no wave/SST/chlorophyll ever fabricated for a lake), and its
   own honest fallback when no mapped shape exists for the water body. */
const FRESHWATER_FALLBACK_RADIUS_KM = 1.8; // used only when no real polygon is mapped for the water body
function makeFreshwaterZone(zLat, zLon, anchorLat, anchorLon, i, fwInfo, onRealPolygon){
  const rand = mulberry32(Math.abs(hashStr('fwz:'+zLat.toFixed(4)+','+zLon.toFixed(4))));
  // Inland reservoirs have no live satellite fishery signal to draw on, so
  // this stays a plain simulated estimate (dataTier:'sim' until Open-Meteo
  // upgrades the wind/air-temp/rain fields below) — never dressed up as
  // more "real" than it is.
  const fish = Math.round(35 + rand()*55);
  const wind = Math.round(4 + rand()*20); // inland wind tends calmer than open sea
  const windDir = Math.round(rand()*360);
  const windRisk = clamp((wind-4)/20*100, 0, 100);
  const weatherKey = windRisk<35?'good':windRisk<65?'changing':'highrisk';
  const overall = Math.round(fish*0.6 + (100-windRisk)*0.4);
  let color = 'red';
  if(overall>=70) color='green'; else if(overall>=45) color='yellow';
  const z = {
    id:'zone'+i, letter:zoneLetter(i), lat:zLat, lon:zLon,
    distance:+haversine(anchorLat,anchorLon,zLat,zLon).toFixed(1),
    fish, wind, windDir, weatherKey, overall, color,
    isFreshwater:true,
    waterBodyName: (fwInfo && fwInfo.name) || null,
    onRealPolygon: !!onRealPolygon,
    // Ocean-only fields are explicitly absent, never fabricated for a lake —
    // fmtVal()/fmtKey() render these as an honest "—" / "not applicable"
    // everywhere they're displayed.
    wave:null, sst:null, oceanKey:null, geoKey:null, chlorophyllAvailable:false,
    dataTier:'sim', fetchedAt: Date.now()
  };
  return attachBorderData(z);
}
function generateFreshwaterZones(lat, lon, fwInfo, count, curatedKey){
  count = count || (settings && settings.zoneCount) || 5;
  const baseSeed = Math.abs(hashStr('fw:'+lat.toFixed(3)+","+lon.toFixed(3)));
  // Prefer a REAL mapped polygon for this water body when one exists, so
  // zones scatter across the reservoir's actual shape rather than a guessed
  // radius around wherever the fisherman clicked or searched.
  let lakeFeature = null;
  if(fwInfo && fwInfo.type==='lake') lakeFeature = findLakeFeatureByName(fwInfo.name);
  if(!lakeFeature && curatedKey){
    const mappedName = INLAND_WATER_BODY_POLYGON_NAMES[curatedKey];
    if(mappedName) lakeFeature = findLakeFeatureByName(mappedName);
  }
  const zones = [];
  if(lakeFeature){
    const bbox = featureBBox(lakeFeature);
    for(let i=0;i<count;i++){
      let zLat=null, zLon=null, found=false;
      for(let attempt=0; attempt<60; attempt++){
        const rand = mulberry32(baseSeed + i*7919 + attempt*104729);
        const tryLon = bbox.minLon + rand()*(bbox.maxLon-bbox.minLon);
        const tryLat = bbox.minLat + rand()*(bbox.maxLat-bbox.minLat);
        if(pointInFeature(tryLat, tryLon, lakeFeature)){ zLat=tryLat; zLon=tryLon; found=true; break; }
      }
      // Honest: a candidate that never lands inside the real shape after 60
      // tries (a very thin/irregular polygon) is skipped, never placed just
      // outside it and passed off as being on the reservoir.
      if(!found) continue;
      zones.push(makeFreshwaterZone(zLat, zLon, lat, lon, i, fwInfo, true));
    }
  } else {
    // No real polygon mapped for this water body — an honest small-radius
    // scatter around the anchor point instead (still deterministic per
    // location), captioned in the UI as an approximate area, not a shape.
    for(let i=0;i<count;i++){
      const rand = mulberry32(baseSeed + i*7919);
      const angle = rand()*360;
      const dist = 0.2 + rand()*(FRESHWATER_FALLBACK_RADIUS_KM-0.2);
      const [zLat, zLon] = destinationPoint(lat, lon, angle, dist);
      zones.push(makeFreshwaterZone(zLat, zLon, lat, lon, i, fwInfo, false));
    }
  }
  zones.sort((a,b)=>a.distance-b.distance);
  zones.forEach((z,i)=>{ z.id='zone'+i; z.letter=zoneLetter(i); });
  return zones;
}

/* Tier 1 (best, when reachable): the local Python backend, which fetches
   REAL satellite SST + chlorophyll (NOAA CoastWatch ERDDAP) and real
   wind/wave (Open-Meteo) server-side — see backend/main.py. Returns null
   (never throws) if the backend isn't running or times out, so callers can
   fall through to the next tier without any special-casing. */
async function tryBackendZones(lat, lon, radiusKm, count){
  radiusKm = radiusKm || (settings && settings.searchRadiusKm) || 20;
  count = count || (settings && settings.zoneCount) || 5;
  try{
    const controller = new AbortController();
    const timer = setTimeout(()=>controller.abort(), 6000);
    let res;
    try{
      res = await fetch(`${BACKEND_URL}/api/zones?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}&radius_km=${radiusKm}&count=${count}`, {signal:controller.signal});
    } finally { clearTimeout(timer); }
    if(!res.ok) return null;
    const data = await res.json();
    if(!data || !Array.isArray(data.zones) || !data.zones.length) return null;
    let zones = data.zones.map(bz=>{
      const z = {
        id:bz.id, letter:bz.letter, lat:bz.lat, lon:bz.lon, distance:bz.distance,
        fish:bz.fish, wind:bz.wind, windDir: (typeof bz.windDir==='number'?bz.windDir:undefined), wave:bz.wave, sst:bz.sst,
        chlorophyll: bz.chlorophyll, chlorophyllAvailable: !!bz.chlorophyll_available,
        weatherKey:bz.weatherKey, oceanKey:bz.oceanKey, geoKey:'low',
        overall:bz.overall, color:bz.color,
        dataTier: bz.chlorophyll_available ? 'satellite' : 'live',
        sources: bz.sources || {}, fetchedAt: Date.now()
      };
      return attachBorderData(z);
    });

    // Part 9 ("never plot a zone on land"): the Python backend has no land/
    // water polygon data of its own, so any candidate it proposes is
    // re-checked here against the same real state-polygon data used
    // everywhere else in this file. A candidate that's actually on land is
    // dropped and replaced with a land-safe simulated one so the fisherman
    // still gets the zone COUNT they asked for — the replacement is
    // honestly tagged dataTier:'sim' (never claimed as the satellite/live
    // data the backend never actually measured for that spot).
    if(HAS_GEODATA){
      const survivors = zones.filter(z => !findRealStateForPoint(z.lat, z.lon));
      const rejected = zones.length - survivors.length;
      if(rejected > 0){
        const backfill = generateZones(lat, lon, radiusKm, rejected);
        // Part 11: flagged so the Agent Activity panel can honestly show
        // REJECTED instead of implying full trust in a substitute zone —
        // the backend's original candidate here was thrown out for being on
        // real mapped land; this is a safe stand-in, not what was asked for.
        backfill.forEach(z => { z.wasLandRejected = true; });
        zones = survivors.concat(backfill);
      }
    }
    zones.sort((a,b)=>a.distance-b.distance);
    zones.forEach((z,i)=>{ z.id = 'zone'+i; z.letter = zoneLetter(i); }); // re-letter after any merge so labels stay unique
    return zones;
  }catch(e){ return null; }
}
async function enhanceZonesWithRealData(){
  const snapshot = currentZones;
  const hint = document.getElementById('liveDataHint');
  hint.textContent = t('fetching_live');
  await Promise.all(snapshot.map(async z=>{
    const [w,m] = await Promise.all([fetchRealWeather(z.lat,z.lon), fetchRealMarine(z.lat,z.lon)]);
    let changed=false;
    if(w && typeof w.wind==='number'){ z.wind = Math.round(w.wind); changed=true; }
    if(w && typeof w.windDir==='number'){ z.windDir = Math.round(w.windDir); changed=true; }
    if(m && typeof m.wave==='number'){ z.wave = +m.wave.toFixed(1); changed=true; }
    if(m && typeof m.sst==='number'){ z.sst = +m.sst.toFixed(1); changed=true; }
    if(changed){
      const windRisk = clamp((z.wind-8)/32*100,0,100);
      const waveRisk = clamp((z.wave-0.4)/2.3*100,0,100);
      const riskIndex = windRisk*0.5 + waveRisk*0.5;
      z.weatherKey = riskIndex<35?'good':riskIndex<65?'changing':'highrisk';
      z.oceanKey = riskIndex<35?'low':riskIndex<65?'medium':'high';
      const geoScore = z.geoKey==='low'?100:z.geoKey==='medium'?55:15;
      z.overall = Math.round(z.fish*0.45 + (100-riskIndex)*0.35 + geoScore*0.20);
      let color='red';
      if(z.overall>=75 && z.oceanKey!=='high') color='green'; else if(z.overall>=50) color='yellow';
      z.color = color;
      z.combined = Math.round(z.overall - borderPenalty(z.borderTier));
      z.dataTier = 'live';
      z.fetchedAt = Date.now();
      if(z.marker){ z.marker.setStyle({color:colorHex(z.color), fillColor:colorHex(z.color)}); z.marker.setPopupContent(popupHtml(z)); }
    }
  }));
  hint.textContent = '';
  buildWindField();
  renderZoneGrid(); renderAlerts(); renderCompareSelect();
  if(recommendedZone){
    const upd = currentZones.find(z=>z.id===recommendedZone.id);
    if(upd){ recommendedZone = upd; showFinding(recommendedZone); }
  }
}
/* Freshwater counterpart to enhanceZonesWithRealData() above — real wind +
   air temp + rainfall from Open-Meteo's standard forecast API (works at any
   land coordinate), never the ocean-only marine API (wave/SST have no
   meaning on a lake and stay null throughout). */
async function enhanceFreshwaterZonesWithRealData(){
  const snapshot = currentZones;
  const hint = document.getElementById('liveDataHint');
  hint.textContent = t('fetching_live');
  await Promise.all(snapshot.map(async z=>{
    const w = await fetchRealWeather(z.lat, z.lon);
    let changed=false;
    if(w && typeof w.wind==='number'){ z.wind = Math.round(w.wind); changed=true; }
    if(w && typeof w.windDir==='number'){ z.windDir = Math.round(w.windDir); changed=true; }
    if(w && typeof w.airTemp==='number'){ z.airTemp = +w.airTemp.toFixed(1); changed=true; }
    if(w && typeof w.rain==='number'){ z.rain = +w.rain.toFixed(1); changed=true; }
    if(changed){
      const windRisk = clamp((z.wind-4)/20*100, 0, 100);
      z.weatherKey = windRisk<35?'good':windRisk<65?'changing':'highrisk';
      z.overall = Math.round(z.fish*0.6 + (100-windRisk)*0.4);
      let color='red';
      if(z.overall>=70) color='green'; else if(z.overall>=45) color='yellow';
      z.color = color;
      z.combined = Math.round(z.overall - borderPenalty(z.borderTier));
      z.dataTier = 'live';
      z.fetchedAt = Date.now();
      if(z.marker){ z.marker.setStyle({color:colorHex(z.color), fillColor:colorHex(z.color)}); z.marker.setPopupContent(popupHtml(z)); }
    }
  }));
  hint.textContent = '';
  buildWindField();
  renderZoneGrid(); renderAlerts(); renderCompareSelect();
  if(recommendedZone){
    const upd = currentZones.find(z=>z.id===recommendedZone.id);
    if(upd){ recommendedZone = upd; showFinding(recommendedZone); }
  }
}

/* ============== STATE ============== */
let map, markersLayer, zoneMarkersLayer, boundaryLayerMain, harborMarkersLayer, circleLayer, fishermanMarker, routeLine;
let waterBodiesLayer, stateBoundaryLayer, highlightedStateLayer, expandedCircleLayer;
// Part 9: the line auto-drawn from a picked location to its recommended zone
// the instant a location is selected — separate from routeLine (the
// fisherman-triggered "show route" button below), so the two never fight
// over the same layer or get cleared at the wrong time.
let recommendationLine = null;
// ORCA Python backend (optional) — see backend/README.md.
// On localhost/file:// (development) this always points at the local
// uvicorn server. Once deployed, replace PRODUCTION_BACKEND_URL below with
// your real Render (or other host) backend URL — everything else about the
// app already tolerates the backend being unreachable (see the big comment
// at the top of backend/main.py), so this is the one line to edit after
// deploying the backend.
const PRODUCTION_BACKEND_URL = ''; // e.g. 'https://orca-backend.onrender.com'
const BACKEND_URL = (() => {
  const isLocal = ['localhost', '127.0.0.1', ''].includes(location.hostname) || location.protocol === 'file:';
  if (isLocal) return 'http://localhost:8000';
  return PRODUCTION_BACKEND_URL || 'http://localhost:8000';
})();
let selectedLatLon = null;
let liveLatLon = null;
let liveAccuracy = null;
let currentZones = [];
let compareSelection = new Set();
let recommendedZone = null;
// Part 9 hardening: selectLocation() does real async work (the backend/live
// data upgrade below). If the fisherman picks ANOTHER location before that
// finishes — e.g. a normal click followed quickly by an out-of-range click —
// the earlier call's async tail must never be allowed to land afterwards and
// silently overwrite the newer (or the honest "out of range") result. Each
// call stamps its own sequence number and checks it's still current before
// applying anything it awaited for.
let selectLocationSeq = 0;
let watchId = null;
let lastBorderTier = null;
// Part 11: a fresh location pick (map click / search / GPS) resets
// lastBorderTier to null so the border-tier DISPLAY recomputes cleanly —
// but evaluateBorderAlert() below treats null->anything as an escalation
// and used to speak it out loud immediately, meaning voice announced on
// every single casual map click, not just genuine risk escalation during
// live tracking. This flag lets a fresh pick set the new baseline silently;
// only a REAL change after that (in particular, live-tracking GPS updates,
// which never touch this flag) still speaks.
let suppressNextVoiceAlert = false;
let familyAlerted = {border:false, redzone:false, cyclone:false};
let familyLogEntries = [];
let demoMoveInterval = null;
// Pin-and-compare (Part 7): mark several map points and stack them on the
// Compare Zones page instead of only comparing the single searched location.
let pinMarkersLayer = null;
let pinnedLocations = [];
let pinCompareSelection = new Set();
let pinMode = false;
// Nearby-fishermen presence (Part 8): who else is using this same ORCA
// backend right now, opted in via Settings -> Share My Location.
let fishermenLayer = null;
let presenceInterval = null;   // pushes MY location to the backend while sharing is on
let fishermenWatchInterval = null; // pulls OTHER fishermen while the map layer is on
let nearbyFishermen = [];

let settings = JSON.parse(localStorage.getItem('orcaSettings')||'null') || {
  liveTracking:false, borderAlerts:true, voiceAlerts:false,
  warningKm:5, highKm:3, criticalKm:1, country:'India', state:'Tamil Nadu',
  nameSelf:'', phoneSelf:'', nameFamily1:'', phoneFamily1:'', nameFamily2:'', phoneFamily2:'',
  searchRadiusKm:20, zoneCount:5, shareLocation:false, theme:'dark'
};
// Older saved settings (before Part 1) won't have these — backfill so existing users get the same default behavior.
if(settings.searchRadiusKm===undefined) settings.searchRadiusKm = 20;
if(settings.zoneCount===undefined) settings.zoneCount = 5;
if(settings.nameSelf===undefined) settings.nameSelf = '';
if(settings.nameFamily1===undefined) settings.nameFamily1 = '';
if(settings.nameFamily2===undefined) settings.nameFamily2 = '';
if(settings.shareLocation===undefined) settings.shareLocation = false;
// Part 11: macOS-style redesign — dark stays the default (glare/night use at
// sea), light is opt-in via the topbar toggle or Settings.
if(settings.theme===undefined) settings.theme = 'dark';
function saveSettings(){ localStorage.setItem('orcaSettings', JSON.stringify(settings)); }
function currentRadiusKm(){
  const el = document.getElementById('radiusInput');
  const v = el ? parseFloat(el.value) : NaN;
  return clamp(isNaN(v) ? (settings.searchRadiusKm||20) : v, 2, 100);
}
function currentZoneCount(){
  const el = document.getElementById('zoneCountInput');
  const v = el ? parseInt(el.value,10) : NaN;
  return clamp(isNaN(v) ? (settings.zoneCount||5) : v, 1, 12);
}

/* ============== MAIN MAP ============== */
function initMap(){
  map = L.map('map', {zoomControl:true}).setView([13.0827,80.2707], 6);
  // Free, key-free Esri tile layer, no registration/quota — avoids two dead
  // ends already hit here: raw tile.openstreetmap.org isn't meant for direct
  // app use and blocks traffic it flags as policy-violating, and CARTO's
  // basemap tiles (an earlier fix) now require a paid API key for every
  // style, including dark_all — CARTO changed that policy after this app was
  // first built. A THIRD provider swap happened here too: Esri's
  // World_Ocean_Base (thematically nicer for a marine app) has real
  // zoomed-in coverage gaps in parts of the Indian coast/inland water — at
  // some zoom levels it serves an opaque placeholder tile with literal
  // baked-in text "Map data not yet available" instead of erroring, which no
  // maxNativeZoom setting can work around. World_Street_Map has full global
  // tile coverage at every zoom, so it replaces Ocean Basemap as the primary
  // layer; the dark theme's CSS filter (style.css) still darkens it the same
  // way.
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {attribution:'Esri', maxZoom:19, maxNativeZoom:19}).addTo(map);
  markersLayer = L.layerGroup().addTo(map);
  zoneMarkersLayer = L.layerGroup().addTo(map);
  boundaryLayerMain = L.layerGroup().addTo(map);
  harborMarkersLayer = L.layerGroup().addTo(map);
  waterBodiesLayer = L.layerGroup().addTo(map);
  stateBoundaryLayer = L.layerGroup().addTo(map);
  highlightedStateLayer = L.layerGroup().addTo(map);
  pinMarkersLayer = L.layerGroup().addTo(map);
  fishermenLayer = L.layerGroup().addTo(map);
  drawHarborMarkers();
  drawWaterBodies();
  drawRealStateBoundaries();
  highlightSelectedState(false);
  map.on('click', e=>{ handleMapClick(e.latlng.lat, e.latlng.lng); });
}
// Shared entry point for every way a point on the map can be picked (a plain
// map click, or a click that lands on a state/water polygon or harbor marker
// drawn on top — those layers have their own popups, which by default
// swallow the click before it ever reaches the map's own handler above, so
// each of those layers calls this directly too). Routes to pin-dropping when
// "Add Pin" mode is on, otherwise runs the normal single-location search.
function handleMapClick(lat, lon){
  if(pinMode){ addPin(lat, lon, null); return; }
  selectLocation(lat, lon, null);
}
function colorHex(c){ return c==='green'?'#22c55e':c==='yellow'?'#eab308':c==='orange'?'#f97316':'#ef4444'; }
function colorEmoji(c){ return c==='green'?'🟢':c==='yellow'?'🟡':c==='orange'?'🟠':'🔴'; }
function tierEmoji(tier){ return tier==='safe'?'🟢':tier==='approaching'?'🟡':tier==='high'?'🟠':'🔴'; }
/* Part 10 (freshwater zones): a freshwater zone honestly has no wave height
   or sea-surface temperature (those fields are left null, never a fake
   placeholder number) and no geofence/ocean-risk concept (that key is left
   null too). These two tiny formatters are used everywhere a zone field is
   printed, so every display — popup, alerts, compare tables, agent steps —
   automatically shows an honest "—" / "Not applicable" instead of "null m"
   or a fabricated value, without needing an isFreshwater check at each site. */
function fmtVal(v, suffix){ return (v===null || v===undefined || Number.isNaN(v)) ? '—' : (v+(suffix||'')); }
function fmtKey(k){ return k ? t(k) : t('not_applicable'); }

function drawMainBoundaries(){
  boundaryLayerMain.clearLayers();
  if(!document.getElementById('chkShowBorders').checked || !selectedLatLon) return;
  L.polyline(IMBL.map(p=>[p.lat,p.lon]), {color:'#ef4444', weight:2, opacity:0.85}).addTo(boundaryLayerMain)
    .bindPopup('India–Sri Lanka Maritime Boundary (approximate, 1974/1976 agreements)');
  // Same colored risk-tier rings as the Border Intelligence map, now shown together
  // with the fishing zones on one map instead of only on a separate page.
  IMBL.forEach(p=>{
    [[settings.warningKm,'#eab308',0.05],[settings.highKm,'#f97316',0.07],[settings.criticalKm,'#ef4444',0.13]].forEach(([r,c,op])=>{
      L.circle([p.lat,p.lon], {radius:r*1000, color:c, weight:0, fillColor:c, fillOpacity:op}).addTo(boundaryLayerMain);
    });
  });
  const summary = computeBorderSummary(selectedLatLon.lat, selectedLatLon.lon);
  if(!HAS_GEODATA){
    // Only draw the old approximate dashed cross-lines when we don't have the
    // real polygons to draw instead (drawRealStateBoundaries below covers it).
    [summary.state, summary.otherState].forEach(b=>{
      L.polyline([[b.lat,b.lon-1.5],[b.lat,b.lon+1.5]], {color:'#a78bfa', weight:2, dashArray:'6,6', opacity:0.85}).addTo(boundaryLayerMain).bindPopup(b.name);
    });
  }
  drawRealStateBoundaries();
}

/* Real India state/UT outlines (from geodata.js) drawn faintly on the map,
   toggled by the same #chkShowBorders checkbox as the maritime boundary —
   replaces the old two-dashes-per-point approximation with actual polygon
   boundaries whenever the real dataset is available. */
function drawRealStateBoundaries(){
  if(!stateBoundaryLayer) return;
  stateBoundaryLayer.clearLayers();
  if(!HAS_GEODATA) return;
  const chk = document.getElementById('chkShowBorders');
  if(chk && !chk.checked) return;
  INDIA_STATES_GEOJSON.features.forEach(f=>{
    // bindPopup() gives this polygon its own click handler, and Leaflet does
    // not also forward that click to the map's own 'click' listener — so
    // without the explicit handleMapClick() call below, tapping anywhere on
    // land (which is most of the visible map) only ever showed the state
    // name and never re-ran the zone search for that point.
    L.geoJSON(f, {style:{color:'#a78bfa', weight:1, opacity:0.5, fillOpacity:0}})
      .bindPopup(f.properties.name)
      .on('click', e=>handleMapClick(e.latlng.lat, e.latlng.lng))
      .addTo(stateBoundaryLayer);
  });
}
/* Real lakes (filled polygons) + rivers (lines) from geodata.js — a genuine
   reference layer, not simulated, toggled by #chkShowWaterBodies. */
function drawWaterBodies(){
  if(!waterBodiesLayer) return;
  waterBodiesLayer.clearLayers();
  const chk = document.getElementById('chkShowWaterBodies');
  if(chk && !chk.checked) return;
  if(!HAS_GEODATA) return;
  INDIA_WATER_BODIES_GEOJSON.features.forEach(f=>{
    if(f.properties.kind==='lake'){
      L.geoJSON(f, {className:'water-lake', style:{color:'#38bdf8', weight:1.5, fillColor:'#38bdf8', fillOpacity:0.35}})
        .bindPopup(`🌊 <b>${f.properties.name}</b><br>${t('legend_lake')}`)
        .on('click', e=>handleMapClick(e.latlng.lat, e.latlng.lng))
        .addTo(waterBodiesLayer);
    } else if(f.properties.kind==='river'){
      L.geoJSON(f, {style:{color:'#38bdf8', weight:1.5, opacity:0.8}})
        .bindPopup(`🏞️ <b>${f.properties.name}</b><br>${t('legend_river')}`)
        .on('click', e=>handleMapClick(e.latlng.lat, e.latlng.lng))
        .addTo(waterBodiesLayer);
    }
  });
}
/* The "3D-like" state highlight (Settings → State dropdown): a stylized
   elevated glow (CSS drop-shadow + pulse, see .state-highlight-glow in
   style.css) drawn over the selected state's REAL boundary polygon — an
   honest stylized highlight, not actual 3D terrain rendering. */
function highlightSelectedState(pan){
  if(!highlightedStateLayer) return;
  highlightedStateLayer.clearLayers();
  if(!HAS_GEODATA) return;
  const el = document.getElementById('stateSelect');
  const name = (el && el.value) || settings.state;
  const feature = findStateFeatureByName(name);
  if(!feature) return;
  const layer = L.geoJSON(feature, {className:'state-highlight-glow', style:{color:'#a78bfa', weight:4, opacity:0.95, fillColor:'#a78bfa', fillOpacity:0.14}}).addTo(highlightedStateLayer);
  if(pan && map){ try{ map.fitBounds(layer.getBounds(), {maxZoom:8, padding:[24,24]}); }catch(e){} }
}

function drawZoneMarkers(){
  zoneMarkersLayer.clearLayers();
  currentZones.forEach(z=>{
    const marker = L.circleMarker([z.lat,z.lon], {radius:10, color:colorHex(z.color), fillColor:colorHex(z.color), fillOpacity:0.9, weight:2}).addTo(zoneMarkersLayer);
    marker.bindPopup(popupHtml(z));
    marker.on('click', ()=> showFinding(z));
    z.marker = marker;
  });
}

/* ============== WIND VISUALIZATION (Part 2) ==============
   A lightweight animated wind-flow overlay on the Dashboard map — NOT a real
   meteorological wind-field model. It reuses the exact same per-zone wind
   speed + direction already shown on each zone card (LIVE/SATELLITE/SIM,
   same source/tier as the wind numbers), just visualized as flowing
   particles instead of a number, using simple nearest-zone interpolation.
   Toggle: #chkShowWind. Only runs on the Dashboard page to save CPU. */
let windCanvas, windCtx, windParticles = [], windField = [];
const WIND_PARTICLE_COUNT = 110;

function resizeWindCanvas(){
  if(!windCanvas || !map) return;
  const size = map.getSize();
  if(!size.x || !size.y) return;
  const ratio = window.devicePixelRatio || 1;
  windCanvas.width = size.x * ratio;
  windCanvas.height = size.y * ratio;
  windCanvas.style.width = size.x + 'px';
  windCanvas.style.height = size.y + 'px';
  windCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function buildWindField(){
  windField = currentZones
    .filter(z => typeof z.wind === 'number')
    .map(z => ({ lat: z.lat, lon: z.lon, speed: z.wind, dir: (typeof z.windDir === 'number') ? z.windDir : 200 }));
  if(selectedLatLon && windField.length){
    let nearest = windField[0], best = Infinity;
    windField.forEach(s=>{ const d = haversine(selectedLatLon.lat, selectedLatLon.lon, s.lat, s.lon); if(d < best){ best = d; nearest = s; } });
    windField.push({lat:selectedLatLon.lat, lon:selectedLatLon.lon, speed:nearest.speed, dir:nearest.dir});
  }
}

function sampleWindAt(lat, lon){
  if(!windField.length) return {speed:0, dir:0};
  let best = windField[0], bestD = Infinity;
  for(const s of windField){
    const d = (s.lat-lat)*(s.lat-lat) + (s.lon-lon)*(s.lon-lon);
    if(d < bestD){ bestD = d; best = s; }
  }
  return best;
}

function spawnWindParticle(){
  const size = map ? map.getSize() : {x:400,y:400};
  const x = Math.random()*(size.x||400), y = Math.random()*(size.y||400);
  return { trail:[{x,y}], age: Math.random()*60, life: 70 + Math.random()*70 };
}

function windOn(){
  const el = document.getElementById('chkShowWind');
  return el ? el.checked : false;
}

function stepWind(){
  requestAnimationFrame(stepWind);
  if(!windCanvas || !map) return;
  const dashPage = document.getElementById('page-dashboard');
  const dashboardVisible = dashPage && dashPage.classList.contains('active');
  const size = map.getSize();
  if(!windOn() || !selectedLatLon || !windField.length || !dashboardVisible || !size.x){
    if(windCtx) windCtx.clearRect(0, 0, windCanvas.width, windCanvas.height);
    return;
  }
  windCtx.clearRect(0, 0, size.x, size.y);
  windParticles.forEach(p=>{
    const head = p.trail[p.trail.length-1];
    const ll = map.containerPointToLatLng([head.x, head.y]);
    const s = sampleWindAt(ll.lat, ll.lng);
    const speedPx = clamp(s.speed/45, 0.2, 1) * 2.2;
    const headingRad = (s.dir + 180) * Math.PI/180; // wind blows FROM dir; particles travel toward dir+180
    const nx = head.x + Math.sin(headingRad)*speedPx;
    const ny = head.y - Math.cos(headingRad)*speedPx;
    p.trail.push({x:nx, y:ny});
    if(p.trail.length > 7) p.trail.shift();
    p.age++;
    const offMap = nx < -20 || nx > size.x+20 || ny < -20 || ny > size.y+20;
    if(p.age > p.life || offMap){ Object.assign(p, spawnWindParticle()); return; }
    for(let i=1;i<p.trail.length;i++){
      const a = p.trail[i-1], b = p.trail[i];
      const alpha = (i/p.trail.length) * 0.55;
      windCtx.strokeStyle = `rgba(180,235,255,${alpha})`;
      windCtx.lineWidth = 1.4;
      windCtx.beginPath();
      windCtx.moveTo(a.x, a.y);
      windCtx.lineTo(b.x, b.y);
      windCtx.stroke();
    }
  });
}

function initWindCanvas(){
  windCanvas = document.getElementById('windCanvas');
  if(!windCanvas) return;
  windCtx = windCanvas.getContext('2d');
  resizeWindCanvas();
  windParticles = Array.from({length: WIND_PARTICLE_COUNT}, spawnWindParticle);
  map.on('resize move zoom', resizeWindCanvas);
  requestAnimationFrame(stepWind);
}

/* Part 9: honest radius/quality messaging. generateZonesWithAutoExpand()
   already widens the search radius on a ladder (x1, x1.5, x2, x2.5, capped
   at 100 km) when nothing nearby scores well — this turns that into the
   plain-language note the fisherman actually sees. Two distinct truths get
   two distinct messages, never blurred into one: (1) "search widened and
   found something better" vs (2) "search widened all the way and STILL
   nothing strong turned up" — the second is the honest
   "no verified PFZ found" case the fisherman needs to know about, not a
   quietly-downgraded recommendation. */
function updateRadiusAndWeakZoneHint(requestedRadiusKm, usedRadiusKm, zoneCount){
  const el = document.getElementById('radiusExpandHint');
  if(!el) return;
  if(!currentZones.length){
    // A bug fixed this round: this used to silently clear the hint here,
    // leaving an empty zone list with NO explanation — confusing and
    // dishonest by omission. Zero zones (every candidate rejected as being
    // on real mapped land, even after the land-rejection retries) almost
    // always means the picked point is an inland freshwater location (a
    // lake, reservoir, or river) rather than open sea, since ORCA's ocean
    // fishing analysis has no real sea to work with there.
    el.textContent = '⚠️ ' + t('zero_zones_inland');
    return;
  }
  const best = bestZoneScore(currentZones);
  const maxLadderRadius = Math.min(100, +(requestedRadiusKm * RADIUS_EXPAND_LADDER[RADIUS_EXPAND_LADDER.length-1]).toFixed(1));
  const expanded = usedRadiusKm > requestedRadiusKm;
  const stillWeak = best < RADIUS_QUALITY_THRESHOLD;
  if(expanded && stillWeak && usedRadiusKm >= maxLadderRadius){
    el.textContent = '⚠️ ' + t('no_strong_zone_found', {used: usedRadiusKm});
  } else if(expanded){
    el.textContent = t('radius_expanded_note', {req: requestedRadiusKm, used: usedRadiusKm, count: zoneCount});
  } else if(stillWeak){
    el.textContent = '⚠️ ' + t('no_strong_zone_found', {used: usedRadiusKm});
  } else {
    el.textContent = '';
  }
}

/* Part 9: an always-current line from the picked point straight to whichever
   zone the app currently recommends (the same saferBetter comparator used
   everywhere), redrawn every time selectLocation() runs or upgrades zone
   data — separate from the fisherman-triggered showRoute() button, which
   still works independently and shares neither layer nor lifecycle with
   this one. Draws nothing (and clears any previous line) when there's no
   zone to recommend, e.g. the honest "no strong zone found" case above. */
function drawRecommendationLine(lat, lon, zone){
  if(recommendationLine){ map.removeLayer(recommendationLine); recommendationLine = null; }
  if(!zone) return;
  const distKm = +haversine(lat, lon, zone.lat, zone.lon).toFixed(1);
  recommendationLine = L.polyline([[lat, lon], [zone.lat, zone.lon]], {
    color:'#38bdf8', weight:2, opacity:0.75, dashArray:'4,7'
  }).addTo(map).bindTooltip(t('recommended_zone_distance', {letter: zone.letter, d: distKm}), {sticky:true});
}

async function selectLocation(lat, lon, label, freshwaterHint){
  const mySeq = ++selectLocationSeq;
  selectedLatLon = {lat,lon,label};
  liveLatLon = {lat,lon};
  liveAccuracy = null;
  document.getElementById('locInput').value = label || `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
  markersLayer.clearLayers();
  zoneMarkersLayer.clearLayers();
  if(circleLayer){ map.removeLayer(circleLayer); circleLayer=null; }
  if(expandedCircleLayer){ map.removeLayer(expandedCircleLayer); expandedCircleLayer=null; }
  if(routeLine){ map.removeLayer(routeLine); routeLine=null; }
  if(recommendationLine){ map.removeLayer(recommendationLine); recommendationLine=null; }

  // Part 7: refuse to invent zone data for a point deep in the open ocean,
  // far past any real coastline — see OFFSHORE_LIMIT_KM above. No fisherman
  // marker, no colored status circle, no fabricated zones for a click out
  // there; just an honest "out of range" note.
  const outOfRangeEl = document.getElementById('outOfRangeHint');
  const coastDistanceKm = HAS_GEODATA ? allStateBoundaries(lat,lon)[0].distance : null;
  if(coastDistanceKm !== null && coastDistanceKm > OFFSHORE_LIMIT_KM){
    currentZones = [];
    recommendedZone = null;
    compareSelection.clear();
    map.setView([lat,lon], 6);
    renderZoneGrid(); renderCompareSelect(); renderAlerts();
    document.getElementById('findingBox').innerHTML = '';
    const radiusExpandEl = document.getElementById('radiusExpandHint');
    if(radiusExpandEl) radiusExpandEl.textContent = '';
    ['borderMiniStatus','nearestHarborHint','waterTypeHint'].forEach(id=>{
      const el = document.getElementById(id); if(el) el.textContent = '';
    });
    if(outOfRangeEl) outOfRangeEl.textContent = '⚠️ ' + t('out_of_range');
    return;
  }
  if(outOfRangeEl) outOfRangeEl.textContent = '';

  // Fisherman-chosen search radius + zone count (Settings default: 20 km / 5 zones) —
  // no longer hardcoded, per the "let the fisherman choose distance and zone count" request.
  const radiusKm = currentRadiusKm();
  const zoneCount = currentZoneCount();
  settings.searchRadiusKm = radiusKm;
  settings.zoneCount = zoneCount;
  saveSettings();

  // Part 11: softened stroke opacity (visual only — same radius, same color
  // meaning) so the search-radius ring reads as a subtle guide rather than a
  // bright neon outline, matching the calmer glass UI everywhere else.
  circleLayer = L.circle([lat,lon], {radius:radiusKm*1000, color:'#22d3ee', weight:1.5, opacity:0.5, fillOpacity:0.04}).addTo(map);
  if(expandedCircleLayer){ map.removeLayer(expandedCircleLayer); expandedCircleLayer = null; }
  fishermanMarker = L.circleMarker([lat,lon], {radius:9, color:'#38bdf8', fillColor:'#38bdf8', fillOpacity:1, weight:2}).addTo(markersLayer)
    .bindPopup(`<b>🔵 ${label || t('lbl_location')}</b>`);

  compareSelection.clear();
  recommendedZone = null;
  familyAlerted = {border:false, redzone:false, cyclone:false};
  lastBorderTier = null;
  suppressNextVoiceAlert = true;

  // Part 10: freshwater (lake/reservoir/river) detection, checked BEFORE the
  // ocean-only pipeline below — that pipeline (satellite SST, wave height,
  // seaward-cone geometry, maritime-border framing) has nothing honest to
  // say about a reservoir. A location counts as freshwater when either (1)
  // this exact point classifies as a real mapped lake/river, or (2) a
  // curated INLAND_WATER_BODIES search match said so explicitly via
  // freshwaterHint — needed because a curated anchor point (e.g. "Mettur",
  // the dam/town) can sit just outside the mapped reservoir polygon itself.
  const waterInfo = classifyWaterType(lat, lon);
  let fwInfo = null;
  if(freshwaterHint && INLAND_WATER_BODY_POLYGON_NAMES[freshwaterHint.curatedKey]){
    // A curated match with a KNOWN real lake polygon always wins over the
    // raw point's own classification — e.g. "Mettur"'s dam/town anchor sits
    // right on the Cauvery river, which would otherwise mislabel zones
    // actually scattered across the mapped Stanley Reservoir shape as being
    // on a river instead of the reservoir a fisherman searched for.
    fwInfo = {type:'lake', name: INLAND_WATER_BODY_POLYGON_NAMES[freshwaterHint.curatedKey]};
  } else if(waterInfo.type==='lake' || waterInfo.type==='river'){
    fwInfo = waterInfo;
  } else if(freshwaterHint){
    fwInfo = {type:'named', name: freshwaterHint.curatedKey};
  }

  if(fwInfo){
    currentZones = generateFreshwaterZones(lat, lon, fwInfo, zoneCount, freshwaterHint && freshwaterHint.curatedKey);
    recommendedZone = currentZones.length ? currentZones.reduce(saferBetter, currentZones[0]) : null;
    drawRecommendationLine(lat, lon, recommendedZone);
    buildWindField();
    drawZoneMarkers();
    map.setView([lat,lon], 12); // a reservoir is small — zoom in closer than the ocean default
    drawMainBoundaries();
    renderZoneGrid();
    renderCompareSelect();
    renderAlerts();
    updateRangeHints();
    document.getElementById('findingBox').innerHTML = '';
    resetStatus();
    renderBorderStatus();
    renderCyclonePage();
    if(settings.shareLocation) pushPresence();
    if(document.getElementById('chkShowFishermen') && document.getElementById('chkShowFishermen').checked) fetchNearbyFishermen();
    // A "nearest fishing HARBOR" reference doesn't apply to an inland
    // reservoir — suppressed rather than pointing a fisherman at a coastal
    // harbor that may be hundreds of km from the lake they're actually at.
    const harborEl = document.getElementById('nearestHarborHint');
    if(harborEl) harborEl.textContent = '';
    const waterEl = document.getElementById('waterTypeHint');
    if(waterEl) waterEl.textContent = '💧 ' + (fwInfo.name ? waterTypeLabel({type:'lake', name:fwInfo.name}) : t('freshwater_badge'));
    // Freshwater has no radius-expansion ladder (a reservoir's real shape or
    // a fixed small radius, not a distance search) — the only honest state
    // to report here is whether any zone could be placed at all.
    const radiusExpandEl = document.getElementById('radiusExpandHint');
    if(radiusExpandEl) radiusExpandEl.textContent = currentZones.length ? '' : ('⚠️ ' + t('zero_zones_inland'));
    await enhanceFreshwaterZonesWithRealData();
    if(mySeq !== selectLocationSeq) return;
    return;
  }

  // Tier 3 first (instant, always available) so the UI is never empty while we try to upgrade it.
  // Radius auto-expansion: zone COUNT stays exactly what the fisherman chose;
  // only the search radius steps up when nothing nearby scores well.
  const expand = generateZonesWithAutoExpand(lat, lon, radiusKm, zoneCount);
  currentZones = expand.zones;
  const usedRadiusKm = expand.usedRadius;
  if(usedRadiusKm > radiusKm){
    expandedCircleLayer = L.circle([lat,lon], {radius:usedRadiusKm*1000, color:'#eab308', weight:1.5, opacity:0.55, dashArray:'8,6', fillOpacity:0}).addTo(map);
  }
  updateRadiusAndWeakZoneHint(radiusKm, usedRadiusKm, zoneCount);
  recommendedZone = currentZones.length ? currentZones.reduce(saferBetter, currentZones[0]) : null;
  drawRecommendationLine(lat, lon, recommendedZone);
  buildWindField();
  drawZoneMarkers();
  map.setView([lat,lon], 9);
  drawMainBoundaries();
  renderZoneGrid();
  renderCompareSelect();
  renderAlerts();
  updateRangeHints();
  document.getElementById('findingBox').innerHTML = '';
  resetStatus();
  renderBorderStatus();
  // Border Intelligence, Cyclone Intelligence and Trip Planner all now live
  // on the one merged Dashboard page (Part 6, item 8), so cyclone data is
  // refreshed on every location pick too, the same way border status is.
  renderCyclonePage();
  // Part 8: a new location is exactly when both presence numbers (mine to
  // push, others to pull) should refresh.
  if(settings.shareLocation) pushPresence();
  if(document.getElementById('chkShowFishermen') && document.getElementById('chkShowFishermen').checked) fetchNearbyFishermen();

  // Part 5: real, verifiable reference point — nearest known fishing harbor.
  const harborEl = document.getElementById('nearestHarborHint');
  if(harborEl){
    const harbor = nearestFishingHarbor(lat, lon);
    harborEl.textContent = harbor ? t('nearest_harbor_line', {name:harbor.name, d:harbor.distanceKm}) : '';
  }
  // Part 6: honest saltwater / freshwater classification at this exact point.
  // Only shown for an actual result (open sea, or a named lake/river) — an
  // inconclusive "on land, no data" reading is suppressed rather than
  // cluttering the panel with a non-answer.
  const waterEl = document.getElementById('waterTypeHint');
  if(waterEl){
    const showable = waterInfo.type==='lake' || waterInfo.type==='river' || waterInfo.type==='sea';
    waterEl.textContent = showable ? ('💧 ' + waterTypeLabel(waterInfo)) : '';
  }

  // Try to upgrade: Tier 1 (Python backend + real satellite data) first, then Tier 2 (Open-Meteo direct from browser).
  const hint = document.getElementById('liveDataHint');
  hint.textContent = t('fetching_live');
  const backendZones = await tryBackendZones(lat, lon, usedRadiusKm, zoneCount);
  // A newer selectLocation() call (a different click, or an out-of-range one
  // that returned early with an honest empty state) has since started —
  // this stale result must not overwrite it.
  if(mySeq !== selectLocationSeq) return;
  if(backendZones && backendZones.length){
    currentZones = backendZones;
    buildWindField();
    drawZoneMarkers();
    hint.textContent = '';
    renderZoneGrid(); renderAlerts(); renderCompareSelect();
  } else {
    await enhanceZonesWithRealData();
    if(mySeq !== selectLocationSeq) return;
  }
  // Re-derive the recommendation + weak-zone hint once real data (satellite,
  // live, or land-checked backfill) has had a chance to change the scores —
  // the same saferBetter comparator used everywhere else in this file.
  updateRadiusAndWeakZoneHint(radiusKm, usedRadiusKm, zoneCount);
  recommendedZone = currentZones.length ? currentZones.reduce(saferBetter, currentZones[0]) : null;
  drawRecommendationLine(lat, lon, recommendedZone);
}

/* Part 4: data-freshness labeling. A tier alone (SATELLITE/LIVE/SIM) says
   WHERE a number came from; this adds WHEN — a fetch that's gone stale
   (the fisherman left the tab open without re-searching) is relabeled
   CACHED instead of quietly still claiming LIVE. Re-checked on every
   render, including the periodic re-render below, so it updates on its
   own as data ages. */
const FRESHNESS_STALE_MIN = 10;
function freshnessInfo(z){
  if(z.dataTier === 'sim' || !z.fetchedAt) return {code:'SIM', cls:'sim'};
  const ageMin = (Date.now() - z.fetchedAt) / 60000;
  if(ageMin > FRESHNESS_STALE_MIN) return {code:'CACHED', cls:'cached'};
  return z.dataTier === 'satellite' ? {code:'SATELLITE', cls:'satellite'} : {code:'LIVE', cls:'live'};
}
function tierBadgeHtml(z){
  const f = freshnessInfo(z);
  if(f.cls==='sim') return '';
  const color = f.cls==='satellite' ? '#facc15' : f.cls==='cached' ? '#c7d3e6' : '#22c55e';
  return ` <span style="color:${color};font-size:10px;">(${f.code})</span>`;
}
function popupHtml(z){
  if(z.isFreshwater){
    // Freshwater reservoir zone (Part 10) — no wave/SST/chlorophyll/geofence
    // (none of that applies to a lake), shown instead with the real air
    // temp + rainfall Open-Meteo actually has for any land coordinate, plus
    // an honest note that fish suitability here is a simulated estimate.
    const waterLine = `🏞️ ${z.waterBodyName ? z.waterBodyName : t('freshwater_badge')}<br>`;
    return `<div style="min-width:210px;font-size:13px;">
      <b>${colorEmoji(z.color)} ${t('zone')} ${z.letter}</b>${tierBadgeHtml(z)}<br>
      ${waterLine}
      ${t('distance')}: ${z.distance} km<br>
      🎣 ${t('fish')}: ${z.fish}/100<br>
      ☁ ${t('weather')}: ${t(z.weatherKey)}<br>
      💨 ${t('wind')}: ${z.wind} km/h<br>
      🌡 ${t('air_temp')}: ${fmtVal(z.airTemp,'°C')}<br>
      🌧 ${t('rain')}: ${fmtVal(z.rain,' mm')}<br>
      🛡️ ${t('border_distance')}: ${z.borderDistance} km (${tierEmoji(z.borderTier)} ${t(z.borderTier)})<br>
      <b>${t('overall')}: ${z.overall}/100</b>
      <div style="margin-top:5px;font-size:11px;color:#8ba0c2;">${t('freshwater_note')}</div>
    </div>`;
  }
  const chlLine = (z.dataTier==='satellite' && z.chlorophyll!=null) ? `🌿 ${t('chlorophyll')}: ${z.chlorophyll} mg/m³<br>` : '';
  return `<div style="min-width:210px;font-size:13px;">
    <b>${colorEmoji(z.color)} ${t('zone')} ${z.letter}</b>${tierBadgeHtml(z)}<br>
    ${t('distance')}: ${z.distance} km<br>
    🎣 ${t('fish')}: ${z.fish}/100<br>
    ☁ ${t('weather')}: ${t(z.weatherKey)}<br>
    🌊 ${t('waves')}: ${fmtVal(z.wave,' m')}<br>
    💨 ${t('wind')}: ${z.wind} km/h<br>
    🌡 ${t('sst')}: ${fmtVal(z.sst,'°C')}<br>
    ${chlLine}
    🌊 ${t('ocean_risk')}: ${fmtKey(z.oceanKey)}<br>
    🛡 ${t('geofence')}: ${fmtKey(z.geoKey)}<br>
    🛡️ ${t('border_distance')}: ${z.borderDistance} km (${tierEmoji(z.borderTier)} ${t(z.borderTier)})<br>
    <b>${t('overall')}: ${z.overall}/100</b>
  </div>`;
}
function showFinding(z){
  const box = document.getElementById('findingBox');
  box.innerHTML = `<div class="finding ${z.color==='green'?'':z.color}">
    <h4>${t('finding_title')}<br>${t('zone')} ${z.letter}</h4>
    <div class="sub">${t('distance')} ${z.distance} km · ${colorEmoji(z.color)} ${z.color.toUpperCase()} · 🛡️ ${z.borderDistance} km (${t(z.borderTier)})<br>
    ${t('fish')} ${z.fish}/100 · ${t('weather')} ${t(z.weatherKey)}</div>
  </div>`;
  updateStatus(z);
}
function resetStatus(){ document.getElementById('statusBox').innerHTML=''; }
function riskTagClass(key){
  if(key===null || key===undefined) return 'na'; // freshwater: no geofence/ocean-risk concept — neutral, not a fabricated "high"
  return key==='low'||key==='good'||key==='safe'?'low':key==='medium'||key==='changing'||key==='approaching'?'medium':key==='high'?'orange':'high';
}
function updateStatus(z){
  // Freshwater zones never had a geofence CHECK run — showing "CHECKED" in
  // green would falsely claim a verification that never happened.
  const geofenceChip = z.isFreshwater
    ? `<div class="status-chip"><div class="l">${t('st_geofence')}</div><div class="v"><span class="tag na">${t('not_applicable').toUpperCase()}</span></div></div>`
    : `<div class="status-chip"><div class="l">${t('st_geofence')}</div><div class="v"><span class="tag ${riskTagClass(z.geoKey)}">${t('checked').toUpperCase()}</span></div></div>`;
  document.getElementById('statusBox').innerHTML = `
    <div class="status-chip"><div class="l">${t('st_overall')}</div><div class="v"><span class="tag ${riskTagClass(z.oceanKey)}">${fmtKey(z.oceanKey).toUpperCase()}</span></div></div>
    <div class="status-chip"><div class="l">${t('st_weather')}</div><div class="v"><span class="tag ${riskTagClass(z.weatherKey)}">${t(z.weatherKey).toUpperCase()}</span></div></div>
    <div class="status-chip"><div class="l">${t('st_water')}</div><div class="v">${t('fish_indicated')}</div></div>
    ${geofenceChip}
    <div class="status-chip"><div class="l">${t('st_fishing')}</div><div class="v">${z.fish}/100</div></div>
    <div class="status-chip"><div class="l">${t('st_border')}</div><div class="v"><span class="tag ${riskTagClass(z.borderTier)}">${z.borderDistance} km</span></div></div>`;
}

/* ============== ZONE INTELLIGENCE ============== */
function zoneRowHtml(z){
  return `<div class="zone-row">
      <span class="zr-main">${colorEmoji(z.color)} ${t('zone')} ${z.letter}</span>
      <span class="zr-score">${z.overall}<span style="font-size:11px;color:var(--muted);">/100</span></span>
      <span class="tag ${riskTagClass(z.borderTier)}">${t(z.borderTier)}</span>
      <button class="btn secondary" onclick="viewOnMap('${z.id}')">${t('view_on_map')}</button>
    </div>`;
}
function renderZoneGrid(){
  // Compact one-row-per-zone list on the Dashboard (full detail cards live
  // on the Compare Zones page instead, so the same information isn't shown
  // twice at two levels of detail).
  const html = currentZones.length ? currentZones.map(zoneRowHtml).join('') : `<div class="hint">${t('no_location')}</div>`;
  document.getElementById('zoneGridDash').innerHTML = html;
}
function viewOnMap(id){
  const z = currentZones.find(x=>x.id===id);
  if(!z) return;
  document.querySelector('[data-page="dashboard"]').click();
  map.setView([z.lat,z.lon], 13);
  z.marker.openPopup();
  showFinding(z);
}

/* ============== COMPARE ============== */
function compareCardHtml(z){
  const f = freshnessInfo(z);
  const src = `<span class="src-tag ${f.cls}">${f.code}</span>`;
  const checked = compareSelection.has(z.id) ? 'checked' : '';
  return `<div class="zone-card ${z.color}">
      <label class="compare-check"><input type="checkbox" data-id="${z.id}" ${checked}> ${t('compare_add')}</label>
      <h3>${colorEmoji(z.color)} ${t('zone')} ${z.letter} ${src}</h3>
      <div class="score">${z.overall}<span style="font-size:14px;color:var(--muted);">/100</span></div>
      <div class="meta">${z.distance} km</div>
      <div class="facts">
        <div>${t('fish')}: <span>${z.fish}/100</span></div>
        <div>${t('weather')}: <span>${t(z.weatherKey)}</span></div>
        <div>${z.isFreshwater ? t('air_temp') : t('waves')}: <span>${z.isFreshwater ? fmtVal(z.airTemp,'°C') : fmtVal(z.wave,' m')}</span></div>
        <div>${t('wind')}: <span>${z.wind} km/h</span></div>
      </div>
      <div class="border-line">🛡️ ${t('border_distance')}: <b>${z.borderDistance} km</b> — <span class="tag ${riskTagClass(z.borderTier)}">${tierEmoji(z.borderTier)} ${t(z.borderTier)}</span></div>
      <button class="btn secondary" style="width:100%;margin-top:8px;" onclick="viewOnMap('${z.id}')">${t('view_on_map')}</button>
    </div>`;
}
function renderCompareSelect(){
  const box = document.getElementById('compareSelect');
  if(!currentZones.length){ box.innerHTML = `<div class="hint">${t('no_location')}</div>`; return; }
  box.innerHTML = currentZones.map(compareCardHtml).join('');
  box.querySelectorAll('input[type=checkbox]').forEach(cb=>{
    cb.addEventListener('change', ()=>{
      if(cb.checked){
        if(compareSelection.size>=3){ cb.checked=false; alert(t('compare_max')); return; }
        compareSelection.add(cb.dataset.id);
      } else compareSelection.delete(cb.dataset.id);
    });
  });
}
function doCompare(){
  if(compareSelection.size<2){ alert(t('compare_pick')); return; }
  const zs = currentZones.filter(z=>compareSelection.has(z.id));
  // All zones being compared come from the same selectLocation() call, so
  // they share the same isFreshwater status — this picks the whole row set
  // once rather than branching per cell.
  const rows = zs[0] && zs[0].isFreshwater ? [
    [t('distance'), ...zs.map(z=>z.distance+' km')],
    [t('fish'), ...zs.map(z=>z.fish)],
    [t('weather'), ...zs.map(z=>t(z.weatherKey))],
    [t('wind'), ...zs.map(z=>z.wind+' km/h')],
    [t('air_temp'), ...zs.map(z=>fmtVal(z.airTemp,'°C'))],
    [t('rain'), ...zs.map(z=>fmtVal(z.rain,' mm'))],
    [t('border_distance'), ...zs.map(z=>z.borderDistance+' km')],
    [t('border_risk'), ...zs.map(z=>tierEmoji(z.borderTier)+' '+t(z.borderTier))],
    [t('overall'), ...zs.map(z=>'<b>'+z.overall+'</b>')]
  ] : [
    [t('distance'), ...zs.map(z=>z.distance+' km')],
    [t('fish'), ...zs.map(z=>z.fish)],
    [t('weather'), ...zs.map(z=>t(z.weatherKey))],
    [t('waves'), ...zs.map(z=>fmtVal(z.wave,' m'))],
    [t('wind'), ...zs.map(z=>z.wind+' km/h')],
    [t('sst'), ...zs.map(z=>fmtVal(z.sst,'°C'))],
    [t('ocean_risk'), ...zs.map(z=>fmtKey(z.oceanKey))],
    [t('geofence'), ...zs.map(z=>fmtKey(z.geoKey))],
    [t('border_distance'), ...zs.map(z=>z.borderDistance+' km')],
    [t('border_risk'), ...zs.map(z=>tierEmoji(z.borderTier)+' '+t(z.borderTier))],
    [t('overall'), ...zs.map(z=>'<b>'+z.overall+'</b>')]
  ];
  const bestByFish = zs.reduce((a,b)=> b.overall>a.overall?b:a, zs[0]);
  const bestCombined = zs.reduce(saferBetter, zs[0]);
  let html = `<table><thead><tr><th></th>${zs.map(z=>`<th>${colorEmoji(z.color)} ${t('zone')} ${z.letter}</th>`).join('')}</tr></thead><tbody>`;
  rows.forEach(r=>{ html += `<tr><td>${r[0]}</td>${r.slice(1).map(v=>`<td>${v}</td>`).join('')}</tr>`; });
  html += `</tbody></table><div class="reco"><b>${t('reco_title')}</b><br>${t('zone')} ${bestCombined.letter} ${t('reco_prefix')}`;
  if(bestCombined.letter !== bestByFish.letter){ html += `<br><br>${t('reco_border_note')}`; }
  html += `</div>`;
  document.getElementById('compareResult').innerHTML = html;
}

/* ============== PIN-AND-COMPARE (Part 7) ==============
   Lets the fisherman mark several points on the map (not just the one
   searched location) with an "Add Pin" mode, then search/select/compare
   that stack on the Compare Zones page. Each pin's own best zone is
   computed the same honest way as everywhere else in the app (real
   geography for the border numbers, the same auto-expand search for
   fishing zones) — never a second, different scoring method. */
function pinModeLabel(){ return 'P' + (pinnedLocations.length + 1); }
function togglePinMode(){
  pinMode = !pinMode;
  const btn = document.getElementById('pinModeBtn');
  if(!btn) return;
  btn.classList.toggle('secondary', !pinMode);
  btn.innerHTML = pinMode ? `✅ <span>${t('btn_pin_mode_on')}</span>` : `📍 <span>${t('btn_pin_mode')}</span>`;
}
function addPin(lat, lon, label){
  if(pinnedLocations.length>=8){ alert(t('pin_limit')); return; }
  const radiusKm = currentRadiusKm();
  const zoneCount = currentZoneCount();
  // Part 10: a pin dropped on a real mapped lake/river gets freshwater zones
  // too — otherwise the ocean pipeline's land-rejection would honestly (but
  // unhelpfully) return zero zones for most inland pins, the same bug this
  // round fixed for the main search flow.
  const waterInfo = classifyWaterType(lat, lon);
  const isFw = waterInfo.type==='lake' || waterInfo.type==='river';
  const zones = isFw ? generateFreshwaterZones(lat, lon, waterInfo, zoneCount) : generateZonesWithAutoExpand(lat, lon, radiusKm, zoneCount).zones;
  const bestZone = zones.length ? zones.reduce(saferBetter, zones[0]) : null;
  const finalLabel = label || pinModeLabel();
  const icon = L.divIcon({className:'pin-icon', html:'📍', iconSize:[22,22], iconAnchor:[11,20]});
  const marker = L.marker([lat,lon], {icon}).addTo(pinMarkersLayer)
    .bindPopup(`<b>📍 ${finalLabel}</b>${bestZone ? `<br>${colorEmoji(bestZone.color)} ${bestZone.overall}/100` : ''}`);
  const id = 'pin' + Date.now() + Math.floor(Math.random()*1000);
  pinnedLocations.push({id, lat, lon, label:finalLabel, marker, bestZone});
  renderPinnedList();
  renderPinStack(document.getElementById('pinSearchInput') ? document.getElementById('pinSearchInput').value : '');
}
function removePin(id){
  const idx = pinnedLocations.findIndex(p=>p.id===id);
  if(idx<0) return;
  if(pinnedLocations[idx].marker) pinMarkersLayer.removeLayer(pinnedLocations[idx].marker);
  pinCompareSelection.delete(id);
  pinnedLocations.splice(idx,1);
  renderPinnedList();
  renderPinStack(document.getElementById('pinSearchInput') ? document.getElementById('pinSearchInput').value : '');
}
function renderPinnedList(){
  const box = document.getElementById('pinnedListBox');
  if(!box) return;
  if(!pinnedLocations.length){ box.innerHTML=''; return; }
  box.innerHTML = pinnedLocations.map(p=>`
    <div class="pin-row">
      <span class="pin-row-label">📍 ${p.label}</span>
      <span class="pin-row-score">${p.bestZone ? colorEmoji(p.bestZone.color)+' '+p.bestZone.overall+'/100' : t('out_of_range')}</span>
      <button class="btn secondary" onclick="removePin('${p.id}')">✕</button>
    </div>`).join('');
}
function renderPinStack(filter){
  const box = document.getElementById('pinStackBox');
  if(!box) return;
  if(!pinnedLocations.length){ box.innerHTML = `<div class="hint">${t('pin_empty')}</div>`; return; }
  const q = (filter||'').toLowerCase().trim();
  const list = q ? pinnedLocations.filter(p=>p.label.toLowerCase().includes(q)) : pinnedLocations;
  box.innerHTML = list.length ? list.map(p=>`
    <div class="pin-stack-row">
      <label><input type="checkbox" data-pinid="${p.id}" ${pinCompareSelection.has(p.id)?'checked':''}> 📍 ${p.label}</label>
      <span>${p.bestZone ? colorEmoji(p.bestZone.color)+' '+p.bestZone.overall+'/100' : t('out_of_range')}</span>
    </div>`).join('') : `<div class="hint">${t('no_location')}</div>`;
  box.querySelectorAll('input[type=checkbox]').forEach(cb=>{
    cb.addEventListener('change', ()=>{
      if(cb.checked){
        if(pinCompareSelection.size>=4){ cb.checked=false; alert(t('compare_max')); return; }
        pinCompareSelection.add(cb.dataset.pinid);
      } else pinCompareSelection.delete(cb.dataset.pinid);
    });
  });
}
function comparePins(){
  const ps = pinnedLocations.filter(p=>pinCompareSelection.has(p.id) && p.bestZone);
  if(ps.length<2){ alert(t('compare_pick')); return; }
  // Pinned locations can mix ocean and freshwater spots, so these rows —
  // unlike doCompare()'s (all from one selectLocation() call) — format each
  // cell individually rather than picking one row set for the whole table.
  const rows = [
    [t('fish'), ...ps.map(p=>p.bestZone.fish)],
    [t('weather'), ...ps.map(p=>t(p.bestZone.weatherKey))],
    [t('waves'), ...ps.map(p=>fmtVal(p.bestZone.wave,' m'))],
    [t('wind'), ...ps.map(p=>p.bestZone.wind+' km/h')],
    [t('sst'), ...ps.map(p=>fmtVal(p.bestZone.sst,'°C'))],
    // Freshwater pins have real air temp/rain instead of wave/SST — ocean
    // pins simply have no airTemp/rain field, so fmtVal() honestly shows
    // "—" for them rather than needing a separate branch per pin.
    [t('air_temp'), ...ps.map(p=>fmtVal(p.bestZone.airTemp,'°C'))],
    [t('rain'), ...ps.map(p=>fmtVal(p.bestZone.rain,' mm'))],
    [t('border_distance'), ...ps.map(p=>p.bestZone.borderDistance+' km')],
    [t('border_risk'), ...ps.map(p=>tierEmoji(p.bestZone.borderTier)+' '+t(p.bestZone.borderTier))],
    [t('overall'), ...ps.map(p=>'<b>'+p.bestZone.overall+'</b>')]
  ];
  const best = ps.reduce((a,b)=> saferBetter(a.bestZone,b.bestZone)===a.bestZone ? a : b, ps[0]);
  let html = `<table><thead><tr><th></th>${ps.map(p=>`<th>${colorEmoji(p.bestZone.color)} 📍 ${p.label}</th>`).join('')}</tr></thead><tbody>`;
  rows.forEach(r=>{ html += `<tr><td>${r[0]}</td>${r.slice(1).map(v=>`<td>${v}</td>`).join('')}</tr>`; });
  html += `</tbody></table><div class="reco"><b>${t('reco_title')}</b><br>📍 ${best.label} ${t('reco_prefix')}</div>`;
  document.getElementById('pinCompareResult').innerHTML = html;
}

/* ============== NEARBY FISHERMEN / PRESENCE (Part 8) ==============
   The one genuinely multi-user piece of ORCA: a fisherman who turns on
   Settings -> Share My Location periodically posts their name/phone/position
   to the backend (backend/main.py's new /api/presence table), and anyone
   with the "Show Other Fishermen" map layer on can pull that list back and
   see + call them. This ONLY works between devices that reach the SAME
   running backend (BACKEND_URL) — on a laptop's own localhost that means
   only browser tabs on that laptop see each other; for it to show real
   other fishermen on their own phones, backend/main.py needs to run
   somewhere all of those devices can reach, with BACKEND_URL pointed at it.
   Every network call here fails silently (never throws) so a missing/
   unreachable backend degrades to an honest "can't reach the server" hint
   instead of breaking the rest of the app — the same pattern already used
   for zone data everywhere else in this file. */
async function pushPresence(){
  if(!settings.shareLocation || !settings.phoneSelf) return;
  const loc = liveLatLon || selectedLatLon;
  if(!loc) return;
  try{
    const controller = new AbortController();
    const timer = setTimeout(()=>controller.abort(), 6000);
    try{
      await fetch(`${BACKEND_URL}/api/presence`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({phone:settings.phoneSelf, name:settings.nameSelf||'', lat:loc.lat, lon:loc.lon}),
        signal: controller.signal
      });
    } finally { clearTimeout(timer); }
  }catch(e){ /* backend unreachable — sharing simply has no effect until it is */ }
}
function startSharingLocation(){
  pushPresence();
  if(presenceInterval) clearInterval(presenceInterval);
  presenceInterval = setInterval(pushPresence, 30000);
}
function stopSharingLocation(){
  if(presenceInterval){ clearInterval(presenceInterval); presenceInterval = null; }
  if(!settings.phoneSelf) return;
  fetch(`${BACKEND_URL}/api/presence/${encodeURIComponent(settings.phoneSelf)}`, {method:'DELETE'}).catch(()=>{});
}
function fishermanIconHtml(){ return L.divIcon({className:'fisherman-icon', html:'🚤', iconSize:[20,20], iconAnchor:[10,18]}); }
function renderFishermenMarkers(){
  if(!fishermenLayer) return;
  fishermenLayer.clearLayers();
  nearbyFishermen.forEach(f=>{
    const callLine = f.phone ? `<br><a href="tel:${f.phone}">${t('fishermen_popup_call')} ${f.phone}</a>` : '';
    L.marker([f.lat,f.lon], {icon:fishermanIconHtml()}).addTo(fishermenLayer)
      .bindPopup(`<b>🚤 ${f.name}</b><br>${t('fishermen_popup_distance',{d:f.distance_km})} — ${t('fishermen_popup_lastseen',{min:f.last_seen_min})}${callLine}`);
  });
}
async function fetchNearbyFishermen(){
  const hint = document.getElementById('fishermenHint');
  const loc = liveLatLon || selectedLatLon;
  if(!loc){ if(hint) hint.textContent = t('fishermen_need_location'); return; }
  try{
    const controller = new AbortController();
    const timer = setTimeout(()=>controller.abort(), 6000);
    let res;
    try{
      const params = new URLSearchParams({lat:loc.lat, lon:loc.lon, radius_km:Math.max(50, currentRadiusKm()), exclude_phone:settings.phoneSelf||''});
      res = await fetch(`${BACKEND_URL}/api/presence/nearby?${params.toString()}`, {signal:controller.signal});
    } finally { clearTimeout(timer); }
    if(!res.ok) throw new Error('bad status');
    const data = await res.json();
    nearbyFishermen = Array.isArray(data.fishermen) ? data.fishermen : [];
    renderFishermenMarkers();
    if(hint) hint.textContent = nearbyFishermen.length ? t('fishermen_found',{count:nearbyFishermen.length}) : t('fishermen_none_nearby');
  }catch(e){
    nearbyFishermen = [];
    renderFishermenMarkers();
    if(hint) hint.textContent = t('fishermen_unreachable');
  }
}
function startFishermenWatch(){
  fetchNearbyFishermen();
  if(fishermenWatchInterval) clearInterval(fishermenWatchInterval);
  fishermenWatchInterval = setInterval(fetchNearbyFishermen, 45000);
}
function stopFishermenWatch(){
  if(fishermenWatchInterval){ clearInterval(fishermenWatchInterval); fishermenWatchInterval = null; }
  nearbyFishermen = [];
  renderFishermenMarkers();
  const hint = document.getElementById('fishermenHint');
  if(hint) hint.textContent = '';
}

/* ============== AGENT ACTIVITY / ANALYZE ============== */
function buildAgentSteps(z){
  const oceanStepResult = z.isFreshwater
    ? `${fmtVal(z.airTemp,'°C')} ${t('air_temp').toLowerCase()} / ${fmtVal(z.rain,' mm')} ${t('rain').toLowerCase()}`
    : `${fmtVal(z.wave,' m')} ${t('waves').toLowerCase()} / ${fmtKey(z.oceanKey).toUpperCase()} ${t('ocean_risk').toLowerCase()}`;
  return [
    {key:'agent_planner', task:t('task_planner'), result:t('result_planner')},
    {key:'agent_weather', result:t(z.weatherKey).toUpperCase()},
    {key:'agent_ocean', result:oceanStepResult},
    {key:'agent_fishing', result:`${z.fish}/100`},
    {key:'agent_geo', result:fmtKey(z.geoKey).toUpperCase()},
    {key:'agent_border', result:`${z.borderDistance} km — ${tierEmoji(z.borderTier)} ${t(z.borderTier).toUpperCase()} (${z.borderLabel})`},
    {key:'agent_risk', result:`${fmtKey(z.oceanKey).toUpperCase()} risk / ${z.overall}/100`},
    {key:'agent_safety', result:`${t('overall')}: ${z.combined}/100 (${t('fish')}+${t('weather')}+${t('border_risk')})`},
    {key:'agent_reasoner', result:`${t('zone')} ${z.letter}`}
  ];
}
/* Part 11: the 9 rule-based reasoning steps above are grouped into the 5
   named pipeline stages the redesign asks for — display grouping only,
   never a change to what's actually calculated (buildAgentSteps above is
   untouched). Each stage gets an honest CHECKING → VERIFIED / REJECTED /
   UNCERTAIN status once it resolves, derived from data ORCA already tracks
   (freshnessInfo's real/live/satellite vs sim/cached tier, and whether this
   exact zone is a land-rejected backend substitute) — never a fabricated
   "verified" label on simulated data. */
const AGENT_STAGE_DEFS = [
  {id:'weather_wind', icon:'🌬️', titleKey:'agent_stage_weather_wind', keys:['agent_weather']},
  {id:'wave_ocean', icon:'🌊', titleKey:'agent_stage_wave_ocean', keys:['agent_ocean']},
  {id:'fishing_potential', icon:'🎣', titleKey:'agent_stage_fishing', keys:['agent_fishing']},
  {id:'border_safety', icon:'🛡️', titleKey:'agent_stage_border_safety', keys:['agent_geo','agent_border','agent_risk']},
  {id:'chief_coordinator', icon:'🧭', titleKey:'agent_stage_coordinator', keys:['agent_planner','agent_safety','agent_reasoner']}
];
function trustState(z){
  if(z.wasLandRejected) return 'rejected';
  const f = freshnessInfo(z);
  return (f.cls==='satellite' || f.cls==='live') ? 'verified' : 'uncertain';
}
function stageTrust(stageId, z){
  // A land-rejected substitute is flagged specifically on the two stages
  // that actually reasoned about WHERE this zone is (border/safety) and the
  // final call (coordinator) — the weather/ocean/fishing numbers themselves
  // are exactly as real/simulated as freshnessInfo says either way.
  if(z.wasLandRejected && (stageId==='border_safety' || stageId==='chief_coordinator')) return 'rejected';
  return trustState(z);
}
function groupAgentSteps(z, steps){
  const byKey = {};
  steps.forEach(s=>{ byKey[s.key] = s; });
  return AGENT_STAGE_DEFS.map(def=>({
    id: def.id, icon: def.icon, title: t(def.titleKey),
    trust: stageTrust(def.id, z),
    substeps: def.keys.map(k=>byKey[k]).filter(Boolean)
  }));
}
function runAnalyze(){
  if(!selectedLatLon || !currentZones.length){ alert(t('no_location')); return; }
  recommendedZone = currentZones.reduce(saferBetter, currentZones[0]);
  const steps = buildAgentSteps(recommendedZone);
  const stages = groupAgentSteps(recommendedZone, steps);
  const list = document.getElementById('agentList');
  list.innerHTML = stages.map((s,i)=>`
    <div class="agent-stage" id="agent-${i}">
      <div class="agent-stage-head">
        <span class="agent-stage-icon">${s.icon}</span>
        <span class="agent-stage-title">${s.title}</span>
        <span class="agent-stage-status checking" id="astatus-${i}">${t('status_checking')}</span>
      </div>
      <div class="agent-stage-body" id="aresult-${i}" style="display:none;">
        ${s.substeps.map(sub=>`<div class="agent-stage-line">${sub.task?`<div class="agent-stage-line-task">${sub.task}</div>`:''}<span class="agent-stage-line-label">${t(sub.key)}</span> ${sub.result}</div>`).join('')}
      </div>
    </div>`).join('');
  document.querySelector('[data-page="agents"]').click();
  stages.forEach((s,i)=>{
    setTimeout(()=>{
      document.getElementById(`agent-${i}`).classList.add('done');
      const statusEl = document.getElementById(`astatus-${i}`);
      statusEl.className = 'agent-stage-status ' + s.trust;
      statusEl.textContent = t('status_' + s.trust);
      document.getElementById(`aresult-${i}`).style.display = 'block';
    }, 420*(i+1));
  });
  setTimeout(()=>{
    showFinding(recommendedZone);
    recommendedZone.marker.openPopup();
    map.setView([recommendedZone.lat, recommendedZone.lon], 12);
  }, 420*(stages.length+1));

  // Independent second opinion from a real LLM panel (Part 6). This is a
  // separate async track from the rule-based steps above — it never
  // blocks or delays them, and it never fabricates a result: if the
  // backend/API key isn't set up, it says so honestly (see
  // renderLlmPanelResult).
  renderLlmPanelLoading();
  fetchLlmAgentAnalysis(currentZones, recommendedZone, selectedLatLon).then(renderLlmPanelResult);
}

/* ============== REAL LLM MULTI-AGENT PANEL (Groq) — Part 6 ==============
   A second, independent opinion layered on top of the rule-based zone
   scoring above (runAnalyze/buildAgentSteps). Calls the ORCA backend's
   /api/agent-analysis endpoint, which asks a free Groq-hosted LLM to
   review the SAME real numbers already computed for currentZones (never
   invents its own data) and speak as a small panel of specialist agents.
   If the backend isn't running, or no Groq API key has been configured
   there yet (see backend/.env.example), this fails to an honest
   "unavailable" message — matching every other external-data pattern in
   this file (tryBackendZones, fetchNearbyFishermen, etc.): try, timeout,
   never throw, never fake a result. */
function escapeHtml(s){
  return String(s==null?'':s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
async function fetchLlmAgentAnalysis(zones, recommendedZone, latlon){
  if(!latlon || !zones || !zones.length) return {ok:false, reason:'unavailable'};
  try{
    const controller = new AbortController();
    const timer = setTimeout(()=>controller.abort(), 20000); // LLM calls are slower than plain data fetches
    let res;
    try{
      res = await fetch(`${BACKEND_URL}/api/agent-analysis`, {
        method:'POST', headers:{'Content-Type':'application/json'}, signal:controller.signal,
        body: JSON.stringify({
          lat: latlon.lat, lon: latlon.lon,
          recommended_letter: recommendedZone.letter,
          zones: zones.map(z=>({
            letter:z.letter, distance:z.distance, fish:z.fish, wind:z.wind, wave:z.wave,
            sst: (typeof z.sst==='number' ? z.sst : null),
            weatherKey:z.weatherKey, oceanKey:z.oceanKey, overall:z.overall, color:z.color,
            borderDistance: (typeof z.borderDistance==='number' ? z.borderDistance : null),
            borderTier: z.borderTier || null
          }))
        })
      });
    } finally { clearTimeout(timer); }
    if(!res.ok) return {ok:false, reason:'unavailable'};
    return await res.json();
  }catch(e){ return {ok:false, reason:'unavailable'}; }
}
function renderLlmPanelLoading(){
  const card = document.getElementById('llmPanelCard');
  if(!card) return;
  card.style.display = 'block';
  const summaryBox = document.getElementById('llmSummaryBox');
  if(summaryBox) summaryBox.style.display = 'none';
  document.getElementById('llmAgentList').innerHTML = `<div class="llm-status">${t('llm_loading')}</div>`;
}
function renderLlmPanelResult(data){
  const list = document.getElementById('llmAgentList');
  const summaryBox = document.getElementById('llmSummaryBox');
  if(!list) return;
  if(!data || !data.ok){
    const reason = (data && data.reason==='not_configured') ? t('llm_not_configured') : t('llm_unavailable');
    list.innerHTML = `<div class="llm-status">${reason}</div>`;
    if(summaryBox) summaryBox.style.display = 'none';
    return;
  }
  const agents = Array.isArray(data.agents) ? data.agents : [];
  if(!agents.length){
    list.innerHTML = `<div class="llm-status">${t('llm_unavailable')}</div>`;
    if(summaryBox) summaryBox.style.display = 'none';
    return;
  }
  // Part 11: an "🤖 AI opinion" badge, deliberately NOT a VERIFIED pill —
  // this is Groq's own free-text commentary on the same real numbers above,
  // not itself a measured/verified data point, and the redesign brief asks
  // for exactly this distinction to stay visible.
  list.innerHTML = agents.map(a=>`
    <div class="agent-stage llm done">
      <div class="agent-stage-head"><span class="agent-stage-icon">🤖</span><span class="agent-stage-title">${escapeHtml(a.name||'Agent')}</span><span class="agent-stage-status ai">${t('ai_opinion_badge')}</span></div>
      <div class="agent-stage-body" style="display:block;"><div class="agent-stage-line">${escapeHtml(a.finding||'')}</div></div>
    </div>`).join('');
  if(data.summary && summaryBox){
    summaryBox.style.display = 'block';
    summaryBox.innerHTML = `<h4>🧭 ${t('llm_summary_title')}</h4><div class="sub">${escapeHtml(data.summary)}</div>`;
  } else if(summaryBox) summaryBox.style.display = 'none';
}

/* ============== ALERTS (fishing) ============== */
function renderAlerts(){
  const box = document.getElementById('alertsBox');
  if(!currentZones.length){ box.innerHTML = `<div class="hint">${t('no_location')}</div>`; return; }
  box.innerHTML = currentZones.map(z=>{
    const cls = z.color==='green'?'green':z.color==='yellow'?'':'red';
    const title = z.color==='green' ? `🟢 ${t('good').toUpperCase()}` : `⚠️ ${t(z.weatherKey).toUpperCase()}`;
    const secondLine = z.isFreshwater
      ? `${t('wind')}: ${z.wind} km/h &nbsp; ${t('air_temp')}: ${fmtVal(z.airTemp,'°C')} &nbsp; 🛡️ ${z.borderDistance} km`
      : `${t('wind')}: ${z.wind} km/h &nbsp; ${t('waves')}: ${fmtVal(z.wave,' m')} &nbsp; 🛡️ ${z.borderDistance} km`;
    return `<div class="alert-card ${cls}"><h4>${title} — ${t('zone')} ${z.letter}</h4>
      <div>${secondLine}</div></div>`;
  }).join('');
}

/* ============== SAFETY ============== */
function renderChecklist(){
  document.getElementById('checklist').innerHTML = t('checklist_items').map(i=>`<li>${i}</li>`).join('');
}
function showRoute(){
  if(!selectedLatLon){ alert(t('no_location')); return; }
  const target = recommendedZone || currentZones[0];
  if(routeLine) map.removeLayer(routeLine);
  routeLine = L.polyline([[selectedLatLon.lat, selectedLatLon.lon],[target.lat, target.lon]], {color:'#22d3ee', weight:3, dashArray:'8,8'}).addTo(map);
  document.querySelector('[data-page="dashboard"]').click();
  map.fitBounds(routeLine.getBounds(), {padding:[40,40]});
}

/* ============== BORDER INTELLIGENCE ==============
   Text/status only — this shares the single Dashboard map (#map) rather
   than drawing its own second map. */
function renderBorderStatus(){
  if(!selectedLatLon) return;
  const live = liveLatLon || selectedLatLon;
  const summary = computeBorderSummary(live.lat, live.lon);
  const w = summary.worst;
  const heroCls = w.crossed ? 'critical' : w.tier;
  const heroMsgKey = w.crossed ? 'hero_crossed' : ('hero_'+w.tier);
  const heroSubText = summary.currentState ? t('current_state_line',{state:summary.currentState}) : t('current_state_lanka');
  document.getElementById('borderHero').className = 'hero-banner '+heroCls;
  document.getElementById('borderHero').innerHTML = `<div class="hero-icon">${w.crossed?'🚨':tierEmoji(w.tier)}</div><div><div class="hero-text" id="heroText">${t(heroMsgKey,{d:w.distance.toFixed(1), name:w.name})}</div><div class="hero-sub" id="heroSub">${heroSubText}</div></div>`;
  document.getElementById('borderTips').innerHTML = t(w.crossed?'tips_crossed':'tips_'+w.tier).map(x=>`<li>${x}</li>`).join('');

  // Compact echo of the same border status directly on the Dashboard map, so
  // fishing zones and border risk read together on one screen.
  const miniEl = document.getElementById('borderMiniStatus');
  if(miniEl) miniEl.innerHTML = `${w.crossed?'🚨':tierEmoji(w.tier)} ${t(heroMsgKey,{d:w.distance.toFixed(1), name:w.name})}`;

  document.getElementById('borderStatusBox').innerHTML = `
    <div class="status-chip"><div class="l">${t('current_state')}</div><div class="v" style="font-size:14px;">${summary.currentState || t('current_state_lanka')}</div></div>
    <div class="status-chip"><div class="l">${t('nearest_state')}</div><div class="v" style="font-size:14px;">${summary.state.name}<br>${summary.state.distance.toFixed(1)} km</div></div>
    <div class="status-chip"><div class="l">${t('other_state_boundary')}</div><div class="v" style="font-size:14px;">${summary.otherState.name}<br>${summary.otherState.distance.toFixed(1)} km</div></div>
    <div class="status-chip"><div class="l">${t('nearest_maritime')}</div><div class="v" style="font-size:14px;">${summary.marine.distance.toFixed(1)} km ${summary.marine.crossed?'⚠️':''}</div></div>
    <div class="status-chip"><div class="l">${t('direction')}</div><div class="v">${bearingLabel(summary.bearing)}</div></div>`;

  evaluateBorderAlert(summary);
  document.getElementById('liveLat').textContent = live.lat.toFixed(6);
  document.getElementById('liveLon').textContent = live.lon.toFixed(6);
  document.getElementById('liveAcc').textContent = liveAccuracy!==null ? '±'+Math.round(liveAccuracy)+' m' : '—';
  document.getElementById('liveTime').textContent = new Date().toLocaleTimeString();
}
function evaluateBorderAlert(summary){
  const w = summary.worst;
  const tier = w.crossed ? 'critical' : w.tier;
  if(!settings.borderAlerts) return;
  const d = w.distance.toFixed(1);
  const msgKey = w.crossed ? 'alert_crossed' : ('alert_'+tier);
  const msg = t(msgKey, {d, name:w.name});
  const stateKey = tier + (w.crossed?'_x':'');
  if(stateKey !== lastBorderTier){
    const isFreshPick = suppressNextVoiceAlert;
    suppressNextVoiceAlert = false;
    lastBorderTier = stateKey;
    // A brand-new location pick sets this tier as the silent baseline —
    // speaking it here would mean every casual map click gets narrated.
    // Voice still fires for a REAL escalation while already at/tracking a
    // location (live-tracking GPS updates, or the tier worsening again
    // before a new pick), which is the genuine safety case this exists for.
    if(settings.voiceAlerts && !isFreshPick) speak(msg);
    if(tier==='critical'){ triggerFamilyAlert(t('family_alert_border',{tier:t(tier), d})); }
  }
  const live = liveLatLon || selectedLatLon;
  currentZones.forEach(z=>{
    const dz = haversine(live.lat, live.lon, z.lat, z.lon);
    if(dz < 1.0){
      if(z.color==='red' && !familyAlerted.redzone){ familyAlerted.redzone = true; triggerFamilyAlert(t('family_alert_redzone')); }
      if(z.weatherKey==='highrisk' && !familyAlerted.cyclone){ familyAlerted.cyclone = true; triggerFamilyAlert(t('family_alert_cyclone')); }
    }
  });
}
const SPEECH_LANG_MAP = {en:'en-IN', hi:'hi-IN', te:'te-IN', ta:'ta-IN', kn:'kn-IN', ml:'ml-IN'};
let ttsVoices = [];
function refreshTtsVoices(){ try{ ttsVoices = window.speechSynthesis.getVoices() || []; }catch(e){ ttsVoices = []; } }
if('speechSynthesis' in window){
  refreshTtsVoices();
  window.speechSynthesis.onvoiceschanged = refreshTtsVoices;
}
let ttsWarnedLangs = {};
function speak(text){
  if(!('speechSynthesis' in window)) return;
  try{
    const targetLang = SPEECH_LANG_MAP[currentLang] || 'en-IN';
    const u = new SpeechSynthesisUtterance(text);
    u.lang = targetLang;
    if(!ttsVoices.length) refreshTtsVoices();
    const exact = ttsVoices.find(v=>v.lang === targetLang);
    const family = exact || ttsVoices.find(v=>(v.lang||'').toLowerCase().startsWith(targetLang.split('-')[0]));
    if(family) u.voice = family;
    else if(currentLang!=='en' && !ttsWarnedLangs[currentLang]){
      // This device/browser has no installed voice for the selected language.
      // Speech will fall back to whatever default voice the browser picks —
      // that's an OS/browser voice-pack limitation, not something this app
      // can force. Flag it once instead of silently mis-speaking English.
      ttsWarnedLangs[currentLang] = true;
      console.warn(`ORCA voice: no ${targetLang} text-to-speech voice is installed on this device — install a ${targetLang} voice pack in Windows Settings > Time & Language > Speech to hear this language spoken.`);
    }
    window.speechSynthesis.speak(u);
  }catch(e){}
}
// Part 11: a prominent, one-click voice on/off toggle in the topbar itself —
// settings.voiceAlerts already existed as a Settings-modal-only checkbox,
// which wasn't obvious as "the switch that stops the map from talking".
// This mirrors the same setting so either control always reflects the truth.
// Part 11: light/dark theme toggle. Applies a data-theme attribute the CSS
// design-token layer reads (see style.css :root / [data-theme="light"]) —
// purely presentational, touches no geographic/scoring logic.
function applyTheme(){
  document.documentElement.setAttribute('data-theme', settings.theme==='light' ? 'light' : 'dark');
}
function updateThemeToggleBtn(){
  const b = document.getElementById('themeToggleBtn');
  if(!b) return;
  const isLight = settings.theme==='light';
  b.textContent = isLight ? '☀️' : '🌙';
  b.title = isLight ? t('theme_dark_title') : t('theme_light_title');
}
function updateVoiceToggleBtn(){
  const b = document.getElementById('voiceToggleBtn');
  if(!b) return;
  b.textContent = settings.voiceAlerts ? '🔊' : '🔇';
  b.classList.toggle('active', !!settings.voiceAlerts);
  b.title = settings.voiceAlerts ? t('voice_on_title') : t('voice_off_title');
}
function familyContactsList(){
  return [
    {name:settings.nameFamily1, phone:settings.phoneFamily1},
    {name:settings.nameFamily2, phone:settings.phoneFamily2}
  ].filter(c=>c.phone);
}
function triggerFamilyAlert(reason){
  const contacts = familyContactsList();
  const ts = new Date().toLocaleTimeString();
  familyLogEntries.unshift({reason, ts, contacts});
  renderFamilyLog();
}
function renderFamilyLog(){
  const box = document.getElementById('familyLog');
  if(!box) return;
  if(!familyLogEntries.length){ box.innerHTML = ''; return; }
  box.innerHTML = familyLogEntries.slice(0,10).map(e=>`
    <div class="entry"><div class="ts">${e.ts}</div><div>🚨 ${e.reason}</div>
      ${(e.contacts && e.contacts.length) ? e.contacts.map(c=>`<div>📞 ${t('family_calling',{name:c.name||t('family_contact')})} (${c.phone})</div>`).join('') : `<div style="color:var(--yellow);">${t('no_contacts')}</div>`}
    </div>`).join('');
}

function toggleLiveTracking(){
  settings.liveTracking = !settings.liveTracking;
  saveSettings();
  document.getElementById('chkLive').checked = settings.liveTracking;
  document.getElementById('liveToggleLabel').textContent = settings.liveTracking ? t('btn_live_on') : t('btn_live_off');
  if(settings.liveTracking) startWatch(); else stopWatch();
}
function startWatch(){
  if(!navigator.geolocation){ alert(t('gps_denied')); settings.liveTracking=false; return; }
  watchId = navigator.geolocation.watchPosition(pos=>{
    liveLatLon = {lat:pos.coords.latitude, lon:pos.coords.longitude};
    liveAccuracy = pos.coords.accuracy;
    updateLiveMarkers();
    renderBorderStatus();
  }, err=>{
    document.getElementById('borderTips').innerHTML = `<li>${t('gps_watch_error')}</li>`;
    settings.liveTracking = false;
    document.getElementById('chkLive').checked = false;
    document.getElementById('liveToggleLabel').textContent = t('btn_live_off');
  }, {enableHighAccuracy:true, maximumAge:1000, timeout:8000});
}
function stopWatch(){ if(watchId!==null){ navigator.geolocation.clearWatch(watchId); watchId=null; } }
function updateLiveMarkers(){
  if(!liveLatLon) return;
  if(fishermanMarker) fishermanMarker.setLatLng([liveLatLon.lat, liveLatLon.lon]);
}
function demoSimulateApproach(){
  if(!selectedLatLon){ alert(t('no_location')); return; }
  if(demoMoveInterval){ clearInterval(demoMoveInterval); demoMoveInterval=null; return; }
  const summary = computeBorderSummary(liveLatLon.lat, liveLatLon.lon);
  const targetLat = summary.worst.type==='maritime' ? summary.marine.point[0] : summary.state.lat;
  const targetLon = summary.worst.type==='maritime' ? summary.marine.point[1] : summary.state.lon;
  const startLat = liveLatLon.lat, startLon = liveLatLon.lon;
  let step=0; const totalSteps=14;
  demoMoveInterval = setInterval(()=>{
    step++;
    const frac = (step/totalSteps) * 1.08;
    liveLatLon = {lat:startLat+(targetLat-startLat)*frac, lon:startLon+(targetLon-startLon)*frac};
    liveAccuracy = 8+Math.random()*10;
    updateLiveMarkers();
    renderBorderStatus();
    if(step>=totalSteps){ clearInterval(demoMoveInterval); demoMoveInterval=null; }
  }, 900);
}
function suggestReturnRoute(){
  if(!selectedLatLon){ alert(t('no_location')); return; }
  const live = liveLatLon || selectedLatLon;
  if(!currentZones.length){ pushChat('orca', t('chat_no_location')); return; }
  const target = currentZones.reduce(saferBetter, currentZones[0]);
  const brg = bearingBetween(live.lat, live.lon, target.lat, target.lon);
  const d = haversine(live.lat, live.lon, target.lat, target.lon).toFixed(1);
  const label = t('zone')+' '+target.letter;
  const msg = t('return_route_msg', {w: target.wind, z:label, dir:bearingLabel(brg), label, d});
  // Border Intelligence lives on the merged Dashboard page (Part 6, item 8);
  // the answer itself goes to the floating chat widget so it's visible
  // regardless of which page the fisherman is on.
  openChatPanel();
  pushChat('orca', msg);
}

/* ============== CYCLONE INTELLIGENCE (Part 3) ==============
   A "storm-risk heuristic" built from REAL live wind + pressure + wave
   data (same Open-Meteo source used elsewhere) — a simple threshold
   score, NOT real cyclone detection (that needs satellite eye/spiral
   analysis this app doesn't have). When the heuristic is low, the page
   plainly says no cyclone risk is indicated for the next 2 days.
   Real live cyclone tracking (IMD/MOSDAC) is out of scope — see README;
   always check IMD/INCOIS directly for official warnings. */
let lastCycloneSignals = null;
let lastCycloneFetchedAt = null;

async function fetchCycloneSignals(lat, lon){
  try{
    const [wRes, mRes] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(4)}&longitude=${lon.toFixed(4)}&current=wind_speed_10m,pressure_msl&timezone=auto`),
      fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${lat.toFixed(4)}&longitude=${lon.toFixed(4)}&current=wave_height&timezone=auto`)
    ]);
    const out = {};
    if(wRes.ok){
      const d = await wRes.json();
      if(d && d.current){
        if(typeof d.current.wind_speed_10m === 'number') out.wind = d.current.wind_speed_10m;
        if(typeof d.current.pressure_msl === 'number') out.pressure = d.current.pressure_msl;
      }
    }
    if(mRes.ok){
      const d = await mRes.json();
      if(d && d.current && typeof d.current.wave_height === 'number') out.wave = d.current.wave_height;
    }
    return Object.keys(out).length ? out : null;
  }catch(e){ return null; }
}

function computeCycloneRiskHeuristic(signals){
  const tags = {};
  let wind, pressure, wave;
  if(signals && typeof signals.wind === 'number'){ wind = signals.wind; tags.wind = 'live'; }
  else { wind = 18; tags.wind = 'estimate'; }
  if(signals && typeof signals.pressure === 'number'){ pressure = signals.pressure; tags.pressure = 'live'; }
  else { pressure = 1008; tags.pressure = 'estimate'; }
  if(signals && typeof signals.wave === 'number'){ wave = signals.wave; tags.wave = 'live'; }
  else { wave = 1.2; tags.wave = 'estimate'; }

  const pressureDrop = clamp((1013 - pressure) / 40 * 100, 0, 100); // ~1013 hPa = average sea-level
  const windScore = clamp((wind - 20) / 100 * 100, 0, 100);
  const waveScore = clamp((wave - 1.5) / 6 * 100, 0, 100);
  const index = Math.round(pressureDrop*0.5 + windScore*0.3 + waveScore*0.2);
  let tier = 'low';
  if(index >= 70) tier = 'high';
  else if(index >= 40) tier = 'watch';
  else if(index >= 20) tier = 'elevated';
  return {index, tier, wind, pressure, wave, tags};
}

function riskTierClass(tier){ return tier==='high'?'critical':tier==='watch'?'high':tier==='elevated'?'approaching':'safe'; }
function hazardEmoji(cls){ return cls==='critical'?'🔴':cls==='high'?'🟠':cls==='approaching'?'🟡':'🟢'; }

function evaluateCycloneAlert(risk){
  if(!settings.borderAlerts) return; // reuse the existing alerts toggle rather than adding a new one
  if(risk.tier==='high' && !familyAlerted.cyclone){
    familyAlerted.cyclone = true;
    triggerFamilyAlert(t('family_alert_cyclone_risk', {index:risk.index}));
  }
}

function renderCycloneCards(risk){
  const box = document.getElementById('cycloneBox');
  if(!box) return;
  const srcTag = (risk.tags.wind==='live' || risk.tags.pressure==='live') ? `<span class="src-tag live">LIVE</span>` : `<span class="src-tag sim">EST</span>`;
  const riskCls = riskTierClass(risk.tier);
  const lowRisk = risk.tier === 'low';
  box.innerHTML = `
    <div class="hero-banner ${riskCls}">
      <div class="hero-icon">${hazardEmoji(riskCls)}</div>
      <div>
        <div class="hero-text">${t('cyclone_heuristic_title')} ${srcTag}</div>
        <div class="hero-sub">${t('cyclone_heuristic_sub',{index:risk.index, tier:t('cyclone_risk_'+risk.tier)})}${lastCycloneFetchedAt ? ' · '+t('freshness_asof',{time:new Date(lastCycloneFetchedAt).toLocaleTimeString()}) : ''}</div>
      </div>
    </div>
    <div class="status-strip" style="margin:12px 0 18px;">
      <div class="status-chip"><div class="l">${t('wind')}</div><div class="v">${risk.wind.toFixed(0)} km/h</div></div>
      <div class="status-chip"><div class="l">${t('cyclone_pressure')}</div><div class="v">${risk.pressure.toFixed(0)} hPa</div></div>
      <div class="status-chip"><div class="l">${t('waves')}</div><div class="v">${risk.wave.toFixed(1)} m</div></div>
      <div class="status-chip"><div class="l">${t('cyclone_risk_index')}</div><div class="v">${risk.index}/100</div></div>
    </div>

    ${lowRisk ? `<div class="hero-banner safe"><div class="hero-icon">🟢</div><div><div class="hero-text">${t('cyclone_no_risk')}</div></div></div>` : ''}

    <h3>🛟 <span>${t('cyclone_checklist_title')}</span></h3>
    <ul class="checklist">${t('cyclone_checklist_items').map(i=>`<li>${i}</li>`).join('')}</ul>

    <div class="hint" style="margin-top:12px;">${t('cyclone_official_note')}</div>
  `;
}

async function renderCyclonePage(){
  const box = document.getElementById('cycloneBox');
  if(!box) return;
  if(!selectedLatLon){ box.innerHTML = `<div class="hint">${t('no_location')}</div>`; return; }
  box.innerHTML = `<div class="hint">${t('fetching_live')}</div>`;
  const signals = await fetchCycloneSignals(selectedLatLon.lat, selectedLatLon.lon);
  lastCycloneSignals = signals;
  lastCycloneFetchedAt = Date.now();
  const risk = computeCycloneRiskHeuristic(signals);
  renderCycloneCards(risk);
  evaluateCycloneAlert(risk);
}

/* ============== TRIP PLANNER (Part 4) ==============
   Real Open-Meteo hourly forecast (wind + wave) for the fisherman's
   selected location, sliced to their chosen departure→return window.
   Safety assessment deliberately uses the WORST hour in that window, not
   the average — a trip is only as safe as its worst moment. Beyond the
   ~15-day forecast horizon (or if the fetch fails) this clearly falls back
   to a labeled simulated estimate instead of pretending to know the
   weather two months out. */
async function fetchForecastWindow(lat, lon, dateStr, nextDateStr){
  try{
    const [wRes, mRes] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(4)}&longitude=${lon.toFixed(4)}&hourly=wind_speed_10m&start_date=${dateStr}&end_date=${nextDateStr}&timezone=auto`),
      fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${lat.toFixed(4)}&longitude=${lon.toFixed(4)}&hourly=wave_height&start_date=${dateStr}&end_date=${nextDateStr}&timezone=auto`)
    ]);
    let windTimes=null, wind=null, waveTimes=null, wave=null;
    if(wRes.ok){
      const d = await wRes.json();
      if(d && d.hourly){ windTimes = d.hourly.time; wind = d.hourly.wind_speed_10m; }
    }
    if(mRes.ok){
      const d = await mRes.json();
      if(d && d.hourly){ waveTimes = d.hourly.time; wave = d.hourly.wave_height; }
    }
    if(!wind && !wave) return null;
    return {windTimes, wind, waveTimes, wave};
  }catch(e){ return null; }
}
function sliceWindow(times, values, startDate, endDate){
  if(!times || !values) return [];
  const out = [];
  for(let i=0;i<times.length;i++){
    const tt = new Date(times[i]);
    if(tt >= startDate && tt <= endDate && typeof values[i]==='number') out.push(values[i]);
  }
  return out;
}
function buildForecastAdvisory(data, depart, ret, daysAhead){
  const windVals = sliceWindow(data.windTimes, data.wind, depart, ret);
  const waveVals = sliceWindow(data.waveTimes, data.wave, depart, ret);
  if(!windVals.length && !waveVals.length) return null;
  const maxWind = windVals.length ? Math.max(...windVals) : 18;
  const avgWind = windVals.length ? windVals.reduce((a,b)=>a+b,0)/windVals.length : 18;
  const maxWave = waveVals.length ? Math.max(...waveVals) : 1.2;
  const avgWave = waveVals.length ? waveVals.reduce((a,b)=>a+b,0)/waveVals.length : 1.2;
  const windRisk = clamp((maxWind-8)/32*100,0,100);
  const waveRisk = clamp((maxWave-0.4)/2.3*100,0,100);
  const riskIndex = windRisk*0.5 + waveRisk*0.5;
  const weatherKey = riskIndex<35?'good':riskIndex<65?'changing':'highrisk';
  return {source: daysAhead>3?'forecast_far':'forecast_near', maxWind, avgWind, maxWave, avgWave, riskIndex, weatherKey, daysAhead};
}
function simulateTripAdvisory(lat, lon, depart){
  const rand = mulberry32(Math.abs(hashStr(lat.toFixed(2)+','+lon.toFixed(2)+':'+depart.toISOString().slice(0,13))));
  const maxWind = Math.round(10 + rand()*28);
  const maxWave = +(0.5 + rand()*2.2).toFixed(1);
  const avgWind = Math.round(maxWind*0.75);
  const avgWave = +(maxWave*0.75).toFixed(1);
  const windRisk = clamp((maxWind-8)/32*100,0,100);
  const waveRisk = clamp((maxWave-0.4)/2.3*100,0,100);
  const riskIndex = windRisk*0.5 + waveRisk*0.5;
  const weatherKey = riskIndex<35?'good':riskIndex<65?'changing':'highrisk';
  return {source:'simulated', maxWind, avgWind, maxWave, avgWave, riskIndex, weatherKey, daysAhead:null};
}
function renderTripResult(adv, depart, ret){
  const box = document.getElementById('tripResultBox');
  if(!box) return;
  const cls = adv.weatherKey==='good' ? 'safe' : adv.weatherKey==='changing' ? 'approaching' : 'critical';
  const advisoryText = adv.weatherKey==='good' ? t('trip_advisory_go') : adv.weatherKey==='changing' ? t('trip_advisory_caution') : t('trip_advisory_nogo');
  const srcTag = adv.source==='simulated' ? `<span class="src-tag sim">SIMULATED</span>`
    : adv.source==='forecast_far' ? `<span class="src-tag cached">${t('src_forecast_far')}</span>`
    : `<span class="src-tag live">${t('src_forecast_near')}</span>`;
  box.innerHTML = `
    <div class="hero-banner ${cls}">
      <div class="hero-icon">${hazardEmoji(cls)}</div>
      <div>
        <div class="hero-text">${advisoryText} ${srcTag}</div>
        <div class="hero-sub">${t('trip_window_label',{start:depart.toLocaleString(), end:ret.toLocaleString()})}</div>
      </div>
    </div>
    <div class="status-strip" style="margin:12px 0;">
      <div class="status-chip"><div class="l">${t('wind')} (max)</div><div class="v">${Math.round(adv.maxWind)} km/h</div></div>
      <div class="status-chip"><div class="l">${t('wind')} (avg)</div><div class="v">${Math.round(adv.avgWind)} km/h</div></div>
      <div class="status-chip"><div class="l">${t('waves')} (max)</div><div class="v">${adv.maxWave.toFixed(1)} m</div></div>
      <div class="status-chip"><div class="l">${t('waves')} (avg)</div><div class="v">${adv.avgWave.toFixed(1)} m</div></div>
    </div>
    <div class="hint">${t('trip_worst_hour_note')}</div>
  `;
}
async function planTrip(){
  const box = document.getElementById('tripResultBox');
  if(!box) return;
  if(!selectedLatLon){ box.innerHTML = `<div class="hint">${t('no_location')}</div>`; return; }
  const dateVal = document.getElementById('tripDate').value;
  const timeVal = document.getElementById('tripTime').value;
  const duration = clamp(parseInt(document.getElementById('tripDuration').value,10)||6, 1, 24);
  if(!dateVal || !timeVal){ box.innerHTML = `<div class="hint">${t('trip_pick_datetime')}</div>`; return; }
  box.innerHTML = `<div class="hint">${t('fetching_live')}</div>`;

  const depart = new Date(`${dateVal}T${timeVal}:00`);
  const ret = new Date(depart.getTime() + duration*3600*1000);
  const nextDateObj = new Date(depart); nextDateObj.setDate(nextDateObj.getDate()+1);
  const nextDateStr = nextDateObj.toISOString().slice(0,10);
  const daysAhead = Math.floor((depart - new Date()) / (1000*60*60*24));

  let advisory = null;
  if(daysAhead <= 15 && daysAhead >= -1){
    const data = await fetchForecastWindow(selectedLatLon.lat, selectedLatLon.lon, dateVal, nextDateStr);
    if(data) advisory = buildForecastAdvisory(data, depart, ret, daysAhead);
  }
  if(!advisory) advisory = simulateTripAdvisory(selectedLatLon.lat, selectedLatLon.lon, depart);
  renderTripResult(advisory, depart, ret);
}

/* ============== DATA SOURCE HEALTH PANEL (Part 5) ==============
   A real, live reachability check for every external source this app
   depends on — not a claim, an actual timed fetch to each one, run when
   the fisherman opens Data Sources or clicks "Check Now". This is the
   concrete, honest answer to "is this thing actually live right now". */
async function pingUrl(url, timeoutMs){
  const controller = new AbortController();
  const timer = setTimeout(()=>controller.abort(), timeoutMs || 5000);
  const t0 = (window.performance && performance.now) ? performance.now() : Date.now();
  try{
    const res = await fetch(url, {signal: controller.signal});
    clearTimeout(timer);
    const t1 = (window.performance && performance.now) ? performance.now() : Date.now();
    return {ok: res.ok, ms: Math.round(t1-t0)};
  }catch(e){
    clearTimeout(timer);
    return {ok:false, ms:null};
  }
}
async function runHealthChecks(){
  const box = document.getElementById('healthBox');
  if(!box) return;
  box.innerHTML = `<div class="hint">${t('fetching_live')}</div>`;
  const [backend, meteo, marine, nominatim] = await Promise.all([
    pingUrl(`${BACKEND_URL}/api/health`, 4000),
    pingUrl(`https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&current=wind_speed_10m`, 6000),
    pingUrl(`https://marine-api.open-meteo.com/v1/marine?latitude=13.08&longitude=80.27&current=wave_height`, 6000),
    pingUrl(`https://nominatim.openstreetmap.org/search?format=json&q=Chennai&limit=1`, 6000)
  ]);
  const geoOk = !!navigator.geolocation;
  const online = navigator.onLine;
  const rows = [
    {label:t('health_backend'), r:backend},
    {label:t('health_weather'), r:meteo},
    {label:t('health_marine'), r:marine},
    {label:t('health_geocode'), r:nominatim}
  ];
  const now = new Date().toLocaleTimeString();
  box.innerHTML = `
    <div class="status-strip">
      ${rows.map(x=>`<div class="status-chip"><div class="l">${x.label}</div><div class="v">${x.r.ok?'🟢 '+x.r.ms+' ms':'🔴 '+t('health_unreachable')}</div></div>`).join('')}
      <div class="status-chip"><div class="l">${t('health_gps')}</div><div class="v">${geoOk?'🟢':'🔴'}</div></div>
      <div class="status-chip"><div class="l">${t('health_network')}</div><div class="v">${online ? '🟢 '+t('health_online') : '🔴 '+t('health_offline')}</div></div>
    </div>
    <div class="hint" style="margin-top:8px;">${t('health_asof',{time:now})}</div>
  `;
}

/* ============== CHAT ==============
   A single floating "Talk to ORCA" widget available from every page (rather
   than duplicating the chat box on the Dashboard and Border card), so the
   conversation follows the fisherman wherever they navigate. */
function pushChat(who, text){
  if(who==='orca' && text && settings.nameSelf) text = t('chat_name_prefix',{name:settings.nameSelf}) + text;
  const box = document.getElementById('chatBoxFloat');
  if(!box) return;
  box.innerHTML += `<div class="msg ${who}">${text}</div>`;
  box.scrollTop = box.scrollHeight;
}
function answerOrca(q){
  const ql = q.toLowerCase();
  if(!selectedLatLon) return t('chat_no_location');
  const live = liveLatLon || selectedLatLon;
  const summary = computeBorderSummary(live.lat, live.lon);
  const w = summary.worst;
  if(ql.includes('border') || ql.includes('boundary') || ql.includes('far')){
    return t('chat_border_answer', {d: w.distance.toFixed(1), label: w.name, status: w.crossed?t('crossed_label'):t(w.tier)});
  }
  if(ql.includes('continue') || ql.includes('proceed') || ql.includes('can i')){
    return t('chat_continue_answer', {status: w.crossed?t('crossed_label'):t(w.tier), d: w.distance.toFixed(1)});
  }
  if(ql.includes('safer') || ql.includes('which zone') || ql.includes('compare') || ql.includes('best')){
    const best = currentZones.length ? currentZones.reduce(saferBetter, currentZones[0]) : null;
    return best ? t('chat_safer_answer', {zone: t('zone')+' '+best.letter, score: best.combined}) : t('chat_no_location');
  }
  if(ql.includes('weather')){
    const best = currentZones.length ? currentZones.reduce(saferBetter, currentZones[0]) : null;
    return best ? t('chat_weather_answer', {zone: t('zone')+' '+best.letter, weather: t(best.weatherKey), wave: best.wave, wind: best.wind}) : t('chat_no_location');
  }
  if(ql.includes('return') || ql.includes('back') || ql.includes('route')){
    suggestReturnRoute();
    return null;
  }
  return t('chat_default');
}
function sendChatFrom(inputId){
  const input = document.getElementById(inputId);
  if(!input) return;
  const q = input.value.trim();
  if(!q) return;
  pushChat('user', q);
  input.value='';
  setTimeout(()=>{ const ans = answerOrca(q); if(ans) pushChat('orca', ans); }, 350);
}
function sendChatFloat(){ sendChatFrom('chatInputFloat'); }
function initChatWelcome(){
  const box = document.getElementById('chatBoxFloat');
  if(box && box.children.length===0) pushChat('orca', t('chat_welcome'));
}
function openChatPanel(){
  const panel = document.getElementById('chatPanel');
  if(!panel) return;
  panel.classList.add('open');
  initChatWelcome();
  const input = document.getElementById('chatInputFloat');
  if(input) input.focus();
}
function closeChatPanel(){
  const panel = document.getElementById('chatPanel');
  if(panel) panel.classList.remove('open');
}
function toggleChatPanel(){
  const panel = document.getElementById('chatPanel');
  if(!panel) return;
  if(panel.classList.contains('open')) closeChatPanel(); else openChatPanel();
}
/* Part 7: the chat widget is now draggable — the fisherman can drag the
   robot button to wherever is convenient on screen (it stays there across
   pages and reloads via localStorage) instead of being pinned to one
   corner. A plain tap (no real movement) still opens/closes the panel; only
   an actual drag repositions it, so this never breaks the original
   click-to-chat behavior. */
function initDraggableChatFab(){
  const fab = document.getElementById('chatFab');
  const panel = document.getElementById('chatPanel');
  if(!fab) return;
  function positionChatPanel(x, y, w, h){
    if(!panel) return;
    const panelW = Math.min(340, window.innerWidth - 24);
    const panelH = Math.min(560, window.innerHeight * 0.7);
    let left = clamp(x + w/2 - panelW/2, 8, window.innerWidth - panelW - 8);
    let top = y - panelH - 12;
    if(top < 8) top = y + h + 12; // not enough room above the fab -> show it below instead
    top = clamp(top, 8, window.innerHeight - panelH - 8);
    panel.style.left = left + 'px'; panel.style.right = 'auto';
    panel.style.top = top + 'px'; panel.style.bottom = 'auto';
  }
  function applyFabPos(x, y){
    const w = fab.offsetWidth || 56, h = fab.offsetHeight || 56;
    x = clamp(x, 8, window.innerWidth - w - 8);
    y = clamp(y, 8, window.innerHeight - h - 8);
    fab.style.left = x + 'px'; fab.style.right = 'auto';
    fab.style.top = y + 'px'; fab.style.bottom = 'auto';
    positionChatPanel(x, y, w, h);
  }
  const saved = JSON.parse(localStorage.getItem('orcaChatFabPos') || 'null');
  if(saved && typeof saved.x === 'number' && typeof saved.y === 'number') applyFabPos(saved.x, saved.y);

  let dragging = false, moved = false, startX = 0, startY = 0, origX = 0, origY = 0;
  function pointerDown(e){
    dragging = true; moved = false;
    const p = e.touches ? e.touches[0] : e;
    startX = p.clientX; startY = p.clientY;
    const rect = fab.getBoundingClientRect();
    origX = rect.left; origY = rect.top;
    fab.classList.add('dragging');
    if(e.cancelable) e.preventDefault();
  }
  function pointerMove(e){
    if(!dragging) return;
    const p = e.touches ? e.touches[0] : e;
    const dx = p.clientX - startX, dy = p.clientY - startY;
    if(Math.abs(dx) > 6 || Math.abs(dy) > 6) moved = true;
    if(moved){ applyFabPos(origX + dx, origY + dy); if(e.cancelable) e.preventDefault(); }
  }
  function pointerUp(){
    if(!dragging) return;
    dragging = false;
    fab.classList.remove('dragging');
    if(moved){
      const rect = fab.getBoundingClientRect();
      localStorage.setItem('orcaChatFabPos', JSON.stringify({x:rect.left, y:rect.top}));
    } else {
      toggleChatPanel();
    }
  }
  fab.addEventListener('mousedown', pointerDown);
  window.addEventListener('mousemove', pointerMove);
  window.addEventListener('mouseup', pointerUp);
  fab.addEventListener('touchstart', pointerDown, {passive:false});
  window.addEventListener('touchmove', pointerMove, {passive:false});
  window.addEventListener('touchend', pointerUp);
  window.addEventListener('resize', ()=>{
    const rect = fab.getBoundingClientRect();
    if(fab.style.left) applyFabPos(rect.left, rect.top);
  });
}
function initMic(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  [
    {btnId:'micBtnFloat', hintId:'voiceHintFloat', onResult:(text)=>{ document.getElementById('chatInputFloat').value = text; sendChatFloat(); }},
    // Voice location search (Fisherman location field): speak any coastal
    // place name in whichever language is selected — it fills the field and
    // searches immediately (known towns resolve instantly; unknown ones fall
    // back to a live geocode), instead of requiring a separate Search tap.
    {btnId:'micBtnLoc', hintId:'voiceHintLoc', onResult:(text)=>{ document.getElementById('locInput').value = text; doSearch(); }}
  ].forEach(cfg=>{
    const btn = document.getElementById(cfg.btnId);
    const hint = document.getElementById(cfg.hintId);
    if(!btn) return;
    if(!SR){ if(hint) hint.textContent = t('voice_unsupported'); btn.disabled = true; return; }
    const rec = new SR();
    rec.interimResults = false; rec.maxAlternatives = 1;
    btn.addEventListener('click', ()=>{
      // Set just before start(), not once at init — so switching the
      // language selector also switches what the mic listens for, instead
      // of always transcribing as English regardless of the chosen language.
      rec.lang = SPEECH_LANG_MAP[currentLang] || 'en-IN';
      if(hint) hint.textContent = t('voice_listening');
      try{ rec.start(); }catch(e){}
    });
    rec.onresult = (e)=>{
      const transcript = e.results[0][0].transcript;
      if(hint) hint.textContent = '';
      cfg.onResult(transcript);
    };
    rec.onerror = ()=>{ if(hint) hint.textContent = t('voice_unsupported'); };
  });
}

/* ============== EMERGENCY ============== */
function openEmergency(){
  document.getElementById('emgLoc').textContent = selectedLatLon ? (document.getElementById('locInput').value) : '—';
  document.getElementById('emgSteps').innerHTML = t('emg_steps').map((s,i)=>`<div class="emg-step"><span class="n">${i+1}</span><span>${s}</span></div>`).join('');
  const contacts = familyContactsList();
  const callingBox = document.getElementById('emgCalling');
  if(callingBox){
    callingBox.innerHTML = contacts.length
      ? `<div style="font-weight:700;margin-bottom:6px;">${t('emg_calling_title')}</div>` + contacts.map(c=>`<div class="entry">📞 ${t('family_calling',{name:c.name||t('family_contact')})} (${c.phone})</div>`).join('')
      : `<div style="color:var(--yellow);">${t('no_contacts')}</div>`;
  }
  if(selectedLatLon) triggerFamilyAlert(t('emg_reason'));
  openModal('emgModal');
}
function openModal(id){ document.getElementById(id).classList.add('active'); }
function closeModal(id){ document.getElementById(id).classList.remove('active'); }

/* ============== QUICK MENU ==============
   A small ☰ dropdown for jumping straight to a section that now lives inside
   the merged Dashboard page (Trip Planner / Border / Cyclone — Part 6, item
   8) instead of its own tab, so it's still one click away by name. */
if(document.getElementById('menuBtn')){
  const menuBtn = document.getElementById('menuBtn');
  const quickMenu = document.getElementById('quickMenu');
  menuBtn.addEventListener('click', (e)=>{ e.stopPropagation(); quickMenu.classList.toggle('open'); });
  document.addEventListener('click', (e)=>{ if(!quickMenu.contains(e.target) && e.target!==menuBtn) quickMenu.classList.remove('open'); });
  const QUICK_TARGETS = {border:'borderCard', cyclone:'cycloneCard'};
  quickMenu.querySelectorAll('[data-quick]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      quickMenu.classList.remove('open');
      const key = btn.dataset.quick;
      if(key === 'sources'){ document.querySelector('[data-page="sources"]').click(); return; }
      document.querySelector('[data-page="dashboard"]').click();
      const targetId = QUICK_TARGETS[key];
      const el = targetId && document.getElementById(targetId);
      if(el) setTimeout(()=>el.scrollIntoView({behavior:'smooth', block:'start'}), 200);
    });
  });
}

/* ============== NAV ============== */
document.querySelectorAll('#mainNav button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('#mainNav button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById('page-'+btn.dataset.page).classList.add('active');
    if(btn.dataset.page==='species'){ populateSpeciesSelect(); renderSpeciesResult(); }
    if(btn.dataset.page==='sources'){ runHealthChecks(); }
    if(map) setTimeout(()=>{ map.invalidateSize(); resizeWindCanvas(); }, 150);
  });
});

/* ============== SEARCH ============== */
async function doSearch(){
  const input = document.getElementById('locInput');
  const val = input.value.trim();
  if(!val) return;
  const numMatch = val.match(/^(-?\d{1,3}(?:\.\d+)?)\s*,\s*(-?\d{1,3}(?:\.\d+)?)$/);
  if(numMatch){ selectLocation(parseFloat(numMatch[1]), parseFloat(numMatch[2]), null); return; }
  const curated = lookupCuratedPlace(val);
  if(curated){ selectLocation(curated.lat, curated.lon, curated.label, curated.freshwater ? curated : null); return; }
  const landlocked = lookupLandlockedState(val);
  if(landlocked){ alert(`"${landlocked}" ${t('state_landlocked')}`); return; }
  const btn = document.getElementById('searchBtn');
  const orig = btn.innerHTML;
  btn.innerHTML = t('geocode_searching');
  btn.disabled = true;
  const result = await geocodeSearch(val);
  btn.innerHTML = orig;
  btn.disabled = false;
  if(result){ selectLocation(result.lat, result.lon, result.label); }
  else{ alert(`"${val}" ${t('geocode_notfound')}`); }
}

/* ============== EVENTS ============== */
document.getElementById('searchBtn').addEventListener('click', doSearch);
document.getElementById('locInput').addEventListener('keydown', e=>{ if(e.key==='Enter'){ e.preventDefault(); doSearch(); } });
document.getElementById('gpsBtn').addEventListener('click', ()=>{
  if(!navigator.geolocation){ alert(t('gps_denied')); return; }
  navigator.geolocation.getCurrentPosition(pos=>{
    selectLocation(pos.coords.latitude, pos.coords.longitude, null);
  }, ()=> alert(t('gps_denied')));
});
document.getElementById('analyzeBtn').addEventListener('click', runAnalyze);
document.getElementById('compareBtn').addEventListener('click', doCompare);
if(document.getElementById('goToCompareBtn')) document.getElementById('goToCompareBtn').addEventListener('click', ()=>{
  document.querySelector('[data-page="compare"]').click();
});
if(document.getElementById('pinModeBtn')) document.getElementById('pinModeBtn').addEventListener('click', togglePinMode);
if(document.getElementById('comparePinsBtn')) document.getElementById('comparePinsBtn').addEventListener('click', comparePins);
if(document.getElementById('pinSearchInput')) document.getElementById('pinSearchInput').addEventListener('input', e=>renderPinStack(e.target.value));
// Compare page is opened from several places (quick menu, goToCompareBtn,
// nav bar) — refresh the pin stack on every visit rather than only wiring
// one entry point, so it never shows stale pins.
if(document.querySelector('[data-page="compare"]')) document.querySelector('[data-page="compare"]').addEventListener('click', ()=>renderPinStack(document.getElementById('pinSearchInput') ? document.getElementById('pinSearchInput').value : ''));
document.getElementById('routeBtn').addEventListener('click', showRoute);
document.getElementById('chkShowBorders').addEventListener('change', drawMainBoundaries);
if(document.getElementById('chkShowHarbors')) document.getElementById('chkShowHarbors').addEventListener('change', drawHarborMarkers);
if(document.getElementById('chkShowWaterBodies')) document.getElementById('chkShowWaterBodies').addEventListener('change', drawWaterBodies);
if(document.getElementById('stateSelect')) document.getElementById('stateSelect').addEventListener('change', ()=> highlightSelectedState(true));
if(document.getElementById('healthCheckBtn')) document.getElementById('healthCheckBtn').addEventListener('click', runHealthChecks);
document.getElementById('settingsBtn').addEventListener('click', ()=>{
  document.getElementById('chkLive').checked = settings.liveTracking;
  document.getElementById('chkBorderAlerts').checked = settings.borderAlerts;
  document.getElementById('chkVoiceAlerts').checked = settings.voiceAlerts;
  if(document.getElementById('themeSelect')) document.getElementById('themeSelect').value = settings.theme;
  document.getElementById('thWarning').value = settings.warningKm;
  document.getElementById('thHigh').value = settings.highKm;
  document.getElementById('thCritical').value = settings.criticalKm;
  document.getElementById('nameSelf').value = settings.nameSelf;
  document.getElementById('phoneSelf').value = settings.phoneSelf;
  document.getElementById('nameFamily1').value = settings.nameFamily1;
  document.getElementById('phoneFamily1').value = settings.phoneFamily1;
  document.getElementById('nameFamily2').value = settings.nameFamily2;
  document.getElementById('phoneFamily2').value = settings.phoneFamily2;
  document.getElementById('chkShareLocation').checked = settings.shareLocation;
  document.getElementById('countrySelect').value = settings.country;
  document.getElementById('stateSelect').value = settings.state;
  openModal('settingsModal');
});
document.getElementById('closeSettings').addEventListener('click', ()=>closeModal('settingsModal'));
document.getElementById('voiceToggleBtn').addEventListener('click', ()=>{
  settings.voiceAlerts = !settings.voiceAlerts;
  saveSettings();
  updateVoiceToggleBtn();
  const chk = document.getElementById('chkVoiceAlerts');
  if(chk) chk.checked = settings.voiceAlerts;
});
document.getElementById('themeToggleBtn').addEventListener('click', ()=>{
  settings.theme = settings.theme==='light' ? 'dark' : 'light';
  saveSettings();
  applyTheme();
  updateThemeToggleBtn();
  const sel = document.getElementById('themeSelect');
  if(sel) sel.value = settings.theme;
});
document.getElementById('emgBtn').addEventListener('click', openEmergency);
document.getElementById('closeEmg').addEventListener('click', ()=>closeModal('emgModal'));
document.getElementById('loginBtn').addEventListener('click', ()=>{
  const phone = document.getElementById('phoneInput').value.trim();
  if(!phone){ alert('Enter a phone number'); return; }
  settings.state = document.getElementById('stateSelect').value;
  saveSettings();
  highlightSelectedState(true);
  alert('✅ Login successful — ' + phone);
});
document.getElementById('saveSettingsBtn').addEventListener('click', ()=>{
  settings.borderAlerts = document.getElementById('chkBorderAlerts').checked;
  settings.voiceAlerts = document.getElementById('chkVoiceAlerts').checked;
  settings.warningKm = parseFloat(document.getElementById('thWarning').value)||5;
  settings.highKm = parseFloat(document.getElementById('thHigh').value)||3;
  settings.criticalKm = parseFloat(document.getElementById('thCritical').value)||1;
  settings.nameSelf = document.getElementById('nameSelf').value.trim();
  settings.phoneSelf = document.getElementById('phoneSelf').value.trim();
  settings.nameFamily1 = document.getElementById('nameFamily1').value.trim();
  settings.phoneFamily1 = document.getElementById('phoneFamily1').value.trim();
  settings.nameFamily2 = document.getElementById('nameFamily2').value.trim();
  settings.phoneFamily2 = document.getElementById('phoneFamily2').value.trim();
  const wantsSharing = document.getElementById('chkShareLocation').checked;
  if(wantsSharing && !settings.phoneSelf){
    alert(t('fishermen_share_needs_phone'));
    document.getElementById('chkShareLocation').checked = false;
  } else if(wantsSharing !== settings.shareLocation){
    settings.shareLocation = wantsSharing;
    if(wantsSharing) startSharingLocation(); else stopSharingLocation();
  }
  settings.country = document.getElementById('countrySelect').value;
  settings.state = document.getElementById('stateSelect').value;
  if(document.getElementById('themeSelect')) settings.theme = document.getElementById('themeSelect').value;
  saveSettings();
  applyTheme();
  updateVoiceToggleBtn();
  updateThemeToggleBtn();
  if(selectedLatLon) renderBorderStatus();
  highlightSelectedState(true);
  closeModal('settingsModal');
});
document.getElementById('chkLive').addEventListener('change', ()=>{
  if(!selectedLatLon){ alert(t('no_location')); document.getElementById('chkLive').checked=false; return; }
  toggleLiveTracking();
});
document.getElementById('liveToggleBtn').addEventListener('click', ()=>{
  if(!selectedLatLon){ alert(t('no_location')); return; }
  toggleLiveTracking();
});
document.getElementById('demoMoveBtn').addEventListener('click', demoSimulateApproach);
document.getElementById('returnRouteBtn').addEventListener('click', suggestReturnRoute);
document.getElementById('sendChatFloatBtn').addEventListener('click', sendChatFloat);
document.getElementById('chatInputFloat').addEventListener('keydown', e=>{ if(e.key==='Enter') sendChatFloat(); });
initDraggableChatFab();
document.getElementById('chatPanelClose').addEventListener('click', closeChatPanel);
['radiusInput','zoneCountInput'].forEach(id=>{
  const el = document.getElementById(id);
  if(!el) return;
  el.addEventListener('change', ()=>{
    settings.searchRadiusKm = currentRadiusKm();
    settings.zoneCount = currentZoneCount();
    saveSettings();
    // Reflect the clamped value back into the field (e.g. typing 88 zones
    // clamps to the real max of 12) so the box never shows a number that
    // isn't actually what the app used.
    el.value = id==='radiusInput' ? settings.searchRadiusKm : settings.zoneCount;
    updateRangeHints();
    if(selectedLatLon) selectLocation(selectedLatLon.lat, selectedLatLon.lon, selectedLatLon.label);
  });
});
if(document.getElementById('speciesSearchBtn')) document.getElementById('speciesSearchBtn').addEventListener('click', renderSpeciesResult);
document.getElementById('langSelect').addEventListener('change', e=>{
  currentLang = e.target.value;
  localStorage.setItem('orcaLanguage', currentLang);
  applyI18n();
});
['settingsModal','emgModal'].forEach(id=>{
  document.getElementById(id).addEventListener('click', e=>{ if(e.target.id===id) closeModal(id); });
});

/* ============== INIT ============== */
fillTownList();
initMap();
initWindCanvas();
populateSpeciesSelect();
document.getElementById('radiusInput').value = settings.searchRadiusKm;
document.getElementById('zoneCountInput').value = settings.zoneCount;
applyTheme();
applyI18n();
updateVoiceToggleBtn();
updateThemeToggleBtn();
initMic();
initChatWelcome();
renderPinnedList();
renderPinStack('');
// Resume location sharing across reloads if it was left on last session
// (only takes effect once a location is picked — pushPresence() no-ops
// until then).
if(settings.shareLocation && settings.phoneSelf) startSharingLocation();
if(document.getElementById('chkShowFishermen')) document.getElementById('chkShowFishermen').addEventListener('change', e=>{
  if(e.target.checked) startFishermenWatch(); else stopFishermenWatch();
});
if(document.getElementById('refreshFishermenBtn')) document.getElementById('refreshFishermenBtn').addEventListener('click', ()=>{
  const chk = document.getElementById('chkShowFishermen');
  if(chk && !chk.checked) chk.checked = true;
  fetchNearbyFishermen();
});
// Border Intelligence, Cyclone Intelligence and Trip Planner are all part of
// the one merged Dashboard page now (Part 6, item 8) instead of separate
// nav tabs, and Border Intelligence shares the single Dashboard map rather
// than drawing its own, so no second map init is needed here.
renderCyclonePage();
window.addEventListener('resize', resizeWindCanvas);
// Part 4: re-render periodically so a zone's freshness badge can age from
// LIVE/SATELLITE into CACHED on its own, without needing user action.
setInterval(()=>{ if(currentZones.length) renderZoneGrid(); }, 60000);
if(document.getElementById('tripDate')) document.getElementById('tripDate').value = new Date().toISOString().slice(0,10);
if(document.getElementById('planTripBtn')) document.getElementById('planTripBtn').addEventListener('click', planTrip);