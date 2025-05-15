
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 17 to equal 48', (t) => {
  assert.strictEqual(sum(31, 17), 48);
});
