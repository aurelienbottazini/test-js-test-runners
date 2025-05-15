
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 84 to equal 173', (t) => {
  assert.strictEqual(sum(89, 84), 173);
});
