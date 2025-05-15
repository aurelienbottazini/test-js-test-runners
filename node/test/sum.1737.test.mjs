
import sum1737 from '../sum1737.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 95 to equal 121 + offset 0.41192112846390105', (t) => {
  assert.strictEqual(sum1737(26, 95), 121 + 0.41192112846390105);
});
