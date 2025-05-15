
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 85 to equal 184', (t) => {
  assert.strictEqual(sum(99, 85), 184);
});
