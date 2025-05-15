
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 66 to equal 121', (t) => {
  assert.strictEqual(sum(55, 66), 121);
});
