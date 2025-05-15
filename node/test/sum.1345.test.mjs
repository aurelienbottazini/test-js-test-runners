
import sum1345 from '../sum1345.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 56 to equal 112 + offset 0.6353935757985308', (t) => {
  assert.strictEqual(sum1345(56, 56), 112 + 0.6353935757985308);
});
