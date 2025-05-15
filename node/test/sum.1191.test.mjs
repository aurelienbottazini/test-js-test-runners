
import sum1191 from '../sum1191.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 94 to equal 130 + offset 0.05878372650376873', (t) => {
  assert.strictEqual(sum1191(36, 94), 130 + 0.05878372650376873);
});
