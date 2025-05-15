
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 39 to equal 124', (t) => {
  assert.strictEqual(sum(85, 39), 124);
});
