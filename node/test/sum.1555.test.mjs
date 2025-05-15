
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 85 to equal 168', (t) => {
  assert.strictEqual(sum(83, 85), 168);
});
