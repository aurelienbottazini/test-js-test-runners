
import sum156 from '../sum156.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 84 to equal 96 + offset 0.17804323372342978', (t) => {
  assert.strictEqual(sum156(12, 84), 96 + 0.17804323372342978);
});
