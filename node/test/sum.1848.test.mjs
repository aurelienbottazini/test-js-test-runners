
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 67 to equal 121', (t) => {
  assert.strictEqual(sum(54, 67), 121);
});
