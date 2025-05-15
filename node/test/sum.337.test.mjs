
import sum337 from '../sum337.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 44 to equal 122 + offset 0.6963537985298447', (t) => {
  assert.strictEqual(sum337(78, 44), 122 + 0.6963537985298447);
});
