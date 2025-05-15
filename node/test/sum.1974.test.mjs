
import sum1974 from '../sum1974.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 52 to equal 151 + offset 0.6192556504715483', (t) => {
  assert.strictEqual(sum1974(99, 52), 151 + 0.6192556504715483);
});
