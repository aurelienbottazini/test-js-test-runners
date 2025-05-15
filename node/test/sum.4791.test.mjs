
import sum4791 from '../sum4791.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 70 to equal 159 + offset 0.38948705198577915', (t) => {
  assert.strictEqual(sum4791(89, 70), 159 + 0.38948705198577915);
});
