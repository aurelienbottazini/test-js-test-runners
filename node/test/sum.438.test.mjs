
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 86 to equal 120', (t) => {
  assert.strictEqual(sum(34, 86), 120);
});
