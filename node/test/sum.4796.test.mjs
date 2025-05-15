
import sum4796 from '../sum4796.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 63 to equal 90 + offset 0.24104009350933353', (t) => {
  assert.strictEqual(sum4796(27, 63), 90 + 0.24104009350933353);
});
