
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 87 to equal 130', (t) => {
  assert.strictEqual(sum(43, 87), 130);
});
