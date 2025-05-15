
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 16 to equal 30', (t) => {
  assert.strictEqual(sum(14, 16), 30);
});
