
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 78 to equal 87', (t) => {
  assert.strictEqual(sum(9, 78), 87);
});
