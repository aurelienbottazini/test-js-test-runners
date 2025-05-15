
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 65 to equal 105', (t) => {
  assert.strictEqual(sum(40, 65), 105);
});
