
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 73 to equal 135', (t) => {
  assert.strictEqual(sum(62, 73), 135);
});
