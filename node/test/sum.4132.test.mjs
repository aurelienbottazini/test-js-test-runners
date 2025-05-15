
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 91 to equal 164', (t) => {
  assert.strictEqual(sum(73, 91), 164);
});
