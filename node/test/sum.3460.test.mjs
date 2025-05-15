
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 88 to equal 92', (t) => {
  assert.strictEqual(sum(4, 88), 92);
});
