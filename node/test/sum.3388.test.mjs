
import sum3388 from '../sum3388.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 53 to equal 59 + offset 0.4618722119240698', (t) => {
  assert.strictEqual(sum3388(6, 53), 59 + 0.4618722119240698);
});
