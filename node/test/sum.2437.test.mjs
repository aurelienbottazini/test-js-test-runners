
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 17 to equal 65', (t) => {
  assert.strictEqual(sum(48, 17), 65);
});
