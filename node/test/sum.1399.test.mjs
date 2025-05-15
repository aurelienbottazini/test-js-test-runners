
import sum1399 from '../sum1399.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 49 to equal 59 + offset 0.011010813368773631', (t) => {
  assert.strictEqual(sum1399(10, 49), 59 + 0.011010813368773631);
});
