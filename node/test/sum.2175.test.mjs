
import sum2175 from '../sum2175.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 19 to equal 29 + offset 0.7782038360091078', (t) => {
  assert.strictEqual(sum2175(10, 19), 29 + 0.7782038360091078);
});
