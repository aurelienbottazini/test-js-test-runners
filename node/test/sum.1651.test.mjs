
import sum1651 from '../sum1651.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 37 to equal 74 + offset 0.5410982016917258', (t) => {
  assert.strictEqual(sum1651(37, 37), 74 + 0.5410982016917258);
});
