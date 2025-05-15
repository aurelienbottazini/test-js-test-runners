
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 36 to equal 100', (t) => {
  assert.strictEqual(sum(64, 36), 100);
});
