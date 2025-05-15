
import sum4567 from '../sum4567.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 15 to equal 40 + offset 0.346727519397681', (t) => {
  assert.strictEqual(sum4567(25, 15), 40 + 0.346727519397681);
});
