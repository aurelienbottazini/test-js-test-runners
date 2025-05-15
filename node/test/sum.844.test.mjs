
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 92 to equal 128', (t) => {
  assert.strictEqual(sum(36, 92), 128);
});
