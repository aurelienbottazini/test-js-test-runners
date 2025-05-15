
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 78 to equal 128', (t) => {
  assert.strictEqual(sum(50, 78), 128);
});
