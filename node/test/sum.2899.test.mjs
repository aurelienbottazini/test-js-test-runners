
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 26 to equal 117', (t) => {
  assert.strictEqual(sum(91, 26), 117);
});
