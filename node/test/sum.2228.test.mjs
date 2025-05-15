
import sum2228 from '../sum2228.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 98 to equal 151 + offset 0.5449806443921434', (t) => {
  assert.strictEqual(sum2228(53, 98), 151 + 0.5449806443921434);
});
