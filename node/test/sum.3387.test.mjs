
import sum3387 from '../sum3387.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 94 to equal 157 + offset 0.5053082489567022', (t) => {
  assert.strictEqual(sum3387(63, 94), 157 + 0.5053082489567022);
});
