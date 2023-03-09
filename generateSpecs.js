const Handlebars = require("handlebars");
const fs = require("fs");

const jestSpec = `const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`;

let template = Handlebars.compile(jestSpec);

result = template();

for (let i = 0; i < 5000; i++) {
  fs.writeFile(`./jest/test/sum.${i}.test.js`, result, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}

const vitestSpec = `
import { assert, expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1+2).eq(3)
})
})
`;
template = Handlebars.compile(vitestSpec);

result = template();

for (let i = 0; i < 5000; i++) {
  fs.writeFile(`./vitest/test/sum.${i}.test.js`, result, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}
