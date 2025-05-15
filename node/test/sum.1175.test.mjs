
import sum1175 from '../sum1175.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 58 to equal 97 + offset 0.8601345040891494', (t) => {
  assert.strictEqual(sum1175(39, 58), 97 + 0.8601345040891494);
});
