
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 50 to equal 75', (t) => {
  assert.strictEqual(sum(25, 50), 75);
});
