#!/usr/bin/env node

var primes = new Array();
var stopOnCount = 100;

var fs = require('fs');
var outfile = "primes.txt";

primes.push(2);

var number = 3;
while (primes.length < stopOnCount)
{
	if (is_prime_number(number))
		primes.push(number);
	number++;
}

fs.writeFileSync(outfile, primes.join(','));

console.log("First "+primes.length+" prime numbers are: "+primes.join(','));

function is_prime_number(number)
{
	if (number == 1)
		return false;
	if (number == 2)
		return true;
	if (number % 2 == 0)
		return false;

	var till = Math.ceil(Math.sqrt(number));
	for (var i = 3; i <= till; i = i + 2)
		if (number % i == 0)
			return false;

	return true;
}
