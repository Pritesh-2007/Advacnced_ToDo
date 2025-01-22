export const generateNextDate = (currentDate, recurrence) => {
    const date = new Date(currentDate);
    switch (recurrence) {
      case 'daily':
        date.setDate(date.getDate() + 1);
        break;
      case 'weekly':
        date.setDate(date.getDate() + 7);
        break;
      case 'monthly':
        date.setMonth(date.getMonth() + 1);
        break;
      default:
        return currentDate;
    }
    return date.toISOString().split('T')[0];
  };
  