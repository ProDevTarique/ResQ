export const heartAttackTree = {
  id: 'root',
  instruction: 'Heart Attack Protocol',
  options: [
    {
      label: 'Is patient conscious and breathing?',
      children: [
        {
          label: 'Yes',
          instruction: 'Call 112/102 immediately. Put phone on speaker.',
          children: [
            { label: 'EMS Called', instruction: 'Chew one adult aspirin (if not allergic).', children: [] }
          ]
        }
      ]
    }
  ]
};