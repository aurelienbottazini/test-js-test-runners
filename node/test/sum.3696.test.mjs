
import sum3696 from '../sum3696.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 75 to equal 134 + offset 0.7600050662921612', (t) => {
  assert.strictEqual(sum3696(59, 75), 134 + 0.7600050662921612);
});
