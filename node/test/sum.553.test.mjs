
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 27 to equal 55', (t) => {
  assert.strictEqual(sum(28, 27), 55);
});
