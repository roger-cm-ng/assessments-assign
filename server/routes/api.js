import express from 'express';
import cors from 'cors';
import camelcaseKeys from 'camelcase-keys';

const Api = express.Router();
Api.use(cors());

Api.get('/get-all', (req, res) => {
  res.json({
    status: 200,
    data: {
      result: { foo: 'bar' }
    }
  });
});

Api.get('/get-hw-rotate-banners', (req, res) => {
  res.json({
    status: 200,
    data: {
      result: [
        {
          desktop: 'http://lorempixel.com/1000/600/nature/1/',
          mobile: 'http://lorempixel.com/500/100/nature/5/',
          ctaImg: 'http://lorempixel.com/304/510/nature/1/',
          cta: 'http://google.com'
        },
        {
          desktop: 'http://lorempixel.com/1000/600/nature/2/',
          mobile: 'http://lorempixel.com/500/100/nature/6/',
          ctaImg: 'http://lorempixel.com/304/510/nature/2/',
          cta: 'http://yahoo.com'
        },
        {
          desktop: 'http://lorempixel.com/1000/600/nature/3/',
          mobile: 'http://lorempixel.com/500/100/nature/7/',
          ctaImg: 'http://lorempixel.com/304/510/nature/3/',
          cta: 'http://microsoft.com'
        }
      ]
    }
  });
});

