/* ═══════════════════════════════════════════════════════════
   1. VISUAL FRAMEWORK — schematic placeholder plates
   Each plate is inline SVG using currentColor, so it themes
   automatically. To use real screens, replace the returned
   string with:  <img src="…" alt="…" loading="lazy" width height>
   ═══════════════════════════════════════════════════════════ */
const svg = (inner, w = 900, h = 560) =>
  `<svg viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic placeholder for project visual">
   <style>.ln{stroke:currentColor;stroke-width:1.2;opacity:.34}.lnf{stroke:currentColor;stroke-width:1.2;opacity:.62}
   .fl{fill:currentColor;opacity:.06}.fs{fill:currentColor;opacity:.14}.fd{fill:currentColor;opacity:.30}
   .ac{fill:var(--accent);opacity:.92}.acs{stroke:var(--accent);stroke-width:1.7;opacity:.92}</style>${inner}</svg>`;

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

  /* 04 Gurkha Watch — e-commerce */
  gurkha: () => svg(`
    <rect x="60" y="60" width="780" height="440" rx="4" class="ln"/>
    <line x1="60" y1="112" x2="840" y2="112" class="ln"/>
    ${bars(86, 82, 1, 84, 8, 0, 'fd')}${[0,1,2].map(i=>`<rect x="${560+i*70}" y="83" width="52" height="6" rx="3" class="fs"/>`).join('')}
    <rect x="86" y="142" width="150" height="330" rx="3" class="fl"/>
    ${[0,1,2,3,4,5,6].map(i=>`<rect x="106" y="${170+i*40}" width="12" height="12" rx="2" class="${i===2?'ac':'ln'}"/><rect x="128" y="${174+i*40}" width="${[76,92,64,84,70,88,60][i]}" height="6" rx="3" class="fs"/>`).join('')}
    ${[0,1,2,3,4,5].map(i=>{const x=270+(i%3)*190,y=142+Math.floor(i/3)*170;return `<rect x="${x}" y="${y}" width="170" height="150" rx="3" class="ln"/><rect x="${x}" y="${y}" width="170" height="104" rx="3" class="fl"/><circle cx="${x+85}" cy="${y+52}" r="30" class="ln"/><circle cx="${x+85}" cy="${y+52}" r="10" class="fs"/><rect x="${x+16}" y="${y+118}" width="${[92,74,110,86,100,68][i]}" height="6" rx="3" class="fs"/><rect x="${x+16}" y="${y+132}" width="46" height="6" rx="3" class="fd"/>`}).join('')}
  `),

  /* 05 Reconwithme — web3 */
  recon: () => svg(`
    <rect x="60" y="60" width="780" height="440" rx="4" class="ln"/>
    <line x1="60" y1="116" x2="840" y2="116" class="ln"/>
    <path d="M92 74 l16 9 v18 l-16 9 -16-9 V83z" transform="translate(16,4)" class="ac"/>
    ${bars(136, 84, 1, 96, 8, 0, 'fd')}<rect x="716" y="78" width="100" height="26" rx="13" class="ln"/>
    ${[0,1,2,3].map(i=>{const x=90+i*192;return `<rect x="${x}" y="150" width="172" height="196" rx="4" class="ln"/><rect x="${x}" y="150" width="172" height="130" rx="4" class="fl"/>
      <path d="M${x+86} 186 l30 17 v34 l-30 17 -30-17 v-34z" class="${i===0?'ac':'fs'}"/>
      <rect x="${x+16}" y="296" width="${[96,80,110,88][i]}" height="7" rx="3.5" class="fs"/>
      <rect x="${x+16}" y="316" width="52" height="7" rx="3.5" class="fd"/><rect x="${x+120}" y="314" width="36" height="11" rx="5.5" class="fl"/>`}).join('')}
    <rect x="90" y="378" width="556" height="102" rx="4" class="ln"/>
    <path d="M110 452 L180 424 L250 438 L320 398 L390 414 L460 382 L530 396 L620 366" class="acs" fill="none"/>
    ${[0,1,2,3].map(i=>`<line x1="${110}" y1="${402+i*24}" x2="626" y2="${402+i*24}" class="ln" opacity=".18"/>`).join('')}
    <rect x="668" y="378" width="148" height="102" rx="4" class="fl"/><rect x="668" y="378" width="148" height="102" rx="4" class="ln"/>
    ${bars(690, 404, 3, i => [72, 104, 60][i], 7, 22)}
  `),

  /* 06 Deerhold — enterprise / HR */
  deerhold: () => svg(`
    <rect x="60" y="60" width="380" height="440" rx="4" class="ln"/>
    <rect x="60" y="60" width="380" height="150" rx="4" class="fl"/>
    ${bars(88, 100, 2, i => [180, 260][i], 10, 26, 'fd')}<rect x="88" y="164" width="112" height="28" rx="14" class="ac"/>
    ${[0,1,2].map(i=>`<rect x="88" y="${240+i*80}" width="324" height="60" rx="3" class="ln"/><circle cx="118" cy="${270+i*80}" r="14" class="fs"/><rect x="146" y="${258+i*80}" width="${[140,110,168][i]}" height="7" rx="3.5" class="fs"/><rect x="146" y="${276+i*80}" width="92" height="6" rx="3" class="fl"/>`).join('')}
    <rect x="470" y="60" width="370" height="200" rx="4" class="ln"/>
    <line x1="470" y1="104" x2="840" y2="104" class="ln"/>${bars(494, 76, 1, 92, 7)}
    ${[0,1,2,3].map(i=>`<line x1="470" y1="${142+i*38}" x2="840" y2="${142+i*38}" class="ln" opacity=".2"/><rect x="494" y="${120+i*38}" width="${[118,92,134,104][i]}" height="7" rx="3.5" class="fs"/><rect x="700" y="${118+i*38}" width="58" height="14" rx="7" class="${i===1?'ac':'fl'}"/>`).join('')}
    <rect x="470" y="288" width="370" height="212" rx="4" class="ln"/>
    <rect x="618" y="316" width="76" height="34" rx="4" class="fd"/>
    <path d="M656 350 v26 M540 376 h232 M540 376 v22 M656 376 v22 M772 376 v22" class="ln"/>
    ${[0,1,2].map(i=>`<rect x="${504+i*116}" y="398" width="72" height="30" rx="4" class="fs"/>`).join('')}
    ${bars(504, 448, 2, i => [180, 240][i], 7, 20, 'fl')}
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
  role:'Product Designer', company:'', year:'',
  desc:'Rides, deliveries, rentals and merchant services in one app.',
  art:'ridemio',
  tagline:'Six services in one app — on streets that mostly don’t have names.',
  overview:'Ridemio is a ride-sharing platform covering bike and car rides, parcel delivery, food delivery, vehicle rentals and merchant services. I worked across the customer and provider sides: how each service is discovered, booked, tracked and paid for, and what all six have to agree on.',
  challenge:'Two problems sit on top of each other. The first is breadth — six services behind one launch screen can easily produce a platform where nothing is findable and every journey behaves slightly differently. The second is local. In Kathmandu most destinations are given by landmark rather than street address, two-wheelers carry a far larger share of trips than cars, and a significant proportion of fares are still settled in cash. A booking flow lifted from a Western ride-hailing app breaks on all three.',
  constraints:[
    {b:'Addressing', t:'Landmark-based, not street-based. Typed addresses often resolve to nothing.'},
    {b:'Vehicle mix', t:'Two-wheelers carry the majority of trips; cars are the exception, not the default.'},
    {b:'Payment', t:'Cash and digital both have to be first-class, not one bolted onto the other.'},
    {b:'Surface', t:'Six services sharing one navigation, one set of states and one visual language.'}
  ],
  approach:[
    {t:'Service model', d:'Mapped the six services against what they genuinely share — a place, a time, a price, a person on the way — and built the spine around those constants rather than around the business units.'},
    {t:'Two-sided states', d:'Designed the provider side alongside the customer side, so accepted, en route, delivered and cancelled mean the same thing on both.'},
    {t:'Build collaboration', d:'Worked through implementation with engineering, documenting defects and edge cases against intended behaviour.'}
  ],
  decisions:[
    {d:'Pickup set by pin and landmark, not by a typed address',
     why:'Street-address entry fails across most of the valley, and a wrong pickup is the most expensive error in the flow — it wastes the rider’s time and the driver’s fuel. The field leads with saved places, recent pins and nearby landmarks, and treats the map pin as the source of truth with the text as a label.',
     trade:'The map has to load and settle before a booking can start, which costs time on a weak connection.'},
    {d:'One tracking screen shared by every service',
     why:'A ride, a parcel and a food order are the same object to the person waiting: someone is on the way, here is where they are, here is how to reach them. Three separate variants would have tripled the states to maintain and taught people three habits for one situation.',
     trade:'Service-specific detail had to move into a secondary sheet instead of sitting on the main view.'},
    {d:'Payment method chosen at booking, not at drop-off',
     why:'When cash is a real share of trips, leaving the method until the end turns every arrival into a negotiation. Deciding up front lets the provider accept with full information and removes the most common source of friction at the kerb.',
     trade:'One more decision inside the booking flow, which is the part of the product most sensitive to added steps.'}
  ],
  designCaps:['Customer app — service hub, booking and live tracking','The booking spine, shared across all six services','Component and state library behind the platform'],
  designArt:['ridemio', ['Locate','Book','Match','Track','Pay'], 'system'],
  outcome:{note:'Ridemio gives people one dependable place for everyday mobility and delivery, with less friction between discovery, booking and tracking. Providers work from a consistent platform across rides, deliveries, rentals and merchant activity rather than a different tool per service.'},
  reflection:'The hard part of a multi-service product isn’t designing six things. It’s deciding what all six must agree on, then holding that line when each service arrives with a good reason to be the exception.'
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
  num:'04', id:'gurkha', name:'Gurkha Watch', category:'E-commerce', discipline:'UI/UX design',
  role:'UI/UX Designer', company:'Gurkha Watch and Accessories Pvt. Ltd.', year:'2025 — 2026',
  desc:'Retail experience for watches and accessories.',
  art:'gurkha',
  tagline:'Retail where the photograph does the selling and the buyer takes weeks.',
  overview:'UI/UX design for the Gurkha Watch and Accessories e-commerce experience — catalogue, product detail and checkout for a considered-purchase category.',
  challenge:'A watch is bought slowly and almost entirely from photographs. The buyer wants to compare a handful of pieces on attributes they may not fully understand — movement, case diameter, water resistance — and needs to believe the piece will look right on their wrist before paying. The interface has to support that comparison without turning browsing into work, and without crowding the one thing actually doing the selling.',
  constraints:[
    {b:'Category', t:'Considered purchase with a long decision window and repeat visits.'},
    {b:'Evidence', t:'Photography and specification carry the sale; there is nothing else.'},
    {b:'Range', t:'A catalogue that has to stay scannable as it grows.'}
  ],
  approach:[
    {t:'Browse and filter', d:'Structured the catalogue so narrowing down is quick, visible and reversible.'},
    {t:'Product detail', d:'Gave imagery and specification the room to do the work.'},
    {t:'Checkout', d:'Kept the path from cart to confirmation short and legible.'}
  ],
  decisions:[
    {d:'Specifications framed as comparison, not as a dump',
     why:'Case diameter means nothing on its own and everything next to another watch. Surfacing the few attributes that actually separate pieces, in consistent positions across the catalogue, does more than reproducing the full supplier table on every page.',
     trade:'Complete specification still has to exist, but demoted — which risks frustrating the small number of buyers who came for it.'},
    {d:'Filters built to be undone',
     why:'Over a long decision window people narrow, change their mind and widen again. Filters stay visible, are individually removable, and survive a back-navigation instead of resetting the browse from scratch.',
     trade:'More persistent chrome on the listing page, competing with product imagery.'}
  ],
  designCaps:['Catalogue and filtering','Product detail and comparison'],
  designArt:['gurkha', ['Browse','Filter','Compare','Cart','Checkout']],
  outcome:{note:'Detailed outcomes for this engagement aren’t public. Happy to walk through the work directly.'},
  reflection:'Categories like this reward restraint. Everything added to a product page competes with the photograph, and the photograph is what closes the sale.'
},
{
  num:'05', id:'recon', name:'Reconwithme', category:'Blockchain', discipline:'UI/UX design',
  role:'UI/UX Designer', company:'NASSEC Pvt. Ltd.', year:'2022 — 2023',
  desc:'NFT marketplace built for people who aren’t crypto-native.',
  art:'recon',
  tagline:'Web3, minus the vocabulary test — but with the consequences kept visible.',
  overview:'Reconwithme is an NFT marketplace. The design goal was to make blockchain interactions usable by mainstream users rather than only by people already fluent in wallets, gas and chains.',
  challenge:'Web3 products expose their own plumbing. Someone who simply wants to buy or list an item is asked to understand wallets, networks, gas and signatures before they can do anything — and unlike ordinary e-commerce, every one of those steps is final. Hiding the complexity is the easy mistake. The goal was to remove the vocabulary while making the consequences more visible, not less.',
  constraints:[
    {b:'Audience', t:'Mainstream users with no prior wallet experience.'},
    {b:'Finality', t:'Actions are irreversible and cost real money when they go wrong.'},
    {b:'Cost', t:'Network fees move for reasons outside the product’s control.'}
  ],
  approach:[
    {t:'Plain-language model', d:'Renamed and resequenced the flow around what the person is doing, keeping technical detail available but out of the main line.'},
    {t:'Onboarding', d:'Designed a first-run path that reaches a first successful action with the fewest unexplained steps.'},
    {t:'Marketplace UI', d:'Designed browsing, listing and asset detail around the item rather than the chain.'}
  ],
  decisions:[
    {d:'The flow is named after what the person is doing',
     why:'“Connect wallet”, “approve” and “sign” describe the machinery, not the intent. Sequencing and labelling around buy, list and own lets people carry over expectations from ordinary shopping, with the technical terms present as secondary detail for those who want them.',
     trade:'Users who already know the standard Web3 vocabulary have to translate once on arrival.'},
    {d:'Total cost shown before the signature, not after',
     why:'A price quoted separately from fees is how people end up paying more than they agreed to, and in this category they cannot get it back. Confirmation states one number, with the breakdown expandable underneath it.',
     trade:'Fees move, so the figure needs re-quoting if the person hesitates — which itself has to be explained rather than silently changing.'},
    {d:'Irreversible actions get different visual weight',
     why:'Most interfaces flatten every button into the same affordance, which is dangerous when one of them is permanent. Actions that cannot be undone read differently and state plainly what will be final.',
     trade:'A deliberately slower flow at exactly the moment people want speed.'}
  ],
  designCaps:['Marketplace browse and asset detail','First-run onboarding path','Activity and transaction view'],
  designArt:['recon', ['Enter','Browse','Review','Confirm','Own'], 'system'],
  outcome:{stats:[{v:'5,000+', l:'users onboarded in the first month'},{v:'95%', l:'onboarding completion rate'}], note:'Figures as reported on prepesh.com.'},
  reflection:'Most of the difficulty in Web3 UX is translation, not interaction. Once the language was right, the screens got simpler on their own.'
},
{
  num:'06', id:'deerhold', name:'Deerhold', category:'Enterprise', discipline:'UX audit & redesign',
  role:'UI/UX Designer', company:'', year:'',
  desc:'Website and HR management system for an enterprise team.',
  art:'deerhold',
  tagline:'A tool people have to use, made worth using.',
  overview:'A UX audit and redesign covering the Deerhold website and its HR management system, focused on the workflows employees and administrators run repeatedly.',
  challenge:'HR systems accumulate. Leave, attendance, records, approvals and payroll inputs each arrive as a reasonable addition, and together they produce screens that ask an employee to understand the company’s data model in order to book two days off. The cost is spread thinly across everyone and concentrated on the HR team, which is why it rarely gets fixed — nobody owns the problem, and every individual instance of it looks small.',
  constraints:[
    {b:'Users', t:'Employees, managers and HR working the same system with different frequencies.'},
    {b:'Frequency', t:'Most tasks are rare for an individual and constant for HR.'},
    {b:'Scope', t:'The public website and the internal product had drifted apart.'}
  ],
  approach:[
    {t:'Audit', d:'Went through the existing product task by task to find where people stall, backtrack, or need outside knowledge to proceed — then ranked those by how often they occur and what each one costs.'},
    {t:'Restructure', d:'Reorganised workflows around completion rather than around the database.'},
    {t:'Consistency', d:'Aligned website and product so the two don’t read as different companies.'}
  ],
  decisions:[
    {d:'Reorganised around completion, not around record type',
     why:'Screens had been grouped by the shape of the data, so finishing a single task meant visiting three of them. Grouping by what the person is trying to finish cut the traversal, even though it meant the same record now appears in more than one place.',
     trade:'Duplicated surfaces have to stay in sync, which pushes complexity into the build.'},
    {d:'Approvals as a queue with the common action in reach',
     why:'Managers approve in batches, usually on a phone, usually between two other things. A queue with the routine action immediately available beats a notification that drops them into a full record they have to read first.',
     trade:'Genuine exceptions need a deliberate route off the fast path, or the queue makes it too easy to approve without looking.'},
    {d:'Balances shown inside the request, not on another screen',
     why:'People were asking HR how much leave they had left because the number lived somewhere other than the form. Putting it where the decision happens removed the most common inbound question.',
     trade:'The balance has to be correct in real time, which raises the bar on the data behind it.'}
  ],
  designCaps:['HR workflows — requests, approvals, records','Reduced-load task screens','Website and product alignment'],
  designArt:['deerhold', ['Request','Review','Approve','Record'], 'system'],
  outcome:{stats:[{v:'35%', l:'improvement in task completion rate'},{v:'50%', l:'improvement in user satisfaction'}], note:'Figures as reported on prepesh.com.'},
  reflection:'An audit is only useful if it names the cost of each problem. Listing issues changes nothing; ranking them changes a roadmap.'
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
const artFor = p => plates[p.art] ? plates[p.art]() : plates.system();

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

function setActive(i){
  if(i === active || !projects[i]) return;
  active = i;
  rows.forEach((r,n)=>r.classList.toggle('is-active', n === i));
}

const xpList = document.getElementById('xp-list');
xpList.innerHTML = experience.map((x,i)=>`
  <div class="xp__item" data-x="${i}">
    <h3><button class="xp__btn" aria-expanded="false" aria-controls="xp-p-${i}">
      <span class="xp__co">${esc(x.co)}</span>
      <span class="xp__role">${esc(x.role)}</span>
      <span class="xp__date">${esc(x.date)}<span class="xp__sign" aria-hidden="true"></span></span>
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
const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 24);
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

