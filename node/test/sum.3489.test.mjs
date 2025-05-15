
import sum3489 from '../sum3489.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 9 to equal 79 + offset 0.0015153500728727343', (t) => {
  assert.strictEqual(sum3489(70, 9), 79 + 0.0015153500728727343);
});
