
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 46 to equal 132', (t) => {
  assert.strictEqual(sum(86, 46), 132);
});
