export const incidentData = [
  {
    id: 'heart-attack',
    label: 'Heart Attack',
    groups: [
      {
        title: 'Conscious & Breathing',
        instructions: ['Call emergency services (112/102) immediately.', 'Keep the patient calm and seated.', 'If not allergic, have them chew one adult aspirin (300mg).']
      },
      {
        title: 'Unconscious but Breathing',
        instructions: ['Call emergency services (112/102) immediately.', 'Place patient in the Recovery Position (on their side).', 'Monitor breathing until help arrives.']
      },
      {
        title: 'Unconscious & Not Breathing',
        instructions: ['Call emergency services (112/102) immediately.', 'Begin CPR: 30 compressions followed by 2 rescue breaths.', 'Continue at 100-120 bpm without interruption.']
      }
    ]
  },
  { id: 'seizure', label: 'Seizures', simpleInstruction: 'Remove sharp objects, cushion head, do not restrain. Time the seizure.' },
  { id: 'bleeding', label: 'Severe Bleeding', simpleInstruction: 'Apply firm, direct pressure. Elevate limb. Use tourniquet only if life-threatening.' },
  { id: 'stroke', label: 'Stroke (F.A.S.T)', simpleInstruction: 'Face (droop?), Arms (can raise?), Speech (slurred?), Time (call 112/102).' },
  { id: 'burns', label: 'Burns', simpleInstruction: 'Cool under running water. Do not remove stuck clothing. Do not apply ice to severe burns.' }
];