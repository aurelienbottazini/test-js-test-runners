
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 24 to equal 109', (t) => {
  assert.strictEqual(sum(85, 24), 109);
});
