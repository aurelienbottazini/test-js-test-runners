
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 82 to equal 116', (t) => {
  assert.strictEqual(sum(34, 82), 116);
});
