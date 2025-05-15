
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 66 to equal 88', (t) => {
  assert.strictEqual(sum(22, 66), 88);
});
