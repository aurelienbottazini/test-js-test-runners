
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 99 to equal 160', (t) => {
  assert.strictEqual(sum(61, 99), 160);
});
