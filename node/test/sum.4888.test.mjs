
import sum4888 from '../sum4888.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 73 to equal 73 + offset 0.915569462403954', (t) => {
  assert.strictEqual(sum4888(0, 73), 73 + 0.915569462403954);
});
