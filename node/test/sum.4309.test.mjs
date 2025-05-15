
import sum4309 from '../sum4309.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 98 to equal 180 + offset 0.5823334137709538', (t) => {
  assert.strictEqual(sum4309(82, 98), 180 + 0.5823334137709538);
});
