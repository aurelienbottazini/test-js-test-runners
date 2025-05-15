
import sum4185 from '../sum4185.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 98 to equal 152 + offset 0.754889690165183', (t) => {
  assert.strictEqual(sum4185(54, 98), 152 + 0.754889690165183);
});
