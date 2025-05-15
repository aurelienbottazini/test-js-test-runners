const Handlebars = require("handlebars");
const fs = require("fs");

const jestSpec = `const sum = require('../sum');

test('adds {{num1}} + {{num2}} to equal {{expected}}', () => {
  expect(sum({{num1}}, {{num2}})).toBe({{expected}});
});`;

let template = Handlebars.compile(jestSpec);

for (let i = 0; i < 5000; i++) {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const expected = num1 + num2;
  const result = template({ num1, num2, expected });
  fs.writeFile(`./jest/test/sum.${i}.test.js`, result, err => {
    if (err) {
      console.error(err);
    }
  });
}

const vitestSpec = `
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds {{num1}} + {{num2}} to equal {{expected}}', () => {
  expect(sum({{num1}}, {{num2}})).toBe({{expected}});
});
`;
template = Handlebars.compile(vitestSpec);

for (let i = 0; i < 5000; i++) {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const expected = num1 + num2;
  const result = template({ num1, num2, expected });
  fs.writeFile(`./vitest/test/sum.${i}.test.js`, result, err => {
    if (err) {
      console.error(err);
    }
  });
}

const nodeSpec = `
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds {{num1}} + {{num2}} to equal {{expected}}', (t) => {
  assert.strictEqual(sum({{num1}}, {{num2}}), {{expected}});
});
`;

template = Handlebars.compile(nodeSpec);

for (let i = 0; i < 5000; i++) {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const expected = num1 + num2;
  const result = template({ num1, num2, expected });
  fs.writeFile(`./node/test/sum.${i}.test.mjs`, result, err => {
    if (err) {
      console.error(err);
    }
  });
}
