
import sum1111 from '../sum1111.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 85 to equal 98 + offset 0.908531077869958', (t) => {
  assert.strictEqual(sum1111(13, 85), 98 + 0.908531077869958);
});
