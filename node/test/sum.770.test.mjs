
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 81 to equal 109', (t) => {
  assert.strictEqual(sum(28, 81), 109);
});
