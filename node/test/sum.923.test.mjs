
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 75 to equal 123', (t) => {
  assert.strictEqual(sum(48, 75), 123);
});
