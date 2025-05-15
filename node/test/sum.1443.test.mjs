
import sum1443 from '../sum1443.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 55 to equal 125 + offset 0.10041894202884816', (t) => {
  assert.strictEqual(sum1443(70, 55), 125 + 0.10041894202884816);
});
