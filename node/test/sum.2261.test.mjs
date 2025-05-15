
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 66 to equal 140', (t) => {
  assert.strictEqual(sum(74, 66), 140);
});
