
import sum2900 from '../sum2900.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 64 to equal 144 + offset 0.4839785185882508', (t) => {
  assert.strictEqual(sum2900(80, 64), 144 + 0.4839785185882508);
});
