
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 53 to equal 92', (t) => {
  assert.strictEqual(sum(39, 53), 92);
});
