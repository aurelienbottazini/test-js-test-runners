
import sum1904 from '../sum1904.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 15 to equal 50 + offset 0.8420873487980234', (t) => {
  assert.strictEqual(sum1904(35, 15), 50 + 0.8420873487980234);
});
