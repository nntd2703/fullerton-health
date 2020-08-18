export const TYPE_OF_EVENT = [
  { label: 'Choose event', value: '' },
  { label: 'Health Talk', value: 'heath-talk' },
  { label: 'Wellness Events', value: 'well-events' },
  { label: 'Fitness Activities', value: 'fit-active' },
];

export const FIELDS = [
  { key: 'typeOfEvent', _style: { width: '20%' } },
  { key: 'locationOfEvent', _style: { width: '20%' } },
  { key: 'dateTime', _style: { width: '20%' } },
  { key: 'status', _style: { width: '20%' } },
  {
    key: 'cancel',
    label: '',
    _style: { width: '20%' },
    sorter: false,
    filter: false,
  },
];

export const STATUS = {
  pending: 'Pending Review',
  approved: 'Approval',
  reject: 'Reject',
};

export const PERMISSION = {
  user: 'U',
  admin: 'A',
};

export const DEFAULT_DATA = [
  {
    typeOfEvent: 'fit-active',
    locationOfEvent: 'Ha Noi',
    oneOptionDate: '2020-01-01',
    secondOptionDate: '2020-02-01',
    thirdOptionDate: '2020-03-01',
    status: 'Pedding',
  },
  {
    typeOfEvent: 'fit-active',
    locationOfEvent: 'Ha Noi',
    oneOptionDate: '2020-01-01',
    secondOptionDate: '2020-02-01',
    thirdOptionDate: '2020-03-01',
    status: 'Pedding',
  },
  {
    typeOfEvent: 'fit-active',
    locationOfEvent: 'Ha Noi',
    oneOptionDate: '2020-01-01',
    secondOptionDate: '2020-02-01',
    thirdOptionDate: '2020-03-01',
    status: 'Pedding',
  },
  {
    typeOfEvent: 'fit-active',
    locationOfEvent: 'Ha Noi',
    oneOptionDate: '2020-01-01',
    secondOptionDate: '2020-02-01',
    thirdOptionDate: '2020-03-01',
    status: 'Pedding',
  },
];
