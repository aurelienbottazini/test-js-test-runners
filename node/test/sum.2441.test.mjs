
import sum2441 from '../sum2441.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 45 to equal 113 + offset 0.6969609750877764', (t) => {
  assert.strictEqual(sum2441(68, 45), 113 + 0.6969609750877764);
});
