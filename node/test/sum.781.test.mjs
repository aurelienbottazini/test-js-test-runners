
import sum781 from '../sum781.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 73 to equal 143 + offset 0.5052368083464641', (t) => {
  assert.strictEqual(sum781(70, 73), 143 + 0.5052368083464641);
});
