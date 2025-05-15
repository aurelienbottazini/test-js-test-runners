
import sum2004 from '../sum2004.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 55 to equal 58 + offset 0.9138011192086981', (t) => {
  assert.strictEqual(sum2004(3, 55), 58 + 0.9138011192086981);
});
