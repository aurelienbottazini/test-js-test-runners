
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 20 to equal 109', (t) => {
  assert.strictEqual(sum(89, 20), 109);
});
