
import sum3968 from '../sum3968.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 47 to equal 56 + offset 0.35247459762270883', (t) => {
  assert.strictEqual(sum3968(9, 47), 56 + 0.35247459762270883);
});
