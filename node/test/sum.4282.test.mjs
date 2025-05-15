
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 49 to equal 145', (t) => {
  assert.strictEqual(sum(96, 49), 145);
});
