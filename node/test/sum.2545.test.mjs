
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 4 to equal 49', (t) => {
  assert.strictEqual(sum(45, 4), 49);
});
