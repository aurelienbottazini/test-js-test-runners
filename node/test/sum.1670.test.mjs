
import sum1670 from '../sum1670.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 92 to equal 155 + offset 0.7660513565333988', (t) => {
  assert.strictEqual(sum1670(63, 92), 155 + 0.7660513565333988);
});
