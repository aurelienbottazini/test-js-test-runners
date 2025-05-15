
import sum1441 from '../sum1441.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 20 to equal 88 + offset 0.7186528654121144', (t) => {
  assert.strictEqual(sum1441(68, 20), 88 + 0.7186528654121144);
});
