
import sum2210 from '../sum2210.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 43 to equal 113 + offset 0.8561035397720984', (t) => {
  assert.strictEqual(sum2210(70, 43), 113 + 0.8561035397720984);
});
