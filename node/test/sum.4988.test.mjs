
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 72 to equal 132', (t) => {
  assert.strictEqual(sum(60, 72), 132);
});
