
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 59 to equal 148', (t) => {
  assert.strictEqual(sum(89, 59), 148);
});
