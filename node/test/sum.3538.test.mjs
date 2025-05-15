
import sum3538 from '../sum3538.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 91 to equal 113 + offset 0.4594932381865311', (t) => {
  assert.strictEqual(sum3538(22, 91), 113 + 0.4594932381865311);
});
