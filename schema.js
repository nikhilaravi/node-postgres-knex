// USERS

{
  guid: 'uuid', //primary key
  title: 'string',
  email: 'string', //unique
  mobile_number: 'string', //unique
  referral_code: 'number', //nullable
  username: 'string',
  first_name: 'string',
  last_name: 'string',
  password: 'string',
  date_of_birth: 'date',
  ts_and_cs: 'boolean',
  address: 'string' //save as line 1 and line 2?
  place: 'string',
  postcode: 'string',
  pin: 'number',
  access_token: 'string'
  balance: 'number',
  use_touch_id: 'boolean'
  use_pin: 'boolean',
  offers_by_email: 'boolean',
  offers_by_sms: 'boolean',
  enable_push_notifications: 'boolean',
}

// PREFERENCES AND BET OPTIONS

{
  user_guid: 'number', // primary key
  selections: 'array',
  money_min: 'number',
  money_max: 'number',
  odds_min: 'number',
  odds_max: 'number'
}

// BETS

{
  bet_id: 'number',
  user_guid: 'number', //references 'users(guid)'
  time_stamp: 'timestamp',

}

// PAYMENT-CARDS

{
  user_guid: 'uuid', //references 'users(guid)'
  card_type: 'string',
  card_number: 'number', //unique (primary key)
  selected: 'boolean', //only one selected per user
  //other card details
}

// TRANSACTIONS

{
  transaction_id: 'number', //primary key
  user_guid: 'uuid', //references 'users(guid)'
  card_id: 'number', //references 'cards(card_number)'
  ////FSB transaction data
}

// NOTIFICATIONS

{
  notification_id: 'string', //unique
  message: 'string',
  type: 'string'
  body: 'json',
  read: 'boolean',
  user_guid: 'uuid', //references 'users(guid)'
  time_stamp: 'timestamp'
}

// SPLIT BETS

{
  splitbet_id: 'number',
  sender_id: 'number', // references 'users(guid)'
  recipient_id: 'number', // references 'users(guid)'
  card_id: 'number',
}
