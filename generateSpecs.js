const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

// Ensure directories exist
const jestTestDir = path.join(__dirname, 'jest', 'test');
const vitestTestDir = path.join(__dirname, 'vitest', 'test');
const nodeTestDir = path.join(__dirname, 'node', 'test');
const jestSumDir = path.join(__dirname, 'jest');
const vitestSumDir = path.join(__dirname, 'vitest');
const nodeSumDir = path.join(__dirname, 'node');

[jestTestDir, vitestTestDir, nodeTestDir, jestSumDir, vitestSumDir, nodeSumDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const jestSpecTemplate = `const {{sumFunctionName}} = require('../{{sumFileName}}');

test('adds {{num1}} + {{num2}} to equal {{expected}} + offset {{offset}}', () => {
  expect({{sumFunctionName}}({{num1}}, {{num2}})).toBe({{expected}} + {{offset}});
});`;

const vitestSpecTemplate = `
import {{sumFunctionName}} from '../{{sumFileName}}';
import { expect, test } from 'vitest';

test('adds {{num1}} + {{num2}} to equal {{expected}} + offset {{offset}}', () => {
  expect({{sumFunctionName}}({{num1}}, {{num2}})).toBe({{expected}} + {{offset}});
});
`;

const nodeSpecTemplate = `
import {{sumFunctionName}} from '../{{sumFileName}}';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds {{num1}} + {{num2}} to equal {{expected}} + offset {{offset}}', (t) => {
  assert.strictEqual({{sumFunctionName}}({{num1}}, {{num2}}), {{expected}} + {{offset}});
});
`;

const sumFileTemplateCJS = `
function {{sumFunctionName}}(a, b) {
  return a + b + {{offset}};
}

module.exports = {{sumFunctionName}};
`;

const sumFileTemplateESM = `
export default function {{sumFunctionName}}(a, b) {
  return a + b + {{offset}};
}
`;


// Jest generation
let specTemplate = Handlebars.compile(jestSpecTemplate);
let sumTemplateCJS = Handlebars.compile(sumFileTemplateCJS);

for (let i = 0; i < 5000; i++) {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const expected = num1 + num2;
  const offset = Math.random(); // Generate random offset
  const sumFileName = `sum${i}.js`;
  const sumFunctionName = `sum${i}`;

  // Generate and write sum file
  const sumFileContent = sumTemplateCJS({ sumFunctionName, offset });
  fs.writeFile(path.join(jestSumDir, sumFileName), sumFileContent, err => {
    if (err) {
      console.error(err);
    }
  });

  // Generate and write spec file
  const specResult = specTemplate({ num1, num2, expected, sumFileName, sumFunctionName, offset });
  fs.writeFile(path.join(jestTestDir, `sum.${i}.test.js`), specResult, err => {
    if (err) {
      console.error(err);
    }
  });
}

// Vitest generation
specTemplate = Handlebars.compile(vitestSpecTemplate);
let sumTemplateESM = Handlebars.compile(sumFileTemplateESM);

for (let i = 0; i < 5000; i++) {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const expected = num1 + num2;
  const offset = Math.random(); // Generate random offset
  const sumFileName = `sum${i}.js`; // Vitest can use .js for ESM
  const sumFunctionName = `sum${i}`;

  // Generate and write sum file
  const sumFileContent = sumTemplateESM({ sumFunctionName, offset });
  fs.writeFile(path.join(vitestSumDir, sumFileName), sumFileContent, err => {
    if (err) {
      console.error(err);
    }
  });

  // Generate and write spec file
  const specResult = specTemplate({ num1, num2, expected, sumFileName, sumFunctionName, offset });
  fs.writeFile(path.join(vitestTestDir, `sum.${i}.test.js`), specResult, err => {
    if (err) {
      console.error(err);
    }
  });
}

// Node generation
specTemplate = Handlebars.compile(nodeSpecTemplate);
sumTemplateESM = Handlebars.compile(sumFileTemplateESM); // Node also uses ESM template

for (let i = 0; i < 5000; i++) {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const expected = num1 + num2;
  const offset = Math.random(); // Generate random offset
  const sumFileName = `sum${i}.mjs`; // Node uses .mjs for ESM
  const sumFunctionName = `sum${i}`;

  // Generate and write sum file
  const sumFileContent = sumTemplateESM({ sumFunctionName, offset });
  fs.writeFile(path.join(nodeSumDir, sumFileName), sumFileContent, err => {
    if (err) {
      console.error(err);
    }
  });

  // Generate and write spec file
  const specResult = specTemplate({ num1, num2, expected, sumFileName, sumFunctionName, offset });
  fs.writeFile(path.join(nodeTestDir, `sum.${i}.test.mjs`), specResult, err => {
    if (err) {
      console.error(err);
    }
  });
}
