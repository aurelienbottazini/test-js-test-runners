
import sum2590 from '../sum2590.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 22 to equal 52 + offset 0.48535752698179724', (t) => {
  assert.strictEqual(sum2590(30, 22), 52 + 0.48535752698179724);
});