Api.post('/flights', (req, res) => {
  res.json({
    status: 200,
    data: camelcaseKeys({
		"Result": {
      "Currency": "AUD",
  		"NextSequenceId": 1,
  		"OneWayFaring": true,
			"CTA": "details to get back to this selection",
			"Count": 1,
			"Trip": [
				{
					"OriginCode": "SYD",
					"DestinationCode": "MEL",
					"Sequence": 0
			},
				{
					"OriginCode": "MEL",
					"DestinationCode": "SYD",
					"Sequence": 1
				}
			],
			"Legs": [
				{
					"Id": 1,
					"Origin": "Sydney",
					"Destination": "Melbourne",
					"OriginCode": "SYD",
					"DestinationCode": "MEL",
					"ArrivalTime": "2017-03-01T11:30:00+11:00",
					"DepartureTime": "2017-03-01T10:00:00+11:00",
					"TravelTime": 90,
					"FlightTime": 90,
					"Distance": 800,
					"Carrier": {
						"OperatingCode": "VA",
						"MarketingCode": "VA",
						"Name": "Virgin Australia",
						"FlightNumber": "VA01"
					},
					"Equipment": {
						"Id": "73H",
						"Name": "Airbus 123"
					}
				},
				{
					"Id": 2,
					"Origin": "Sydney",
					"Destination": "Melbourne",
					"OriginCode": "SYD",
					"DestinationCode": "MEL",
					"ArrivalTime": "2017-03-01T12:30:00+11:00",
					"DepartureTime": "2017-03-01T11:00:00+11:00",
					"TravelTime": 90,
					"FlightTime": 90,
					"Distance": 800,
					"Carrier": {
						"OperatingCode": "VA",
						"MarketingCode": "VA",
						"Name": "Virgin Australia",
						"FlightNumber": "VA03"
					},
					"Equipment": {
						"Id": "73H",
						"Name": "Airbus 123"
					}
				},
				{
					"Id": 3,
					"Origin": "Sydney",
					"Destination": "Canberra",
					"OriginCode": "SYD",
					"DestinationCode": "CBR",
					"ArrivalTime": "2017-03-01T10:00:00+11:00",
					"DepartureTime": "2017-03-01T09:00:00+11:00",
					"TravelTime": 120,
					"FlightTime": 60,
					"Distance": 350,
					"Carrier": {
						"OperatingCode": "VA",
						"MarketingCode": "VA",
						"Name": "Virgin Australia",
						"FlightNumber": "VA02"
					},
					"Equipment": {
						"Id": "73H",
						"Name": "Airbus 123"
					}
				},
				{
					"Id": 4,
					"Origin": "Canberra",
					"Destination": "Melbourne",
					"OriginCode": "CBR",
					"DestinationCode": "MEL",
					"ArrivalTime": "2017-03-01T13:30:00+11:00",
					"DepartureTime": "2017-03-01T\t+11:00",
					"TravelTime": 120,
					"FlightTime": 60,
					"Distance": 450,
					"Carrier": {
						"OperatingCode": "VA",
						"MarketingCode": "VA",
						"Name": "Virgin Australia",
						"FlightNumber": "VA14"
					},
					"Equipment": {
						"Id": "73H",
						"Name": "Airbus 123"
					}
				},
				{
					"Id": 5,
					"Origin": "Melbourne",
					"Destination": "Sydney",
					"OriginCode": "MEL",
					"DestinationCode": "SYD",
					"ArrivalTime": "2017-03-01T16:00:00+11:00",
					"DepartureTime": "2017-03-01T14:30:00+11:00",
					"TravelTime": 90,
					"FlightTime": 90,
					"Distance": 850,
					"Carrier": {
						"OperatingCode": "VA",
						"MarketingCode": "VA",
						"Name": "Virgin Australia",
						"FlightNumber": "VA12"
					},
					"Equipment": {
						"Id": "73H",
						"Name": "Airbus 123"
					}
				},
				{
					"Id": 6,
					"Origin": "Melbourne",
					"Destination": "Sydney",
					"OriginCode": "MEL",
					"DestinationCode": "SYD",
					"ArrivalTime": "2017-03-01T19:30:00+11:00",
					"DepartureTime": "2017-03-01T18:00:00+11:00",
					"TravelTime": 90,
					"FlightTime": 90,
					"Distance": 850,
					"Carrier": {
						"OperatingCode": "VA",
						"MarketingCode": "VA",
						"Name": "Virgin Australia",
						"FlightNumber": "VA16"
					},
					"Equipment": {
						"Id": "73H",
						"Name": "Airbus 123"
					}
				},
				{
					"Id": 7,
					"Origin": "Melbourne",
					"Destination": "Sydney",
					"OriginCode": "MEL",
					"DestinationCode": "SYD",
					"ArrivalTime": "2017-03-01T10:30:00+11:00",
					"DepartureTime": "2017-03-01T09:00:00+11:00",
					"TravelTime": 90,
					"FlightTime": 90,
					"Distance": 850,
					"Carrier": {
						"OperatingCode": "VA",
						"MarketingCode": "VA",
						"Name": "Virgin Australia",
						"FlightNumber": "VA18"
					},
					"Equipment": {
						"Id": "73H",
						"Name": "Airbus 123"
					}
				},
				{
					"Id": 8,
					"Origin": "Melbourne",
					"Destination": "Sydney",
					"OriginCode": "SYD",
					"DestinationCode": "MEL",
					"ArrivalTime": "2017-03-01T19:00:00+11:00",
					"DepartureTime": "2017-03-01T16:30:00+11:00",
					"TravelTime": 150,
					"FlightTime": 120,
					"Distance": 850,
					"Carrier": {
						"OperatingCode": "VA",
						"MarketingCode": "VA",
						"Name": "Virgin Australia",
						"FlightNumber": "VA19"
					},
					"Equipment": {
						"Id": "73H",
						"Name": "Airbus 123"
					},
					"StopOver": {
						"ArrivalTime": "2017-03-01T17:30:01+11:00",
						"DepartureTime": "2017-03-01T18:00:01+11:00",
						"Code": "CBR",
						"Name": "Canberra"
					}
				},
				{
					"Id": 9,
					"Origin": "Sydney",
					"Destination": "Adelaide",
					"OriginCode": "SYD",
					"DestinationCode": "ADL",
					"ArrivalTime": "2017-03-01T12:00:00+11:00",
					"DepartureTime": "2017-03-01T10:00:00+11:00",
					"TravelTime": 370,
					"FlightTime": 120,
					"Distance": 850,
					"Carrier": {
						"OperatingCode": "VA",
						"MarketingCode": "VA",
						"Name": "Virgin Australia",
						"FlightNumber": "VA20"
					},
					"Equipment": {
						"Id": "73H",
						"Name": "Airbus 123"
					}
				},
				{
					"Id": 10,
					"Origin": "Adelaide",
					"Destination": "Melbourne",
					"OriginCode": "ADL",
					"DestinationCode": "MEL",
					"ArrivalTime": "2017-03-01T14:30:00+11:00",
					"DepartureTime": "2017-03-01T13:00:00+11:00",
					"TravelTime": 370,
					"FlightTime": 90,
					"Distance": 450,
					"Carrier": {
						"OperatingCode": "VA",
						"MarketingCode": "VA",
						"Name": "Virgin Australia",
						"FlightNumber": "VA21"
					},
					"Equipment": {
						"Id": "73H",
						"Name": "Airbus 123"
					}
				}
			],
			"Segments": [
				{
					"Id": "S1",
					"InfoSource": "Some Source",
					"Sequence": 0,
					"BaseLegIds": [1]
				},
				{
					"Id": "S2",
					"InfoSource": "Some Source",
					"Sequence": 0,
					"BaseLegIds": [2]
				},
				{
					"Id": "S3",
					"InfoSource": "Some Source",
					"Sequence": 0,
					"BaseLegIds": [3,4]
				},
				{
					"Id": "S4",
					"InfoSource": "Some Source",
					"Sequence": 1,
					"BaseLegIds": [5]
				},
				{
					"Id": "S5",
					"InfoSource": "Some Source",
					"Sequence": 1,
					"BaseLegIds": [6]
				},
				{
					"Id": "S6",
					"InfoSource": "Some Source",
					"Sequence": 1,
					"BaseLegIds": [7]
				},
				{
					"Id": "S7",
					"InfoSource": "Some Source",
					"Sequence": 1,
					"BaseLegIds": [8]
				},
				{
					"Id": "S8",
					"InfoSource": "Some Source",
					"Sequence": 0,
					"BaseLegIds": [9,10]
				}
			],
			"FareOptions": [
				{
					"CTA": "details to get back to this selection",
					"TotalPrice": 100,
					"FareType": "OneWay",
					"ToatBaseFare": 80,
					"TotalTaxes": 20,
					"FlightOptions": [
						{
							"Sequence": 0,
							"FlightSegments": [
								{
									"CombinablePriceFrom": 200,
									"Key": "F1",
									"BookingSegment": [
										{
											"SegmentId": "S1",
											"CabinClassName": "Economy",
											"CabinClass": "E",
											"Farebasis": "ABCDEF",
											"CheckedItems": 0,
											"BookingClass": "C"
										}
									],
									"OneWayFaring": {
										"MinCombineFlightSegment": [
											"F4",
											"F5"
										],
										"OneWayExclude": [
											"F6"
										]
									}
								}
							]
						}
					],
					"PricePerPTC": [
						{
							"PassengerType": "ADT",
							"Fare": 100,
							"BaseFare": 80,
							"BaseFareTaxes": 20
						}
					]
				},
				{
					"CTA": "details to get back to this selection",
					"TotalPrice": 150,
					"FareType": "OneWay",
					"ToatBaseFare": 100,
					"TotalTaxes": 50,
					"FlightOptions": [
						{
							"Sequence": 0,
							"FlightSegments": [
								{
									"Key": "F2",
									"CombinablePriceFrom": 250,
									"BookingSegment": [
										{
											"SegmentId": "S2",
											"CabinClassName": "Economy",
											"CabinClass": "E",
											"Farebasis": "ABCDEF",
											"CheckedItems": 0,
											"BookingClass": "C"
										}
									],
									"OneWayFaring": {
										"MinCombineFlightSegment": [
											"F5"
										],
										"OneWayExclude": [
											"F4",
											"F6"
										]
									}
								}
							]
						}
					],
					"PricePerPTC": [
						{
							"PassengerType": "ADT",
							"Fare": 150,
							"BaseFare": 100,
							"BaseFareTaxes": 50
						}
					]
				},
				{
					"CTA": "details to get back to this selection",
					"TotalPrice": 200,
					"FareType": "OneWay",
					"ToatBaseFare": 150,
					"TotalTaxes": 50,
					"FlightOptions": [
						{
							"Sequence": 0,
							"FlightSegments": [
								{
									"Key": "F3",
									"CombinablePriceFrom": 300,
									"BookingSegment": [
										{
											"SegmentId": "S3",
											"CabinClassName": "Economy",
											"CabinClass": "E",
											"Farebasis": "ABCDEF",
											"CheckedItems": 0,
											"BookingClass": "C"
										}
									],
									"OneWayFaring": {
										"MinCombineFlightSegment": [
											"F5"
										],
										"OneWayExclude": [
											"F4",
											"F6"
										]
									}
								}
							]
						}
					],
					"PricePerPTC": [
						{
							"PassengerType": "ADT",
							"Fare": 200,
							"BaseFare": 150,
							"BaseFareTaxes": 50
						}
					]
				},
				{
					"CTA": "details to get back to this selection",
					"TotalPrice": 100,
					"FareType": "OneWay",
					"ToatBaseFare": 80,
					"TotalTaxes": 20,
					"FlightOptions": [
						{
							"Sequence": 1,
							"FlightSegments": [
								{
									"Key": "F4",
									"BookingSegment": [
										{
											"SegmentId": "S4",
											"CabinClassName": "Economy",
											"CabinClass": "E",
											"Farebasis": "ABCDEF",
											"CheckedItems": 0,
											"BookingClass": "C"
										}
									]
								}
							]
						}
					],
					"PricePerPTC": [
						{
							"PassengerType": "ADT",
							"Fare": 100,
							"BaseFare": 80,
							"BaseFareTaxes": 20
						}
					]
				},
				{
					"CTA": "details to get back to this selection",
					"TotalPrice": 100,
					"FareType": "OneWay",
					"ToatBaseFare": 80,
					"TotalTaxes": 20,
					"FlightOptions": [
						{
							"Sequence": 1,
							"FlightSegments": [
								{
									"Key": "F5",
									"BookingSegment": [
										{
											"SegmentId": "S5",
											"CabinClassName": "Economy",
											"CabinClass": "E",
											"Farebasis": "ABCDEF",
											"CheckedItems": 0,
											"BookingClass": "C"
										}
									]
								}
							]
						}
					],
					"PricePerPTC": [
						{
							"PassengerType": "ADT",
							"Fare": 100,
							"BaseFare": 80,
							"BaseFareTaxes": 20
						}
					]
				},
				{
					"CTA": "details to get back to this selection",
					"TotalPrice": 150,
					"FareType": "OneWay",
					"ToatBaseFare": 100,
					"TotalTaxes": 50,
					"FlightOptions": [
						{
							"Sequence": 1,
							"FlightSegments": [
								{
									"Key": "F6",
									"BookingSegment": [
										{
											"SegmentId": "S6",
											"CabinClassName": "Economy",
											"CabinClass": "E",
											"Farebasis": "ABCDEF",
											"CheckedItems": 0,
											"BookingClass": "C"
										}
									]
								}
							]
						}
					],
					"PricePerPTC": [
						{
						"PassengerType": "ADT",
						"Fare": 150,
						"BaseFare": 100,
						"BaseFareTaxes": 50
						}
					]
				},
				{
					"CTA": "details to get back to this selection",
					"TotalPrice": 150,
					"FareType": "OneWay",
					"ToatBaseFare": 100,
					"TotalTaxes": 50,
					"FlightOptions": [
						{
							"Sequence": 1,
							"FlightSegments": [
								{
									"Key": "F7",
									"BookingSegment": [
										{
											"SegmentId": "S7",
											"CabinClassName": "Economy",
											"CabinClass": "E",
											"Farebasis": "ABCDEF",
											"CheckedItems": 0,
											"BookingClass": "C"
										}
									]
								}
							]
						}
					],
					"PricePerPTC": [
						{
						"PassengerType": "ADT",
						"Fare": 150,
						"BaseFare": 100,
						"BaseFareTaxes": 50
						}
					]
				},
				{
					"CTA": "details to get back to this selection",
					"TotalPrice": 550,
					"FareType": "OneWay",
					"ToatBaseFare": 400,
					"TotalTaxes": 150,
					"FlightOptions": [
						{
							"Sequence": 0,
							"FlightSegments": [
								{
									"Key": "F8",
									"CombinablePriceFrom": 650,
									"BookingSegment": [
										{
											"SegmentId": "S1",
											"CabinClassName": "Business",
											"CabinClass": "B",
											"Farebasis": "ABCDEF",
											"CheckedItems": 0,
											"BookingClass": "D"
										}
									],
									"OneWayFaring": {
										"MinCombineFlightSegment": [
											"F5"
										],
										"OneWayExclude": [
											"F4",
											"F6"
										]
									}
								}
							]
						}
					],
					"PricePerPTC": [
						{
							"PassengerType": "ADT",
							"Fare": 550,
							"BaseFare": 400,
							"BaseFareTaxes": 150
						}
					]
				},
				{
					"CTA": "details to get back to this selection",
					"TotalPrice": 450,
					"FareType": "OneWay",
					"ToatBaseFare": 350,
					"TotalTaxes": 100,
					"FlightOptions": [
						{
							"Sequence": 1,
							"FlightSegments": [
								{
									"Key": "F9",
									"BookingSegment": [
										{
											"SegmentId": "S7",
											"CabinClassName": "Business",
											"CabinClass": "B",
											"Farebasis": "ABCDEF",
											"CheckedItems": 0,
											"BookingClass": "D"
										}
									]
								}
							]
						}
					],
					"PricePerPTC": [
						{
						"PassengerType": "ADT",
						"Fare": 450,
						"BaseFare": 350,
						"BaseFareTaxes": 100
						}
					]
				},
				{
					"CTA": "details to get back to this selection",
					"TotalPrice": 380,
					"FareType": "OneWay",
					"ToatBaseFare": 300,
					"TotalTaxes": 80,
					"FlightOptions": [
						{
							"Sequence": 0,
							"FlightSegments": [
								{
									"CombinablePriceFrom": 480,
									"Key": "F10",
									"BookingSegment": [
										{
											"SegmentId": "S8",
											"CabinClassName": "Business",
											"CabinClass": "B",
											"Farebasis": "ABCDEF",
											"CheckedItems": 0,
											"BookingClass": "D"
										}
									],
									"OneWayFaring": {
										"MinCombineFlightSegment": [
											"F5"
										],
										"OneWayExclude": [
											"F4",
											"F6",
											"F7",
											"F9"
										]
									}
								}
							]
						}
					],
					"PricePerPTC": [
						{
							"PassengerType": "ADT",
							"Fare": 380,
							"BaseFare": 300,
							"BaseFareTaxes": 80
						}
					]
				}
			]
		}
  }, { deep: true })
  });
});


export default Api;
