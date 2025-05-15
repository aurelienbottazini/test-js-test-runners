
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 22 to equal 109', (t) => {
  assert.strictEqual(sum(87, 22), 109);
});
