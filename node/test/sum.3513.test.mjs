
import sum3513 from '../sum3513.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 90 to equal 167 + offset 0.5770742522403773', (t) => {
  assert.strictEqual(sum3513(77, 90), 167 + 0.5770742522403773);
});
