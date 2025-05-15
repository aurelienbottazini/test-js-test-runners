
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 42 to equal 45', (t) => {
  assert.strictEqual(sum(3, 42), 45);
});
