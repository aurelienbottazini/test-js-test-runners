
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 33 to equal 43', (t) => {
  assert.strictEqual(sum(10, 33), 43);
});
