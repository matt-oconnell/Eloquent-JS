class Example {
    constructor(func, data, description) {
		this.func = func;
		this.data = data;
		this.description = description || '';
		this.formatted = this.format();
    }
	format() {
		var s = this.func.toString();
		s = s.substring(this.func.toString().indexOf('{') + 1, s.lastIndexOf('return'));
		var a = s.split('\n');
		a = a.map(function(l) {
		    return l.replace(/\t/, '');
		});
		s = a.join('\n');
		return s;
	}
	dataFormatted() {
		return JSON.stringify(this.data, null, 4)
	}
	resultFormatted() {
		return JSON.stringify(this.func(), null, 4);
	}
	console() {
		console.log(this.func());
	}
}

export { Example };