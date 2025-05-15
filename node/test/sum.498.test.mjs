
import sum498 from '../sum498.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 1 to equal 88 + offset 0.2668455426540308', (t) => {
  assert.strictEqual(sum498(87, 1), 88 + 0.2668455426540308);
});
