
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 59 to equal 130', (t) => {
  assert.strictEqual(sum(71, 59), 130);
});
