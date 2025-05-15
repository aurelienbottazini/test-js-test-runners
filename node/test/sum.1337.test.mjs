
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 88 to equal 95', (t) => {
  assert.strictEqual(sum(7, 88), 95);
});
