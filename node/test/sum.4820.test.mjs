
import sum4820 from '../sum4820.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 64 to equal 72 + offset 0.3528267037103634', (t) => {
  assert.strictEqual(sum4820(8, 64), 72 + 0.3528267037103634);
});
