
import sum2268 from '../sum2268.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 61 to equal 94 + offset 0.4274280851677701', (t) => {
  assert.strictEqual(sum2268(33, 61), 94 + 0.4274280851677701);
});
