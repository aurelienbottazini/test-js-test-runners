
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 97 to equal 107', (t) => {
  assert.strictEqual(sum(10, 97), 107);
});
