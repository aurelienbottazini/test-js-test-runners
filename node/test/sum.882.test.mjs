
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 5 to equal 19', (t) => {
  assert.strictEqual(sum(14, 5), 19);
});
