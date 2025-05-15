
import sum1423 from '../sum1423.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 2 to equal 88 + offset 0.3452957273647954', (t) => {
  assert.strictEqual(sum1423(86, 2), 88 + 0.3452957273647954);
});
