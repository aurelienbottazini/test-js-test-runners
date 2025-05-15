
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 75 to equal 174', (t) => {
  assert.strictEqual(sum(99, 75), 174);
});
