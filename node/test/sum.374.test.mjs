
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 3 to equal 48', (t) => {
  assert.strictEqual(sum(45, 3), 48);
});
