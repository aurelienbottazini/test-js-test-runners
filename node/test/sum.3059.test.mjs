
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 57 to equal 126', (t) => {
  assert.strictEqual(sum(69, 57), 126);
});
