
import sum476 from '../sum476.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 23 to equal 108 + offset 0.35610815674278473', (t) => {
  assert.strictEqual(sum476(85, 23), 108 + 0.35610815674278473);
});
