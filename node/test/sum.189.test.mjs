
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 59 to equal 78', (t) => {
  assert.strictEqual(sum(19, 59), 78);
});
