
import sum1666 from '../sum1666.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 37 to equal 125 + offset 0.42814371838003196', (t) => {
  assert.strictEqual(sum1666(88, 37), 125 + 0.42814371838003196);
});
