
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 67 to equal 109', (t) => {
  assert.strictEqual(sum(42, 67), 109);
});
