
import sum4179 from '../sum4179.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 44 to equal 65 + offset 0.19799118779067448', (t) => {
  assert.strictEqual(sum4179(21, 44), 65 + 0.19799118779067448);
});
