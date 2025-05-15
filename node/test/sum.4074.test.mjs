
import sum4074 from '../sum4074.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 7 to equal 64 + offset 0.295382712467673', (t) => {
  assert.strictEqual(sum4074(57, 7), 64 + 0.295382712467673);
});
