
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 59 to equal 109', (t) => {
  assert.strictEqual(sum(50, 59), 109);
});
