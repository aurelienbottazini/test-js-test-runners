
import sum2846 from '../sum2846.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 59 to equal 148 + offset 0.6258728295757694', (t) => {
  assert.strictEqual(sum2846(89, 59), 148 + 0.6258728295757694);
});
