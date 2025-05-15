
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 40 to equal 138', (t) => {
  assert.strictEqual(sum(98, 40), 138);
});
