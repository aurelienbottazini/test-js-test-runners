
import sum3666 from '../sum3666.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 77 to equal 114 + offset 0.8456863760727998', (t) => {
  assert.strictEqual(sum3666(37, 77), 114 + 0.8456863760727998);
});
