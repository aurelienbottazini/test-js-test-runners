
import sum672 from '../sum672.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 87 to equal 109 + offset 0.4920687208801664', (t) => {
  assert.strictEqual(sum672(22, 87), 109 + 0.4920687208801664);
});
