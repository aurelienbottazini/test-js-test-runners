
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 34 to equal 120', (t) => {
  assert.strictEqual(sum(86, 34), 120);
});
