
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 51 to equal 132', (t) => {
  assert.strictEqual(sum(81, 51), 132);
});
