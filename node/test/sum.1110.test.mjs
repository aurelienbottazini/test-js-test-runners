
import sum1110 from '../sum1110.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 77 to equal 172 + offset 0.2904515826119203', (t) => {
  assert.strictEqual(sum1110(95, 77), 172 + 0.2904515826119203);
});
