
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 64 to equal 87', (t) => {
  assert.strictEqual(sum(23, 64), 87);
});
