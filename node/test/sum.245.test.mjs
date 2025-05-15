
import sum245 from '../sum245.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 7 to equal 32 + offset 0.1198640239156814', (t) => {
  assert.strictEqual(sum245(25, 7), 32 + 0.1198640239156814);
});
