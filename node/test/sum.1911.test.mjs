
import sum1911 from '../sum1911.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 70 to equal 150 + offset 0.7542484696303524', (t) => {
  assert.strictEqual(sum1911(80, 70), 150 + 0.7542484696303524);
});
