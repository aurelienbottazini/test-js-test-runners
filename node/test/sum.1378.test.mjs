
import sum1378 from '../sum1378.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 42 to equal 121 + offset 0.13336879261103485', (t) => {
  assert.strictEqual(sum1378(79, 42), 121 + 0.13336879261103485);
});
