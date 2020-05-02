import format from 'date-fns/format';


var span = document.querySelector('#time-now');

export default function update() {
	span.textContent = "ff"+ format(new Date(), 'h:mm:ssa');
	setTimeout(update, 1000);
}
