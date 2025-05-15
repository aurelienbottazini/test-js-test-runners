
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 97 to equal 132', (t) => {
  assert.strictEqual(sum(35, 97), 132);
});
