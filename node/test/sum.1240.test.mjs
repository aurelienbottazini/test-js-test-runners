
import sum1240 from '../sum1240.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 1 to equal 23 + offset 0.040261888862396567', (t) => {
  assert.strictEqual(sum1240(22, 1), 23 + 0.040261888862396567);
});
