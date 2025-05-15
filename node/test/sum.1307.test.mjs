
import sum1307 from '../sum1307.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 20 to equal 47 + offset 0.7654279103678826', (t) => {
  assert.strictEqual(sum1307(27, 20), 47 + 0.7654279103678826);
});
