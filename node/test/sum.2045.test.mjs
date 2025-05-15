
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 65 to equal 109', (t) => {
  assert.strictEqual(sum(44, 65), 109);
});
