
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 39 to equal 120', (t) => {
  assert.strictEqual(sum(81, 39), 120);
});
