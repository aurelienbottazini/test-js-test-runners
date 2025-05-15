
import sum1828 from '../sum1828.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 61 to equal 123 + offset 0.6190042061768828', (t) => {
  assert.strictEqual(sum1828(62, 61), 123 + 0.6190042061768828);
});
