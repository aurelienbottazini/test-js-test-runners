
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 35 to equal 76', (t) => {
  assert.strictEqual(sum(41, 35), 76);
});
