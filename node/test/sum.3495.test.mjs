
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 65 to equal 75', (t) => {
  assert.strictEqual(sum(10, 65), 75);
});
