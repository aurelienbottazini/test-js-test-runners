
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 27 to equal 78', (t) => {
  assert.strictEqual(sum(51, 27), 78);
});
