
import sum131 from '../sum131.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 32 to equal 131 + offset 0.14052028174219666', (t) => {
  assert.strictEqual(sum131(99, 32), 131 + 0.14052028174219666);
});
