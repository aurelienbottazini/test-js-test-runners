
import sum1365 from '../sum1365.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 43 to equal 106 + offset 0.10004434981104826', (t) => {
  assert.strictEqual(sum1365(63, 43), 106 + 0.10004434981104826);
});
