
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 9 to equal 57', (t) => {
  assert.strictEqual(sum(48, 9), 57);
});
