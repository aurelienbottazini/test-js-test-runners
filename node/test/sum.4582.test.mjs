
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 4 to equal 43', (t) => {
  assert.strictEqual(sum(39, 4), 43);
});
