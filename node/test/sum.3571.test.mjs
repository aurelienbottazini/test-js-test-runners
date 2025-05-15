
import sum3571 from '../sum3571.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 35 to equal 37 + offset 0.6931362050909247', (t) => {
  assert.strictEqual(sum3571(2, 35), 37 + 0.6931362050909247);
});
