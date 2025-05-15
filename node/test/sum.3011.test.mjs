
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 64 to equal 128', (t) => {
  assert.strictEqual(sum(64, 64), 128);
});
