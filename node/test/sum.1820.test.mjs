
import sum1820 from '../sum1820.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 54 to equal 73 + offset 0.5254444176706101', (t) => {
  assert.strictEqual(sum1820(19, 54), 73 + 0.5254444176706101);
});
