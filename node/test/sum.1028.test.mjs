
import sum1028 from '../sum1028.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 34 to equal 120 + offset 0.5853396730550063', (t) => {
  assert.strictEqual(sum1028(86, 34), 120 + 0.5853396730550063);
});
