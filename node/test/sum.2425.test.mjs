
import sum2425 from '../sum2425.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 96 to equal 140 + offset 0.04268927107307141', (t) => {
  assert.strictEqual(sum2425(44, 96), 140 + 0.04268927107307141);
});
