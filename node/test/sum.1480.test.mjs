
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 44 to equal 140', (t) => {
  assert.strictEqual(sum(96, 44), 140);
});
