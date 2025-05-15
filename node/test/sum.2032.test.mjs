
import sum2032 from '../sum2032.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 13 to equal 46 + offset 0.5943412691215805', (t) => {
  assert.strictEqual(sum2032(33, 13), 46 + 0.5943412691215805);
});
