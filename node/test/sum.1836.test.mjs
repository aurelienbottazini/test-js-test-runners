
import sum1836 from '../sum1836.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 12 to equal 25 + offset 0.20487237484844745', (t) => {
  assert.strictEqual(sum1836(13, 12), 25 + 0.20487237484844745);
});
