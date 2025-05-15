
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 72 to equal 130', (t) => {
  assert.strictEqual(sum(58, 72), 130);
});
