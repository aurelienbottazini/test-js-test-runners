
import sum969 from '../sum969.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 42 to equal 110 + offset 0.9902785114255988', (t) => {
  assert.strictEqual(sum969(68, 42), 110 + 0.9902785114255988);
});
