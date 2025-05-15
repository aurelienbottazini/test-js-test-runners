
import sum1662 from '../sum1662.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 9 to equal 102 + offset 0.34204097778417475', (t) => {
  assert.strictEqual(sum1662(93, 9), 102 + 0.34204097778417475);
});
