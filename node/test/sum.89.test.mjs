
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 10 to equal 75', (t) => {
  assert.strictEqual(sum(65, 10), 75);
});
