
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 9 to equal 43', (t) => {
  assert.strictEqual(sum(34, 9), 43);
});
