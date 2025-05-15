
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 69 to equal 164', (t) => {
  assert.strictEqual(sum(95, 69), 164);
});
