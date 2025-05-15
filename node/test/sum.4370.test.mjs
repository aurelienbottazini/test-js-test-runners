
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 84 to equal 117', (t) => {
  assert.strictEqual(sum(33, 84), 117);
});
