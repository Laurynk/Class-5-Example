const { devices } = require('@playwright/test');

/** @type {import('PlaywrightTest/test').PlaywrightTestingConfig} */
const config = {
    // Option shared for all porjects
    timout: 3000,
    use: {
        ignoreHTTPErrors: true,
    },

    //Options specific to search to specific porject browser size
    project: [
        {
            name: 'Desktop Chromium',
            use: {
                broswerName: 'chromium',
                viewport: { width: 1280, height: 720 },
            },
            
        },
        {
            name: 'Desktop Safari',
            use: {
                broswerName: 'webkit',
                viewport: { width: 1280, height: 720 },

            },
        },
        {
            name: 'Desktop Firefox',
            use: {
                broswerName: 'firefox',
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: 'Mobile Chorme',
            use: {
                broswerName: 'chromium',
                ...devices['iPhone XR landscape'],
                viewport: { width: 414, height: 896 },
            },
        },
        {
            name: 'Tablet Chrome',
            uses: {
                broswerName: 'chromium',
                ...devices['iPad Air'],
                viewport: {width: 820, height: 1180 },
            },
        },
            

    ]
}

module.export = config;