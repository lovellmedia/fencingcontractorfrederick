const familyCopy = {
  'residential-fence-installation': {
    card: 'New fence planning for privacy, pets, backyards, curb appeal, and materials that fit Frederick homes.',
    lead: 'Most residential fence projects start with a practical question: what do you need the fence to do every day? We help you sort privacy, pets, children, gates, grade, neighbors, HOA rules, and materials before the layout is priced.',
    checks: 'We walk the proposed fence line, look at slope and access, talk through gates, and flag anything that could change the installation plan before work starts.'
  },
  'fence-repair-replacement': {
    card: 'Repair and replacement help for leaning posts, storm damage, broken panels, failing gates, and tired fence runs.',
    lead: 'Not every fence problem needs a full replacement. We look at what failed, what is still solid, and whether repair will actually buy you useful life.',
    checks: 'We check posts, rails, panels, fasteners, gate movement, ground contact, water exposure, and whether a partial repair will blend into the rest of the fence.'
  },
  'gates-access-solutions': {
    card: 'Gate planning for driveways, walkways, pools, double openings, hardware, latches, and daily access.',
    lead: 'A fence can look right and still frustrate you if the gate is in the wrong place or built with the wrong hardware. We plan gates around how people, pets, equipment, and vehicles actually move through the property.',
    checks: 'We review opening width, swing direction, latch height, post strength, grade changes, pool-safety needs, and the wear a gate will take over time.'
  },
  'specialty-fencing': {
    card: 'Pool, pet, decorative, security, farm, and split rail fencing planned around the real use of the property.',
    lead: 'Specialty fencing needs more than a standard material recommendation. The fence has a job: keep a pool safer, contain a dog, add style, guide access, protect a boundary, or fit rural land.',
    checks: 'We look at code concerns, visibility, containment, height, spacing, durability, maintenance, gates, and how the finished fence should feel from both sides.'
  },
  'property-specific-fencing': {
    card: 'Fence planning for HOAs, townhomes, rentals, commercial sites, slopes, shared boundaries, and tight access.',
    lead: 'Some properties make fencing trickier before the first post is set. HOAs, townhome layouts, rentals, commercial access, and sloped yards all need clearer planning up front.',
    checks: 'We review rules, neighbors, access, shared lines, grade changes, tenant use, maintenance expectations, and the practical limits of the site.'
  }
};

