
import sum541 from '../sum541.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 49 to equal 80 + offset 0.978255013242455', (t) => {
  assert.strictEqual(sum541(31, 49), 80 + 0.978255013242455);
});
