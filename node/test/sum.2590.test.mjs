
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 42 to equal 48', (t) => {
  assert.strictEqual(sum(6, 42), 48);
});
