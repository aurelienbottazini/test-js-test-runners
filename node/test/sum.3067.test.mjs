
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 30 to equal 78', (t) => {
  assert.strictEqual(sum(48, 30), 78);
});
