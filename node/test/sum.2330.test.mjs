
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 23 to equal 95', (t) => {
  assert.strictEqual(sum(72, 23), 95);
});
