
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 75 to equal 148', (t) => {
  assert.strictEqual(sum(73, 75), 148);
});
