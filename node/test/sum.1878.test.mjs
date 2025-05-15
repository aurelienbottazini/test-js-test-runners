
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 0 to equal 72', (t) => {
  assert.strictEqual(sum(72, 0), 72);
});
