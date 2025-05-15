
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 47 to equal 117', (t) => {
  assert.strictEqual(sum(70, 47), 117);
});
