
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 73 to equal 164', (t) => {
  assert.strictEqual(sum(91, 73), 164);
});
