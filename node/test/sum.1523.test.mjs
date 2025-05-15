
import sum1523 from '../sum1523.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 13 to equal 73 + offset 0.27613949768305535', (t) => {
  assert.strictEqual(sum1523(60, 13), 73 + 0.27613949768305535);
});
