
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 78 to equal 88', (t) => {
  assert.strictEqual(sum(10, 78), 88);
});
