
import sum2621 from '../sum2621.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 15 to equal 46 + offset 0.5480194070088913', (t) => {
  assert.strictEqual(sum2621(31, 15), 46 + 0.5480194070088913);
});
