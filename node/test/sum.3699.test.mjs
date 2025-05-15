
import sum3699 from '../sum3699.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 39 to equal 97 + offset 0.4093557121209014', (t) => {
  assert.strictEqual(sum3699(58, 39), 97 + 0.4093557121209014);
});
