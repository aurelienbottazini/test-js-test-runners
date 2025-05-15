
import sum433 from '../sum433.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 46 to equal 127 + offset 0.633664133205252', (t) => {
  assert.strictEqual(sum433(81, 46), 127 + 0.633664133205252);
});
