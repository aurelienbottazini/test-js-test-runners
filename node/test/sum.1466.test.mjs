
import sum1466 from '../sum1466.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 25 to equal 56 + offset 0.12814142524395666', (t) => {
  assert.strictEqual(sum1466(31, 25), 56 + 0.12814142524395666);
});
