
import sum3832 from '../sum3832.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 24 to equal 68 + offset 0.3750527110228975', (t) => {
  assert.strictEqual(sum3832(44, 24), 68 + 0.3750527110228975);
});
