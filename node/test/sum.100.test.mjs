
import sum100 from '../sum100.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 0 to equal 2 + offset 0.41318529050854824', (t) => {
  assert.strictEqual(sum100(2, 0), 2 + 0.41318529050854824);
});
