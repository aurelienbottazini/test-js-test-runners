
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 61 to equal 109', (t) => {
  assert.strictEqual(sum(48, 61), 109);
});
