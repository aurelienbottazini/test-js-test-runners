
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 22 to equal 118', (t) => {
  assert.strictEqual(sum(96, 22), 118);
});
