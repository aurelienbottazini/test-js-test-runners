
import sum630 from '../sum630.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 49 to equal 89 + offset 0.25452927884700705', (t) => {
  assert.strictEqual(sum630(40, 49), 89 + 0.25452927884700705);
});
