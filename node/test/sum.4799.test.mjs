
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 67 to equal 111', (t) => {
  assert.strictEqual(sum(44, 67), 111);
});
