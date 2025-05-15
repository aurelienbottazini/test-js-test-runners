
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 19 to equal 88', (t) => {
  assert.strictEqual(sum(69, 19), 88);
});
