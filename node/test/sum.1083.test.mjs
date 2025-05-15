
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 66 to equal 101', (t) => {
  assert.strictEqual(sum(35, 66), 101);
});
