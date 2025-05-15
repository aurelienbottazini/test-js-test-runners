
import sum3729 from '../sum3729.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 35 to equal 86 + offset 0.7549718762914166', (t) => {
  assert.strictEqual(sum3729(51, 35), 86 + 0.7549718762914166);
});
