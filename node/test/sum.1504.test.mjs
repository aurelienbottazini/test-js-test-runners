
import sum1504 from '../sum1504.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 24 to equal 62 + offset 0.19469456981574385', (t) => {
  assert.strictEqual(sum1504(38, 24), 62 + 0.19469456981574385);
});
