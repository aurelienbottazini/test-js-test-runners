
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 91 to equal 120', (t) => {
  assert.strictEqual(sum(29, 91), 120);
});
