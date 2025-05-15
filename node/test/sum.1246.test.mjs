
import sum1246 from '../sum1246.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 98 to equal 172 + offset 0.35756815901360206', (t) => {
  assert.strictEqual(sum1246(74, 98), 172 + 0.35756815901360206);
});
