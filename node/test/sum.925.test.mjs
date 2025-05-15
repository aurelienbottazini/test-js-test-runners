
import sum925 from '../sum925.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 8 to equal 13 + offset 0.025476231857788134', (t) => {
  assert.strictEqual(sum925(5, 8), 13 + 0.025476231857788134);
});
