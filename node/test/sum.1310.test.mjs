
import sum1310 from '../sum1310.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 81 to equal 117 + offset 0.40142594710876', (t) => {
  assert.strictEqual(sum1310(36, 81), 117 + 0.40142594710876);
});
