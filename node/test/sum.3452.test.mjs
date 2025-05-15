
import sum3452 from '../sum3452.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 6 to equal 74 + offset 0.15729398635654424', (t) => {
  assert.strictEqual(sum3452(68, 6), 74 + 0.15729398635654424);
});
