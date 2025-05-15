
import sum1305 from '../sum1305.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 54 to equal 149 + offset 0.2643012088506721', (t) => {
  assert.strictEqual(sum1305(95, 54), 149 + 0.2643012088506721);
});
