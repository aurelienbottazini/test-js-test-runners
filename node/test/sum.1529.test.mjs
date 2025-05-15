
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 38 to equal 43', (t) => {
  assert.strictEqual(sum(5, 38), 43);
});
