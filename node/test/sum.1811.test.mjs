
import sum1811 from '../sum1811.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 71 to equal 73 + offset 0.6577967510199538', (t) => {
  assert.strictEqual(sum1811(2, 71), 73 + 0.6577967510199538);
});
