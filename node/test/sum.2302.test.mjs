
import sum2302 from '../sum2302.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 79 to equal 130 + offset 0.08114592561480927', (t) => {
  assert.strictEqual(sum2302(51, 79), 130 + 0.08114592561480927);
});
