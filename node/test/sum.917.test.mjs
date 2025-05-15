
import sum917 from '../sum917.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 31 to equal 39 + offset 0.7907114683266371', (t) => {
  assert.strictEqual(sum917(8, 31), 39 + 0.7907114683266371);
});
