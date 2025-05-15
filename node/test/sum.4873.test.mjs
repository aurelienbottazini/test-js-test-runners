
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 27 to equal 58', (t) => {
  assert.strictEqual(sum(31, 27), 58);
});
