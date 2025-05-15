
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 36 to equal 118', (t) => {
  assert.strictEqual(sum(82, 36), 118);
});
