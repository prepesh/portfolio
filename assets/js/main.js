/* ═══════════════════════════════════════════════════════════
   1. VISUAL FRAMEWORK — schematic placeholder plates
   Each plate is inline SVG using currentColor, so it themes
   automatically; its classes are styled under .plate-svg in style.css. To use real screens, replace the returned
   string with:  <img src="…" alt="…" loading="lazy" width height>
   ═══════════════════════════════════════════════════════════ */
const svg = (inner, w = 900, h = 560) =>
  `<svg class="plate-svg" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic placeholder for project visual">${inner}</svg>`;

const bars = (x, y, n, w, h = 6, gap = 14, cls = 'fs') =>
  Array.from({length: n}, (_, i) =>
    `<rect x="${x}" y="${y + i * gap}" width="${typeof w === 'function' ? w(i) : w}" height="${h}" rx="${h / 2}" class="${cls}"/>`).join('');

const phone = (x, y, w = 200, h = 400) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" class="fl"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" class="ln"/><rect x="${x + w / 2 - 22}" y="${y + 12}" width="44" height="5" rx="2.5" class="fs"/>`;

const plates = {
  /* 01 Ridemio — multi-service mobility app */
  ridemio: () => svg(`
    ${phone(70, 60, 220, 440)}
    <path d="M92 150 h176 v150 h-176z" class="fl"/><path d="M92 150 h176 v150 h-176z" class="ln"/>
    <path d="M100 285 C 140 240, 150 220, 190 205 S 240 175, 262 162" class="acs" fill="none" stroke-dasharray="5 5"/>
    <circle cx="100" cy="285" r="5" class="ac"/><circle cx="262" cy="162" r="5" class="ac"/>
    ${[0,1,2,3,4,5].map(i=>`<rect x="${92+(i%3)*62}" y="${322+Math.floor(i/3)*62}" width="52" height="52" rx="10" class="fs"/>`).join('')}
    <rect x="92" y="450" width="176" height="34" rx="17" class="fd"/>
    <rect x="350" y="60" width="480" height="128" rx="4" class="fl"/><rect x="350" y="60" width="480" height="128" rx="4" class="ln"/>
    ${bars(378, 92, 3, i => [150, 300, 220][i], 8, 20)}
    <rect x="760" y="130" width="46" height="26" rx="13" class="ac"/>
    ${[0,1,2].map(i=>`<rect x="${350+i*164}" y="212" width="152" height="120" rx="4" class="fl"/><rect x="${350+i*164}" y="212" width="152" height="120" rx="4" class="ln"/>${bars(372+i*164,306,1,[92,74,110][i],6)}<circle cx="${390+i*164}" cy="256" r="16" class="fs"/>`).join('')}
    <rect x="350" y="356" width="480" height="144" rx="4" class="fl"/><rect x="350" y="356" width="480" height="144" rx="4" class="ln"/>
    ${[0,1,2].map(i=>`<line x1="350" y1="${404+i*36}" x2="830" y2="${404+i*36}" class="ln" opacity=".22"/>`).join('')}
    ${[0,1,2,3].map(i=>`<rect x="374" y="${374+i*36}" width="${[180,140,210,160][i]}" height="7" rx="3.5" class="fs"/><rect x="740" y="${374+i*36}" width="64" height="7" rx="3.5" class="fl"/>`).join('')}
  `),

  /* 02 NexTeno — property management dashboard */
  nexteno: () => svg(`
    <rect x="60" y="60" width="780" height="440" rx="5" class="fl"/><rect x="60" y="60" width="780" height="440" rx="5" class="ln"/>
    <line x1="60" y1="110" x2="840" y2="110" class="ln"/><line x1="240" y1="110" x2="240" y2="500" class="ln"/>
    <circle cx="86" cy="85" r="6" class="ac"/>${bars(106, 81, 1, 92, 8)}
    ${bars(760, 81, 1, 56, 8, 0, 'fl')}
    ${[0,1,2,3,4,5].map(i=>`<rect x="${86}" y="${140+i*38}" width="14" height="14" rx="3" class="${i===1?'ac':'fs'}"/><rect x="112" y="${144+i*38}" width="${[92,76,110,84,68,96][i]}" height="7" rx="3.5" class="${i===1?'fd':'fs'}"/>`).join('')}
    ${[0,1,2].map(i=>`<rect x="${268+i*190}" y="140" width="170" height="86" rx="4" class="ln"/><rect x="${288+i*190}" y="164" width="${[54,68,44][i]}" height="18" rx="4" class="fd"/><rect x="${288+i*190}" y="194" width="${[104,86,118][i]}" height="6" rx="3" class="fs"/>`).join('')}
    <rect x="268" y="252" width="550" height="228" rx="4" class="ln"/>
    <line x1="268" y1="292" x2="818" y2="292" class="ln"/>
    ${bars(290, 268, 1, 80, 7)}${bars(470, 268, 1, 70, 7)}${bars(640, 268, 1, 60, 7)}
    ${[0,1,2,3,4].map(i=>`<line x1="268" y1="${330+i*38}" x2="818" y2="${330+i*38}" class="ln" opacity=".2"/>
      <rect x="290" y="${308+i*38}" width="${[120,96,142,108,130][i]}" height="7" rx="3.5" class="fs"/>
      <rect x="470" y="${308+i*38}" width="${[70,88,64][i%3]}" height="7" rx="3.5" class="fl"/>
      <rect x="640" y="${304+i*38}" width="62" height="16" rx="8" class="${i===0?'ac':'fl'}"/>`).join('')}
  `),

  /* 03 Khalti — wallet */
  khalti: () => svg(`
    ${phone(140, 50, 230, 460)}
    <rect x="164" y="104" width="182" height="96" rx="8" class="fd"/>
    <rect x="184" y="128" width="72" height="8" rx="4" class="fl"/><rect x="184" y="152" width="112" height="16" rx="4" class="fl"/>
    ${[0,1,2,3,4,5,6,7].map(i=>`<rect x="${164+(i%4)*48}" y="${222+Math.floor(i/4)*54}" width="38" height="38" rx="9" class="fs"/>`).join('')}
    <rect x="164" y="342" width="182" height="4" rx="2" class="fl"/>
    ${[0,1,2,3].map(i=>`<circle cx="180" cy="${378+i*34}" r="11" class="fs"/><rect x="200" y="${372+i*34}" width="${[96,78,110,86][i]}" height="6" rx="3" class="fs"/><rect x="306" y="${372+i*34}" width="40" height="6" rx="3" class="fl"/>`).join('')}
    <rect x="430" y="50" width="200" height="200" rx="4" class="ln"/>
    <rect x="430" y="50" width="200" height="200" rx="4" class="fl"/>
    <circle cx="530" cy="140" r="52" class="ln"/><path d="M530 88 A52 52 0 0 1 578 158 L530 140Z" class="ac"/>
    <rect x="452" y="278" width="178" height="46" rx="23" class="ln"/><rect x="452" y="278" width="96" height="46" rx="23" class="fd"/>
    <rect x="430" y="352" width="200" height="158" rx="4" class="ln"/>${bars(452, 380, 5, i => [140,110,156,96,128][i], 7, 24)}
    <rect x="668" y="50" width="172" height="460" rx="4" class="ln"/>
    ${[0,1,2,3,4,5,6,7,8,9].map(i=>`<rect x="690" y="${80+i*42}" width="${[128,96,140,110,84,132,100,146,92,120][i]}" height="7" rx="3.5" class="${i%4===0?'fd':'fs'}"/>`).join('')}
  `),

  /* 04 HIMĀL — airline app: search, fares, seat map */
  airline: () => svg(`
    ${phone(90, 50, 230, 460)}
    <rect x="112" y="96" width="186" height="118" rx="10" class="fl"/><rect x="112" y="96" width="186" height="118" rx="10" class="ln"/>
    <rect x="128" y="114" width="40" height="14" rx="3" class="fd"/><rect x="242" y="114" width="40" height="14" rx="3" class="fd"/>
    <path d="M148 150 Q205 112 262 150" class="acs" fill="none" stroke-dasharray="4 5"/>
    <circle cx="148" cy="150" r="4" class="ac"/><circle cx="262" cy="150" r="4" class="ac"/>
    <rect x="128" y="176" width="70" height="6" rx="3" class="fs"/><rect x="212" y="176" width="70" height="6" rx="3" class="fs"/>
    <rect x="128" y="190" width="46" height="6" rx="3" class="fl"/><rect x="212" y="190" width="46" height="6" rx="3" class="fl"/>
    ${[0,1,2].map(i=>`<rect x="112" y="${234+i*66}" width="186" height="54" rx="8" class="${i===1?'fs':'fl'}"/><rect x="112" y="${234+i*66}" width="186" height="54" rx="8" class="${i===1?'acs':'ln'}"/>
      <rect x="126" y="${248+i*66}" width="${[64,52,72][i]}" height="7" rx="3.5" class="fd"/><rect x="126" y="${264+i*66}" width="${[96,84,104][i]}" height="5" rx="2.5" class="fs"/>
      <rect x="244" y="${250+i*66}" width="40" height="10" rx="3" class="${i===1?'ac':'fd'}"/>`).join('')}
    <rect x="112" y="452" width="186" height="36" rx="18" class="fd"/>
    <rect x="370" y="50" width="220" height="460" rx="4" class="fl"/><rect x="370" y="50" width="220" height="460" rx="4" class="ln"/>
    <path d="M410 96 Q480 58 550 96" class="ln" fill="none"/>
    ${Array.from({length:10},(_,r)=>[0,1,2,3,4,5].map(c=>{const x=398+c*28+(c>2?20:0),y=118+r*36,taken=(r*7+c*3)%5===0,pick=r===4&&c===4;return `<rect x="${x}" y="${y}" width="20" height="24" rx="5" class="${pick?'ac':taken?'fd':'ln'}"/>`}).join('')).join('')}
    <rect x="630" y="50" width="210" height="220" rx="4" class="ln"/>
    ${bars(652, 78, 4, i => [120,96,140,84][i], 7, 22)}
    <rect x="652" y="178" width="166" height="1" class="fs"/>
    <rect x="652" y="196" width="60" height="9" rx="3" class="fd"/><rect x="760" y="194" width="58" height="12" rx="3" class="ac"/>
    <rect x="652" y="226" width="166" height="26" rx="13" class="fd"/>
    <rect x="630" y="300" width="210" height="210" rx="4" class="ln"/><rect x="630" y="300" width="210" height="64" rx="4" class="fl"/>
    <rect x="652" y="322" width="80" height="8" rx="4" class="fd"/><rect x="652" y="340" width="120" height="6" rx="3" class="fs"/>
    ${bars(652, 390, 5, i => [150,110,132,90,120][i], 6, 22)}
  `),

  /* shared — flow diagram */
  flow: (steps) => svg(`
    ${steps.map((s, i) => {
      const w = 900 / steps.length, x = i * w + 14;
      return `<rect x="${x}" y="96" width="${w - 28}" height="88" rx="4" class="ln"/>
              <rect x="${x}" y="96" width="${w - 28}" height="88" rx="4" class="fl"/>
              <text x="${x + (w - 28) / 2}" y="146" text-anchor="middle" font-family="Schibsted Grotesk, sans-serif" font-size="15" fill="currentColor" opacity=".72">${s}</text>
              ${i < steps.length - 1 ? `<path d="M${x + w - 22} 140 h14 m-5 -4 l5 4 -5 4" class="acs" fill="none"/>` : ''}
              <rect x="${x + 16}" y="206" width="${w - 80}" height="6" rx="3" class="fs"/>
              <rect x="${x + 16}" y="222" width="${w - 120}" height="6" rx="3" class="fl"/>`;
    }).join('')}
    <line x1="14" y1="64" x2="886" y2="64" class="ln"/>
    <line x1="14" y1="266" x2="886" y2="266" class="ln"/>
  `, 900, 300),

  /* shared — design system sheet */
  system: () => svg(`
    <line x1="40" y1="70" x2="860" y2="70" class="ln"/>
    ${[0,1,2,3].map(i=>`<rect x="${40+i*76}" y="102" width="56" height="56" rx="4" class="${i===0?'ac':'fs'}" opacity="${i===0?.85:0.28-i*0.06}"/><rect x="${40+i*76}" y="168" width="40" height="5" rx="2.5" class="fl"/>`).join('')}
    <line x1="40" y1="210" x2="860" y2="210" class="ln"/>
    ${[0,1,2,3].map(i=>`<rect x="40" y="${238+i*36}" width="${[300,230,170,120][i]}" height="${[20,15,11,9][i]}" rx="3" class="fd" opacity="${.42-i*.07}"/><rect x="760" y="${240+i*36}" width="${[60,52,44,38][i]}" height="6" rx="3" class="fl"/>`).join('')}
    <line x1="40" y1="398" x2="860" y2="398" class="ln"/>
    ${[0,1,2,3,4].map(i=>`<rect x="${40+i*128}" y="426" width="104" height="38" rx="${[19,4,4,19,4][i]}" class="ln"/><rect x="${40+i*128}" y="426" width="104" height="38" rx="${[19,4,4,19,4][i]}" class="${i===0?'fd':'fl'}"/>`).join('')}
    <rect x="688" y="426" width="104" height="38" rx="4" class="ln"/>
  `, 900, 500)
};

/* ═══════════════════════════════════════════════════════════
   2. CONTENT
   Sourced from the roles supplied in the brief and project
   descriptions published on prepesh.com. Nothing is invented:
   where a figure or date isn’t verified, it isn’t shown.
   ═══════════════════════════════════════════════════════════ */
const projects = [
{
  num:'01', id:'ridemio', name:'Ridemio', category:'Mobility', discipline:'Product design',
  role:'Product Designer', company:'Live on iOS and Android', year:'',
  desc:'Rides, rentals, parcels, food and groceries in one app, starting in Nepal.',
  art:'ridemio',
  tagline:'One app for getting around, and for getting things brought to you.',
  overview:'Ridemio is a ride and delivery app, live on the App Store and Google Play. It launched in Nepal and is built to work in other countries too, with its wording, currency and payment options changing to suit each place. You can book a bike, car or tuk-tuk, reserve a ride up to three months ahead, rent a car by the day, send a parcel, and order food or groceries. I designed every screen, wrote the rules the app follows, and checked the built app against the design before it shipped.',
  challenge:'Eight services in one app can easily feel like eight apps glued together, each working a little differently, until people give up. It also had to feel local wherever it runs, not translated. In Nepal, the first market, most people pay cash, tuk-tuks are an everyday way to travel, addresses are long, and the real safety risk is simply getting on the wrong bike.',
  constraints:[
    {b:'Eight services', t:'Bike, car, tuk-tuk, reserve, rentals, parcels, food and groceries, all from one home screen.'},
    {b:'Cash first', t:'In Nepal most people pay in cash, with Fonepay QR alongside it.'},
    {b:'Many places', t:'Words, prices, payment options and addresses have to adapt to each country, starting with long Nepali addresses.'},
    {b:'Trust', t:'Passengers need to know they have found the right rider before they get on.'}
  ],
  approach:[
    {t:'Same six steps everywhere', d:'Every service follows the same steps in the same order: pick, where, choose, confirm, watch, done. Only the choosing step changes: a vehicle, a menu or a shop.'},
    {t:'One panel over the map', d:'Every question is asked in the same card that slides up from the bottom of the map, so your thumb never has to travel. 90 of the 257 screens are that panel in its different states.'},
    {t:'Designing the bad days', d:'No internet, empty baskets, cancellations and loading all have their own screens, so nothing is a dead end.'},
    {t:'Checking the build', d:'Went through the built app screen by screen against the design, like proofreading a printed book, and logged 26 issues and 3 improvements, each with a photo and a fix.'}
  ],
  decisions:[
    {d:'Learn it once, use it everywhere',
     why:'Book a bike once and you already know how to send a parcel: same steps, same buttons, same place on the screen. It also means a new service arrives mostly designed already, because the panel, map, confirm step and receipt are the same parts.'},
    {d:'No surprises on price',
     why:'The fare stays in the same corner of the screen from request to payment. If moving your pickup a street over changes the price, the app stops and asks you to confirm the new fare. Discounts show as their own line, and the receipt is two lines and a total you can check in your head.'},
    {d:'Safety as one sentence, at the right moment',
     why:'Before you get on, the app shows the rider’s name, number plate and bike colour, with a four-digit code and one line: “never share it before you’ve confirmed the plate.” It sits exactly where you decide whether to get on. Deliveries use the same idea with a PIN.'},
    {d:'Local wherever it runs',
     why:'The app changes its wording, currency and payment options for each country. In Nepal that means tuk-tuk sits in the top row, cash is the default, prices are in rupees the way people say them, and the designs use real Nepali places and shops like Imadol, Boudha and Bhatbhateni, so long addresses were tested to fit from the start.'}
  ],
  /* real screens, in assets/img/ridemio/ */
  thumb:['welcome','home'],
  sizes:{welcome:[323,700], home:[246,700]},
  gallery:[
    {t:'Welcome and home', d:'All eight services on one home screen.', shots:[
      ['welcome','Welcome: “Move around with ease”'],
      ['home','Home, with every service in one grid']]}
  ],
  outcome:{stats:[{v:'257', l:'phone screens across six complete journeys'},{v:'8', l:'services sharing the same six steps'},{v:'26', l:'build issues caught and logged before launch'}],
    note:'Ridemio is live on the App Store and Google Play.'},
  reflection:'The part I’m proudest of isn’t a single screen. The same six steps now carry a bike ride, a parcel and a plate of momos, so the app can keep growing without asking anyone to learn it twice.'
},
{
  num:'02', id:'nexteno', name:'NexTeno', category:'Property management', discipline:'Product design',
  role:'Product Designer', company:'', year:'',
  desc:'Residents, payments, maintenance and notices in one platform.',
  art:'nexteno',
  tagline:'Property admin that stops living in spreadsheets, notice boards and chat groups.',
  overview:'NexTeno is a property management platform covering units and residents, service charges, maintenance requests, notices and community communication. I designed the day-to-day workflows for both sides — the people running a building and the people living in it.',
  challenge:'A building typically runs on four systems that never reconcile: a spreadsheet of units and owners, a separate service-charge ledger, a maintenance list in somebody’s phone, and a chat group where notices go to die. Consolidating them is easy to get wrong in the other direction — one dashboard that shows everything and helps with nothing. The complication is that this is not one audience. An owner, a tenant, a committee member and on-site staff each need a different slice of the same record, and the committee itself changes hands every year or two.',
  constraints:[
    {b:'Roles', t:'Owner, tenant, committee and staff attached to one shared record.'},
    {b:'Money', t:'Service charges bill per unit on a cycle, and arrears have to stay visible.'},
    {b:'Turnover', t:'Committees hand over. The system has to survive people leaving.'},
    {b:'Users', t:'Residents are not trained users and will not be onboarded.'}
  ],
  approach:[
    {t:'Role modelling', d:'Separated what a manager needs to act on from what a resident needs to know, and let the shared record — the unit, the charge, the request — sit underneath both views.'},
    {t:'Workflow design', d:'Designed charges, maintenance and notices as tracked states with a named owner at each step, rather than as forms that vanish once submitted.'},
    {t:'Interface system', d:'Standardised tables, statuses, filters and empty states so new modules inherit behaviour instead of reinventing it.'}
  ],
  decisions:[
    {d:'The billing cycle is the product’s spine',
     why:'Nearly everything a manager does hangs off the charge cycle — raising it, collecting it, chasing it, reporting on it. Structuring the product around the cycle rather than around a list of residents puts the recurring work on the surface and keeps reference data one level down.',
     trade:'One-off charges needed a deliberate path, because they no longer fall out of the main flow.'},
    {d:'Owner and tenant modelled as two relationships to one unit',
     why:'A unit can have an owner who pays the service charge and a tenant who reports the leaking tap. Treating them as separate accounts would duplicate the unit; treating them as one would send the wrong person the wrong thing. Two relationships to a single record routes bills, notices and requests correctly.',
     trade:'More setup work when a building is first onboarded.'},
    {d:'Maintenance states name who has it next',
     why:'A request marked “in progress” with nobody attached is exactly how things go missing, and the resident chasing it has no idea who to ask. Every state carries an owner, and the resident sees the same line the manager does.',
     trade:'Staff have to reassign explicitly rather than leaving work ambient.'}
  ],
  designCaps:['Manager dashboard — attention first, records second','Maintenance request lifecycle','Shared table, status and filter patterns'],
  designArt:['nexteno', ['Report','Triage','Assign','Resolve','Confirm'], 'system'],
  outcome:{note:'Centralising the core workflows gives managers clearer visibility of what needs attention and takes friction out of routine admin. Residents get one place to stay informed, handle payments, report maintenance issues and reach their community.'},
  reflection:'Enterprise tools are judged on their boring screens. Getting the status vocabulary right did more for this product than any layout decision.'
},
{
  num:'03', id:'khalti', name:'Khalti', category:'Fintech', discipline:'UI/UX design',
  role:'UI/UX Designer', company:'Khalti Pvt. Ltd.', year:'2023 — 2025',
  desc:'Digital wallet used across Nepal — onboarding and payment flows.',
  art:'khalti',
  tagline:'A wallet for a whole country — daily power users and first smartphones, same screen.',
  overview:'Khalti is one of Nepal’s leading digital payment platforms: wallet balance, bank load, utility bills, mobile topups, ticketing and merchant payments. I worked on the mobile product, focused on onboarding and the transaction flows people repeat most often.',
  challenge:'A national wallet has two hard edges. The first is verification — regulated wallets tier what you are allowed to do by how much identity you have handed over, and that gate arrives before anyone has felt the product be useful. The second is failure. A payment that neither clearly succeeded nor clearly failed is the most damaging moment a money app has, because the person is left not knowing where their money is. Everything else in the product is downstream of getting those two right.',
  constraints:[
    {b:'Regulation', t:'What a wallet can do is tiered by verification level.'},
    {b:'Range', t:'First-time smartphone users and daily power users on the same screens.'},
    {b:'Network', t:'Payments get attempted on unreliable connections and interrupted mid-flight.'},
    {b:'Catalogue', t:'A very broad service list competing for one small home screen.'}
  ],
  approach:[
    {t:'Onboarding', d:'Reduced the distance between installing the app and completing a first successful payment, treating verification as part of the journey rather than a wall in front of it.'},
    {t:'Transaction flows', d:'Designed the repeat paths — load, transfer, bill payment, topup — to be short, predictable and recoverable.'},
    {t:'UI craft', d:'Kept a dense service catalogue legible on small screens and lower-end devices.'}
  ],
  decisions:[
    {d:'Value before verification',
     why:'Front-loading identity checks asks for documents from someone who has not yet seen the product work, and that is where installs die. Staging it — explore, transact within a low ceiling, verify to unlock more — puts the ask after the value rather than in front of it.',
     trade:'The limits then have to be explained clearly and repeatedly, or the ceiling feels arbitrary when someone hits it.'},
    {d:'Every pending and failed state says where the money is',
     why:'“Something went wrong” is unusable in a payment app. Each state names what happened to the amount, whether it has left the wallet, and what happens next — because the real question is never “did the screen work”, it is “am I out of money”.',
     trade:'Many more states to design, write and maintain than a simple success/error pair.'},
    {d:'Repeat payments beat discovery on the home screen',
     why:'Bills and topups are paid by the same people to the same recipients every month. Putting recent and saved recipients ahead of the full catalogue shortens the most-travelled path, and the catalogue stays one tap away for everything else.',
     trade:'Newer services get less exposure and need another route to be found.'}
  ],
  designCaps:['Wallet home — balance, actions and recent activity','Payment flow from entry to confirmation','Transaction states and history'],
  designArt:['khalti', ['Open','Choose','Enter','Confirm','Receipt'], 'system'],
  outcome:{stats:[{v:'40%', l:'increase in user engagement'}], note:'Figure as reported on prepesh.com.'},
  reflection:'Designing payments taught me that confidence is a feature. People don’t reread a screen when they trust what the last one did.'
},
{
  num:'04', id:'himal', name:'HIMĀL', category:'Travel', discipline:'Product design',
  role:'Product Designer', company:'Self-initiated concept', year:'2026',
  desc:'Airline app concept, from first open to boarding.',
  art:'airline',
  tagline:'An airline app that asks for nothing until it has earned it.',
  overview:'HIMĀL is a concept app for a Kathmandu-based airline that I designed on my own, from research framing to prototype and design system. It covers guest and member flows from booking to boarding, plus corporate travel: 150+ screens and states in one clickable prototype.',
  challenge:'The brief asked for every screen and every state. That’s a list, not a point of view. So before drawing anything I marked the moments where an airline app takes something from you: your data, your money, or your certainty that you’re on the plane. There were five: the first minute, when the app asks before it gives; the price, when the number you see isn’t the number you pay; the gap between paying and having a ticket; changing or cancelling; and business travel, where two people with different jobs share one app. Everything still had to work, but those five got most of my attention.',
  constraints:[
    {b:'Guest first', t:'Search, compare and check a flight without an account. Sign-in only when it’s truly needed.'},
    {b:'Honest price', t:'Fares include taxes and a checked bag. Extras show their price before you tap.'},
    {b:'Named states', t:'Every in-between state says whether your money has gone and whether you have a seat.'},
    {b:'No dead ends', t:'If a button exists, the screen behind it exists, including empty, loading and error.'}
  ],
  approach:[
    {t:'Rules before screens', d:'Wrote four rules first (the four above) so I had something to argue with whenever a screen got complicated.'},
    {t:'Two brands, tested on dull screens', d:'Built two brand directions as design tokens and kept both working on the seat map, the fare breakdown and the declined-payment screen, not just on a moodboard.'},
    {t:'Prototype first', d:'Worked in a clickable prototype from day one, building journeys in order of risk: booking and payment first, then trips, loyalty and corporate travel.'},
    {t:'Tap every button', d:'Went through the app button by button asking “what happens when I tap this?”, then built what was missing. Most of the best details came from this pass.'},
    {t:'Library and handoff', d:'Figma library with 38 variables, 12 text styles and 11 core components, plus the onboarding flow as 26 editable frames.'}
  ],
  decisions:[
    {d:'Show the all-in price first',
     why:'Most airline apps show a low base fare and add the rest over four screens. It looks cheaper on the list and feels dishonest at payment. Here the first number already includes taxes and a bag, and the fare screen breaks that same total down, so nothing new appears when you pay.',
     trade:'The first price looks higher than a competitor’s headline fare.'},
    {d:'Payment isn’t a ticket',
     why:'A card payment and a ticket are two separate systems, and tickets can take minutes. Instead of one spinner, each step between “Pay” and a boarding pass gets its own screen that answers two questions: has my money gone, and do I have a seat? A declined card says “No money has left your account” and how long the fare is still held.',
     trade:'Far more states to design and write than a simple success or error.'},
    {d:'Ask for the account last',
     why:'The first onboarding was four slides and a sign-in wall. I rebuilt it as a ladder of small asks, where each step costs a little more and visibly changes the app. The account comes last, and “Continue as a guest” gets the same weight as sign-in. Returning users skip onboarding and see their next trip.',
     trade:'Fewer people may sign up early. The bet is that more sign up when they book.'},
    {d:'Two dashboards for corporate travel',
     why:'Travellers and travel managers first shared one dashboard. It looked tidy and was wrong: showing a traveller company spend is a permissions leak. They now get separate views, and approvals come with a 10-minute undo, written on the success screen.',
     trade:'Two layouts to maintain, and a third role (the travel arranger) still to design.'}
  ],
  /* real screens from the prototype, in assets/img/himal/ */
  thumb:['home','results','boarding-pass'],
  gallery:[
    {t:'Onboarding', d:'Small asks that each change the app, with the account asked last.', shots:[
      ['onboarding-language','Language, with each option in its own script'],
      ['onboarding-notifications','Alerts explained before the system prompt'],
      ['onboarding-account','Guest gets the same weight as sign-in'],
      ['returning-user','Returning users skip straight to their trip']]},
    {t:'Booking', d:'The first price already includes taxes and a bag.', shots:[
      ['home','Home, as a guest'],
      ['results','All-in fares, with baggage on every card'],
      ['fare-details','The same total, itemised'],
      ['seat-map','Seat map with cabin zones and a legend']]},
    {t:'Paying and ticketing', d:'Every step says whether your money has gone and whether you have a seat.', shots:[
      ['held-fare','A visible 20-minute hold'],
      ['payment-declined','“No money has left your account.”'],
      ['paid-not-ticketed','Paid, ticket still being issued'],
      ['boarding-pass','Boarding pass']]},
    {t:'Changing plans', d:'Costs are shown before you tap.', shots:[
      ['cancel-booking','Line-by-line refund, voucher offered not pushed'],
      ['modify-booking','Every option shows its cost']]},
    {t:'Corporate travel', d:'Separate views for travellers and managers.', shots:[
      ['corporate-traveller','Traveller: own trips, no company spend'],
      ['corporate-manager','Manager: pending approvals first'],
      ['approval-request','Over-cap amount and policy check'],
      ['after-approving','What happens next, with a 10-minute undo']]},
    {t:'Loading and offline', d:'The in-between moments still look like the app.', shots:[
      ['loading','A skeleton that matches the real layout'],
      ['offline','Offline, with boarding passes still available']]}
  ],
  outcome:{stats:[{v:'150+', l:'screens and states in one clickable prototype'},{v:'2', l:'brand directions carried through every screen'},{v:'0', l:'dead-end buttons, checked after each round'}],
    note:'A concept, not yet tested with travellers, so there are no outcome metrics. Next I’d test the onboarding order, whether people can read the “paid, not ticketed” screen, and whether the all-in price scares people off at the results list.'},
  reflection:'I’d pick the brand sooner, since keeping both working doubled the checking on every screen. And I’d do the button-by-button pass after each journey instead of saving it for the end, because that’s where the most interesting problems were.'
}
];

const experience = [
  {co:'Oblong Traders Pvt. Ltd.', role:'Product Designer', date:'Jun 2026 — Present',
   body:'Current role. Product design across the company’s digital products, from problem definition and flows through to interface design and delivery with engineering.',
   tags:['Product design','Flows','UI','Design systems']},
  {co:'Gurkha Watch and Accessories Pvt. Ltd.', role:'UI/UX Designer', date:'Nov 2025 — May 2026',
   body:'UI/UX design for the e-commerce experience — catalogue, product detail and checkout for a considered-purchase retail category.',
   tags:['E-commerce','UI design','Checkout']},
  {co:'Khalti Pvt. Ltd.', role:'UI/UX Designer', date:'Oct 2023 — Apr 2025',
   body:'Design on one of Nepal’s leading digital payment platforms, focused on onboarding and the transaction flows people repeat most: top-up, transfer and bill payment.',
   tags:['Fintech','Mobile','Onboarding','Payments']},
  {co:'NASSEC Pvt. Ltd. — Reconwithme', role:'UI/UX Designer', date:'Jul 2022 — Feb 2023',
   body:'Design for a blockchain marketplace, making Web3 interactions legible to users who weren’t already crypto-native.',
   tags:['Web3','Marketplace','Onboarding']}
];

/* ═══════════════════════════════════════════════════════════
   3. RENDER — work list + experience
   ═══════════════════════════════════════════════════════════ */
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const shotSrc = (p, name) => `assets/img/${p.id}/${name}.webp`;
const shotDims = (p, name) => { const [w, h] = (p.sizes && p.sizes[name]) || [600, 1298]; return `width="${w}" height="${h}"`; };
const artFor = p => p.thumb
  ? `<span class="row__shots">${p.thumb.map(n=>`<img src="${shotSrc(p, n)}" alt="" ${shotDims(p, n)} loading="lazy">`).join('')}</span>`
  : plates[p.art] ? plates[p.art]() : plates.system();

const workList = document.getElementById('work-list');

workList.innerHTML = `<div class="index__labels" aria-hidden="true">
    <span>No.</span><span>Project</span><span>Role</span><span>Sector</span><span>Discipline</span>
    <span class="h-year">Year</span><span class="h-prev">Preview</span>
  </div>` +
  projects.map((p,i)=>`
  <button class="row" data-i="${i}" aria-haspopup="dialog" aria-label="${esc(p.name)}, ${esc(p.category)}. Open case study">
    <span class="row__num">${p.num}</span>
    <span class="row__main">
      <span class="row__name">${esc(p.name)}<span class="row__arrow" aria-hidden="true">↗</span></span>
      <span class="row__desc">${esc(p.desc)}</span>
      <span class="row__open" aria-hidden="true">Read case study ↗</span>
    </span>
    <span class="cell cell--role">${esc(p.role)}${p.company ? `<small>${esc(p.company)}</small>` : ''}</span>
    <span class="cell cell--sector">${esc(p.category)}</span>
    <span class="cell cell--disc">${esc(p.discipline)}</span>
    <span class="cell cell--year${p.year ? '' : ' is-empty'}">${p.year ? esc(p.year.split(' — ')[0]) + (p.year.includes('—') ? `<small>to ${esc(p.year.split(' — ')[1])}</small>` : '') : ''}</span>
    <span class="row__thumb" aria-hidden="true">${artFor(p)}</span>
  </button>`).join('');

const rows = [...workList.querySelectorAll('.row')];
let active = -1;

/* -1 clears the highlight */
function setActive(i){
  if(i === active || (i !== -1 && !projects[i])) return;
  active = i;
  rows.forEach((r,n)=>r.classList.toggle('is-active', n === i));
}

const xpList = document.getElementById('xp-list');
xpList.innerHTML = experience.map((x,i)=>`
  <div class="xp__item" data-x="${i}">
    <h3><button class="xp__btn" aria-expanded="false" aria-controls="xp-p-${i}">
      <span class="xp__co">${esc(x.co)}</span>
      <span class="xp__role">${esc(x.role)}</span>
      <span class="xp__date">${esc(x.date)}</span>
      <span class="xp__sign" aria-hidden="true"></span>
    </button></h3>
    <div class="xp__panel" id="xp-p-${i}"><div class="xp__body">
      <p>${esc(x.body)}</p>
      <div class="xp__tags">${x.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
    </div></div>
  </div>`).join('');

/* ═══════════════════════════════════════════════════════════
   4. INTERACTIONS
   ═══════════════════════════════════════════════════════════ */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

/* page-load choreography */
requestAnimationFrame(()=>document.getElementById('hero').classList.add('ready'));

/* nav state */
const nav = document.getElementById('nav');
/* while an overlay locks the page, scrollY reads 0; keep the nav as it was */
const onScroll = () => { if(!document.body.classList.contains('is-locked')) nav.classList.toggle('is-stuck', window.scrollY > 24); };
addEventListener('scroll', onScroll, {passive:true}); onScroll();

/* scroll reveal */
const io = new IntersectionObserver((es)=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target);} }), {rootMargin:'0px 0px -12% 0px', threshold:.08});
document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

/* mobile menu */
const burger = document.getElementById('burger'), menu = document.getElementById('menu');
const setMenu = on => {
  document.body.classList.toggle('menu-open', on);
  burger.setAttribute('aria-expanded', String(on));
  burger.setAttribute('aria-label', on ? 'Close menu' : 'Open menu');
  menu.setAttribute('aria-hidden', String(!on));
};
burger.addEventListener('click', ()=>setMenu(!document.body.classList.contains('menu-open')));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));

/* theme toggle */
const themeBtn = document.getElementById('theme-btn');
const sysDark = matchMedia('(prefers-color-scheme: dark)');
const applyTheme = mode => {
  document.documentElement.setAttribute('data-theme', mode);
  const dark = mode === 'dark';
  const label = dark ? 'Switch to light theme' : 'Switch to dark theme';
  themeBtn.setAttribute('aria-label', label);
  themeBtn.setAttribute('title', label);
  themeBtn.setAttribute('aria-pressed', String(dark));
  const meta = document.querySelector('meta[name="theme-color"]:not([media])');
  if (meta) meta.setAttribute('content', dark ? '#121210' : '#FFFFFF');
};
/* a saved choice wins over the system setting; storage can be unavailable (private mode, blocked site data) */
const savedTheme = (()=>{ try { return localStorage.getItem('theme'); } catch(e){ return null; } })();
applyTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : (sysDark.matches ? 'dark' : 'light'));
sysDark.addEventListener('change', e => { if(!savedTheme && !themeBtn.dataset.userSet) applyTheme(e.matches ? 'dark' : 'light'); });
themeBtn.addEventListener('click', ()=>{
  themeBtn.dataset.userSet = '1';
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch(e){}
});

/* experience accordion */
xpList.addEventListener('click', e=>{
  const btn = e.target.closest('.xp__btn'); if(!btn) return;
  const item = btn.closest('.xp__item'), panel = item.querySelector('.xp__panel');
  const open = item.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', String(open));
  panel.style.height = open ? panel.firstElementChild.offsetHeight + 'px' : '0px';
});
addEventListener('resize', ()=>document.querySelectorAll('.xp__item.is-open .xp__panel').forEach(p=>{p.style.height = p.firstElementChild.offsetHeight + 'px';}));

/* index: hover, focus and keyboard browsing.
   The highlight follows a mouse or the keyboard only: a tap, or focus handed back
   after closing a case study, must not leave a row looking selected. */
const indexEl = document.querySelector('.index');
workList.addEventListener('focusout', e=>{
  if(!e.relatedTarget || !workList.contains(e.relatedTarget)){ indexEl.classList.remove('is-kb'); setActive(-1); }
});
workList.addEventListener('pointerleave', e=>{
  if(e.pointerType === 'touch') return;
  const f = rows.indexOf(document.activeElement);   /* fall back to the keyboard position, if any */
  setActive(f > -1 && rows[f].matches(':focus-visible') ? f : -1);
});

rows.forEach((row,i)=>{
  row.addEventListener('pointerenter', e=>{ if(e.pointerType !== 'touch') setActive(i); });
  row.addEventListener('focus', ()=>{
    if(!row.matches(':focus-visible')) return;
    indexEl.classList.add('is-kb');
    setActive(i);
  });
  row.addEventListener('keydown', e=>{
    const map = {ArrowDown:1, ArrowRight:1, ArrowUp:-1, ArrowLeft:-1};
    if(map[e.key]){
      e.preventDefault();
      const n = (i + map[e.key] + rows.length) % rows.length;
      rows[n].focus();
    } else if(e.key === 'Home'){ e.preventDefault(); rows[0].focus(); }
    else if(e.key === 'End'){ e.preventDefault(); rows[rows.length-1].focus(); }
  });
});

/* ── CASE STUDY OVERLAY ── */
const cs = document.getElementById('cs'), csInner = document.getElementById('cs-inner'),
      csPanel = document.getElementById('cs-panel'), csClose = document.getElementById('cs-close');
let lastFocus = null, savedY = 0, current = -1, openedByPointer = false;

const stat = s => `<div class="stat"><b>${esc(s.v)}</b><span>${esc(s.l)}</span></div>`;

function plateFig(art, cap){
  const s = Array.isArray(art) ? plates.flow(art) : (plates[art] ? plates[art]() : plates.system());
  return `<figure><div class="plate"><span class="plate__mark">placeholder</span>${s}</div>${cap?`<figcaption>${esc(cap)}</figcaption>`:''}</figure>`;
}

function buildCase(p, i){
  const nextP = projects[(i + 1) % projects.length];
  const facts = [['Role', p.role], ['Category', p.category], ['Company', p.company], ['Year', p.year]].filter(f=>f[1]);
  return `
  <article class="cs__article">
    <header class="cs__hero wrap" data-stagger style="transition-delay:.05s">
      <p class="cs__num">${p.num} — Case study</p>
      <h2 class="cs__title" id="cs-title">${esc(p.name)}</h2>
      <p class="cs__tag">${esc(p.tagline)}</p>
      <dl class="cs__facts">${facts.map(f=>`<div><dt>${f[0]}</dt><dd>${esc(f[1])}</dd></div>`).join('')}</dl>
    </header>

    <section class="blk wrap" data-stagger style="transition-delay:.12s">
      <div class="blk__grid"><p class="blk__label">Overview</p>
      <div class="blk__body"><p>${esc(p.overview)}</p></div></div>
    </section>

    <section class="blk wrap" data-stagger style="transition-delay:.16s">
      <div class="blk__grid"><p class="blk__label">The challenge</p>
      <div class="blk__body"><p>${esc(p.challenge)}</p></div></div>
    </section>

    ${p.constraints ? `<section class="blk wrap" data-stagger style="transition-delay:.18s">
      <div class="blk__grid"><p class="blk__label">Constraints</p>
      <div class="cons">${p.constraints.map(c=>`<div class="con"><b>${esc(c.b)}</b><span>${esc(c.t)}</span></div>`).join('')}</div></div>
    </section>` : ''}

    <section class="blk wrap" data-stagger style="transition-delay:.2s">
      <div class="blk__grid"><p class="blk__label">How I worked</p>
      <div class="steps">${p.approach.map(a=>`<div class="step"><h4>${esc(a.t)}</h4><p>${esc(a.d)}</p></div>`).join('')}</div></div>
    </section>

    ${p.decisions ? `<section class="blk wrap" data-stagger style="transition-delay:.22s">
      <h3>Key decisions</h3>
      <div class="decs">${p.decisions.map(d=>`<div class="dec">
        <h4>${esc(d.d)}</h4>
        <div><p>${esc(d.why)}</p>
        ${d.trade ? `<div class="dec__trade"><b>Trade-off</b><span>${esc(d.trade)}</span></div>` : ''}</div>
      </div>`).join('')}</div>
    </section>` : ''}

    ${p.gallery ? `<section class="blk wrap" data-stagger style="transition-delay:.24s">
      <h3>The design</h3>
      <p class="gal__hint">Select any screen to see it larger.</p>
      <div class="gal">${p.gallery.map(g=>`
        <div class="gal__grp">
          <div class="gal__head"><h4>${esc(g.t)}</h4><p>${esc(g.d)}</p></div>
          <div class="gal__row">${g.shots.map(([n, cap])=>`
            <figure class="shot"><button class="shot__btn" type="button" data-shot="${n}" aria-label="View larger: ${esc(cap)}">
              <img src="${shotSrc(p, n)}" alt="${esc(cap)}" ${shotDims(p, n)} loading="lazy"></button>
              <figcaption>${esc(cap)}</figcaption></figure>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </section>` : `<section class="blk wrap" data-stagger style="transition-delay:.24s">
      <h3>The design</h3>
      <div class="plates">
        ${plateFig(p.designArt[0], p.designCaps[0])}
        ${p.designArt[1] ? plateFig(p.designArt[1], p.designCaps[1]) : ''}
        ${p.designArt[2] ? plateFig(p.designArt[2], p.designCaps[2]) : ''}
      </div>
    </section>`}

    <section class="blk wrap" data-stagger style="transition-delay:.28s">
      <div class="blk__grid"><p class="blk__label">Outcome</p>
      <div>
        ${p.outcome.stats ? `<div class="stats">${p.outcome.stats.map(stat).join('')}</div>` : ''}
        ${p.outcome.note ? `<p class="${p.outcome.stats ? 'src' : 'blk__body'}">${esc(p.outcome.note)}</p>` : ''}
      </div></div>
    </section>

    ${p.reflection ? `<section class="blk wrap" data-stagger style="transition-delay:.32s">
      <div class="blk__grid"><p class="blk__label">Reflection</p>
      <div class="blk__body"><p>${esc(p.reflection)}</p></div></div>
    </section>` : ''}

    <div class="cs__next wrap" data-stagger style="transition-delay:.36s">
      <p class="cs__next-lbl">Next project</p>
      <button class="cs__next-btn" data-next="${(i + 1) % projects.length}">
        <b>${esc(nextP.name)}</b><span class="cs__next-lbl">${esc(nextP.category)} ↗</span>
      </button>
    </div>
  </article>`;
}

function openCase(i){
  const p = projects[i]; if(!p) return;
  current = i;
  lastFocus = document.activeElement;
  savedY = window.scrollY;

  csInner.innerHTML = buildCase(p, i);
  document.getElementById('cs-bar-num').textContent = p.num;
  document.getElementById('cs-bar-name').textContent = p.name;
  cs.setAttribute('aria-hidden','false');
  cs.classList.add('is-open');
  csPanel.scrollTop = 0;

  /* scroll lock, preserving position */
  document.body.style.top = `-${savedY}px`;
  document.body.classList.add('is-locked');

  requestAnimationFrame(()=>requestAnimationFrame(()=>cs.classList.add('is-in')));
  setTimeout(()=>csClose.focus({preventScroll:true}), 60);
}

function closeCase(){
  if(!cs.classList.contains('is-open')) return;
  closeShot();
  cs.classList.remove('is-in');
  cs.classList.remove('is-open');
  cs.setAttribute('aria-hidden','true');

  document.body.classList.remove('is-locked');
  document.body.style.top = '';
  window.scrollTo(0, savedY);

  setTimeout(()=>{ if(!cs.classList.contains('is-open')) csInner.innerHTML = ''; }, 500);
  /* hand focus back for keyboard users; after a click or tap, do it without a focus ring or highlight */
  if(lastFocus) lastFocus.focus({preventScroll:true, focusVisible:!openedByPointer});
  if(openedByPointer){ setActive(-1); indexEl.classList.remove('is-kb'); }
  if(history.state && history.state.cs) history.back();
  else if(location.hash) history.replaceState(null, '', location.pathname + location.search);
  current = -1;
}

function launch(i){
  openCase(i);
  history.pushState({cs:true}, '', '#' + projects[i].id);
}
workList.addEventListener('click', e=>{
  const row = e.target.closest('.row'); if(!row) return;
  openedByPointer = e.detail > 0;   /* 0 when opened with Enter or Space */
  launch(+row.dataset.i);
});


csInner.addEventListener('click', e=>{
  const nx = e.target.closest('[data-next]'); if(!nx) return;
  const i = +nx.dataset.next;
  csPanel.scrollTo({top:0, behavior: reduced.matches ? 'auto' : 'smooth'});
  cs.classList.remove('is-in');
  setTimeout(()=>{
    csInner.innerHTML = buildCase(projects[i], i);
    document.getElementById('cs-bar-num').textContent = projects[i].num;
    document.getElementById('cs-bar-name').textContent = projects[i].name;
    current = i;
    history.replaceState(history.state, '', '#' + projects[i].id);
    requestAnimationFrame(()=>cs.classList.add('is-in'));
  }, 220);
});

csClose.addEventListener('click', closeCase);
cs.querySelector('[data-close]').addEventListener('click', closeCase);

/* ── RESUME POPUP ── */
const rs = document.getElementById('rs'), rsFrame = document.getElementById('rs-frame'),
      rsEmpty = document.getElementById('rs-empty'), rsExt = document.getElementById('rs-ext');
let rsLastFocus = null, rsY = 0;

/* turn a Drive share link (…/file/d/ID/view or …?id=ID) into its embeddable preview URL */
const drivePreview = url => {
  const id = (url.match(/\/d\/([\w-]+)/) || url.match(/[?&]id=([\w-]+)/) || [])[1];
  return id ? `https://drive.google.com/file/d/${id}/preview` : url;
};

function openResume(url){
  const has = !!url && url !== '#';
  rsLastFocus = document.activeElement;
  rsFrame.hidden = !has; rsEmpty.hidden = has; rsExt.hidden = !has;
  if(has){
    rsExt.href = url;
    const src = drivePreview(url);
    if(rsFrame.getAttribute('src') !== src) rsFrame.src = src;
  }
  rs.setAttribute('aria-hidden','false');
  rs.classList.add('is-open');
  rsY = window.scrollY;
  document.body.style.top = `-${rsY}px`;
  document.body.classList.add('is-locked');
  setTimeout(()=>rs.querySelector('.cs__close').focus({preventScroll:true}), 60);
}

function closeResume(){
  if(!rs.classList.contains('is-open')) return;
  rs.classList.remove('is-open');
  rs.setAttribute('aria-hidden','true');
  document.body.classList.remove('is-locked');
  document.body.style.top = '';
  window.scrollTo(0, rsY);
  if(rsLastFocus) rsLastFocus.focus({preventScroll:true});
}

document.querySelectorAll('[data-resume]').forEach(a=>a.addEventListener('click', e=>{
  e.preventDefault();
  openResume(a.getAttribute('href'));
}));
rs.querySelectorAll('[data-rs-close]').forEach(el=>el.addEventListener('click', closeResume));

/* ── SCREEN VIEWER (case-study galleries) ── */
const lb = document.getElementById('lb'), lbImg = document.getElementById('lb-img'),
      lbCap = document.getElementById('lb-cap'), lbCount = document.getElementById('lb-count');
let lbShots = [], lbIdx = 0, lbFrom = null;

function showShot(i){
  lbIdx = (i + lbShots.length) % lbShots.length;
  const b = lbShots[lbIdx], img = b.querySelector('img');
  lbImg.src = img.src; lbImg.alt = img.alt;
  lbCap.textContent = img.alt;
  lbCount.textContent = `${lbIdx + 1} / ${lbShots.length}`;
}
function openShot(btn){
  lbShots = [...csInner.querySelectorAll('.shot__btn')];
  lbFrom = btn;
  showShot(lbShots.indexOf(btn));
  lb.setAttribute('aria-hidden','false');
  lb.classList.add('is-open');
  setTimeout(()=>lb.querySelector('.lb__close').focus({preventScroll:true}), 40);
}
function closeShot(){
  if(!lb.classList.contains('is-open')) return;
  lb.classList.remove('is-open');
  lb.setAttribute('aria-hidden','true');
  if(lbFrom) lbFrom.focus({preventScroll:true});
}
csInner.addEventListener('click', e=>{ const b = e.target.closest('.shot__btn'); if(b) openShot(b); });
lb.addEventListener('click', e=>{
  if(e.target.closest('[data-lb-close]')) return closeShot();
  if(e.target.closest('[data-lb-prev]')) return showShot(lbIdx - 1);
  if(e.target.closest('[data-lb-next]')) return showShot(lbIdx + 1);
});

/* keyboard: ESC closes; Tab is trapped inside whichever overlay is open */
addEventListener('keydown', e=>{
  if(e.key === 'Escape'){
    if(document.body.classList.contains('menu-open')) return setMenu(false);
    if(lb.classList.contains('is-open')) return closeShot();
    if(rs.classList.contains('is-open')) return closeResume();
    if(cs.classList.contains('is-open')) return closeCase();
  }
  if(lb.classList.contains('is-open') && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')){
    e.preventDefault(); return showShot(lbIdx + (e.key === 'ArrowRight' ? 1 : -1));
  }
  const overlay = lb.classList.contains('is-open') ? lb : rs.classList.contains('is-open') ? rs : cs.classList.contains('is-open') ? cs : null;
  if(e.key === 'Tab' && overlay){
    const f = [...overlay.querySelectorAll('button, [href], iframe, input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(el=>el.offsetParent);
    if(!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
});

/* browser back closes the overlay */
addEventListener('popstate', ()=>{ if(cs.classList.contains('is-open')) closeCase(); });

/* deep link support: /#khalti opens that case study */
const hash = location.hash.replace('#','');
const deep = projects.findIndex(p=>p.id === hash);
if(deep > -1) setTimeout(()=>openCase(deep), 320);
