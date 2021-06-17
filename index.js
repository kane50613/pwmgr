#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
	.option("l", {
		alias: "length",
		describe: "password's length (default is 512)",
		default: 512,
		type: "number"
	})
	.option("s", {
		describe: 'Whether use special characters',
		alias: "special"
	}).argv

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz0123456789" + (argv.s ? "~!@#$%^&*()_-`." : "")

let pw = ""

for(let i = 0; i <= argv?.length; i++)
	pw += chars.charAt(Math.floor(Math.random() * chars.length))

console.log(pw)