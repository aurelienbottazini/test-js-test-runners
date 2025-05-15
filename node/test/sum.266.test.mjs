
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 46 to equal 121', (t) => {
  assert.strictEqual(sum(75, 46), 121);
});
