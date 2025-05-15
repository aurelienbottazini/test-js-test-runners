
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 51 to equal 73', (t) => {
  assert.strictEqual(sum(22, 51), 73);
});
