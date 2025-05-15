
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 57 to equal 105', (t) => {
  assert.strictEqual(sum(48, 57), 105);
});
