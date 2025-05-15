
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 84 to equal 164', (t) => {
  assert.strictEqual(sum(80, 84), 164);
});
