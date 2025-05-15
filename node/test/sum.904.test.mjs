
import sum904 from '../sum904.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 35 to equal 47 + offset 0.28775728323459127', (t) => {
  assert.strictEqual(sum904(12, 35), 47 + 0.28775728323459127);
});
