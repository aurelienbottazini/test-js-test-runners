
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 83 to equal 83', (t) => {
  assert.strictEqual(sum(0, 83), 83);
});
