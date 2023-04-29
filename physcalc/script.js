const form = document.getElementById("conversion-form");
const result = document.getElementById("result");

form.addEventListener("submit", event => {
	event.preventDefault();

	// get form values
	const value = parseFloat(document.getElementById("value").value);
	const fromUnit = document.getElementById("from-unit").value;
	const toUnit = document.getElementById("to-unit").value;
	const quantity = document.getElementById("quantity").value;

	// calculate result
	let resultValue;
	if (quantity === "distance") {
		resultValue = convertDistance(value, fromUnit, toUnit);
	} else if (quantity === "time") {
		resultValue = convertTime(value, fromUnit, toUnit);
	} else if (quantity === "velocity") {
		resultValue = convertVelocity(value, fromUnit, toUnit);
	} else if (quantity === "light") {
		resultValue = convertSpeedOfLight(value, fromUnit, toUnit);
	} else if (quantity === "density") {
		resultValue = convertDensity(value, fromUnit, toUnit);
	}

	// display result
	result.innerHTML = `${value} ${fromUnit} = ${resultValue} ${toUnit}`;
});

function convertDistance(value, fromUnit, toUnit) {
	const conversions = {
		m: 1,
		km: 1000,
		cm: 0.01,
		ft: 0.3048,
		in: 0.0254,
		mi: 1609.34
	};

	const meters = value * conversions[fromUnit];
	const result = meters / conversions[toUnit];
	return result.toFixed(2);
}

function convertTime(value, fromUnit, toUnit) {
	const conversions = {
		s: 1,
		min: 60,
		h: 3600,
		d: 86400,
		w: 604800,
		y: 31536000
	};

	const seconds = value * conversions[fromUnit];
	const result = seconds / conversions[toUnit];
	return result.toFixed(2);
}

function convertVelocity(value, fromUnit, toUnit) {
	const distanceConversions = {
		m: 1,
		km: 1000,
		cm: 0.01,
		ft: 0.3048,
		in: 0.0254,
		mi: 1609.34
	};

	const timeConversions = {
		s: 1,
		min: 60,
		h: 3600,
		d: 86400,
		w: 604800,
		y: 31536000
	};

	const distanceMeters = value * distanceConversions[fromUnit];
	const timeSeconds = distanceMeters / speedOfLight;
	const result = (distanceMeters / timeSeconds) / distanceConversions[toUnit];
	return result.toFixed(2);
}

function convertSpeedOfLight(value, fromUnit, toUnit) {
	const conversions = {
		m: 299792458,
		km: 299792.458,
		cm: 29979245800,
		ft: 983571056,
		in: 11802726667,
		mi: 186282
	};

	const result = value * (conversions[toUnit] / conversions[fromUnit]);
	return result.toFixed(2);
}

function convertDensity(value, fromUnit, toUnit) {
	const conversions = {
		kgm3: 1,
		gcm3: 1000,
		lbmft3: 16.0185
	};

	const kgm3 = value * conversions[fromUnit];
	const result = kgm3 / conversions[toUnit];
	return result.toFixed(2);}