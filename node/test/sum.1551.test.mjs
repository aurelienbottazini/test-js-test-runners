
import sum1551 from '../sum1551.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 6 to equal 24 + offset 0.1463880665163163', (t) => {
  assert.strictEqual(sum1551(18, 6), 24 + 0.1463880665163163);
});
