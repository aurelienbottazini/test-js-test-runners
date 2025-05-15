
import sum559 from '../sum559.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 48 to equal 62 + offset 0.6135370457611219', (t) => {
  assert.strictEqual(sum559(14, 48), 62 + 0.6135370457611219);
});
