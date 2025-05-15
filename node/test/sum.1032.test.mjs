
import sum1032 from '../sum1032.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 16 to equal 32 + offset 0.3921835890269114', (t) => {
  assert.strictEqual(sum1032(16, 16), 32 + 0.3921835890269114);
});
