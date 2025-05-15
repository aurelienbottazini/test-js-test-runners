
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 6 to equal 68', (t) => {
  assert.strictEqual(sum(62, 6), 68);
});
