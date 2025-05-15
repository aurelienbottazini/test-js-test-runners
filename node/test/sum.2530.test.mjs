
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 51 to equal 121', (t) => {
  assert.strictEqual(sum(70, 51), 121);
});
