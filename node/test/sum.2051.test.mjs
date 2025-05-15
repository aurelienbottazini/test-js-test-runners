
import sum2051 from '../sum2051.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 94 to equal 152 + offset 0.504969466438269', (t) => {
  assert.strictEqual(sum2051(58, 94), 152 + 0.504969466438269);
});
