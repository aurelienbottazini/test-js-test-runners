
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 41 to equal 76', (t) => {
  assert.strictEqual(sum(35, 41), 76);
});
