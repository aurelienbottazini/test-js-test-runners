
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 99 to equal 153', (t) => {
  assert.strictEqual(sum(54, 99), 153);
});
