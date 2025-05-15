
import sum2097 from '../sum2097.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 62 to equal 116 + offset 0.9028208016215062', (t) => {
  assert.strictEqual(sum2097(54, 62), 116 + 0.9028208016215062);
});
