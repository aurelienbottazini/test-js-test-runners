
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 80 to equal 160', (t) => {
  assert.strictEqual(sum(80, 80), 160);
});
