
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 67 to equal 164', (t) => {
  assert.strictEqual(sum(97, 67), 164);
});
