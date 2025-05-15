
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 68 to equal 109', (t) => {
  assert.strictEqual(sum(41, 68), 109);
});
