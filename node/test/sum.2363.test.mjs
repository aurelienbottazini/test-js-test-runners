
import sum2363 from '../sum2363.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 8 to equal 89 + offset 0.5010563460019786', (t) => {
  assert.strictEqual(sum2363(81, 8), 89 + 0.5010563460019786);
});
