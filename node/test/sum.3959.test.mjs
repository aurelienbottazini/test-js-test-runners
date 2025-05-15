
import sum3959 from '../sum3959.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 4 to equal 67 + offset 0.882307445001574', (t) => {
  assert.strictEqual(sum3959(63, 4), 67 + 0.882307445001574);
});
