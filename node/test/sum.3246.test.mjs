
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 62 to equal 152', (t) => {
  assert.strictEqual(sum(90, 62), 152);
});
