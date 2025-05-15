
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 90 to equal 109', (t) => {
  assert.strictEqual(sum(19, 90), 109);
});
