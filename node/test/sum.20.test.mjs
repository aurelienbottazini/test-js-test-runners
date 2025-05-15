
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 13 to equal 87', (t) => {
  assert.strictEqual(sum(74, 13), 87);
});
