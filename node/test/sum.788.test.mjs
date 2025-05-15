
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 75 to equal 116', (t) => {
  assert.strictEqual(sum(41, 75), 116);
});
