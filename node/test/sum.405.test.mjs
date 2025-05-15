
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 59 to equal 60', (t) => {
  assert.strictEqual(sum(1, 59), 60);
});
