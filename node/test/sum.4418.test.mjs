
import sum4418 from '../sum4418.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 40 to equal 65 + offset 0.39400712293342954', (t) => {
  assert.strictEqual(sum4418(25, 40), 65 + 0.39400712293342954);
});
