
import sum1952 from '../sum1952.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 50 to equal 142 + offset 0.144062076155276', (t) => {
  assert.strictEqual(sum1952(92, 50), 142 + 0.144062076155276);
});
