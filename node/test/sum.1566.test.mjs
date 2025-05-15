
import sum1566 from '../sum1566.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 31 to equal 68 + offset 0.6046310166473674', (t) => {
  assert.strictEqual(sum1566(37, 31), 68 + 0.6046310166473674);
});
