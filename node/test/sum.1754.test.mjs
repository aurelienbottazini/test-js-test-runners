
import sum1754 from '../sum1754.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 25 to equal 45 + offset 0.674366767361865', (t) => {
  assert.strictEqual(sum1754(20, 25), 45 + 0.674366767361865);
});
