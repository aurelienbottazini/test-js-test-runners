
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 84 to equal 90', (t) => {
  assert.strictEqual(sum(6, 84), 90);
});
