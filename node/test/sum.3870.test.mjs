
import sum3870 from '../sum3870.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 3 to equal 9 + offset 0.5890132852977493', (t) => {
  assert.strictEqual(sum3870(6, 3), 9 + 0.5890132852977493);
});
