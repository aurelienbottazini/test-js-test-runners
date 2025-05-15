
import sum4373 from '../sum4373.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 94 to equal 144 + offset 0.615076413487798', (t) => {
  assert.strictEqual(sum4373(50, 94), 144 + 0.615076413487798);
});
