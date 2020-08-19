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
    typeOfEvent: 'heath-talk',
    locationOfEvent: 'Ha Noi',
    oneOptionDate: '2020-12-24',
    secondOptionDate: '2020-01-11',
    thirdOptionDate: '2020-03-10',
    dateTime: '2020-03-10',
    status: 'Approval',
  },
  {
    typeOfEvent: 'well-events',
    locationOfEvent: 'Bangkok',
    oneOptionDate: '2020-08-05',
    secondOptionDate: '2020-05-03',
    thirdOptionDate: '2020-02-02',
    status: 'pending',
  },
  {
    typeOfEvent: 'fit-active',
    locationOfEvent: 'Singapore',
    oneOptionDate: '2020-08-05',
    secondOptionDate: '2020-05-03',
    thirdOptionDate: '2020-02-02',
    reason: 'Time not available',
    status: 'Reject',
  },
  {
    typeOfEvent: 'well-events',
    locationOfEvent: 'Beijing',
    oneOptionDate: '2020-01-02',
    secondOptionDate: '2020-03-04',
    thirdOptionDate: '2020-06-08',
    reason: 'Time not available',
    status: 'Reject',
  },
  {
    typeOfEvent: 'well-events',
    locationOfEvent: 'Bangkok',
    oneOptionDate: '2020-08-05',
    secondOptionDate: '2020-05-03',
    thirdOptionDate: '2020-02-02',
    status: 'pending',
  },
  {
    typeOfEvent: 'well-events',
    locationOfEvent: 'New Delhi',
    oneOptionDate: '2020-08-05',
    secondOptionDate: '2020-05-03',
    thirdOptionDate: '2020-02-02',
    status: 'pending',
  },
  {
    typeOfEvent: 'heath-talk',
    locationOfEvent: 'Jakarta',
    oneOptionDate: '2020-12-24',
    secondOptionDate: '2020-04-11',
    thirdOptionDate: '2020-07-10',
    dateTime: '2020-06-09',
    status: 'Approval',
  },
];
