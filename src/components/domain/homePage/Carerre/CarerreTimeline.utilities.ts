const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const getResolvedYYYYMonthNameFormat = (stringDate: string) => {
    const date = new Date(stringDate);
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];

    if (isNaN(date.getTime())) {
        throw new Error('Invalid date value. Please provide a valid date.');
    }

    return `${month} ${year}`;
};

const getTimeDifferenceInMonth = (stringDate: string, stringDateToCompare: string) => {
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateFormatRegex.test(stringDate) || !dateFormatRegex.test(stringDateToCompare)) {
        throw new Error('Invalid date format. Please use YYYY-MM-DD.');
    }

    const date1 = new Date(stringDate);
    const date2 = new Date(stringDateToCompare);

    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        throw new Error('Invalid date value. Please provide valid dates.');
    }

    const startYear = date1.getFullYear();
    const startMonth = date1.getMonth();
    const endYear = date2.getFullYear();
    const endMonth = date2.getMonth();

    const months = Array.from({ length: (endYear - startYear) * 12 + (endMonth - startMonth + 1) }, (_, index) => {
        const totalMonths = startMonth + index;
        const year = startYear + Math.floor(totalMonths / 12);
        const month = totalMonths % 12;

        return `${year}-${String(month + 1).padStart(2, '0')}`;
    });

    return months.length;
};

const getTimeDifferenceFullFormated = (differenceInMonth: number) => {
    const years = Math.floor(differenceInMonth / 12);
    const months = differenceInMonth % 12;

    const parts = [
        years > 0 ? `${years} year${years > 1 ? 's' : ''}` : null,
        months > 0 ? `${months} month${months > 1 ? 's' : ''}` : null,
    ].filter(Boolean); 
    return parts.join(' ');
};

export { getResolvedYYYYMonthNameFormat, getTimeDifferenceInMonth, getTimeDifferenceFullFormated }