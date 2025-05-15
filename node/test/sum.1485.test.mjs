
import sum1485 from '../sum1485.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 2 to equal 66 + offset 0.31702076822630476', (t) => {
  assert.strictEqual(sum1485(64, 2), 66 + 0.31702076822630476);
});
