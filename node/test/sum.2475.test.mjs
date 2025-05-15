
import sum2475 from '../sum2475.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 55 to equal 88 + offset 0.325738255861142', (t) => {
  assert.strictEqual(sum2475(33, 55), 88 + 0.325738255861142);
});
