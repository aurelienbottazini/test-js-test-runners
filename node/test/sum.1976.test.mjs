
import sum1976 from '../sum1976.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 58 to equal 115 + offset 0.007866026838817763', (t) => {
  assert.strictEqual(sum1976(57, 58), 115 + 0.007866026838817763);
});
