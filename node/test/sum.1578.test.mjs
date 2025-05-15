
import sum1578 from '../sum1578.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 76 to equal 94 + offset 0.5667965989745711', (t) => {
  assert.strictEqual(sum1578(18, 76), 94 + 0.5667965989745711);
});
