
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 13 to equal 77', (t) => {
  assert.strictEqual(sum(64, 13), 77);
});
