
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 31 to equal 109', (t) => {
  assert.strictEqual(sum(78, 31), 109);
});
