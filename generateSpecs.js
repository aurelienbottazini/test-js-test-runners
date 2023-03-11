const Handlebars = require("handlebars");
const fs = require("fs");

const jestSpec = `const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`;

let template = Handlebars.compile(jestSpec);

let result = template();

for (let i = 0; i < 5000; i++) {
  fs.writeFile(`./jest/test/sum.${i}.test.js`, result, err => {
    if (err) {
      console.error(err);
    }
  });
}

const vitestSpec = `
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
`;
template = Handlebars.compile(vitestSpec);

result = template();

for (let i = 0; i < 5000; i++) {
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
test('ads 1 + 2 to equal 3', (t) => {
  assert.strictEqual(sum(1, 2), 3);
});
`;

template = Handlebars.compile(nodeSpec);
result = template();

for (let i = 0; i < 5000; i++) {
  fs.writeFile(`./node/test/sum.${i}.test.mjs`, result, err => {
    if (err) {
      console.error(err);
    }
  });
}
