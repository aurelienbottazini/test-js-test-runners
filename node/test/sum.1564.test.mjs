
import sum1564 from '../sum1564.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 97 to equal 111 + offset 0.9260845424630347', (t) => {
  assert.strictEqual(sum1564(14, 97), 111 + 0.9260845424630347);
});
