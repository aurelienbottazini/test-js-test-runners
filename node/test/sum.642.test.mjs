
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 48 to equal 109', (t) => {
  assert.strictEqual(sum(61, 48), 109);
});
