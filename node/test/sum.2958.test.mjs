
import sum2958 from '../sum2958.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 10 to equal 103 + offset 0.5903428185069314', (t) => {
  assert.strictEqual(sum2958(93, 10), 103 + 0.5903428185069314);
});
