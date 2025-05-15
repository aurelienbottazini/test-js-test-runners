
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 44 to equal 44', (t) => {
  assert.strictEqual(sum(0, 44), 44);
});
