
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 15 + 94 to equal 109', (t) => {
  assert.strictEqual(sum(15, 94), 109);
});
