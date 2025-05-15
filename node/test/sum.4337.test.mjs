
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 12 to equal 15', (t) => {
  assert.strictEqual(sum(3, 12), 15);
});
