
import sum2351 from '../sum2351.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 15 to equal 25 + offset 0.17592132998237875', (t) => {
  assert.strictEqual(sum2351(10, 15), 25 + 0.17592132998237875);
});
