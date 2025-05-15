
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 15 to equal 95', (t) => {
  assert.strictEqual(sum(80, 15), 95);
});
