
import sum1072 from '../sum1072.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 77 to equal 130 + offset 0.43084658811657506', (t) => {
  assert.strictEqual(sum1072(53, 77), 130 + 0.43084658811657506);
});
