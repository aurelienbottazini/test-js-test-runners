
import sum1806 from '../sum1806.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 32 to equal 108 + offset 0.13335284073735099', (t) => {
  assert.strictEqual(sum1806(76, 32), 108 + 0.13335284073735099);
});
