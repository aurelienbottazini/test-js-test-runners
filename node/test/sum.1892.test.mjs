
import sum1892 from '../sum1892.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 54 to equal 128 + offset 0.4038322365322312', (t) => {
  assert.strictEqual(sum1892(74, 54), 128 + 0.4038322365322312);
});
