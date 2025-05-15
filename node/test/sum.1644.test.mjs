
import sum1644 from '../sum1644.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 98 to equal 141 + offset 0.5613435641232912', (t) => {
  assert.strictEqual(sum1644(43, 98), 141 + 0.5613435641232912);
});
