
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 36 to equal 135', (t) => {
  assert.strictEqual(sum(99, 36), 135);
});
