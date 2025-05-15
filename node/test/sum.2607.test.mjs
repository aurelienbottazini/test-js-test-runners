
import sum2607 from '../sum2607.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 81 to equal 124 + offset 0.6786922304373927', (t) => {
  assert.strictEqual(sum2607(43, 81), 124 + 0.6786922304373927);
});
