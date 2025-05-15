
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 39 to equal 60', (t) => {
  assert.strictEqual(sum(21, 39), 60);
});
