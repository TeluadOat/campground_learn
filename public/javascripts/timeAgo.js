const timeAgoFormatter = new Intl.RelativeTimeFormat('en', { numeric: 'always' });
const timeUnits = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2592000 },
    { unit: 'week', seconds: 604800 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
];

const updateTimeAgoLabels = () => {
    document.querySelectorAll('[data-time-ago]').forEach((element) => {
        const createdAt = new Date(element.dateTime);
        if (Number.isNaN(createdAt.getTime())) {
            element.textContent = 'Date unavailable';
            return;
        }

        const elapsedSeconds = Math.floor((Date.now() - createdAt.getTime()) / 1000);
        if (elapsedSeconds < 60) {
            element.textContent = 'just now';
            return;
        }

        const timeUnit = timeUnits.find(({ seconds }) => elapsedSeconds >= seconds);
        const elapsedUnits = Math.floor(elapsedSeconds / timeUnit.seconds);
        element.textContent = timeAgoFormatter.format(-elapsedUnits, timeUnit.unit);
    });
};

updateTimeAgoLabels();
setInterval(updateTimeAgoLabels, 60 * 1000);