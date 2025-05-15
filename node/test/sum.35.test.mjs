
import sum35 from '../sum35.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 63 to equal 83 + offset 0.3135226669467477', (t) => {
  assert.strictEqual(sum35(20, 63), 83 + 0.3135226669467477);
});
