
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 42 to equal 81', (t) => {
  assert.strictEqual(sum(39, 42), 81);
});
