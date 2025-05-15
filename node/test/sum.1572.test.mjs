
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 44 to equal 48', (t) => {
  assert.strictEqual(sum(4, 44), 48);
});
