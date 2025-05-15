
import sum570 from '../sum570.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 49 to equal 140 + offset 0.7648986982323682', (t) => {
  assert.strictEqual(sum570(91, 49), 140 + 0.7648986982323682);
});
