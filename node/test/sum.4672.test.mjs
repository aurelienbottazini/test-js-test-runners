
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 31 to equal 121', (t) => {
  assert.strictEqual(sum(90, 31), 121);
});
