
import sum1463 from '../sum1463.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 94 to equal 141 + offset 0.3976647777414153', (t) => {
  assert.strictEqual(sum1463(47, 94), 141 + 0.3976647777414153);
});
