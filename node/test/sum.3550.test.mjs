
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 11 to equal 101', (t) => {
  assert.strictEqual(sum(90, 11), 101);
});
