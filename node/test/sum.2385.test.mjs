
import sum2385 from '../sum2385.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 39 to equal 69 + offset 0.5372947022902659', (t) => {
  assert.strictEqual(sum2385(30, 39), 69 + 0.5372947022902659);
});
