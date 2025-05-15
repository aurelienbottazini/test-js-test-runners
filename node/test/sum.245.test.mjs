
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 10 to equal 14', (t) => {
  assert.strictEqual(sum(4, 10), 14);
});
