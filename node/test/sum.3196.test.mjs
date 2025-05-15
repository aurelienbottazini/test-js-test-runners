
import sum3196 from '../sum3196.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 15 to equal 88 + offset 0.595798137379624', (t) => {
  assert.strictEqual(sum3196(73, 15), 88 + 0.595798137379624);
});
