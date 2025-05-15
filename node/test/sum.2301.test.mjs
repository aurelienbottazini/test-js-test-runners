
import sum2301 from '../sum2301.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 92 to equal 123 + offset 0.16243118952933644', (t) => {
  assert.strictEqual(sum2301(31, 92), 123 + 0.16243118952933644);
});
