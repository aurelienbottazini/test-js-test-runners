
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 31 to equal 50', (t) => {
  assert.strictEqual(sum(19, 31), 50);
});
