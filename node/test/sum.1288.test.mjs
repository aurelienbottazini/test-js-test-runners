
import sum1288 from '../sum1288.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 56 to equal 94 + offset 0.09063958870387179', (t) => {
  assert.strictEqual(sum1288(38, 56), 94 + 0.09063958870387179);
});
