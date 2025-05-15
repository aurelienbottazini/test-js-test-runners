
import sum1829 from '../sum1829.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 58 to equal 110 + offset 0.07122111477220372', (t) => {
  assert.strictEqual(sum1829(52, 58), 110 + 0.07122111477220372);
});
