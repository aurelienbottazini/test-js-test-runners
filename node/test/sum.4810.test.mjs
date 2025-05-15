
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 40 to equal 43', (t) => {
  assert.strictEqual(sum(3, 40), 43);
});
