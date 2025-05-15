
import sum1956 from '../sum1956.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 11 to equal 12 + offset 0.14778283114744195', (t) => {
  assert.strictEqual(sum1956(1, 11), 12 + 0.14778283114744195);
});
