
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 41 to equal 136', (t) => {
  assert.strictEqual(sum(95, 41), 136);
});
