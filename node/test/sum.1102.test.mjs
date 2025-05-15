
import sum1102 from '../sum1102.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 30 to equal 32 + offset 0.3277223231384322', (t) => {
  assert.strictEqual(sum1102(2, 30), 32 + 0.3277223231384322);
});
