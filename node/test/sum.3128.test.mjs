
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 15 to equal 91', (t) => {
  assert.strictEqual(sum(76, 15), 91);
});
