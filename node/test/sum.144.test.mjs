
import sum144 from '../sum144.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 50 to equal 74 + offset 0.49152228403576936', (t) => {
  assert.strictEqual(sum144(24, 50), 74 + 0.49152228403576936);
});
