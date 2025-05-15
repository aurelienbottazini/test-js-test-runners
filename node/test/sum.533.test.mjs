
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 5 to equal 25', (t) => {
  assert.strictEqual(sum(20, 5), 25);
});
