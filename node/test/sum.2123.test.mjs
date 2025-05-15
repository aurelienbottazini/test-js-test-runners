
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 61 to equal 145', (t) => {
  assert.strictEqual(sum(84, 61), 145);
});
