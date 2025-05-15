
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 75 to equal 132', (t) => {
  assert.strictEqual(sum(57, 75), 132);
});
