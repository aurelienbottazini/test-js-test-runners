
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 57 to equal 57', (t) => {
  assert.strictEqual(sum(0, 57), 57);
});
