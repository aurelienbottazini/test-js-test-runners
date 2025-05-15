
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 61 to equal 111', (t) => {
  assert.strictEqual(sum(50, 61), 111);
});
