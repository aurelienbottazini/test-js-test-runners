
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 37 to equal 50', (t) => {
  assert.strictEqual(sum(13, 37), 50);
});
