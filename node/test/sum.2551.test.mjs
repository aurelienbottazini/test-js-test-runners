
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 5 to equal 40', (t) => {
  assert.strictEqual(sum(35, 5), 40);
});
