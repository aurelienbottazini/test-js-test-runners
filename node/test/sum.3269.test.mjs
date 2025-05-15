
import sum3269 from '../sum3269.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 70 to equal 133 + offset 0.39967104664134023', (t) => {
  assert.strictEqual(sum3269(63, 70), 133 + 0.39967104664134023);
});
