
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 17 to equal 58', (t) => {
  assert.strictEqual(sum(41, 17), 58);
});
