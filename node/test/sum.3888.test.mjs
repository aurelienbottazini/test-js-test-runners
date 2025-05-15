
import sum3888 from '../sum3888.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 11 to equal 74 + offset 0.3269526880151936', (t) => {
  assert.strictEqual(sum3888(63, 11), 74 + 0.3269526880151936);
});
