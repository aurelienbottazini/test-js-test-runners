
import sum3754 from '../sum3754.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 3 to equal 53 + offset 0.9219421625366853', (t) => {
  assert.strictEqual(sum3754(50, 3), 53 + 0.9219421625366853);
});
