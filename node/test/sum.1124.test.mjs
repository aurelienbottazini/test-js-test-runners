
import sum1124 from '../sum1124.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 20 to equal 95 + offset 0.32285065963200466', (t) => {
  assert.strictEqual(sum1124(75, 20), 95 + 0.32285065963200466);
});
