
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 36 to equal 111', (t) => {
  assert.strictEqual(sum(75, 36), 111);
});
