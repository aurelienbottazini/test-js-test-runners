
import sum3790 from '../sum3790.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 66 to equal 114 + offset 0.7480564603513019', (t) => {
  assert.strictEqual(sum3790(48, 66), 114 + 0.7480564603513019);
});
