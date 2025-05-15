
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 0 to equal 75', (t) => {
  assert.strictEqual(sum(75, 0), 75);
});
