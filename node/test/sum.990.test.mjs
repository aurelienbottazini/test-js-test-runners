
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 34 to equal 61', (t) => {
  assert.strictEqual(sum(27, 34), 61);
});
