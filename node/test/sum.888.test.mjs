
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 1 to equal 27', (t) => {
  assert.strictEqual(sum(26, 1), 27);
});
