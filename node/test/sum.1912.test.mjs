
import sum1912 from '../sum1912.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 11 to equal 24 + offset 0.8063625033492675', (t) => {
  assert.strictEqual(sum1912(13, 11), 24 + 0.8063625033492675);
});
