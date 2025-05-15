
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 41 to equal 89', (t) => {
  assert.strictEqual(sum(48, 41), 89);
});
