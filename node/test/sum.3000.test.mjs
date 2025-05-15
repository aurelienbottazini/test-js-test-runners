
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 76 to equal 164', (t) => {
  assert.strictEqual(sum(88, 76), 164);
});
