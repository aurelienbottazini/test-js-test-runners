
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 7 to equal 80', (t) => {
  assert.strictEqual(sum(73, 7), 80);
});
