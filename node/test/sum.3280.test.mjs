
import sum3280 from '../sum3280.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 58 to equal 82 + offset 0.536095397070982', (t) => {
  assert.strictEqual(sum3280(24, 58), 82 + 0.536095397070982);
});
