
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 96 to equal 195', (t) => {
  assert.strictEqual(sum(99, 96), 195);
});
