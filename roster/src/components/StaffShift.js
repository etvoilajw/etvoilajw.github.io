const StaffShift = (shift) => {
  const {
    workType,
    startHours,
    startMinutes,
    startAMPM,
    endHours,
    endMinutes,
    endAMPM,
  } = Object.values(shift)[0];

  const startTime = startHours + ":" + startMinutes + startAMPM;
  const endTime = endHours + ":" + endMinutes + endAMPM;
  return (
    <p>
      {startTime} - {endTime}
    </p>
  );
};

export default StaffShift;
