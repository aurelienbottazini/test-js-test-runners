
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 42 to equal 109', (t) => {
  assert.strictEqual(sum(67, 42), 109);
});
