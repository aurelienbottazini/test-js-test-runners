
import sum2432 from '../sum2432.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 6 to equal 95 + offset 0.8067012103895019', (t) => {
  assert.strictEqual(sum2432(89, 6), 95 + 0.8067012103895019);
});
