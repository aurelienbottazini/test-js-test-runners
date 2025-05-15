
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 68 to equal 116', (t) => {
  assert.strictEqual(sum(48, 68), 116);
});
