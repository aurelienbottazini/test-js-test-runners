
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 91 to equal 132', (t) => {
  assert.strictEqual(sum(41, 91), 132);
});
