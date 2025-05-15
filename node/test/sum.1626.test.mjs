
import sum1626 from '../sum1626.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 38 to equal 83 + offset 0.6061861880978642', (t) => {
  assert.strictEqual(sum1626(45, 38), 83 + 0.6061861880978642);
});
