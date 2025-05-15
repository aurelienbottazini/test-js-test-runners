
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 48 to equal 78', (t) => {
  assert.strictEqual(sum(30, 48), 78);
});
