export const dateMixin = {
	methods: {
		getDateFrom(daysBack) {

			let d = new Date();
			d.setDate(d.getDate() - daysBack);
			let dd = d.getDate();
			let mm = d.getMonth() + 1;
			let yyyy = d.getFullYear();

			if (dd < 10) { dd = '0'+ dd }

			if (mm < 10) { mm = '0'+ mm }

			d =  dd + '.' + mm + '.' + yyyy;

			return d;
		}
	}
}