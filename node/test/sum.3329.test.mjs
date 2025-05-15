
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 4 to equal 62', (t) => {
  assert.strictEqual(sum(58, 4), 62);
});
