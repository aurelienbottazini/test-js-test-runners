
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 86 to equal 136', (t) => {
  assert.strictEqual(sum(50, 86), 136);
});
