
import sum1275 from '../sum1275.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 2 to equal 96 + offset 0.4242968090059557', (t) => {
  assert.strictEqual(sum1275(94, 2), 96 + 0.4242968090059557);
});
