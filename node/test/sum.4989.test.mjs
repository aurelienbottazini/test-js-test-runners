
import sum4989 from '../sum4989.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 58 to equal 100 + offset 0.6144668327498729', (t) => {
  assert.strictEqual(sum4989(42, 58), 100 + 0.6144668327498729);
});
