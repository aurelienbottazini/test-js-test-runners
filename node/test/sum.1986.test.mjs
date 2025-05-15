
import sum1986 from '../sum1986.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 14 to equal 66 + offset 0.08711656379678967', (t) => {
  assert.strictEqual(sum1986(52, 14), 66 + 0.08711656379678967);
});
