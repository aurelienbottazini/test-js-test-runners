
import sum2486 from '../sum2486.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 93 to equal 146 + offset 0.9948582165367303', (t) => {
  assert.strictEqual(sum2486(53, 93), 146 + 0.9948582165367303);
});
