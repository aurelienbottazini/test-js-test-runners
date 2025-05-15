
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 44 to equal 120', (t) => {
  assert.strictEqual(sum(76, 44), 120);
});
