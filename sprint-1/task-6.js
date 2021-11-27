const accountPatients = function(b) {
  let countBeds = { beds: b };
  let copyBeds = { ...countBeds };

  let admit = () => {
      copyBeds.beds--;
      if (copyBeds.beds >= 0) {
          console.log(`A patient was admitted, ${copyBeds.beds} beds are available`);
      } else if (copyBeds.beds < 0) {
          console.log('Can not admit a patient, no beds available');
          copyBeds.beds++;
      }
  };

  let discharge = () => {
      copyBeds.beds++;
      if (b >= copyBeds.beds) {
          console.log(`A patient was discharged, ${copyBeds.beds} beds are available`);
      } else if (b < copyBeds.beds) {
          console.log('There are no patients to discharge');
      }
  };

  return [
      admit,
      discharge
  ];
};

const [admit, discharge] = accountPatients(3);
admit();
admit();
admit();
admit();
discharge();
discharge();
discharge();
discharge();
