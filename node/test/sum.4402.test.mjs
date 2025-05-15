
import sum4402 from '../sum4402.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 93 to equal 132 + offset 0.16053434941096345', (t) => {
  assert.strictEqual(sum4402(39, 93), 132 + 0.16053434941096345);
});
