
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 42 to equal 69', (t) => {
  assert.strictEqual(sum(27, 42), 69);
});
