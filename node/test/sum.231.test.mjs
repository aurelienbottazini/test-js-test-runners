
import sum231 from '../sum231.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 58 to equal 110 + offset 0.670148100976116', (t) => {
  assert.strictEqual(sum231(52, 58), 110 + 0.670148100976116);
});
