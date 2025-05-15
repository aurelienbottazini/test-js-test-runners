
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 35 to equal 121', (t) => {
  assert.strictEqual(sum(86, 35), 121);
});
