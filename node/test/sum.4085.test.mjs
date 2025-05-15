
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 13 to equal 44', (t) => {
  assert.strictEqual(sum(31, 13), 44);
});
