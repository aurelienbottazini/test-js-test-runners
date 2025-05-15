
import sum3322 from '../sum3322.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 40 to equal 135 + offset 0.25071857361155725', (t) => {
  assert.strictEqual(sum3322(95, 40), 135 + 0.25071857361155725);
});
