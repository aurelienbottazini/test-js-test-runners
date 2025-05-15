
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 11 to equal 109', (t) => {
  assert.strictEqual(sum(98, 11), 109);
});
