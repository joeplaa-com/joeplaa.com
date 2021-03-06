// Attached to ORIGIN REQUEST

/* For event object example: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html
 * Or see the copy below
 */

const redirects = [
    'the-news',
    'our-emotional-seesaw',
    'whiteness-defined',
    'low-salt-intake-is-bad',
    'newspeak',
    'rule-2-treat-yourself-like-someone-you-are-responsible-for-helping',
    'not-a-political-journey-too',
    'living-under-autism',
    'im-on-edge',
    'document',
    'what-i-learned-from-migrating-our-websites',
    'tearing-down-the-house',
    'lessons-from-my-running-failure',
    'learning-to-code',
    'do-i-have-a-sugar-intolerance',
    'customer-service',
    'keep-asking-why-a-letter-to-my-niece-and-nephew',
    'intermittent-fasting',
    'my-priorities',
    'my-favorite-quotes',
    'whats-the-right-diet-for-me',
    'the-struggle-for-perfection',
    'the-ultimate-why-improve-things',
    'what-i-learned-this-year',
    'my-goals-a-little-more-context-part-2',
    'my-goals-a-little-more-context-part-1',
    'joeps-goals',
    'running-for-me',
    'why-do-most-parties-start-around-midnight',
    'please-teach-me',
    'i-love-the-beach'
]

exports.handler = (event, context, callback) => {
    const { request } = event.Records[0].cf;
    const { uri } = request;
    const mainDomain = `joeplaa.com`;
    const redirectDomain = `blog.${mainDomain}`;
    const baseURI = `https://${redirectDomain}`;

    // Check for blog redirects first
    if (redirects.includes(uri.replace(/\//g,''))) {
        const redirectResponse = {
            status: '301',
            statusDescription: `Moved permanently`,
            headers: {
                "location": [{
                    "key": "Location",
                    "value": `${baseURI}${uri}`
                }],
                'cache-control': [{
                    key: 'Cache-Control',
                    value: "max-age=86400" // 60 * 60 * 24
                }]
            }
        };
        callback(null, redirectResponse);
        return
    }

    // If no "." in URI, assume document request and append index.html to request.uri
    if (request.uri.match(/^[^.]*$/)) {
        if (request.uri[request.uri.length - 1] === '/') {
            request.uri += 'index.html';
        } else {
            request.uri += '/index.html';
        }
    }

    // Return to CloudFront Origin Request
    callback(null, request);
};
