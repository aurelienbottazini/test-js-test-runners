
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 8 to equal 80', (t) => {
  assert.strictEqual(sum(72, 8), 80);
});
