
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 17 to equal 22', (t) => {
  assert.strictEqual(sum(5, 17), 22);
});
