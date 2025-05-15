
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 66 to equal 130', (t) => {
  assert.strictEqual(sum(64, 66), 130);
});
