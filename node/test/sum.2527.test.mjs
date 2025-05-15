
import sum2527 from '../sum2527.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 18 to equal 54 + offset 0.8458101351960524', (t) => {
  assert.strictEqual(sum2527(36, 18), 54 + 0.8458101351960524);
});
