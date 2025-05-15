
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 80 to equal 164', (t) => {
  assert.strictEqual(sum(84, 80), 164);
});
