
import sum1177 from '../sum1177.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 31 to equal 87 + offset 0.06463894984318885', (t) => {
  assert.strictEqual(sum1177(56, 31), 87 + 0.06463894984318885);
});
