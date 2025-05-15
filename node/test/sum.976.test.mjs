
import sum976 from '../sum976.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 12 to equal 96 + offset 0.6265716965113701', (t) => {
  assert.strictEqual(sum976(84, 12), 96 + 0.6265716965113701);
});
