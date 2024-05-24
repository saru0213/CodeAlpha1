document.addEventListener("DOMContentLoaded", function() {
  let userDate = document.getElementById("date");
  
  userDate.max = new Date().toISOString().split("T")[0];
});

function calculateAge() {
  const dob = document.getElementById('date').value;
  const errorElement = document.getElementById('error');
  const ageElement = document.getElementById('age');
  errorElement.textContent = '';
  ageElement.textContent = '';

  if (!dob) {
      showToast('Please enter a valid date of birth.');
      return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  if (birthDate > today) {
      showToast('Date of birth cannot be in the future.');
      return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
      years--;
      months += 12;
  }

  ageElement.textContent = `Your age is: ${years} years, ${months} months, ${days} days.`;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast show';
  setTimeout(() => {
      toast.className = toast.className.replace('show', '');
  }, 3000);
}
