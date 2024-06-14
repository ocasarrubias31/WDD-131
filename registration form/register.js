
import { participantTemplate, successTemplate } from './template.js';

let count = 1;
document.getElementById('add').addEventListener('click', addParticipant);
document.querySelector('form').addEventListener('submit', submitForm);

function addParticipant() {
    count++;
    const newParticipantHTML = participantTemplate(count);
    // insert adjasent hmtl inserts add participant and makes a new participant form
    document.querySelector('.participants').insertAdjacentHTML('beforeend', newParticipantHTML);
}

function totalFees() {
    // Grabs all fee ids 
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    // total = 
    const total = feeElements.reduce((sum, feeElement) => sum + parseFloat(feeElement.value || 0), 0);
    return total;
}

function submitForm(event) {
    event.preventDefault();
    const total = totalFees();
    // Value is the input 
    const adultName = document.getElementById('adult_name').value;
// Stores succese template into message variable
    const message = successTemplate({ name: adultName, count, total });
    // 
    document.querySelector('form').style.display = 'none';
    const summary = document.getElementById('summary');
    // Displays the message
    summary.innerHTML = message;
    summary.style.display = 'block';
}
