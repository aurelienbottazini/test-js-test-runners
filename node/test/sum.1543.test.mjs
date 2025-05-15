
import sum1543 from '../sum1543.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 61 to equal 102 + offset 0.26330038388992705', (t) => {
  assert.strictEqual(sum1543(41, 61), 102 + 0.26330038388992705);
});
