
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 13 to equal 92', (t) => {
  assert.strictEqual(sum(79, 13), 92);
});
