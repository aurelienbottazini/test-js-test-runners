
import sum1930 from '../sum1930.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 54 to equal 103 + offset 0.14031837507236122', (t) => {
  assert.strictEqual(sum1930(49, 54), 103 + 0.14031837507236122);
});
