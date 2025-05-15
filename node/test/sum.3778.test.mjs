
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 2 to equal 50', (t) => {
  assert.strictEqual(sum(48, 2), 50);
});
