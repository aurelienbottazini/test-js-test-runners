
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 68 to equal 99', (t) => {
  assert.strictEqual(sum(31, 68), 99);
});
