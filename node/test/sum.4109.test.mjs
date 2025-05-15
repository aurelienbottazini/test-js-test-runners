
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 52 to equal 132', (t) => {
  assert.strictEqual(sum(80, 52), 132);
});
