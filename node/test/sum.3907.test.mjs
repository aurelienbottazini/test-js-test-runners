
import sum3907 from '../sum3907.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 3 to equal 101 + offset 0.4957451278516847', (t) => {
  assert.strictEqual(sum3907(98, 3), 101 + 0.4957451278516847);
});
