
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 48 to equal 121', (t) => {
  assert.strictEqual(sum(73, 48), 121);
});
