
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 90 to equal 116', (t) => {
  assert.strictEqual(sum(26, 90), 116);
});
