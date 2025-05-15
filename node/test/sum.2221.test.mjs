
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 78 to equal 132', (t) => {
  assert.strictEqual(sum(54, 78), 132);
});
