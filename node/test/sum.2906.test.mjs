
import sum2906 from '../sum2906.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 74 to equal 75 + offset 0.3950295473655414', (t) => {
  assert.strictEqual(sum2906(1, 74), 75 + 0.3950295473655414);
});
