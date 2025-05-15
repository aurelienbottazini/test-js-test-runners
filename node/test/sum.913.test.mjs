
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 13 to equal 109', (t) => {
  assert.strictEqual(sum(96, 13), 109);
});
