export const heartAttackTree = {
  instruction: 'Emergency Heart Attack Assessment',
  options: [
    {
      label: 'Breathing and Conscious',
      color: '#dcfce7', // Light Green
      instruction: 'Patient is responsive and breathing normally.',
      children: [
        { instruction: 'Call emergency services (112/102) immediately.', children: [] },
        { instruction: 'Loosen tight clothing, keep patient calm and seated.', children: [] },
        { instruction: 'If not allergic, have them chew one adult aspirin (300mg).', children: [] }
      ]
    },
    {
      label: 'Breathing but not Conscious',
      color: '#fef9c3', // Light Yellow
      instruction: 'Patient is unresponsive but breathing.',
      children: [
        { instruction: 'Call emergency services (112/102) immediately.', children: [] },
        { instruction: 'Place patient in the Recovery Position (on their side).', children: [] },
        { instruction: 'Continuously monitor breathing until help arrives.', children: [] }
      ]
    },
    {
      label: 'Not Breathing and not Conscious',
      color: '#fee2e2', // Light Red
      instruction: 'Patient is in cardiac arrest.',
      children: [
        { instruction: 'Call emergency services (112/102) immediately.', children: [] },
        { instruction: 'Begin CPR: 30 chest compressions followed by 2 rescue breaths.', children: [] },
        { instruction: 'Continue compressions at 100-120 bpm without interruption.', children: [] }
      ]
    }
  ]
};