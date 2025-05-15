
import sum1390 from '../sum1390.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 9 to equal 18 + offset 0.28083542339924794', (t) => {
  assert.strictEqual(sum1390(9, 9), 18 + 0.28083542339924794);
});
