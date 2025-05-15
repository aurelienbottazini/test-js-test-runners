
import sum335 from '../sum335.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 26 to equal 81 + offset 0.06678222072634699', (t) => {
  assert.strictEqual(sum335(55, 26), 81 + 0.06678222072634699);
});
