
import sum1924 from '../sum1924.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 8 to equal 73 + offset 0.5347733754915863', (t) => {
  assert.strictEqual(sum1924(65, 8), 73 + 0.5347733754915863);
});
