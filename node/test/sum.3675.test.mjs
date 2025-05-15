
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 66 to equal 110', (t) => {
  assert.strictEqual(sum(44, 66), 110);
});
