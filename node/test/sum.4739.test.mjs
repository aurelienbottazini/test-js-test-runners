
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 2 to equal 92', (t) => {
  assert.strictEqual(sum(90, 2), 92);
});
