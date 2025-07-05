function renderForm() {
  const form = document.getElementById("procedureForm");
  const selected = document.getElementById("procedure").value;
  form.innerHTML = "";

  const inputFields = {
    1: [
      "Donor ID",
      "Name",
      "Blood Group",
      "Last Donation Date (YYYY-MM-DD)",
      "Phone",
      "City",
    ],
    2: [
      "Patient ID",
      "Name",
      "Blood Group",
      "Diagnosis",
      "Phone",
      "Hospital ID",
    ],
    3: [
      "Donation ID",
      "Donor ID",
      "Date (YYYY-MM-DD)",
      "Volume (in liters)",
      "Blood Group",
      "Inventory ID",
    ],
    4: [
      "Request ID",
      "Patient ID",
      "Inventory ID",
      "Date (YYYY-MM-DD)",
      "Volume",
      "Blood Group",
    ],
    5: [],
    6: ["Hospital ID"],
    7: [],
    8: [],
    9: ["Donor ID"],
    10: ["Blood Group"],
  };

  const params = inputFields[selected] || [];

  params.forEach((label, idx) => {
    const input = document.createElement("input");
    input.type = "text";
    input.name = `param${idx + 1}`;
    input.placeholder = label;
    form.appendChild(input);
  });

  if (selected) {
    const btn = document.createElement("button");
    btn.type = "submit";
    btn.innerText = "Simulate Procedure";
    form.appendChild(btn);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputs = [...form.querySelectorAll("input")].map(
    (input) => input.value
  );
  const proc = document.getElementById("procedure").value;

  const procedures = {
    1: `insert_donor(${inputs[0]}, '${inputs[1]}', '${inputs[2]}', TO_DATE('${inputs[3]}', 'YYYY-MM-DD'), '${inputs[4]}', '${inputs[5]}');`,
    2: `insert_patient(${inputs[0]}, '${inputs[1]}', '${inputs[2]}', '${inputs[3]}', '${inputs[4]}', ${inputs[5]});`,
    3: `add_donation(${inputs[0]}, ${inputs[1]}, TO_DATE('${inputs[2]}', 'YYYY-MM-DD'), ${inputs[3]}, '${inputs[4]}', ${inputs[5]});`,
    4: `request_blood(${inputs[0]}, ${inputs[1]}, ${inputs[2]}, TO_DATE('${inputs[3]}', 'YYYY-MM-DD'), ${inputs[4]}, '${inputs[5]}');`,
    5: `show_all_donors();`,
    6: `show_patients_by_hospital(${inputs[0]});`,
    7: `show_inventory_summary();`,
    8: `show_all_requests();`,
    9: `show_donor_reward_history(${inputs[0]});`,
    10: `find_donors_by_blood_group('${inputs[0]}');`,
  };

  const output = document.getElementById("output");
  output.innerHTML = `<strong>PL/SQL Call:</strong><br><code>${procedures[proc]}</code>`;
}
