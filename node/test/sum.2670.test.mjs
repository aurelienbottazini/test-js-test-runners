
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 41 to equal 92', (t) => {
  assert.strictEqual(sum(51, 41), 92);
});
