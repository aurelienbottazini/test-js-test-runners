
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 41 to equal 57', (t) => {
  assert.strictEqual(sum(16, 41), 57);
});
