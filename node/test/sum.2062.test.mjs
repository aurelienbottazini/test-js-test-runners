
import sum2062 from '../sum2062.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 12 to equal 36 + offset 0.056654355642154486', (t) => {
  assert.strictEqual(sum2062(24, 12), 36 + 0.056654355642154486);
});
