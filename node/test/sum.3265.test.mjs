
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 89 to equal 126', (t) => {
  assert.strictEqual(sum(37, 89), 126);
});
