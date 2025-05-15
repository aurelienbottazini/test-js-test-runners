
import sum253 from '../sum253.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 76 to equal 153 + offset 0.45803921867966946', (t) => {
  assert.strictEqual(sum253(77, 76), 153 + 0.45803921867966946);
});
