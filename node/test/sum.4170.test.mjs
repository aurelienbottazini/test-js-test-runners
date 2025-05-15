
import sum4170 from '../sum4170.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 15 to equal 107 + offset 0.8294415551785269', (t) => {
  assert.strictEqual(sum4170(92, 15), 107 + 0.8294415551785269);
});
