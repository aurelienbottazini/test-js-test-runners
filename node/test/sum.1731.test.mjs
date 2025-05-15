
import sum1731 from '../sum1731.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 65 to equal 151 + offset 0.5538660256594743', (t) => {
  assert.strictEqual(sum1731(86, 65), 151 + 0.5538660256594743);
});