const childIntent = {
  'privacy-fence-installation': {
    card: 'Block sightlines, calm the backyard, and choose a privacy style that fits the home instead of overpowering it.',
    purpose: 'Privacy fencing is about more than height. We look at which views you want to block, where neighbors sit or walk, how sunlight moves across the yard, and where gates still need to feel natural.',
    details: 'Wood, vinyl, and semi-private layouts can all work, but the right choice depends on maintenance tolerance, HOA rules, grade changes, and how finished you want the property to look from the street and the yard.'
  },
  'backyard-fence-installation': {
    card: 'Make the backyard easier to use for kids, pets, gatherings, gardens, and everyday outdoor routines.',
    purpose: 'A backyard fence should make the space feel more usable, not boxed in. We plan around play areas, patios, side-yard access, mowing paths, pets, and the views you want to keep.',
    details: 'Gate placement matters here. A few feet in the wrong direction can make trash cans, lawn equipment, or outdoor furniture harder to move.'
  },
  'wood-fence-installation': {
    card: 'A classic fence option with flexible styles, warmer curb appeal, and maintenance expectations explained clearly.',
    purpose: 'Wood fencing gives you flexibility in height, spacing, picket style, and privacy, but it needs the right post setting, fasteners, drainage awareness, and long-term care plan.',
    details: 'We talk through pressure-treated wood, cedar-style expectations, staining, warping, ground contact, and how the fence will weather in a Frederick yard.'
  },
  'vinyl-fence-installation': {
    card: 'Low-maintenance privacy or accent fencing for homeowners who want a clean look without regular staining.',
    purpose: 'Vinyl fencing can be a strong fit when you want a cleaner finish and less routine upkeep. The layout still has to handle grade, gates, wind exposure, and transitions cleanly.',
    details: 'We explain panel styles, post spacing, color expectations, cleaning, and where vinyl may or may not be the best fit for the property.'
  },
  'aluminum-fence-installation': {
    card: 'Open, durable fencing for pools, front yards, pets, and properties that need visibility plus definition.',
    purpose: 'Aluminum fencing works well when you want a defined boundary without closing off the view. It is often used around pools, front yards, and clean perimeter lines.',
    details: 'We review picket spacing, gate hardware, slope handling, pool-code considerations, and how the fence will meet walks, patios, and driveways.'
  },
  'fence-post-repair': {
    card: 'Fix loose, rotted, shifted, or storm-stressed posts before the whole fence starts leaning.',
    purpose: 'A weak post can make a good fence look bad fast. We check whether the post itself failed, the footing moved, the soil is holding water, or the panels are pulling the run out of line.',
    details: 'The right repair may be a reset, reinforcement, post replacement, or a broader conversation if several posts are failing together.'
  },
  'storm-damaged-fence-repair': {
    card: 'Repair wind, branch, impact, and weather damage with a clear plan for what can be saved.',
    purpose: 'Storm damage needs a calm inspection. We separate urgent safety issues from cosmetic damage, then figure out whether posts, rails, panels, or gates took the real hit.',
    details: 'We can help you think through temporary stabilization, matching existing materials, and whether a damaged section should be repaired or replaced.'
  },
  'fence-panel-replacement': {
    card: 'Replace broken, warped, missing, or mismatched panels without turning every problem into a full rebuild.',
    purpose: 'Panel replacement works best when the posts and rails still have life left. We check alignment, fasteners, material match, and whether one bad panel is hiding a bigger structural issue.',
    details: 'We also talk through how a new panel will look beside older weathered fencing so the finished repair is not a surprise.'
  },
  'leaning-fence-repair': {
    card: 'Straighten or rebuild leaning fence sections by addressing the cause, not just pushing the panels upright.',
    purpose: 'A leaning fence usually means something moved: posts, soil, roots, impact, water, or age. We look for the reason before recommending the fix.',
    details: 'Sometimes one section can be corrected. Other times the lean tells us the fence line needs post work, drainage attention, or replacement planning.'
  },
  'full-fence-replacement': {
    card: 'Replace an aging fence with a better layout, cleaner gates, and materials that make sense now.',
    purpose: 'Full replacement is the right conversation when repairs keep stacking up or the fence no longer fits the property. We use the old fence as evidence for what should change.',
    details: 'We review what failed, what you liked, what annoyed you, and whether the new line, height, material, or gate plan should be different.'
  },
  'driveway-gate-installation': {
    card: 'Plan driveway gates around vehicle clearance, swing, grade, hardware, and daily use.',
    purpose: 'Driveway gates need to work every day, not just look good in a drawing. We review opening width, vehicle path, grade, post strength, and how the gate will be used in bad weather.',
    details: 'The estimate should clarify hardware, hinges, latch or lock options, and how the gate ties into the fence line or driveway edge.'
  },
  'walk-gate-installation': {
    card: 'Add a usable walk gate where people actually enter, carry items, and move through the yard.',
    purpose: 'Walk gates should land where life already happens. We plan for trash cans, pets, kids, deliveries, side-yard access, garden tools, and the path from house to yard.',
    details: 'We check swing direction, latch comfort, opening width, post support, and whether the gate needs to match an existing fence.'
  },
  'pool-gate-installation': {
    card: 'Pool gate planning with safety, latch placement, access, visibility, and code awareness in mind.',
    purpose: 'Pool gates deserve extra care because they affect safety and access. We look at self-closing needs, latch height, opening direction, visibility, and how people move around the pool area.',
    details: 'We can help you think through pool fence materials, gate placement, and inspection concerns before installation.'
  },
  'double-gate-installation': {
    card: 'Create wider access for mowers, trailers, equipment, patios, and backyards that need flexibility.',
    purpose: 'Double gates are useful when a standard walk gate is too limiting. We plan around equipment width, ground clearance, drop rods, latch style, and how often both leaves will open.',
    details: 'Post strength and alignment are everything here. A wide gate opening needs to stay square after regular use.'
  },
  'gate-hardware-replacement': {
    card: 'Replace tired hinges, latches, locks, closers, and gate hardware so the gate works again.',
    purpose: 'A bad gate does not always mean a bad fence. We inspect hinges, latch alignment, post movement, sagging, rust, and hardware fit before recommending replacement.',
    details: 'The goal is simple: a gate that opens cleanly, closes reliably, and fits how the property is used.'
  },
  'pool-fence-installation': {
    card: 'Pool fencing planned for safety, visibility, gate behavior, code concerns, and the look of the yard.',
    purpose: 'Pool fencing has to balance safety, access, and appearance. We review height, spacing, gate placement, latch behavior, sightlines, and how the fence works around patios and landscaping.',
    details: 'We help you choose a fence that supports the pool area without making the yard feel chopped up.'
  },
  'pet-fence-installation': {
    card: 'Fence planning for dogs and pets that considers gaps, height, digging, gates, and daily routines.',
    purpose: 'A pet fence needs to match the animal and the yard. We ask about size, jumping, digging, sight reactivity, gate habits, and the areas where pets already run.',
    details: 'Small gaps, latch choices, and low spots matter more than most people expect. We plan those details before installation.'
  },
  'decorative-fence-installation': {
    card: 'Add definition, curb appeal, and structure without turning the fence into a heavy privacy wall.',
    purpose: 'Decorative fencing should frame the property. We look at the architecture, front walk, garden beds, sightlines, and how much boundary you want without closing the space.',
    details: 'This is where proportions, post placement, color, and gate style matter as much as the material.'
  },
  'security-fence-installation': {
    card: 'Plan fencing that controls access, defines boundaries, and supports a safer property layout.',
    purpose: 'Security fencing starts with the risk you are trying to reduce. We talk through access points, visibility, height, gates, locks, lighting, and how people approach the property.',
    details: 'The best plan usually combines stronger boundaries with smarter gate and access decisions.'
  },
  'farm-and-split-rail-fencing': {
    card: 'Split rail and rural fencing for property lines, open yards, gardens, drive entries, and acreage.',
    purpose: 'Farm and split rail fencing should feel natural on the land. We review grade, long runs, corners, posts, visibility, animals, mowing, and how the fence meets driveways or woods.',
    details: 'We keep the plan practical because rural fence runs can get expensive quickly if the line is not thought through.'
  },
  'hoa-fence-projects': {
    card: 'Fence planning that respects HOA rules, approved materials, height limits, colors, and paperwork.',
    purpose: 'HOA fence projects need documentation as much as installation. We help you think through approved styles, setbacks, height, colors, neighbor lines, and what the board may ask for.',
    details: 'A clear scope can prevent delays, revisions, and the frustration of pricing a fence the HOA will not approve.'
  },
  'townhome-fence-installation': {
    card: 'Fence layouts for compact townhome yards where gates, privacy, drainage, and access matter.',
    purpose: 'Townhome fencing has tight margins. We plan around shared lines, narrow access, utilities, grading, patios, pets, trash access, and HOA expectations.',
    details: 'A smaller yard can still work beautifully when the fence line and gate are placed with daily use in mind.'
  },
  'commercial-fence-contractor': {
    card: 'Commercial fencing for access control, boundaries, equipment areas, tenant needs, and clean site flow.',
    purpose: 'Commercial fencing needs to support operations. We ask what the fence protects, who needs access, how deliveries happen, and what has to stay visible.',
    details: 'The scope should make maintenance, gates, security, liability, and daily use easier to understand.'
  },
  'rental-property-fencing': {
    card: 'Durable fencing choices for rental homes where repairability, tenant use, and cost control matter.',
    purpose: 'Rental property fencing has to be practical. We look at durability, gate abuse, pets, mowing, tenant turnover, replacement cost, and how quickly a repair needs to happen.',
    details: 'The best option is usually the one that is easy to maintain and clear enough for tenants to use correctly.'
  },
  'sloped-yard-fence-installation': {
    card: 'Fence planning for hills, steps, racked panels, grade changes, drainage, and uneven Frederick yards.',
    purpose: 'Sloped yards need careful layout decisions. We review whether the fence should step, rack, follow grade, or transition between methods.',
    details: 'Gate placement, bottom gaps, post height, and line-of-sight all become more important when the yard is not flat.'
  }
};

