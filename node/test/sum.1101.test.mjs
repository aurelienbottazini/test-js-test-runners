
import sum1101 from '../sum1101.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 21 to equal 29 + offset 0.7426195879086828', (t) => {
  assert.strictEqual(sum1101(8, 21), 29 + 0.7426195879086828);
});
