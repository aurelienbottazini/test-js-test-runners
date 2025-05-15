
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 59 to equal 80', (t) => {
  assert.strictEqual(sum(21, 59), 80);
});
