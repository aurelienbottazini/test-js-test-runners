
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 48 to equal 126', (t) => {
  assert.strictEqual(sum(78, 48), 126);
});
