
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 28 to equal 53', (t) => {
  assert.strictEqual(sum(25, 28), 53);
});
