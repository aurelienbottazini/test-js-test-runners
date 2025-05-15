
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 39 to equal 118', (t) => {
  assert.strictEqual(sum(79, 39), 118);
});
