
import sum3243 from '../sum3243.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 79 to equal 110 + offset 0.5988398808128942', (t) => {
  assert.strictEqual(sum3243(31, 79), 110 + 0.5988398808128942);
});
