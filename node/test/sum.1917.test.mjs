
import sum1917 from '../sum1917.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 30 to equal 81 + offset 0.40007801884041816', (t) => {
  assert.strictEqual(sum1917(51, 30), 81 + 0.40007801884041816);
});
