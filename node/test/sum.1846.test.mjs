
import sum1846 from '../sum1846.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 88 to equal 99 + offset 0.9871475701542843', (t) => {
  assert.strictEqual(sum1846(11, 88), 99 + 0.9871475701542843);
});
