
import sum1929 from '../sum1929.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 21 to equal 103 + offset 0.42101282625217806', (t) => {
  assert.strictEqual(sum1929(82, 21), 103 + 0.42101282625217806);
});
