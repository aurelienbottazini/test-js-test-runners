
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 69 to equal 120', (t) => {
  assert.strictEqual(sum(51, 69), 120);
});
