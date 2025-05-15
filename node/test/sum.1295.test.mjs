
import sum1295 from '../sum1295.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 53 to equal 131 + offset 0.07443062366794528', (t) => {
  assert.strictEqual(sum1295(78, 53), 131 + 0.07443062366794528);
});
