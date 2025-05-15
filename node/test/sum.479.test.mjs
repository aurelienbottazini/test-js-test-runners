
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 35 to equal 109', (t) => {
  assert.strictEqual(sum(74, 35), 109);
});
