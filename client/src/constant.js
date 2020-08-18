export const TYPE_OF_EVENT = [
  { label: 'Choose event', value: '' },
  { label: 'Health Talk', value: 'heath-talk' },
  { label: 'Wellness Events', value: 'well-events' },
  { label: 'Fitness Activities', value: 'fit-active' },
];

export const FIELDS = [
  { key: 'typeOfEvent', _style: { width: '40%' } },
  { key: 'locationOfEvent', _style: { width: '20%' } },
  { key: 'dateTime', _style: { width: '20%' } },
  { key: 'status', _style: { width: '20%' } },
  {
    key: 'cancel',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false,
  },
];
