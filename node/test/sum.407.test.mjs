
import sum407 from '../sum407.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 31 to equal 115 + offset 0.17387099775477355', (t) => {
  assert.strictEqual(sum407(84, 31), 115 + 0.17387099775477355);
});
