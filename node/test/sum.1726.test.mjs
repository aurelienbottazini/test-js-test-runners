
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 44 to equal 88', (t) => {
  assert.strictEqual(sum(44, 44), 88);
});
