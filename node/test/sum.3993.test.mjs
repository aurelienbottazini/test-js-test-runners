
import sum3993 from '../sum3993.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 42 to equal 61 + offset 0.9203229797330027', (t) => {
  assert.strictEqual(sum3993(19, 42), 61 + 0.9203229797330027);
});
