
import sum3290 from '../sum3290.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 30 to equal 41 + offset 0.5056315688332078', (t) => {
  assert.strictEqual(sum3290(11, 30), 41 + 0.5056315688332078);
});
