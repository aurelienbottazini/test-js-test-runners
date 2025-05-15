
import sum4125 from '../sum4125.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 88 to equal 143 + offset 0.5571712121479452', (t) => {
  assert.strictEqual(sum4125(55, 88), 143 + 0.5571712121479452);
});
