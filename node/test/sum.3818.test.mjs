
import sum3818 from '../sum3818.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 81 to equal 162 + offset 0.7697787115841512', (t) => {
  assert.strictEqual(sum3818(81, 81), 162 + 0.7697787115841512);
});
