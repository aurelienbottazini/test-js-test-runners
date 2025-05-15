
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 61 to equal 134', (t) => {
  assert.strictEqual(sum(73, 61), 134);
});
