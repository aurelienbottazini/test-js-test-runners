
import sum2766 from '../sum2766.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 80 to equal 172 + offset 0.6111315187702024', (t) => {
  assert.strictEqual(sum2766(92, 80), 172 + 0.6111315187702024);
});
