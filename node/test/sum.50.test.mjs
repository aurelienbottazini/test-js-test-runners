
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 99 to equal 175', (t) => {
  assert.strictEqual(sum(76, 99), 175);
});
