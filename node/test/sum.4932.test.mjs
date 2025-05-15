
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 73 to equal 121', (t) => {
  assert.strictEqual(sum(48, 73), 121);
});
