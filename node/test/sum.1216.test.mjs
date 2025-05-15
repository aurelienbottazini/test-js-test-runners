
import sum1216 from '../sum1216.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 29 to equal 68 + offset 0.8129504883461143', (t) => {
  assert.strictEqual(sum1216(39, 29), 68 + 0.8129504883461143);
});
