
import sum2957 from '../sum2957.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 57 to equal 121 + offset 0.8658274312121593', (t) => {
  assert.strictEqual(sum2957(64, 57), 121 + 0.8658274312121593);
});
