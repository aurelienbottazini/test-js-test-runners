
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 53 to equal 132', (t) => {
  assert.strictEqual(sum(79, 53), 132);
});
