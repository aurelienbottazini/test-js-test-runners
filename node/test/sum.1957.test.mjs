
import sum1957 from '../sum1957.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 39 to equal 136 + offset 0.5904070186682183', (t) => {
  assert.strictEqual(sum1957(97, 39), 136 + 0.5904070186682183);
});
