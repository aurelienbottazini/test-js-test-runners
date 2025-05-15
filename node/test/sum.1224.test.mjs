
import sum1224 from '../sum1224.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 60 to equal 74 + offset 0.6134220534369289', (t) => {
  assert.strictEqual(sum1224(14, 60), 74 + 0.6134220534369289);
});
