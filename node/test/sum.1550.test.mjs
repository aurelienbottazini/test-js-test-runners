
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 62 to equal 87', (t) => {
  assert.strictEqual(sum(25, 62), 87);
});
