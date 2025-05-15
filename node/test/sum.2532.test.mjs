
import sum2532 from '../sum2532.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 6 to equal 84 + offset 0.8394700356749143', (t) => {
  assert.strictEqual(sum2532(78, 6), 84 + 0.8394700356749143);
});
