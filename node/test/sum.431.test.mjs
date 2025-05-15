
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 32 to equal 45', (t) => {
  assert.strictEqual(sum(13, 32), 45);
});
