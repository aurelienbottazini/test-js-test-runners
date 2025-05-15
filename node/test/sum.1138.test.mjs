
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 31 to equal 62', (t) => {
  assert.strictEqual(sum(31, 31), 62);
});
