
import sum1093 from '../sum1093.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 28 to equal 73 + offset 0.6785779418966505', (t) => {
  assert.strictEqual(sum1093(45, 28), 73 + 0.6785779418966505);
});
