
import sum622 from '../sum622.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 13 to equal 94 + offset 0.31922671164812455', (t) => {
  assert.strictEqual(sum622(81, 13), 94 + 0.31922671164812455);
});
