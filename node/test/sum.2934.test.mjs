
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 32 to equal 92', (t) => {
  assert.strictEqual(sum(60, 32), 92);
});
