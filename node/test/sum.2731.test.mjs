
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 30 to equal 82', (t) => {
  assert.strictEqual(sum(52, 30), 82);
});
