
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 69 to equal 148', (t) => {
  assert.strictEqual(sum(79, 69), 148);
});
