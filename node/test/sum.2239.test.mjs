
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 36 to equal 80', (t) => {
  assert.strictEqual(sum(44, 36), 80);
});
