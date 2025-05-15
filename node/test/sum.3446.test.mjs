
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 32 to equal 90', (t) => {
  assert.strictEqual(sum(58, 32), 90);
});
