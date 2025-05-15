
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 57 to equal 80', (t) => {
  assert.strictEqual(sum(23, 57), 80);
});
