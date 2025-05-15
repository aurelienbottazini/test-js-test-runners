
import sum311 from '../sum311.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 46 to equal 117 + offset 0.9161205467895945', (t) => {
  assert.strictEqual(sum311(71, 46), 117 + 0.9161205467895945);
});