export function getFamilyCopy(parent) {
  return familyCopy[parent.slug] || {
    card: parent.shortDescription,
    lead: `We help Frederick homeowners plan ${parent.name.toLowerCase()} around the property, the goal, and the way the fence will be used.`,
    checks: 'We review layout, access, materials, gates, grade, timing, and the details that can affect the finished result.'
  };
}

export function getChildCopy(parent, child) {
  const intent = childIntent[child.slug] || {
    card: child.summary,
    purpose: `We plan ${child.name.toLowerCase()} around the property, the fence line, the material, and the result you want when the work is complete.`,
    details: 'The right scope should explain layout, materials, access, timing, and what needs to be decided before installation or repair begins.'
  };

  return {
    ...intent,
    lead: `For ${child.name.toLowerCase()} in Frederick, we start with the real reason you need the fence: privacy, safety, pets, access, curb appeal, repair, replacement, or a cleaner property line. Then we match the layout and material to the yard instead of pushing a one-size-fits-all package.`,
    checks: `${intent.purpose} We also check slope, gates, corners, access, neighboring conditions, utilities, and any HOA or permit questions that could affect the work.`,
    estimate: `A useful estimate should explain the fence line, approximate length, material, height, gate count, post work, removal needs, and any access or grade complications. If one of those pieces is uncertain, we call it out before you approve the project.`,
    timing: `Timing depends on material availability, weather, digging conditions, HOA approvals, and how easy it is to reach the fence line. We tell you what needs to happen before the crew arrives so the job does not get slowed down by avoidable surprises.`,
    result: `When the work is finished, the fence should feel like it belongs on the property. Gates should swing cleanly, posts should look intentional, transitions should make sense, and the yard should be left ready to use.`,
    compare: `When you compare fence contractors, listen for specifics. A strong recommendation should mention the line, height, material, post plan, gate hardware, access, grade, and what is included in cleanup. If the estimate only gives you a number, it is not giving you enough to make a confident decision.`,
    symptoms: [
      'You know what the fence needs to solve, but not which material or layout fits',
      'The yard has slope, tight access, shared boundaries, pets, kids, a pool, or HOA rules',
      'An existing fence is leaning, damaged, hard to use, or no longer worth patching',
      'You want a clear scope before posts, panels, gates, or hardware are ordered'
    ],
    benefits: [
      'A fence line planned around the property instead of guessed in the field',
      'Material and gate recommendations tied to daily use',
      'Clear notes on access, grade, removal, timing, and cleanup',
      'A finished result reviewed for alignment, function, and curb appeal'
    ],
    process: [
      'Walk the fence line and talk through what the fence needs to do',
      'Choose the layout, height, material, gates, and any repair or removal scope',
      'Install or repair in a clean sequence that protects the yard and keeps access clear',
      'Review the finished fence, gate movement, cleanup, and care notes before closeout'
    ],
    faqs: [
      {
        question: `How do I know if ${child.name.toLowerCase()} is the right option?`,
        answer: `Start with the job the fence needs to do. If ${child.name.toLowerCase()} fits your privacy, safety, access, pet, pool, boundary, or repair goal, we will help you compare layout and material choices before pricing the work.`
      },
      {
        question: `What affects the cost of ${child.name.toLowerCase()} in Frederick?`,
        answer: 'Length, height, material, gates, post conditions, slope, removal, access, utility concerns, and HOA requirements all affect price. A good estimate should make those factors visible.'
      },
      {
        question: 'Can you help if I am not sure about property lines or HOA rules?',
        answer: 'Yes. We can talk through what needs to be confirmed before installation. For legal property-line questions, a survey may be needed, but we can help you avoid obvious layout mistakes early.'
      }
    ]
  };
}
