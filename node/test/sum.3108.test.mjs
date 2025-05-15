
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 4 to equal 14', (t) => {
  assert.strictEqual(sum(10, 4), 14);
});
