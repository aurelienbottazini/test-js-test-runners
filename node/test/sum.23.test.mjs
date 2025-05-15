
import sum23 from '../sum23.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 55 to equal 57 + offset 0.7869988995913468', (t) => {
  assert.strictEqual(sum23(2, 55), 57 + 0.7869988995913468);
});
