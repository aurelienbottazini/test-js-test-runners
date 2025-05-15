
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 78 to equal 140', (t) => {
  assert.strictEqual(sum(62, 78), 140);
});
