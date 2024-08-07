function formatDate(createdAt) {
    let date = new Date(createdAt);
    const day = date.toLocaleString('default', { day: '2-digit' });
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    // returns Nov 20, 2000
    return `${month} ${day}, ${year}`;
}

// Export the formatDate function using CommonJS syntax
module.exports = formatDate;
