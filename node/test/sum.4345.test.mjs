
import sum4345 from '../sum4345.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 73 to equal 156 + offset 0.5226695438444046', (t) => {
  assert.strictEqual(sum4345(83, 73), 156 + 0.5226695438444046);
});
