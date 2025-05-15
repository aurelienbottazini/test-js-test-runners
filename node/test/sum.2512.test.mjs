
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 30 to equal 116', (t) => {
  assert.strictEqual(sum(86, 30), 116);
});
