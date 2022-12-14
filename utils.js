module.exports = {
    filters: {
        'pageIndex': 0,
        'PageSize': 100,
        'postalCode': '84045',
        'radius': 0,
        "sortBy": "Distance",
        "sortDirection": "Asc",
        'formatResponse': false,
        'includeFacets': true,
        'includeDealers': true,
        'includeVehicles': true,
        'filters': [
            {
                'name': 'Series',
                'values': [
                    'X3', 'X5'
                ]
            },
            {
                'name': 'Year',
                'values': [
                    '2020',
                    '2021'
                ]
            },
            {
                'name': 'ExteriorColor',
                'values': [
                    'White'
                ]
            },
            {
                "name": "InteriorColor",
                "values": [
                    "Brown"
                ]
            },
            {
                "name": "Drivetrain",
                "values": [
                    "AWD"
                ]
            },
            {
                "name": "Price",
                "values": [
                    "$20,000 - $29,999",
                    "$30,000 - $39,999",
                    "$40,000 - $49,999"
                ]
            }
        ]
    },
    getHeaders: (auth) => ({
        headers: {
            'Accept': 'application/json',
            'Accept-Language': 'en',
            'Authorization': auth,
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Origin': 'https://www.bmwusa.com',
            'Pragma': 'no-cache',
            'Referer': 'https://www.bmwusa.com/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"'
        }
    })
}