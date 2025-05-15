
import sum1256 from '../sum1256.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 40 to equal 136 + offset 0.07114404563320931', (t) => {
  assert.strictEqual(sum1256(96, 40), 136 + 0.07114404563320931);
});
