
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 37 to equal 116', (t) => {
  assert.strictEqual(sum(79, 37), 116);
});
