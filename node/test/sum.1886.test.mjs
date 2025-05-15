
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 0 to equal 57', (t) => {
  assert.strictEqual(sum(57, 0), 57);
});
