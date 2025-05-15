
import sum4729 from '../sum4729.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 36 to equal 74 + offset 0.9906309561733385', (t) => {
  assert.strictEqual(sum4729(38, 36), 74 + 0.9906309561733385);
});
