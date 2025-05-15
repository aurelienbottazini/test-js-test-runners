
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 59 to equal 121', (t) => {
  assert.strictEqual(sum(62, 59), 121);
});
