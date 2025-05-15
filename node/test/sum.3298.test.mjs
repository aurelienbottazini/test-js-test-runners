
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 29 to equal 57', (t) => {
  assert.strictEqual(sum(28, 29), 57);
});
