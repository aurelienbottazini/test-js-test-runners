
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 54 to equal 109', (t) => {
  assert.strictEqual(sum(55, 54), 109);
});