/* index: hover, focus and keyboard browsing */
setActive(0);

const indexEl = document.querySelector('.index');
workList.addEventListener('focusin', ()=>indexEl.classList.add('is-kb'));
workList.addEventListener('focusout', e=>{
  if(!e.relatedTarget || !workList.contains(e.relatedTarget)) indexEl.classList.remove('is-kb');
});

rows.forEach((row,i)=>{
  row.addEventListener('pointerenter', ()=>setActive(i));
  row.addEventListener('focus', ()=>setActive(i));
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
let lastFocus = null, savedY = 0, current = -1;

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
        <div class="dec__trade"><b>Trade-off</b><span>${esc(d.trade)}</span></div></div>
      </div>`).join('')}</div>
    </section>` : ''}

    <section class="blk wrap" data-stagger style="transition-delay:.24s">
      <h3>The design</h3>
      <div class="plates">
        ${plateFig(p.designArt[0], p.designCaps[0])}
        ${p.designArt[1] ? plateFig(p.designArt[1], p.designCaps[1]) : ''}
        ${p.designArt[2] ? plateFig(p.designArt[2], p.designCaps[2]) : ''}
      </div>
    </section>

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
  cs.classList.remove('is-in');
  cs.classList.remove('is-open');
  cs.setAttribute('aria-hidden','true');

  document.body.classList.remove('is-locked');
  document.body.style.top = '';
  window.scrollTo(0, savedY);

  setTimeout(()=>{ if(!cs.classList.contains('is-open')) csInner.innerHTML = ''; }, 500);
  if(lastFocus) lastFocus.focus({preventScroll:true});
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

/* keyboard: ESC closes; Tab is trapped inside the overlay */
addEventListener('keydown', e=>{
  if(e.key === 'Escape'){
    if(document.body.classList.contains('menu-open')) return setMenu(false);
    if(cs.classList.contains('is-open')) return closeCase();
  }
  if(e.key === 'Tab' && cs.classList.contains('is-open')){
    const f = cs.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
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
