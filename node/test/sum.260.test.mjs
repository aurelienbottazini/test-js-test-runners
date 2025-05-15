
import sum260 from '../sum260.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 9 to equal 72 + offset 0.2981826021141485', (t) => {
  assert.strictEqual(sum260(63, 9), 72 + 0.2981826021141485);
});
