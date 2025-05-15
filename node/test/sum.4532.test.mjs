
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 42 to equal 86', (t) => {
  assert.strictEqual(sum(44, 42), 86);
});
