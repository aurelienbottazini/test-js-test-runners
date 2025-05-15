
import sum1601 from '../sum1601.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 99 to equal 100 + offset 0.35058279347203647', (t) => {
  assert.strictEqual(sum1601(1, 99), 100 + 0.35058279347203647);
});
