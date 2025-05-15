
import sum1542 from '../sum1542.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 84 to equal 170 + offset 0.3256335659764463', (t) => {
  assert.strictEqual(sum1542(86, 84), 170 + 0.3256335659764463);
});
